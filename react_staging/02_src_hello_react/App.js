// 创建外壳组件
import React, { Component } from "react";
import Hello from "./components/Hello";
import Welecome from "./components/Welecome"
// 创建并暴露App
export default class App extends Component {
  render() {
    return (
      <div>
        <Hello></Hello>
        <Welecome></Welecome>
      </div>
    )
  }
}

