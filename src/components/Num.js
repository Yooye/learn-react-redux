import React, { Component } from 'react'
import {connect} from 'react-redux'
class Num extends Component {
  constructor(){
    super()
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.num}</h1>
      </div>
    )
  }
}

const mapState = state=>{
  return{
    num:state.count
  }
}

export default connect(mapState)(Num)