import React, { Component } from 'react'
// import store from '../store'
import {incrementAsync,decrement} from '../action' //【1】引入actionCreator
import {connect} from 'react-redux'

class Btn extends Component {
  render() {
    console.log('Btn组件',this.props);
    let {incrementAsync,decrement} = this.props
    return (
      <div>
        <button onClick={()=>{
          incrementAsync() //【3】直接使用已经变成dispatch的actionCreator
        }}>异步action增加数字</button>
      </div>
    )
  }
}

// export default Btn
export default connect(null,{incrementAsync,decrement})(Btn) 