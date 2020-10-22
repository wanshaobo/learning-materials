##### redux 源码

###### redux

>Redux 状态管理库 web应用的业务模型层 只有遇到 React 实在解决不了的问题，你才需要Redux


1 applyMiddleware

2 bindActionCreators

3 combineReducers
将多个reducer函数合并成一个新的reducer
combineReducers({reducerA:func,reducerB:func,...}) -> 返回rootReducer
function reducerA(state,action){}
action方法 -> store.dispatch({type data}) -> reducer(state的计算过程就叫做Reducer)返回更新后的数据

4 compose
返回store:{dispatch:func,getState:func,subscribe:func,replaceReducer:func}
r = compose(f,g,h) 从右到左组合多个函数
r(...args) -> f(g(h(...args)))
源码 return funcs.reduce((a, b) => (...args) => a(b(...args)))
```javascript
function compose(...funcs){
    if(funcs.length === 0){
        return arg => arg
    }
    if(funcs.length === 1){
        return funcs[0]
    }
    return funcs.reduce((a,b) => (...args)=>a(b(...args)))
}
function f(){
    console.log('f');
}
function g(){
    console.log('g');
}
function h(){
    console.log('h');
}
function m(...args){
    console.log('m');
    console.log(args);
}
let r = compose(f,g,h,m)
console.log(r.toString());//(...args)=>a(b(...args))
//参数会传给最后一个函数
console.log(r(1,2,3));//m [1,2,3] h g f
```


5 createStore
createStore(reducer) -> 返回store:{dispatch:func,getState:func,subscribe:func,replaceReducer:func}


###### - react-redux

1 batch

2 connect

3 createDispatchHook

4 createSelectorHook

5 createStoreHook

6 connectAdvanced

7 createProvider

8 ReactReduxContext

9 Provider
<Provider store={store}><App /></Provider>

10 shallowEqual

11 useDispatch

12 useSelector

13 useStore


###### reudx-thunk

###### redux-saga


https://zhuanlan.zhihu.com/p/50247513
三大原则:单一数据源 state是只读的 reducer必须是一个纯函数(第一，不产生任何副作用；第二，不能修改state和action对象。也就是说reducer函数返回的结果必须由参数state和action决定)
redux异步action解决方案 https://segmentfault.com/a/1190000022098208

- action触发渲染的原理？

- redux 触发组件更新的原理是什么？
redux的设计理念，将整个应用的状态存储到一个地方，store tree

connect((state) => {a:state.a,b:state.b})(ReactClassComponent)