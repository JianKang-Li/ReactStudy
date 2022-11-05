// 导入createStore,创建store
import { legacy_createStore as createStore } from 'redux'
// 引入为count服务的reducer
import countReducer from "./count_reducer"
// 暴露store
export default createStore(countReducer)
