import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nanoid } from "nanoid"
import { createAddPersonAction } from "../../redux/action/person"
class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value * 1
    // console.log(name, age);
    const personObj = {
      id: nanoid(),
      name,
      age
    }
    this.props.jiaYiRen(personObj)
    this.nameNode.value = ''
    this.ageNode.value = ''
  }
  render() {
    return (
      <div>
        <h2>我是person组件</h2>
        <h2>上方组件总和为{this.props.he}</h2>
        <input ref={c => this.nameNode = c} type="text" placeholder='输入名字' />
        <input ref={c => this.ageNode = c} type="text" placeholder='输入年龄' />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            this.props.rens.map((p) => {
              return <li key={p.id}>{p.name}--{p.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    rens: state.rens,
    he: state.he
  }),
  {
    jiaYiRen: createAddPersonAction
  }
)(Person)
