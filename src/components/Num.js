import React, { Component } from 'react'
import {connect} from 'react-redux' //【1】引入connect方法

class Num extends Component {
  constructor(){
    super()
  }
  render() {
    console.log('Num组件的props',this.props);
    return (
      <div>
        {/* 【4】通过props使用store中的数据 */}
        <h1>{this.props.num}</h1>
      </div>
    )
  }
}
const mapStateToProps = (state)=>{ //【2】这个方法用以，将store状态机中的state转换到当前组件的props中
  return { //将会被设置为当前组件的props的对象
    num:state
  }
}
export default connect(mapStateToProps)(Num) //【3】使用connect来引用store中的数据
