import React, { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import "./index.css";
export default class Header extends Component {
  // 对接收的props进行限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  handleKeyUp = (event) => {
    const { keyCode, target } = event;
    // 判断是否是回车
    if (keyCode !== 13) return;
    // 添加的todo名字不为空
    if (target.value.trim() === "") {
      alert("输入不为空！");
      return;
    }
    // 创建对象
    const todoObj = {
      id: nanoid(),
      name: target.value,
      done: false,
    };
    this.props.addTodo(todoObj);
    target.value = "";
  };

  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          onKeyUp={this.handleKeyUp}
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
}
