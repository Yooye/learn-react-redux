import React, { Component } from 'react'
import GoodItem from './GoodItem'
import {connect} from 'react-redux'

 class GoodList extends Component {
  handleAllNum = ()=>{
    let {list} = this.props
    let allNum=0;
    list.forEach((item)=>{
      allNum+=item.num*item.price
    })
    return allNum;
  }
  render() {
    console.log('GoodList组件',this.props);
    let allNum = this.handleAllNum()
    return (
      <div>
        <ul>
          {
            this.props.list.map((item,index)=>{
              return (
                <GoodItem {...item} key={index} idx={index}/>
              )
            })
          }
        </ul>
        <h2>总价：{allNum}</h2>
      </div>
    )
  }
}
const mapState = ({cart:{cartList}})=>{
  return {
    list:cartList
  }
}
export default connect(mapState)(GoodList)