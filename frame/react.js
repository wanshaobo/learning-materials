//https://react.docschina.org/
//https://react.docschina.org/
//http://nav.react-china.org/
//https://github.com/reactjs React Community

//todo
//https://github.com/react-guide 高质量的 React 相关文档和翻译
//https://github.com/react-guide/react-basic React 设计思想

//https://blog.csdn.net/weixin_39939012/article/details/80926134

//1、React对象属性和方法
var React = {
	Children: {
		map: mapChildren,
		forEach: forEachChildren,
		count: countChildren,
		toArray: toArray,
		only: onlyChild
	},

	createRef: createRef,
	Component: Component,
	PureComponent: PureComponent,

	createContext: createContext,
	forwardRef: forwardRef,

	Fragment: REACT_FRAGMENT_TYPE,
	StrictMode: REACT_STRICT_MODE_TYPE,
	unstable_AsyncMode: REACT_ASYNC_MODE_TYPE,
	unstable_Profiler: REACT_PROFILER_TYPE,

	createElement: createElementWithValidation,
	cloneElement: cloneElementWithValidation,
	createFactory: createFactoryWithValidation,
	isValidElement: isValidElement,

	version: ReactVersion,

	__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals
};

//2、React.PureComponent与React.Component的异同？ https://react.docschina.org/docs/react-api.html#reactpurecomponent
function shouldComponentUpdate(nextProps,nextState,{}){

}
//PureComponent
//PureComponent组件内部重写了 shouldComponentUpdate，但进行的是shallow comparison，数组和对象数据会失效：
//不同场景使用不同方案：
//场景一：使用concat方法，返回新数组，改变了栈地址，shouldComponentUpdate会判断前后状态发生了变化
this.setState(prevState => ({
	words: prevState.words.concat(['marklar'])
}));
//场景二：使用Object.assign方法，同样是返回新对象，并且不改变原对象
function updateColorMap(colormap) {
	return Object.assign({}, colormap, {right: 'blue'});
}

//2、setState方法
//接收两个参数，第一个参数是对象 或者 是 返回值为对象的函数，第二个参数是回调
//场景一：film改变，虽然没有在setState方法中显式重写，但setState重写了其他state，也会触发film重新渲染
this.state.film.video.info.user[0] = 5;
this.setState({
	value: 'hehehe'
})
//场景二：setState接受有返回值的函数，此时可以拿到prevState
this.setState((prevState)=>({
	value: prevState.value + 'hehehe'
}))
//场景三：setState第二个参数可以传入回调函数
this.setState({
	film: this.state.film,
},()=>{console.log(this.state.film)});

//3、react纯组件
/*
不需要管理状态state，数据直接通过props传入
https://www.cnblogs.com/libin-1/p/6275507.html
创建组件的最终方案，无状态函数的纯组件
https://segmentfault.com/a/1190000010519159
*/


//4、react创建组件的方法？
/*

ES5写法React.createClass
ES6写法React.Component
无状态的函数式写法（纯组件-SFC）

一个函数的返回结果只依赖于它的参数，并且在执行过程里面没有副作用，我们就把这个函数叫做纯函数
*/

//5、react 16 新特性 https://www.jianshu.com/p/af0ae26eac18


//6、react 版本升级介绍
/*

https://github.com/facebook/react/blob/master/CHANGELOG.md
16.0.0 (September 26, 2017)
16.1.0 (November 9, 2017)
16.2.0 (November 28, 2017)
16.3.0 (March 29, 2018)
16.4.0 (May 23, 2018)
16.5.0 (September 5, 2018)
16.6.0 (October 23, 2018)
*/

//7、加入redux的react项目，数据请求放在redux中，还是放在视图层的生命周期方法中
/*

原则：每个视图层都需要用到的数据，
数据请求应该放在生命周期方法componentWillMount和componentDidMount
*/

//8、组件通信
/*

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

父组件调用子组件的方法：在父组件中使用子组件，给子组件加上ref属性，通过this.refs.child.func()调用

组件层级嵌套到比较深，可以使用上下文getChildContext来传递信息，这样在不需要将函数一层层往下传，任何一层的子级都可以通过this.context直接访问。

location.param
*/

//9、setState改变触发视图层重新渲染的原理？
/*
https://segmentfault.com/a/1190000014118419 Ant design的Notification源码分析
https://segmentfault.com/a/1190000014131698 React中setState真的是异步的吗
异步的核心原因，diff算法
要做的事情：改变this.state；将新的state合并到状态更新队列中，合并多个state；根据更新队列和shouldComponent的状态来判断是否需要更新组件，触发render
setState之后，触发render的时机

简化的setState的调用栈
this.setState(newState) =>
newState存入pending队列 =>
调用enqueueUpdate =>
是否处于批量更新模式 =>
是的话将组件保存到dirtyComponents
不是的话遍历dirtyComponents，调用updateComponent,更新pending state or props
*/
Component.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object'
	  || typeof partialState === 'function' +
	  '' || partialState == null) ?
	  invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

//10、key的意义

//11、ref应用场景
/*
ref有两种使用方式：设置回调函数(官方推荐) || 设置string
设置回调函数：子组件中input框自动获取焦点
这个事件在一进来这个子组件页面的时候，componentDidMount 生命周期中使用 ，并且为了保证每次进来的时候，input框都获取到焦点，需要在componentWillReceiveProps生命周期中使用

设置string：获取dom元素的innerHTML
*/




//12、react获取dom三种方法
/*
js 常规dom操作方式，通过id获取dom
react原生函数findDOMNode获取dom
通过ref来定位一个组件，切记ref要全局唯一（类似id）
*/


//13、babel转码react后
//return <div></div>  ---->   return createElement('div')

//14、函数定义组件
//应用中的大部分简单组件都可以通过函数定义的方式来编写，并且 React 在将来还会对函数定义组件做出更多优化
//onClick={() => props.onClick()} 直接修改为 onClick={props.onClick}
function Square(props) {
	return (
		<button className="square" onClick={props.onClick}>
			{props.value}
		</button>
	);
}

//15、性能优化
// https://react.docschina.org/docs/optimizing-performance.html#examples
//避免使用 值 可能会 突变 的属性或状态
//shouldComponentUpdate方法只能进行浅比较，和React.PureComponent一样，只能比较this.props和this.state下面第一级的数据，并且必须是值的类型，如果是引用类型，会失效
function shouldComponentUpdate(nextProps, nextState) {
	if (this.props.color !== nextProps.color) {
		return true;
	}
	if (this.state.count !== nextState.count) {
		return true;
	}
	return false;
}
//推荐使用Object.assign和对象展开语法进行this.props和this.state下面第一级数据的更新(重新生成)
//使用不可突变的数据结构
// https://github.com/immutable-js/immutable-js
// https://github.com/rtfeldman/seamless-immutable
// https://github.com/kolodny/immutability-helper








/*

生命周期
UNSAFE_componentWillReceiveProps() --> getDerivedStateFromProps

react 组件如何继承

mvvm mvm

为什么setState是异步的
setState之后什么时候触发render

nat穿透

判断{}是空对象

深拷贝一个对象

Dva
ant Design
ant design pro
umijs


*/