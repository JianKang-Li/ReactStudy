import React, { Component } from "react";
import "./index.css";
export default class Footer extends Component {
  // checkbox的回调
  handleCheckAll = (event) => {
    const { target } = event;
    this.props.checkAllTodo(target.checked);
  };

  // 清楚所有完成的
  handleClearAllDone = () => {
    this.props.clearAllDone();
  };

  render() {
    const { todos } = this.props;
    // 已完成的个数
    const doneCount = todos.reduce(
      (pre, current) => pre + (current.done ? 1 : 0),
      0
    );

    // 全部个数
    const Total = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={doneCount === Total && Total !== 0 ? true : false}
            onChange={this.handleCheckAll}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{Total}
        </span>
        <button className="btn btn-danger" onClick={this.handleClearAllDone}>
          清除已完成任务
        </button>
      </div>
    );
  }
}
