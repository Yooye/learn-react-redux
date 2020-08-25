import React, { Component } from 'react'
import {connect} from 'react-redux'

class Btn extends Component {
  render() {
    let {children,incre,decre} = this.props
    console.log(this.props);
    return (
      <div>
        <button onClick={()=>{
          children=='+'?incre():decre()
        }}>{children}</button>
      </div>
    )
  }
}
// const mapDispatch = (obj)=>{
//   return {
//     obj
//   }
// }
const mapDispatch = ({ count: { increment,decrement }}) => ({
  incre: () => increment(10),
  decre: () => decrement(10)
})
export default connect(null,mapDispatch)(Btn)