import React, { Component } from 'react'
import {connect} from 'react-redux'

class Btn extends Component {
  render() {
    let {increAsync} = this.props
    console.log(this.props);
    return (
      <div>
        <button onClick={()=>{
          increAsync()
        }}>异步修改数字</button>
      </div>
    )
  }
}
// const mapDispatch = (obj)=>{
//   return {
//     obj
//   }
// }
const mapDispatch = ({ count: {incrementAsync }}) => ({
  increAsync: () => incrementAsync(10)
})
export default connect(null,mapDispatch)(Btn)