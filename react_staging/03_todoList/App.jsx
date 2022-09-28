// 创建外壳组件
import React, { Component } from "react";

import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";

// 创建并暴露App
export default class App extends Component {
  state = {
    todos: [
      { id: 1, name: "吃饭", done: true },
      { id: 2, name: "睡觉", done: false },
      { id: 3, name: "敲代码", done: false },
      { id: 4, name: "喝水", done: false },
    ],
  };

  // 用于添加一个todo对象
  addTodo = (todoObj) => {
    // 获取原todos
    const { todos } = this.state;

    const newTodos = [todoObj, ...todos];
    // 更新
    this.setState({ todos: newTodos });
  };

  // 用于勾选和取消勾选
  updateTodo = (id, done) => {
    // 获取状态中的todos
    const { todos } = this.state;
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done };
      else return todoObj;
    });

    this.setState({ todos: newTodos });
  };

  // 用于删除一个todo
  deleteTodo = (id) => {
    const { todos } = this.state;
    // 删除指定id
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id;
    });

    this.setState({ todos: newTodos });
  };

  // 全选
  checkAllTodo = (status) => {
    const { todos } = this.state;
    const newTodos = todos.map((todoObj) => {
      return { ...todoObj, done: status };
    });
    this.setState({ todos: newTodos });
  };

  // 清楚所有完成的
  clearAllDone = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((todoObj) => {
      return todoObj.done === false;
    });
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}></Header>
          <List
            todos={todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          ></List>
          <Footer
            todos={todos}
            checkAllTodo={this.checkAllTodo}
            clearAllDone={this.clearAllDone}
          ></Footer>
        </div>
      </div>
    );
  }
}
