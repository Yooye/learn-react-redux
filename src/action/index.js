// 集中管理actionCreator

import {DE_CREMENT,IN_CREMENT} from './actionTypes'

export const increment = (payload)=>{
  return {
    type:IN_CREMENT,
    payload:{
      ...payload
    }
  }
}

export const decrement = (payload)=>{
  return {
    type:DE_CREMENT,
    payload:{
      ...payload
    }
  }
}

export const incrementAsync = (payload)=>{ //异步action
  return dispatch => { //拦截dispatch
    setTimeout(()=>{
      dispatch(increment()) //等待异步请求结束后，手动进行dispatch派发
    },2000)
  }
}