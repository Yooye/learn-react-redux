import React, { Component } from 'react'
// import store from '../store'
import {increment,decrement} from '../action' //引入actionCreator
import {connect} from 'react-redux'

class Btn extends Component {
  render() {
    console.log('Btn组件',this.props);
    let {children} = this.props
    let {increment,decrement} = this.props
    return (
      <div>
        <button onClick={()=>{
          children==='+'?increment():decrement()
        }}>{children}</button>
      </div>
    )
  }
}

// export default Btn
export default connect(null,{increment,decrement})(Btn)
//increment、decrement在传入connect之前，只是一个actionCreator
//increment、decrement在传入connect之后，变成了一个跟action互相对应的dispatch
