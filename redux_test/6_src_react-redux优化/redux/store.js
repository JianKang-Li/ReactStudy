// 导入createStore,创建store
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
// 引入为count服务的reducer
import countReducer from "./count_reducer"
// 引入redux-thunk
import thunk from "redux-thunk"
// 暴露store
export default createStore(countReducer, applyMiddleware(thunk))
