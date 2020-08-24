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