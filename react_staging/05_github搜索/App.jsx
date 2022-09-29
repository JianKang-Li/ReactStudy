import React, { Component } from "react";
import Search from "./components/Search";
import List from "./components/List";
export default class App extends Component {
  state = {
    users: [],
    isFirst: true,//第一次打开
    isLoading: false,//加载中
    err: ""//请求相关错误
  }

  // 更新app的state
  updateAppState = (stateObj) => {
    this.setState({ ...this.state, ...stateObj })
  }


  render() {

    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}></Search>
        <List {...this.state}></List>
      </div>
    );
  }
}
