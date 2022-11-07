import React, { Component } from 'react'
import Count from "./containers/Count"
import Person from './containers/Person'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* store需要使用props的形式引入 */}
        <Count ></Count>
        <hr />
        <Person></Person>
      </div>
    )
  }
}
