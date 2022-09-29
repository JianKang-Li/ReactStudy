import React, { Component } from "react";
import axios from "axios";

export default class Search extends Component {
  search = () => {
    // 获取输入结构并重命名
    const {
      keyWordEle: { value: keyWord },
    } = this;

    this.props.updateAppState({
      isLoading: true,
      isFirst: false
    })
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      (res) => {
        // console.log("成功", res.data);
        this.props.updateAppState({
          isLoading: false,
          users: res.data.items
        })

      },
      (error) => {
        this.props.updateAppState({
          isLoading: false,
          err: error.message
        })
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
