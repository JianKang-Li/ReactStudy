import React, { Component } from 'react'
// import Count from "./components/Count"
import Count from "./containers/Count"
import store from './redux/store'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* store需要使用props的形式引入 */}
        <Count store={store}></Count>
      </div>
    )
  }
}
