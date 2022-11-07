// 导入createStore,创建store
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux'
// 引入为count服务的reducer
import countReducer from "./reducers/count"
import personReducer from "./reducers/person"
// 引入redux-thunk
import thunk from "redux-thunk"

const allReducer = combineReducers({ he: countReducer, rens: personReducer })
// 暴露store
export default createStore(allReducer, applyMiddleware(thunk))

