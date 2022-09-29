import React, { Component } from "react";
import PubSub from "pubsub-js"
import "./index.css";
export default class List extends Component {
  state = {
    users: [],
    isFirst: true,//第一次打开
    isLoading: false,//加载中
    err: ""//请求相关错误
  }

  componentDidMount() {
    this.token = PubSub.subscribe('atguigu', (_, stateObj) => {
      this.setState(stateObj)
    })
  }

  // 更新app的state
  updateAppState = (stateObj) => {
    this.setState({ ...this.state, ...stateObj })
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

  render() {
    const { users, isFirst, isLoading, err } = this.state
    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎使用</h2> :
            isLoading ? <h2>Loadinng</h2> :
              err ? <h2>err</h2> :
                users.map((userObj) => {
                  return <div key={userObj.id} className="card">
                    <a href={userObj.html_url} target="_blank" rel="noreferrer">
                      <img
                        src={userObj.avatar_url}
                        alt="图片"
                        style={{ width: "100px" }}
                      />
                    </a>
                    <p className="card-text">{userObj.login}</p>
                  </div>
                })
        }
      </div>
    );
  }
}
