import React, { Component } from 'react'
import Child from './Child'
export default class Parent extends Component {
  state = {
    hasError: null//用于标识子组件是否有错误
  }
  // 当parent的子组件出现错误时调用，并携带错误信息
  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: error }
  }

  componentDidCatch() {
    console.log('此处统计错误，反馈错误');
  }

  render() {
    return (
      <div>
        <h2>我是Parent组件</h2>
        {this.state.hasError ? <h2>出错了</h2> : <Child></Child>}
      </div>
    )
  }
}
