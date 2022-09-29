import React, { Component } from "react";
import PubSub from 'pubsub-js'
import axios from "axios";

export default class Search extends Component {
  search = () => {
    // 获取输入结构并重命名
    const {
      keyWordEle: { value: keyWord },
    } = this;
    PubSub.publish('atguigu', { isFirst: false, isLoading: true })
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      (res) => {

        PubSub.publish('atguigu', { isLoading: false, users: res.data.items })
      },
      (error) => {
        PubSub.publish('atguigu', { err: error.message })
      }
    );
  };

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            type="text"
            ref={(c) => (this.keyWordEle = c)}
            placeholder="输入关键字"
          />
          &nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}
