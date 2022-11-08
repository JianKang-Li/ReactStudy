import React, { PureComponent } from 'react'
import "./index.css"
export default class Parent extends PureComponent {
  state = {
    carName: "奔驰"
  }

  changeCar = () => {
    // 底层浅比较，只比较地址
    this.setState({ carName: "迈巴赫" })
  }

  /*   shouldComponentUpdate(nextProps, nextState) {
      if (this.props !== nextProps || this.state !== nextState) {
        return true
      }
      return false
    } */

  render() {
    const { carName } = this.state
    console.log('parent----');
    return (
      <div className='parent'>
        <h3>我是parent组件</h3>
        <span>车名：{carName}</span><br />
        <button onClick={this.changeCar}>点我换车</button>
        <Child ></Child>
      </div>
    )
  }
}


class Child extends PureComponent {
  /*   shouldComponentUpdate(nextProps, nextState) {
       console.log(nextProps, nextState);
       console.log(this.props, this.state);
      if ((this.props !== nextProps) || this.state !== nextState) {
        return true
      }
      return false
    } */

  render() {
    console.log('child----');
    return (
      <div className='child'>
        <h3>我是Child组件</h3>
        {/* <span>我接到的车是：{this.props.carName}</span> */}
      </div>
    )
  }
}
