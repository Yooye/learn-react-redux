import React, { Component } from 'react'
import {connect} from 'react-redux'

class GoodItem extends Component {
  render() {
    let {title,intro,price,num,idx} = this.props;
    let {numReduce} = this.props
    // console.log(this.props);
    return (
      <li>
        <h2>{title}</h2>
        <p>
          {intro}
          <span>单价：{price}</span>
          <span>小计：{price*num}</span>
        </p>
        <button onClick={()=>{numReduce({idx})}}>-</button>
        <span>{num}</span>
        <button onClick={()=>{numReduce({idx,bool:true})}}>+</button>
      </li>
    )
  }
}

const mapDispatch = ({cart:{numReduce}})=> ({
  numReduce:(idx)=>numReduce(idx)
})

export default connect(null,mapDispatch)(GoodItem)