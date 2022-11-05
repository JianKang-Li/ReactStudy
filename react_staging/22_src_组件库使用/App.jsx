import React, { Component } from 'react'
import { Button, Input } from "antd"
import { WechatOutlined } from "@ant-design/icons"
// import 'antd/dist/antd.min.css';


export default class App extends Component {
  render() {
    return (
      <div>
        App
        <Button type='primary'>点我</Button>
        <WechatOutlined />
        <Input></Input>
      </div>
    )
  }
}
