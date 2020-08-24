import {DE_CREMENT,IN_CREMENT} from '../action/actionTypes'
export default function(state=110,action){
  switch (action.type) {
    case IN_CREMENT:
      return ++state;
      break;
    case DE_CREMENT:
      return --state;
      break;
    default:
      return state
      break;
  }
}