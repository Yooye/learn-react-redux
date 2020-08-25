export default {
  state:{
    cartList:[
      {
        title:'这是一个商品',
        intro:'七夕节礼物',
        num:3,
        price:100,
      },
      {
        title:'这是一个商品1',
        intro:'七夕节礼物1',
        num:5,
        price:99
      }
    ]
  },
  reducers:{
    numReduce(state,{idx,bool}){
      let {cartList} = state;
      let {num} = cartList[idx]
      if(bool){
        cartList[idx].num++
      }else{
        if(num>1){
          cartList[idx].num--
        }
      }
      console.log(cartList);
      return {cartList:[...cartList]}
    }
  }
}