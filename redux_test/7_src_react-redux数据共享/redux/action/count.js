/* 
该文件为Count组件生成action对象
*/
import { INCREMENT, DECREMENT } from "../constant"
export const createIncrementAction = (data) => ({ type: INCREMENT, data })

export const createDecrementAction = (data) => ({ type: DECREMENT, data })

// 异步action就是action的值为函数,异步action中会传入dispatch，一般会调用action
export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data))
    }, time)
  }
}