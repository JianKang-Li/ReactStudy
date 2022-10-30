import React, { Component } from 'react'

const data = [
  {
    id: '01',
    content: "你好中国"
  },
  {
    id: '02',
    content: "你好贵州"
  },
  {
    id: '03',
    content: "你好六盘水"
  }
]
export default class Detail extends Component {
  render() {
    // console.log(this.props);
    const { id, title } = this.props.match.params
    const findResult = data.find((detailobj) => {
      return detailobj.id === id
    })
    return (
      <ul>
        <li>ID:{id}</li>
        <li>Title:{title}</li>
        <li>Content:{findResult["content"]}</li>
      </ul>
    ) 
  }
}
