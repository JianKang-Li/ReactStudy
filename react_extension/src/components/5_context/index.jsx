import React, { Component } from 'react'

import "./index.css"

const UserNameContext = React.createContext()

export default class A extends Component {
  state = {
    username: "tom",
    age: 18
  }
  render() {
    const { username, age } = this.state
    return (
      <div className='parent'>
        <h3>我是A组件</h3>
        <h4>我的用户名是{username}</h4>
        <UserNameContext.Provider value={{ username, age }}>
          <B></B>
        </UserNameContext.Provider>
      </div>
    )
  }
}


class B extends Component {
  render() {
    return (
      <div className='child'>
        <h3>我是B组件</h3>
        <C></C>
      </div>
    )
  }
}

/* class C extends Component {
  static contextType = UserNameContext
  render() {
    console.log(this.context);
    return (
      <div className='grand'>
        <h3>我是C组件</h3>
        <h4>我从A组件接收的用户名是{this.context.username}</h4>
      </div>
    )
  }
} */

function C() {
  return (

    <div className='grand'>
      <h3>我是C组件</h3>
      <h4>我从A组件接收的用户名是
        <UserNameContext.Consumer>
          {
            value => `${value.username}年龄是${value.age}`
          }
        </UserNameContext.Consumer>
      </h4>
    </div>
  )
}