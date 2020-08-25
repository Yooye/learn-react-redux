# 一、React项目中状态管理方式

1. 单独使用Redux
> 数据的初始化绑定getState
> 数据的实时更新需要subscribe

2. Redux、React-Redux实现
> 不需要订阅，绑定后自动更新

3. 使用演示的分支
> learn-react-redux

# 二、ActionCreator模块

1. 不提取ActionCreator模块，如何派发action
```
store.dispatch({
  type:'action名称'
})
```

2. ActionCreator作用
> 本质是一个函数，作用是生成action，给dispatch使用


# 三、redux与react-redux结合实现状态管理

[react-redux](https://react-redux.js.org/introduction/quick-start)

1. 安装redux、react-redux
```
cnpm i redux react-redux -S
```

2. 在根组件通过Provider全局注入store状态机
> 项目入口文件index.js
```
  import {Provider} from 'react-redux'
  import store from './store'
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
```

3. 在需要使用store状态机数据的组件中，通过connect引用state
> 参考components/Num.js

4. 在需要修改store状态机数据的组件中，通过connect引用dispacth
> 参考components/Btn.js

  + 事先actionCreator准备好
  + Btn组件中引入actionCreator
  + connect(null,{...actionCreator})(Btn) 将actionCreator转换为响应的disptch

# 四、异步action
> redux-thunk


同步action
store <-- reducer<--【自动dispatch】<-- 同步actionCreator <-- view
                          |
                      react-redux


异步action
store<--reducer <--手动dispatch<--【拦截dispatch】<-- 异步actionCreator<-- view
                                      |
                                  redux-thunk

# 五、redux-thunk异步中间件的使用流程
[文档](https://www.npmjs.com/package/redux-thunk)

1. 安装
```
cnpm i redux-thunk -S
```

2. 通过加入redux-thunk的方式使得store状态机可以进行异步操作
> store/index.js
```
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducer'
const store = createStore(reducer,applyMiddleware(thunk))
export default store
```

3. 在actionCretor模块中，新增异步action
```
export const incrementAsync = (payload)=>{ //异步action
  return dispatch => { //【1】拦截dispatch，方法劫持
    setTimeout(()=>{
      dispatch(increment()) //【2】等待异步请求结束后，手动进行dispatch派发
    },2000)
  }
}
```

4. 在组件内部触发异步action
> components/AsyncBtn.js


# 六、任务

1. redux基本使用流程
  + createStore 定义store状态机  
  + store.getState()  
  + store.dispatch({  //向store的reducer派发action
    type:'increment'
  })

  + store.subscribe()

  + reducer  银行内部的数据操作

2. react-redux的使用
> 让我们更方便的在react中使用redux
  + 根组件注入store
  + 在组件中使用connect获取状态机中的 【数据】跟【方法】

3. redux-thunk实现异步action
  + 如何让状态机支持异步action？
  + 如何定义一个异步action？
  + 异步action跟同步action之间的区别及联系？


4. 超级记忆术
一休  1. 香蕉
鸭子  2. 牛肉粉
耳朵  3. 抽烟
红旗  4. 桌子 


## 七、React状态管理方案

1. Redux  【几乎不会单独使用】

2. Redux、React-Redux 【可以选择】

3. Redux、React-Redux、Redux-Thunk 【可以选择】

4. Redux、React-Redux、@rematch/core 【可以选择】

5. Redux、React-Redux、dva 【可以选择】


## 八、其他协助使用状态管理的集成库
> 部分开发者认为，Redux+react-redux还有点麻烦
1. dva

2. @rematch/core
[rematch与redux使用对比](https://rematch.gitbook.io/handbook/mu-de)
[npm地址](https://www.npmjs.com/package/@rematch/core)

## 九、@rematch/core使用流程
> 参考 day01/learn-react-redux文件夹   learn-rematch01分支
