// react theory
//https://react.docschina.org/
// https://react.docschina.org/
// http://nav.react-china.org/

//some question

/*
1、React.PureComponent与React.Component的异同？
https://react.docschina.org/docs/react-api.html#reactpurecomponent

2、react纯组件
不需要管理状态state，数据直接通过props传入
https://www.cnblogs.com/libin-1/p/6275507.html
创建组件的最终方案，无状态函数的纯组件
https://segmentfault.com/a/1190000010519159

3、react创建组件的方法？
ES5写法React.createClass
ES6写法React.Component
无状态的函数式写法（纯组件-SFC）

4、一个函数的返回结果只依赖于它的参数，并且在执行过程里面没有副作用，我们就把这个函数叫做纯函数

5、react 16 新特性
https://www.jianshu.com/p/af0ae26eac18

6、react 版本升级介绍
https://github.com/facebook/react/blob/master/CHANGELOG.md
16.0.0 (September 26, 2017)
16.1.0 (November 9, 2017)
16.2.0 (November 28, 2017)
16.3.0 (March 29, 2018)
16.4.0 (May 23, 2018)
16.5.0 (September 5, 2018)
16.6.0 (October 23, 2018)

7、加入redux的react项目，数据请求放在redux中，还是放在视图层的生命周期方法中
原则：每个视图层都需要用到的数据，
数据请求应该放在生命周期方法componentWillMount和componentDidMount

8、组件通信
https://www.jianshu.com/p/fb915d9c99c4
嵌套组件通信：
父子组件：props callback
跨级组件组件通信：context
https://react.docschina.org/docs/legacy-context.html#%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8context
在context提供者中添加属性childContextTypes和方法getChildContext，React会向下自动传递参数，任何组件只要在它的子组件中（这个例子中是Button），就能通过定义属性contextTypes来获取参数。
constructor(props, context)
componentWillReceiveProps(nextProps, nextContext)
shouldComponentUpdate(nextProps, nextState, nextContext)
componentWillUpdate(nextProps, nextState, nextContext)
componentDidUpdate(prevProps, prevState, prevContext)

非嵌套组件通信 发布/订阅
兄弟组件
不在同一个父级中的非兄弟组件
利用二者共同父组件的 context 对象进行通信
使用自定义事件的方式

9、state改变触发视图层重新渲染的原理？

10、key的意义

11、mvvm

Dva
ant Design
ant design pro
umijs




*/