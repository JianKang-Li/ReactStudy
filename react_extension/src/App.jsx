import React, { Component } from 'react'
import { Fragment } from 'react'
// import Demo from './components/1_setState'
// import Demo from "./components/2_lazyLoad"
// import Demo from "./components/3_hooks"
import Demo from "./components/4_Fragment"

export default class App extends Component {
  render() {
    return (
      <Fragment a='1'>
        <Demo></Demo>
      </Fragment>
    )
  }
}
