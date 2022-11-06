// 引入connect用于连接UI组件和redux
import { connect } from 'react-redux'
import CountUI from "../../components/Count"
import { createDecrementAction, createIncrementAction, createIncrementAsyncAction } from "../../redux/count_action"

// 该函数返回值作为状态传递给UI组件
/* 
返回对象的key就作为传递props的key，value就是value
*/
function mapStateToProps(state) {
  return {
    count: state
  }
}

// 该函数返回值作为传递给UI组件操作状态的方法
function mapDispatchToProps(dispatch) {
  return {
    jia: (value) => { dispatch(createIncrementAction(value)) },
    jian: (value) => { dispatch(createDecrementAction(value)) },
    asyncJia: (value, time) => { dispatch(createIncrementAsyncAction(value, time)) }
  }
}

// 创建并暴露一个容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
