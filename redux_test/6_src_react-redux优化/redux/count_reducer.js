/**
* 该文件用于创建一个为Count组件服务的reducer，reducer本质就是一个函数
*  reducer函数会接到两个参数分别为之前的状态，动作对象
*  
**/
import { INCREMENT, DECREMENT } from "./constant"
const initState = 0

export default function countReducer(preState = initState, action) {
  // console.log(preState, action);
  const { type, data } = action
  switch (type) {
    case INCREMENT: {
      return preState + data
    }
    case DECREMENT: {
      return preState - data
    }
    default:
      // 初始化
      return preState
  }
}