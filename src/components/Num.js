import React, { Component } from 'react'
import {connect} from 'react-redux'

class Num extends Component {
  constructor(){
    super()
  }
  render() {
    console.log('Num组件的props',this.props);
    return (
      <div>
        <h1>{this.props.num}</h1>
      </div>
    )
  }
}
const mapStateToProps = (state)=>{ //这个方法用以，将store状态机中的state转换到当前组件的props中
  return { //将会被设置为当前组件的props的对象
    num:state
  }
}
export default connect(mapStateToProps)(Num)
