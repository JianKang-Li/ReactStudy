import React from 'react'
// import ReactDOM from 'react-dom'
import root from "../../index"
/* class Demo extends React.Component {
  state = {
    count: 0
  }

  myRef = React.createRef()

  add = () => {
    this.setState((state) => {
      return {
        count: state.count + 1
      }
    })
  }

  unmount = () => {
    root.unmount()
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(state => ({ count: state.count + 1 }))
    }, 1000)
  }

  show = () => {
    alert(this.myRef.current.value)
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.myRef} />
        <h2>当前求和为{this.state.count}</h2>
        <button onClick={this.add}>+1</button>
        <button onClick={this.unmount}>卸载</button>
        <button onClick={this.show}>展示数据</button>
      </div>
    )
  }
} */

function Demo() {
  const [count, setCount] = React.useState(0)
  let myRef = React.useRef()

  function add() {
    // console.log('点击了加号');
    // setCount(count + 1) //第一种写法
    setCount((value) => {
      return value + 1
    })
  }

  function unmount() {
    root.unmount()
  }

  React.useEffect(() => {
    let timer = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    return () => {
      console.log('###');
      clearInterval(timer)
    }
  }, [])

  function show() {
    alert(myRef.current.value)
  }
  return (
    <div>
      <input type="text" ref={myRef} />
      <h2>当前求和为{count}</h2>
      <button onClick={add}>+1</button>
      <button onClick={unmount}>卸载</button>
      <button onClick={show}>展示数据</button>
    </div>
  )
}

export default Demo
