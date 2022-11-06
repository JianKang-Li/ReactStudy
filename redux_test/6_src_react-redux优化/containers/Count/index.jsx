import { connect } from 'react-redux'
// import CountUI from "../../components/Count"
import { createDecrementAction, createIncrementAction, createIncrementAsyncAction } from "../../redux/count_action"


import React, { Component } from 'react'

// 定义UI组件
class Count extends Component {
  // 加法
  increment = () => {
    const { value } = this.selectNumber
    // 通知redux
    this.props.jia(value * 1)
  }
  // 减法
  decrement = () => {
    const { value } = this.selectNumber
    this.props.jian(value * 1)
  }

  // 奇数加
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    if (this.props.count % 2 !== 0) {
      this.props.jia(value * 1)
    }
  }

  // 异步加
  incrementAsync = () => {
    const { value } = this.selectNumber
    this.props.asyncJia(value * 1, 1000)
  }


  render() {
    // console.log(this.props);
    return (
      <div>
        <h1>当前求和为：{this.props.count}</h1>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}


export default connect(
  (state) => ({
    count: state
  }),
  {
    jia: createIncrementAction,
    jian: createDecrementAction,
    asyncJia: createIncrementAsyncAction
  }
)
  (Count)
