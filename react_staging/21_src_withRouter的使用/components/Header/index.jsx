import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {
  back = () => {
    this.props.history.goBack()
  }

  forward = () => {
    this.props.history.goForward()
  }

  render() {
    return (
      <div className="page-header">
        <h2>React Router Demo</h2>
        <button onClick={this.back}>回退</button>&nbsp;
        <button onClick={this.forward}>前进</button>
      </div>
    )
  }
}

// withRouter可以加工一般组件，让其具备路由组件所特有的API
// withRouter返回一个新组件
export default withRouter(Header)