import React, { Component } from 'react'
// import Count from "./components/Count"
import Count from "./containers/Count"


export default class App extends Component {
  render() {
    return (
      <div>
        {/* store需要使用props的形式引入 */}
        <Count ></Count>
      </div>
    )
  }
}
