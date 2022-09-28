import React, { Component } from "react";
import "./index.css";
export default class Item extends Component {
  state = {
    mouse: false,
  };

  // 鼠标回调
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };

  // 勾选回调
  handleCheck = (id) => {
    return (event) => {
      // console.log(id, event.target.checked);
      this.props.updateTodo(id, event.target.checked);
    };
  };

  // 删除的回调
  handleDelete = (id) => {
    // console.log(id);
    if (window.confirm("确认删除吗？")) {
      this.props.deleteTodo(id);
    }
  };

  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <li
        style={{ backgroundColor: mouse ? "#ddd" : "white" }}
        onMouseLeave={this.handleMouse(false)}
        onMouseEnter={this.handleMouse(true)}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          onClick={() => {
            this.handleDelete(id);
          }}
          style={{ display: mouse ? "block" : "none" }}
        >
          删除
        </button>
      </li>
    );
  }
}
