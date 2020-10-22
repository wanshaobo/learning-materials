
#### 实现 JSONP

```javascript
var flightHandler = (data) => {
  console.log(data)
}
var url = 'http://flightQuery.com/jsonp/flightResult.aspx?code=CA1998&callback=flightHandler'
var script = document.createElement('script')
script.setAttribute('src', url)
document.getElementsByTagName('head')[0].appendChild(script)
```

#### 防抖

触发高频事件后，如果 n 秒内再次触犯，则重新计算时间

```javascript
function debounce(fn, time) {
  let timer = null

  return function () {
    timer && clearTimeout(timer)

    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, time)
  }
}
```

#### 节流

触发高频事件后，n 秒内只会执行一次，稀释函数的执行频率

```javascript
function throttle(fn, time) {
  let isRun = false

  return function () {
    if (isRun) return

    isRun = true
    setTimeout(() => {
      fn.apply(this, arguments)
      isRun = false
    }, time)
  }
}
```

#### 请写出下列代码的输出结果

```javascript
function Foo() {
  getName = function () {
    alert(1)
  }

  return this
}
Foo.getName = function () {
  alert(2)
}
Foo.prototype.getName = function () {
  alert(3)
}
var getName = function () {
  alert(4)
}
function getName() {
  alert(5)
}

Foo.getName() // 2
getName() // 4
Foo().getName() // 1
getName() // 1
new Foo.getName() // 2
new Foo().getName() // 3
new new Foo().getName() // 3 ?
```

#### 下列代码的输出结果

```javascript
console.log(['1', '2', '3'].map(parseInt)) // [1, NaN, NaN]
console.log(['10', '10', '10', '10'].map(parseInt)) // [10, NaN, 2, 3]
// parseInt('1', 0) //radix为0时，且string参数不以“0x”和“0”开头时，按照10为基数处理。这个时候返回1
// parseInt('2', 1) //基数为1（1进制）表示的数中，最大值小于2，所以无法解析，返回NaN
// parseInt('3', 2) //基数为2（2进制）表示的数中，最大值小于3，所以无法解析，返回NaN
```

#### ES5/ES6 的继承除了写法以外还有什么区别

- class 声明内部会启用严格模式。
- class 的所有方法（包括静态方法和实例方法）都是不可枚举的。
- class 的所有方法（包括静态方法和实例方法）都没有原型对象 prototype，所以也没有[[construct]]，不能使用 new 来调用。
- 必须使用 new 调用 class。
- class 内部无法重写类名。

ES5 和 ES6 子类 this 生成顺序不同。ES5 的继承先生成了子类实例，再调用父类的构造函数修饰子类实例，ES6 的继承先生成父类实例，再调用子类的构造函数修饰父类实例。这个差别使得 ES6 可以继承内置对象。

#### Async/Await 如何通过同步的方式实现异步

Async/Await 就是一个自执行的 generate 函数。利用 generate 函数的特性把异步的代码写成“同步”的形式。

```javascript
var fetch = require('node-fetch')

function* gen() {
  // 这里的*可以看成 async
  var url = 'https://api.github.com/users/github'
  var result = yield fetch(url) // 这里的yield可以看成 await
}
```

```javascript
var g = gen()
var result = g.next()
result.value
  .then(function (data) {
    return data.json()
  })
  .then(function (data) {
    g.next(data)
  })
```

#### 请写出下面代码的运行结果

```javascript
async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}

async function async2() {
  console.log('async2')
}

console.log('script start')

setTimeout(function () {
  console.log('setTimeout')
}, 0)

async1()

new Promise(function (resolve) {
  console.log('promise1')
  resolve()
}).then(function () {
  console.log('promise2')
})

console.log('script end')

// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout
```

#### 一个 tcp 连接能发几个 http 请求

如果是 **HTTP 1.0** 版本协议，一般情况下，**不支持长连接**，因此在每次请求发送完毕之后，TCP 连接即会断开，因此一个 TCP 发送一个 HTTP 请求，但是有一种情况可以将一条 TCP 连接保持在活跃状态，那就是通过 Connection 和 Keep-Alive 首部，在请求头带上
Connection: Keep-Alive，并且可以通过 Keep-Alive 通用首部中指定的，用逗号分隔的选项调节 keep-alive 的行为，如果客户端和服务端都支持，那么其实也可以发送多条，不过此方式也有限制，可以关注《HTTP 权威指南》4.5.5 节对于 Keep-Alive 连接的限制和规则。

而如果是 **HTTP 1.1** 版本协议，**支持了长连接**，因此只要 TCP 连接不断开，便可以一直发送 HTTP 请求，持续不断，没有上限；

同样，如果是 **HTTP 2.0** 版本协议，**支持多路复用**，一个 TCP 连接是可以并发多个 HTTP 请求的，同样也是支持长连接，因此只要不断开 TCP 的连接，HTTP 请求数也是可以没有上限地持续发送。

#### Virtual Dom 的优势在哪里

其次是 VDOM 和真实 DOM 的区别和优化：

虚拟 DOM 不会立马进行排版与重绘操作
虚拟 DOM 进行频繁修改，然后一次性比较并修改真实 DOM 中需要改的部分，最后在真实 DOM 中进行排版与重绘，减少过多 DOM 节点排版与重绘损耗
虚拟 DOM 有效降低大面积真实 DOM 的重绘与排版，因为最终与真实 DOM 比较差异，可以只渲染局部

#### common.js 和 es6 中模块引入的区别

CommonJS 是一种模块规范，最初被应用于 Nodejs，成为 Nodejs 的模块规范。运行在浏览器端的 JavaScript 由于也缺少类似的规范，在 ES6 出来之前，前端也实现了一套相同的模块规范 (例如: AMD)，用来对前端模块进行管理。自 ES6 起，引入了一套新的 ES6 Module 规范，在语言标准的层面上实现了模块功能，而且实现得相当简单，有望成为浏览器和服务器通用的模块解决方案。但目前浏览器对 ES6 Module 兼容还不太好，我们平时在 Webpack 中使用的 export 和 import，会经过 Babel 转换为 CommonJS 规范。在使用上的差别主要有：

CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
CommonJs 是单个值导出，ES6 Module 可以导出多个
CommonJs 是动态语法可以写在判断里，ES6 Module 静态语法只能写在顶层
CommonJs 的 this 是当前模块，ES6 Module 的 this 是 undefined

#### 盒子模型

```css
box-sizing: content-box;
box-sizing: border-box;
```

#### 选择器优先级

!importent
行内
ID 选择器
类选择器 属性选择器 伪类选择器
元素选择器 关系选择器 伪元素选择器
通配符选择器
浏览器默认样式

#### JavaScript 数据类型

string
number
null
undefined
symbol
boolean

object

#### javascript this 指向

ES5 指向调用时所在的对象
ES6 指向定义时所在的对象
super 指向当前对象的原型对象

类的方法内部如果含有 this，它默认指向类的实例。

```javascript
var o = {
  f1: function () {
    console.log(this) // o
    var f2 = function () {
      console.log(this) // window
    }
  },
}

const a = [1, 23, 33, 4]
a.forEach(function () {
  console.log(this) // window
})
```

#### class

`constructor` 方法是类的默认方法，通过 new 命令生成对象实例时，自动调用该方法。一个类必须有`constructor` 方法，如果没有显式定义，一个空的 `constructor` 方法会被默认添加。

`constructor` 方法默认返回实例对象（即 this）

与 ES5 一样，类的所有实例共享一个原型对象。

```javascript
var p1 = new Point(2, 3)
var p2 = new Point(3, 2)

p1.__proto__ === p2.__proto__
//true
```

如果在一个方法前，加上`static`关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。如果静态方法包含`this`关键字 这个`this`指向类 而不是实例。

#### http 方法 状态码

HTTP 状态码分类：

- 1xx：信息，服务器收到请求，需要请求继续执行操作。
- 2xx：成功，操作被成功接收并处理。
- 3xx：重定向，需要进一步的操作以完成请求。
- 4xx：客户端错误，请求包含语法错误或无法完成请求。
- 5xx：服务器错误，服务器在处理请求的过程中发生了错误。

HTTP 部分状态码：

- 100：Continue --- 继续。客户端应继续其请求。
- 200：OK --- 请求成功。一般用于 GET 与 POST 请求。
- 301：Moved Permanently --- 永久重定向。
- 302：Found --- 暂时重定向。
- 304：自从上次请求后，请求的网页未修改过。服务器返回此响应时，不会返回网页内容。
- 400：Bad Request --- 客户端请求的语法错误，服务器无法理解。
- 403：Forbideen --- 服务器理解请求客户端的请求，但是拒绝执行此请求。
- 404：Not Found --- 服务器无法根据客户端的请求找到资源（网页）。
- 500：Internal Server Error --- 服务器内部错误，无法完成请求。
- 502：Bad Gateway --- 作为网关或者代理服务器尝试执行请求时，从远程服务器接收到了一个无效的响应。
- 503：（服务不可用） 服务器目前无法使用（由于超载或停机维护）。 通常，这只是暂时状态。

#### 浏览器缓存读取规则

- Service Worker
- Memory Cache
- Disk Cache
- HTTP Cache
- Push Cache (http2)

- 强缓存
- 协商缓存

- expires (http1.0)
- cache-control (http1.1 可以看成是 expries 的补充)
  max-age: 设置缓存的最大的有效时间，单位为秒（s）。max-age 会覆盖掉 expires。
  s-maxage: 设置代理服务器缓存的最大的有效时间，单位为秒（s）。s-maxage 会覆盖掉 max-age。

协商缓存由响应头中的 Last-Modified 和 ETag 还有请求头中的 If-Modified-Since 和 If-None-Match 控制。

“推送缓存”是针对 HTTP/2 标准下的推送资源设定的。推送缓存是 session 级别的，如果用户的 session 结束则资源被释放；即使 URL 相同但处于不同的 session 中也不会发生匹配。

#### 实现一下 bind 函数

一句话介绍 bind:

bind() 方法会创建一个新函数。当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数。(来自于 MDN )

特点：

- 返回一个函数
- 可以传入参数

```javascript
Function.prototype.bind2 = function (obj) {
  let self = this // fn
  // 获取bind2函数从第二个参数到最后一个参数
  let args = Array.prototype.slice.call(arguments, 1)

  return function () {
    // 这个时候的arguments是指bind返回的函数传入的参数
    var bindArgs = Array.prototype.slice.call(arguments)
    return self.apply(obj, args.concat(bindArgs))
  }
}

Function.prototype.bind2 = function (obj, ...args) {
  let self = this // fn

  return function () {
    return self.apply(obj, [...args, ...arguments])
  }

  // fBound.prototype = this.prototype;

  // fNOP.prototype = this.prototype;
  // fBound.prototype = new fNOP();
}
```

#### 进程间是如何通信的

IPC(Inter-Process Communication)进程间通信，提供了各种进程间通信的方法。在 Linux C 编程中有几种方法

(1) 半双工 Unix 管道
(2) FIFOs(命名管道)
(3) 消息队列
(4) 信号量
(5) 共享内存
(6) 网络 Socket

#### ARP 协议

ARP 协议是“Address Resolution Protocol”（地址解析协议）的缩写

MAC 地址通过 ARP 协议来获取

ARP 能够通过目的 IP 地址发现目标设备的 MAC 地址

#### 继承

1. 原型链继承

```javascript
function Parent() {
  this.name = 'kevin'
}

Parent.prototype.getName = function () {
  console.log(this.name)
}

function Child() {}

Child.prototype = new Parent()

var child1 = new Child()

console.log(child1.getName()) // kevin
```

问题：

1.引用类型的属性被所有实例共享，举个例子：

```javascript
function Parent() {
  this.names = ['kevin', 'daisy']
}

function Child() {}

Child.prototype = new Parent()

var child1 = new Child()

child1.names.push('yayu')

console.log(child1.names) // ["kevin", "daisy", "yayu"]

var child2 = new Child()

console.log(child2.names) // ["kevin", "daisy", "yayu"]
```

2.在创建 Child 的实例时，不能向 Parent 传参

2. 借用构造函数(经典继承)

```javascript
function Parent() {
  this.names = ['kevin', 'daisy']
}

function Child() {
  Parent.call(this)
}

var child1 = new Child()

child1.names.push('yayu')

console.log(child1.names) // ["kevin", "daisy", "yayu"]

var child2 = new Child()

console.log(child2.names) // ["kevin", "daisy"]
```

缺点：

方法都在构造函数中定义，每次创建实例都会创建一遍方法。

3. 组合继承

```javascript
function Parent(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}

Parent.prototype.getName = function () {
  console.log(this.name)
}

function Child(name, age) {
  Parent.call(this, name)

  this.age = age
}

Child.prototype = new Parent()
Child.prototype.constructor = Child

var child1 = new Child('kevin', '18')

child1.colors.push('black')

console.log(child1.name) // kevin
console.log(child1.age) // 18
console.log(child1.colors) // ["red", "blue", "green", "black"]

var child2 = new Child('daisy', '20')

console.log(child2.name) // daisy
console.log(child2.age) // 20
console.log(child2.colors) // ["red", "blue", "green"]
```

#### TCP 的三次握手和四次挥手

三次是最少的安全次数，两次不安全，四次浪费资源；

TCP 是全双工信道，何为全双工就是客户端与服务端建立两条通道，通道 1:客户端的输出连接服务端的输入；通道 2:客户端的输入连接服务端的输出。两个通道可以同时工作：客户端向服务端发送信号的同时服务端也可以向客户端发送信号。所以关闭双通道的时候就是这样：

客户端：我要关闭输入通道了。
服务端：好的，你关闭吧，我这边也关闭这个通道。

服务端：我也要关闭输入通道了。
客户端：好的你关闭吧，我也把这个通道关闭。

#### OSI 五层

应用层 传输层 网络层 数据链路层 物理层
http UDP/TCP IP ARP

#### 设计并实现 Promise.race()

```javascript
Promise.prototype.myrace = (p) => {
  return new Promise((resolve, reject) => {
    p.forEach((item) => {
      Promise.resolve(item).then(resolve, reject)
    })
  })
}
```

#### 设计并实现 Promise.all()

```javascript
Promise.prototype.all = (promises) => {
  let results = []
  let promiseCount = 0

  return new Promise((resolve, reject) => {
    for (let val of promises) {
      Promise.resolve(val).then((res) => {
        promiseCount++
        results.push(res)
        // results[promiseCount] = results
        // 当所有函数都正确执行了，resolve输出所有返回结果。
        if (promiseCount === promises.length) {
          resolve(results)
        }
      }, reject)
    }
  })
}
```

---

2020-06-22 08:57:20

#### JavaScript 数组去重

es6 set

```javascript
function unique(arr) {
  return Array.from(new Set(arr))
}

;[...new Set(arr)]
```

利用 for 嵌套 for，然后 splice 去重

```javascript
function unique(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        //第一个等同于第二个，splice方法删除第二个
        arr.splice(j, 1) // splice 改变原始数组
        j--
      }
    }
  }
  return arr
}
```

利用 indexOf 去重

```javascript
function unique(arr) {
  // if (!Array.isArray(arr)) {
  //   return
  // }
  var array = []
  for (var i = 0; i < arr.length; i++) {
    // 也可以使用 includes
    if (array.indexOf(arr[i]) === -1) {
      array.push(arr[i])
    }
  }
  return array
}
```

利用 sort()

```javascript
function unique(arr) {
  // if (!Array.isArray(arr)) {
  //   return
  // }
  arr.sort() // 数组在原数组上进行排序

  var arrry = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arrry.push(arr[i])
    }
  }
  return arrry
}
```

利用对象的属性不能相同的特点

```javascript
function unique(arr) {
  // if (!Array.isArray(arr)) {
  //   return
  // }
  var arrry = []
  var obj = {} // 可用于统计元素出现个数

  for (var i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      arrry.push(arr[i])
      obj[arr[i]] = 1
    } else {
      obj[arr[i]]++
    }
  }

  return arrry
}
```

#### javascript 变量对象

当 JavaScript 代码执行一段可执行代码(executable code)时，会创建对应的执行上下文(execution context)。

对于每个执行上下文，都有三个重要属性：

- 变量对象(Variable object，VO)
- 作用域链(Scope chain)
- this

```javascript
console.log(foo) // 打印函数

function foo() {}

var foo = 1
```

```javascript
var foo = 1
console.log(foo) // 1

function foo() {}
```

进入执行上下文时，其次会处理变量声明，如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性。

进入代码执行阶段，先执行 console.log(foo)，此时 foo 是函数的应用，再执行赋值 foo = 1;将 foo 赋值为 1，而在我改写的例子里中，先执行 var foo = 1;再执行 console.log(foo),所以打印 1。

#### 模拟实现 call

```javascript
Function.prototype.call = function (obj) {
  var obj = obj || window
  obj.fn = this

  var args = []
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']')
  }

  var result = eval('obj.fn(' + args + ')')

  delete obj.fn

  return result
}
```

#### 模拟实现 apply

```javascript
Function.prototype.apply = function (context, arr) {
  var context = Object(context) || window
  context.fn = this

  var result
  if (!arr) {
    result = context.fn()
  } else {
    var args = []
    for (var i = 0, len = arr.length; i < len; i++) {
      args.push('arr[' + i + ']')
    }
    result = eval('context.fn(' + args + ')')
  }

  delete context.fn
  return result
}
```

#### 函数柯里化

在数学和计算机科学中，柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。

curry 的这种用途可以理解为：参数复用。本质上是降低通用性，提高适用性。

```javascript
sum(a, b, c) = sum(a)(b)(c)

var sum = function (a, b, c) {
  return a + b + c
}
var newsum = curry(sum)

// newsum(a,b)(c) newsum(a)(b,c) 柯里化后参数可以任意搭配
```

```javascript
function curry(fn, ...arr) {
  return (...args) => {
    // 如果参数个数小于最初的fn.length，则递归调用，继续收集参数
    if ([...arr, ...args].length < fn.length) {
      return curry(fn, ...arr, ...args) // 迭代，传入现有的所有参数
    } else {
      // 参数收集完毕，则执行fn
      return fn(...arr, ...args) // 拓展参数，调用fn
    }
  }
}
```

---

2020-06-26 18:03:00

#### 交集、并集、差集

```javascript
let a = [1, 2, 3]
let b = [2, 4, 5]

let aSet = new Set(a)
let bSet = new Set(b)

// 并集
let union = Array.from(new Set(a.concat(b))) // [1,2,3,4,5]

// 交集 filter
let intersection = Array.from(
  new Set(a.filter((v) => bSet.has(v))) // [2]
)

// 差集 a-b
let differenceNew = Array.from(
  new Set(a.concat(b).filter((v) => aSet.has(v) && !bSet.has(v))) // [1, 3]
)
```

#### 写一个 EventEmitter

基于观察者模式 完成 EventEmitter 模块，它是一个类，它的实例具有以下几个方法：on、emit、off：

```javascript
const emitter = new EventEmitter()

emitter.on('hi', sayHi)
emitter.on('hi', sayHi2)
emitter.emit('hi', 'ScriptOJ')
// => Hello ScriptOJ
// => Good night, ScriptOJ

emitter.off('hi', sayHi)
emitter.emit('hi', 'ScriptOJ')
// => Good night, ScriptOJ

const emitter2 = new EventEmitter()
emitter2.on('hi', (name, age) => {})
emitter2.emit('hi', 'Jerry', 12)
// => I am Jerry, and I am 12 years old
```

```javascript
class EventEmitter {
  constructor() {
    this.events = {}
  }

  // on(eventName, func)：监听 eventName 事件，事件触发的时候调用 func 函数。
  on(eventName, func) {
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }
    this.events[eventName].push(func)
  }

  // emit(eventName, arg1, arg2, arg3...)：触发 eventName 事件，并且把参数 arg1, arg2, arg3… 传给事件处理函数。
  emit(eventName, ...params) {
    const events = this.events[eventName]
    if (events) {
      events.forEach((event) => {
        event.apply(this, params)
      })
    }
  }

  // off(eventName, func)：停止监听某个事件。
  off(eventName, func) {
    if (this.events[eventName]) {
      if (!func) {
        // 如果没有传入方法 则说明取消该事件所有监听
        this.events[eventName] = []
      } else {
        this.events[eventName].splice(this.events[eventName].indexOf(func), 1)
      }
    }
  }
}
```

#### function request(urls, maxNumber, callback) 要求编写函数实现，根据 urls 数组内的 url 地址进行并发网络请求，最大并发数 maxNumber, 当所有请求完毕后调用 callback 函数(已知请求网络的方法可以使用 fetch api)

**async-pool**

```javascript
function asyncPool(urls, maxNumber, callback) {
  let i = 0
  const result = [] // 返回结果
  const executing = [] // 保存正在执行的promise

  const enqueue = function () {
    // 边界处理，urls 为空数组
    // if (i === urls.length) {
    //   return Promise.resolve()
    // }

    // 每调一次enqueue，初始化一个promise
    const item = urls[i++]
    const p = Promise.resolve().then(() => callback(item, urls)) // 回调函数发 fetch 请求
    // 放入promises数组
    result.push(p)

    // promise执行完毕，从executing数组中删除
    const e = p.then(() => executing.splice(executing.indexOf(e), 1))
    // 插入executing数字，表示正在执行的promise
    executing.push(e)

    // 使用Promise.rece，每当executing数组中promise数量低于maxNumber，就实例化新的promise并执行
    let r = Promise.resolve()
    if (executing.length >= maxNumber) {
      r = Promise.race(executing)
    }
    // 递归，直到遍历完 urls
    return r.then(() => enqueue())
  }

  return enqueue().then(() => Promise.all(result))
}

function limitLoad(urls, limit, handler) {
  // 对数组做一个拷贝
  const _urls = [].concat(urls)
  let promises = []

  //并发请求到最大数
  promises = _urls.splice(0, limit).map((url, index) => {
    // 这里返回的 index 是任务在 promises 的脚标，
    //用于在 Promise.race 之后找到完成的任务脚标
    return handler(url).then(() => {
      return index
    })
  })

  function loop() {
    let p = Promise.race(promises)

    for (let i = 0; i < _urls.length; i++) {
      p = p.then((res) => {
        promises[res] = handler(_urls[i]).then(() => {
          return res
        })

        return Promise.race(promises)
      })
    }
  }

  loop()
}

Promise.allLimit = function (arr, wrap, limit, callback) {
  return new Promise((resolve, reject) => {
    var total = arr.length
    var result = new Array(total)
    // var rejected = false
    var dones = 0
    function run(n) {
      setTimeout(() => {
        wrap(n, arr.shift())
          .then((res) => {
            return typeof callback === 'function' ? callback(n, res) : Promise.resolve(res)
          })
          .then((res) => {
            dones++
            result[n] = res
            // if (!rejected) {
            if (arr.length) {
              run(total - arr.length)
            } else if (dones === total) {
              resolve(result)
            }
            // }
          })
          .catch((err) => {
            // rejected = true
            reject(err)
          })
      }, 0)
    }

    arr.slice(0, limit).forEach((v, n) => {
      run(n)
    })
  })
}

function handleFetchQueue(urls, max, callback) {
  const urlCount = urls.length
  const requestsQueue = []
  const results = []
  let i = 0

  const handleRequest = (url) => {
    const req = fetch(url)
      .then((res) => {
        const len = results.push(res)

        if (len < urlCount && i + 1 < urlCount) {
          requestsQueue.shift()
          handleRequest(urls[++i])
        } else if (len === urlCount) {
          'function' === typeof callback && callback(results)
        }
      })
      .catch((e) => {
        results.push(e)
      })

    if (requestsQueue.push(req) < max) {
      handleRequest(urls[++i])
    }
  }

  handleRequest(urls[i])
}

// 使用
const timeout = (i) => new Promise((resolve) => setTimeout(() => resolve(i), i))
asyncPool(2, [1000, 5000, 3000, 2000], timeout).then((results) => {
  //...
})
```

#### 设计模式

- 工厂模式

工厂模式定义一个用于创建对象的接口，这个接口由子类决定实例化哪一个类。该模式使一个类的实例化延迟到了子类。而子类可以重写接口方法以便创建的时候指定自己的对象类型。

```javascript
class Product {
  constructor(name) {
    this.name = name
  }
  init() {
    console.log('init')
  }
  fun() {
    console.log('fun')
  }
}

class Factory {
  create(name) {
    return new Product(name)
  }
}

// use
let factory = new Factory()
let p = factory.create('p1')
p.init()
p.fun()
```

- 代理模式

JavaScript 中常用的代理模式为 “虚拟代理” 和 “缓存代理”。

虚拟代理（延迟执行）
虚拟代理的目的，是将开销大的运算延迟到需要时再执行。

ES6 的 Proxy
ES6 新增的 Proxy 代理对象的操作，具体的实现方式是在 handler 上定义对象自定义方法集合，以便预先管控对象的操作。

```javascript
// ES6的Proxy
let Person = {
  name: '以乐之名',
}

const ProxyPerson = new Proxy(Person, {
  get(target, key, value) {
    if (key != 'age') {
      return target[key]
    } else {
      return '保密'
    }
  },

  set(target, key, value) {
    if (key === 'rate') {
      target[key] = value === 'A' ? '推荐' : '待提高'
    }
  },
})

console.log(ProxyPerson.name) // '以乐之名'
console.log(ProxyPerson.age) // '保密'
ProxyPerson.rate = 'A'
console.log(ProxyPerson.rate) // '推荐'
ProxyPerson.rate = 'B'
console.log(ProxyPerson.rate) // '待提高'
```

- 单例模式

```javascript
function Singleton(name) {
  this.name = name
  this.instance = null
}

Singleton.prototype.getName = function () {
  console.log(this.name)
}

Singleton.getInstance = function (name) {
  if (this.instance) {
    return this.instance
  }
  return (this.instance = new Singleton(name))
}

let Winner = Singleton.getInstance('Winner')
let Looser = Singleton.getInstance('Looser')

console.log(Winner === Looser) // true
console.log(Winner.getName()) // 'Winner'
console.log(Looser.getName()) // 'Winner'
```

- 状态模式

解决程序中繁杂的分支判断语句问题，避免大量多层的 if else 嵌套

```javascript
//一般写法：
if (a) {
} else if (b) {
} else if (c) {
} else if (d) {
}

//状态管理例子
let obj = {
  a: function () {},
  b: function () {},
  //...
}

//使用
let type = a || b || c || d
obj[type]()

obj[a]()
```

---

2020-07-04 10:06:21

#### 如何编写代码实现构造函数不用 new 关键字会报错？

```javascript
new.target

this instanceof A
```

#### 函数传参数是按值还是引用?数据类型或者对象类型都一样吗？

按值传递

#### 前端安全（CSRF、XSS）

XSS：恶意攻击者往 Web 页面里插入恶意 Script 代码，当用户浏览该页之时，嵌入其中 Web 里面的 Script 代码会被执行，从而达到恶意攻击用户的目的。

CSRF：CSRF 攻击是攻击者借助受害者的 Cookie 骗取服务器的信任，可以在受害者毫不知情的情况下以受害者名义伪造请求发送给受攻击服务器，从而在并未授权的情况下执行在权限保护之下的操作。

#### js 的几种模块规范

js 中现在比较成熟的有四种模块加载方案：

第一种是 CommonJS 方案，它通过 require 来引入模块，通过 module.exports 定义模块的输出接口。这种模块加载方案是服务器端的解决方案，它是以**同步**的方式来引入模块的，因为在服务端文件都存储在本地磁盘，所以读取非常快，所以以同步的方式加载没有问题。但如果是在浏览器端，由于模块的加载是使用网络请求，因此使用异步加载的方式更加合适。

第二种是 AMD 方案，这种方案采用**异步加载**的方式来加载模块，模块的加载不影响后面语句的执行，所有依赖这个模块的语句都定义在一个回调函数里，等到加载完成后再执行回调函数。**require.js** 实现了 AMD 规范。

第三种是 CMD 方案，这种方案和 AMD 方案都是为了解决异步模块加载的问题，**sea.js** 实现了 CMD 规范。它和 require.js 的区别在于模块定义时对依赖的处理不同和对依赖模块的执行时机的处理不同。

第四种方案是 ES6 提出的方案，使用 import 和 export 的形式来导入导出模块。

##### 为什么在调用这个函数时，代码中的 b 会变成一个全局变量?

```javascript
// function myFunc() {
//   let a = b = 0
// }

// myFunc()

function myFunc() {
  let a = (b = 0)
}

myFunc()
```

原因是赋值运算符是从右到左的求值的。这意味着当多个赋值运算符出现在一个表达式中时，它们是从右向左求值的。

#### 简单介绍一下 V8 引擎的垃圾回收机制

v8 的垃圾回收机制基于**分代回收机制**，这个机制又基于**世代假说**，这个假说有两个特点，一是新生的对象容易早死，另一个是不死的对象会活得更久。基于这个假说，v8 引擎将内存分为了**新生代和老生代**。

新创建的对象或者只经历过一次的垃圾回收的对象被称为新生代。经历过多次垃圾回收的对象被称为老生代。

新生代被分为 From 和 To 两个空间，To 一般是闲置的。当 From 空间满了的时候会执行 Scavenge 算法进行垃圾回收。当我们执行垃圾回收算法的时候应用逻辑将会停止，等垃圾回收结束后再继续执行。这个算法分为三步：

（1）首先检查 From 空间的存活对象，如果对象存活则判断对象是否满足晋升到老生代的条件，如果满足条件则晋升到老生代。如果不满足条件则移动 To 空间。
（2）如果对象不存活，则释放对象的空间。
（3）最后将 From 空间和 To 空间角色进行交换。

新生代对象晋升到老生代有两个条件：

（1）第一个是判断是对象否已经经过一次 Scavenge 回收。若经历过，则将对象从 From 空间复制到老生代中；若没有经历，则复制到 To 空间。
（2）第二个是 To 空间的内存使用占比是否超过限制。当对象从 From 空间复制到 To 空间时，若 To 空间使用超过 25%，则对象直接晋升到老生代中。设置 25% 的原因主要是因为算法结束后，两个空间结束后会交换位置，如果 To 空间的内存太小，会影响后续的内存分配。

老生代采用了**标记清除法和标记压缩法**。标记清除法首先会对内存中存活的对象进行标记，标记结束后清除掉那些没有标记的对象。由于标记清除后会造成很多的内存碎片，不便于后面的内存分配。所以了解决**内存碎片**的问题引入了**标记压缩法**。

由于在进行垃圾回收的时候会暂停应用的逻辑，对于新生代方法由于内存小，每次停顿的时间不会太长，但对于老生代来说每次垃圾回收的时间长，停顿会造成很大的影响。 为了解决这个问题 V8 引入了**增量标记**的方法，将一次停顿进行的过程分为了多步，每次执行完一小步就让运行逻辑执行一会，就这样交替运行。

#### 实现 promise

```javascript
function myPromise(fn) {
  let self = this
  self.status = 'pending' //定义状态改变前的初始状态
  self.value = undefined //定义状态为resolved的时候的状态
  self.reason = undefined //定义状态为rejected的时候的状态

  function resolve(value) {
    //两个==="pending"，保证了状态的改变是不可逆的
    if (self.status === 'pending') {
      self.value = value
      self.status = 'fulfilled'
    }
  }

  function reject(reason) {
    //两个==="pending"，保证了状态的改变是不可逆的
    if (self.status === 'pending') {
      self.reason = reason
      self.status = 'rejected'
    }
  }
  //捕获构造异常
  try {
    fn(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

// 定义链式调用的then方法
myPromise.prototype.then = function (onFullfilled, onRejected) {
  let self = this
  switch (self.status) {
    case 'fulfilled':
      onFullfilled(self.value)
      break
    case 'rejected':
      onRejected(self.reason)
      break
    default:
  }
}
```

#### 实现一个图片懒加载

```javascript
function lazyLoad() {
  let imgs = document.querySelectorAll('img')
  let H = document.documentElement.clientHeight //获取可视区域高度

  for (var i = 0; i < imgs.length; i++) {
    if (imgs[i].getBoundingClientRect().top < H) {
      imgs[i].src = imgs[i].getAttribute('data-src')
    }
  }
}
```

#### 权限设计 RBAC

RBAC 0-3
用户 -（角色）- 权限

#### https

https: 是以安全为目标的 HTTP 通道，简单讲是 HTTP 的安全版，即 HTTP 下加入 SSL 层，HTTPS 的安全基础是 SSL，因此加密的详细内容就需要 SSL。

https 协议的工作原理

客户端在使用 HTTPS 方式与 Web 服务器通信时有以下几个步骤，如图所示。
客户端使用 https url 访问服务器，则要求 web 服务器建立 ssl 链接。
web 服务器接收到客户端的请求之后，会将网站的证书（证书中包含了公钥），返回或者说传输给客户端。
客户端和 web 服务器端开始协商 SSL 链接的安全等级，也就是加密等级。
客户端浏览器通过双方协商一致的安全等级，建立会话密钥，然后通过网站的公钥来加密会话密钥，并传送给网站。
web 服务器通过自己的私钥解密出会话密钥。
web 服务器通过会话密钥加密与客户端之间的通信。

https 协议的缺点

https 握手阶段比较费时，会使页面加载时间延长 50%，增加 10%~20%的耗电。
https 缓存不如 http 高效，会增加数据开销。
SSL 证书也需要钱，功能越强大的证书费用越高。

#### 从输入 URL 到页面展示，这中间发生了什么

- 浏览器进程发出 URL 请求给网络进程
- 网络进程接收到 URL 请求后，发起网络请求，然后服务器返回 HTTP 数据到网络进程，网络进程解析 HTTP 响应头数据，并将其转发给浏览器进程
- 浏览器进程接收到网络进程的响应头数据后，发送 CommitNavigation 消息到渲染进程，发送 CommitNavigation 时会携带响应头、等基本信息。
- 渲染进程接收到 CommitNavigation 消息之后，便开始准备接收 HTML 数据，接收数据的方式是直接和网络进程建立数据管道
- 最后渲染进程会像浏览器进程“确认提交”，这是告诉浏览器进程，说我已经准备好接受和解析页面数据了
- 最后浏览器进程更新页面状态

#### JavaScript 大数相乘、大数相加

https://segmentfault.com/a/1190000015979292

```javascript
var multiply = function (num1, num2) {
  const left = '0'.charCodeAt(0)
  // 首先将字符串用 charCodeAt 转换成对应的数字。
  // num1Arr 取较短的数字， num2Arr 取较长的数字，用 num1Arr 去分别乘 num2Arr 速度会提升15ms
  const num1Arr = (num1.length > num2.length ? num2 : num1)
    .split('')
    .map((item) => item.charCodeAt(0) - left)

  const num2Arr = (num1.length > num2.length ? num1 : num2)
    .split('')
    .map((item) => item.charCodeAt(0) - left)

  let res = []
  for (let i = num1Arr.length - 1; i > -1; i--) {
    for (let j = num2Arr.length - 1; j > -1; j--) {
      // 数字的相乘的结果转换为数组，并且 reverse，方便计算
      const resArr = (num1Arr[i] * num2Arr[j]).toString().split('')
      resArr.reverse()
      const index = num2Arr.length - 1 - j + num1Arr.length - 1 - i
      let next = 0,
        k = 0
      while (k < resArr.length || next !== 0) {
        // 结果当前位数加上前一位的进位
        let sum = (res[index + k] | 0) + next
        // 若 k < resArr，即非最后一位进位
        if (k < resArr.length) {
          sum += +resArr[k]
        }
        res[index + k] = sum % 10
        // 若 sum 大于10，进位 = 1
        next = sum / 10 >= 1 ? 1 : 0
        k++
      }
    }
  }
  // 去除结果前的 0
  while (res.length > 1 && res[res.length - 1] === 0) {
    res.pop()
  }
  return res.reverse().join('')
}
```

```javascript
var addStrings = function (num1, num2) {
  let a = num1.length,
    b = num2.length,
    result = '', // 保存结果
    tmp = 0 // 是否有进位

  while (a || b) {
    if (a) {
      tmp += +num1[--a]
    }

    if (b) {
      tmp += +num2[--b]
    }

    result = (tmp % 10) + result

    if (tmp > 9) tmp = 1
    else tmp = 0
  }

  if (tmp) result = 1 + result

  return result
}
```

#### 说一下浏览器缓存

浏览器缓存分为强缓存和协商缓存，强缓存会直接从浏览器里面拿数据，协商缓存会先访问服务器看缓存是否过期，再决定是否从浏览器里面拿数据。

控制强缓存的字段有：Expires 和 Cache-Control。

控制协商缓存的字段是：Last-Modified / If-Modified-Since 和 Etag / If-None-Match，其中 Etag / If-None-Match 的优先级比 Last-Modified / If-Modified-Since 高。

<!-- /****************************\*\*\***************************** -->

Excel 行列转 数字
例如： "A3" -> [1, 3], "Z10" -> [26, 10], "AZ2" -> [52, 2], "BA30" -> [53, 30]

<!-- ****************************\*\*\*\*****************************/ -->

```javascript
function strToArr(str) {
  const result = []
  const [_, col, row] = /^([A-Z]+)([0-9]+)$/.exec(str)

  result[1] = row

  result[0] = col
    .split('')
    .reverse()
    .map((item, index) => {
      // 'A'.charCodeAt() - 64
      return item.charCodeAt() - 64
    }) //AZ -> ['Z','A'] -> 0*26 + 26  +    1*26
    .reduce((total, curr, index) => {
      return total + +curr * Math.pow(26, index)
    }, 0)

  return result
}
```

实现一个 normalize 函数，能将输入的特定的字符串转化为特定的结构化数据。
字符串仅由小写字母、[ 和 ] 组成，且字符串不会包含多余的空格。
示例一: 'abc' --> {value: 'abc'}
示例二：'[abc[bcd[def]]]' -> {value: 'abc', children: {value: 'bcd', children: {value: 'def'}}}

```javascript
function normalize(str) {
  const result = {}

  const srrArr = str.split(/[\[\]]/g)
  strArr.filter(Boolean).reduce((obj, item, i, s) => {
    obj.value = item

    if (i !== s.length - 1) {
      return (obj.children = {})
    }
  }, result)

  return result
}
```

#### 求斐波那契数列第 n 项

```javascript
/**
 * @description 求斐波那契数列第n项
 * @param {number} n 项目数
 * @return {number} 返回第n项值
 */
function fibonacci(n, v1 = 1, v2 = 1) {
  if (n == 1) return v1
  if (n == 2) return v2
  return fibonacci(n - 1, v2, v1 + v2)
}
```

#### 写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b 的时间，然后写一个 myClear，停止上面的 mySetInterVal

```javascript
function mySetInterVal(fn, a, b) {
  this.a = a
  this.b = b
  this.time = 0
  this.handle = -1
  this.start = () => {
    this.handle = setTimeout(() => {
      fn()
      this.time++
      this.start()
      console.log(this.a + this.time * this.b)
    }, this.a + this.time * this.b)
  }

  this.stop = () => {
    clearTimeout(this.handle)
    this.time = 0
  }
}

var a = new mySetInterVal(
  () => {
    console.log('123')
  },
  1000,
  2000
)
a.start()
a.stop()
```

#### 合并二维有序数组成一维有序数组，归并排序的思路

```javascript
function mergeSort(arr) {
  const len = arr.length
  // 处理边界情况
  if (len <= 1) {
    return arr[0]
  }
  // 计算分割点
  const mid = Math.floor(len / 2)
  // 递归分割左子数组，然后合并为有序数组
  const leftArr = mergeSort(arr.slice(0, mid))
  // 递归分割右子数组，然后合并为有序数组
  const rightArr = mergeSort(arr.slice(mid, len))
  // 合并左右两个有序数组
  arr = mergeArr(leftArr, rightArr)
  // 返回合并后的结果
  return arr
}

function mergeArr(arr1, arr2) {
  // 初始化两个指针，分别指向 arr1 和 arr2
  let i = 0,
    j = 0
  // 初始化结果数组
  const res = []
  // 缓存arr1的长度
  const len1 = arr1.length
  // 缓存arr2的长度
  const len2 = arr2.length
  // 合并两个子数组
  while (i < len1 && j < len2) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i])
      i++
    } else {
      res.push(arr2[j])
      j++
    }
  }
  // 若其中一个子数组首先被合并完全，则直接拼接另一个子数组的剩余部分
  if (i < len1) {
    return res.concat(arr1.slice(i))
  } else {
    return res.concat(arr2.slice(j))
  }
}

var arr = [
  [1, 2, 4],
  [2, 3, 7],
  [3, 5, 7],
  [4, 5, 8],
]
mergeArr(arr)
```

#### 说一下 react-fiber

旧版 React 通过递归的方式进行渲染，使用的是 JS 引擎自身的函数调用栈，它会一直执行到栈空为止。
而 Fiber 实现了自己的组件调用栈，它以链表的形式遍历组件树，可以灵活的暂停、继续和丢弃执行的任务。
实现方式是使用了浏览器的 `requestIdleCallback` 这一 API。

#### 归并排序

```javascript
function MergeSort(array) {
  let len = array.length
  if (len <= 1) {
    return array
  }

  let num = Math.floor(len / 2)
  let left = MergeSort(array.slice(0, num))
  let right = MergeSort(array.slice(num, array.length))

  return merge(left, right)

  function merge(left, right) {
    let [l, r] = [0, 0]
    let result = []

    while (l < left.length && r < right.length) {
      if (left[l] < right[r]) {
        result.push(left[l])
        l++
      } else {
        result.push(right[r])
        r++
      }
    }

    result = result.concat(left.slice(l, left.length))
    result = result.concat(right.slice(r, right.length))

    return result
  }
}
```

---

2020-07-16 16:02:12

#### 有序数组查找目标索引

```javascript
function search(arr, num) {
  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)

    if (num < arr[mid]) end = mid - 1
    else if (num > arr[mid]) start = mid + 1
    else return mid
  }

  return -1
}
```

#### 同花顺

红桃 A-K 1-13
黑桃 A-K 14-26
梅花 A-K 27-39
方片 A-K 40-52

随机抽取 5 张牌
var arr = [1,2,3,4,5]、[10、11、12、13、14]、[1,3,4,5,6]

```javascript
function test(arr) {
  // 1. 排序
  arr.sort()

  // 2. 是否连续
  if (arr[0] - arr[4] !== 4) return false

  // 3. 是否在同一区间
  let i = 1 // 13
  while (i) {
    if (arr[0] >= i * 13 - 12 && arr[4] <= i * 13) {
      return true
    }

    i++
    if (i > 4) return false
  }
}
```

#### 盛水最多的容器

链接：https://leetcode-cn.com/problems/container-with-most-water/solution/shuang-zhi-zhen-fa-wu-chong-yu-yan-by-ml-zimingmen/

```javascript
var maxArea = function (arr) {
  let i = 0 // 头指针
  let j = arr.length - 1 // 尾指针
  let square = 0
  let max = 0 // 最大面积

  while (j - i >= 1) {
    if (arr[i] > arr[j]) {
      square = arr[j] * (j - i)
      j--
    } else {
      square = arr[i] * (j - i)
      i++
    }

    max = Math.max(square, max)
  }

  return max
}
```

#### 回文数

```javascript
var isPalindrome = function (x) {
  return x.toString() == x.toString().split('').reverse().join('')
}

var isPalindrome = function (x) {
  if (x < 0) return false
  if (x < 10) return true

  let n = 10 ** Math.floor(Math.log10(x))

  while (n > 1 && x > 0) {
    if (Math.floor(x / n) !== x % 10) return false
    x = Math.floor((x % n) / 10)
    n /= 100
  }

  return true
}

// var countSubstrings = function(s) {
//     let count = s.length;
//     for(let i = 0; i < s.length; i++) {
//         for(let j = i+1; j < s.length; j++) {
//             let temp = s.substr(i,j-i+1);
//             if(isSub(temp)) count++;
//         }
//     }
//     return count;
// }
```

#### 两数之和

给定一个整数数组 nums  和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

示例：

```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

```javascript
var twoSum = function (nums, target) {
  let i = nums.length

  while (i > 1) {
    let last = nums.pop() // 最后一个元素
    const tmp = nums.indexOf(target - last) // 找目标值

    if (tmp !== -1) {
      return [tmp, i - 1]
    }

    i--
  }
}
```

#### 数组中的第 K 个最大元素

在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

```javascript
let findKthLargest = function (nums, k) {
  nums.sort((a, b) => b - a)
  return nums[k - 1]
}
```

#### 查找字符串数组中的最长公共前缀

```
输入: ["flower","flow","flight"]
输出: "fl"
```

解题思路： 获取数组中的最大值及最小值字符串，最小字符串与最大字符串的最长公共前缀也为其他字符串的公共前缀，即为字符串数组的最长公共前缀

例如 abc 、 abcd 、ab 、ac ，最小 ab 与最大 ac 的最长公共前缀一定也是 abc 、 abcd 的公共前缀

```javascript
var longestCommonPrefix = function (strs) {
  if (strs === null || strs.length === 0) return ''
  if (strs.length === 1) return strs[0]

  // 最大值和最小值下标
  let min = 0
  let max = 0

  // 找到最大、最小值的下标
  for (let i = 1; i < strs.length; i++) {
    if (strs[min] > strs[i]) min = i
    if (strs[max] < strs[i]) max = i
  }

  for (let j = 0; j < strs[min].length; j++) {
    if (strs[min].charAt(j) !== strs[max].charAt(j)) {
      return strs[min].substring(0, j)
    }
  }

  return strs[min]
}
```

#### 给定一个只包括 ‘(’，’)’，’{’，’}’，’[’，’]’ 的字符串，判断字符串是否有效。

解题思路
利用栈。
遇到左括号，一律推入栈中，
遇到右括号，将栈顶部元素拿出，如果不匹配则返回 false，如果匹配则继续循环。

```javascript
var isValid = function (s) {
  let map = {
    '{': '}',
    '(': ')',
    '[': ']',
  }
  let stack = []

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      // { ( [
      stack.push(s[i])
    } else if (s[i] !== map[stack.pop()]) {
      // } ） ]
      return false
    }
  }

  return stack.length === 0
}
```

时间复杂度：O(n)
空间复杂度：O(n)

#### 千位加逗号

```javascript
;(12356.546).toLocaleString()
```

```javascript
function format(num) {
  var reg = /\d{1,3}(?=(\d{3})+$)/g
  return (num + '').replace(reg, '$&,')
}
// 正则表达式 \d{1,3}(?=(\d{3})+$)  表示前面有1~3个数字，后面的至少由一组3个数字结尾
// ?=表示正向引用，可以作为匹配的条件，但匹配到的内容不获取，并且作为下一次查询的开始
// $& 表示与正则表达式相匹配的内容
```

```javascript
function format(num) {
  var [str, p = ''] = (num + '').split('.')
  // ["8", "7", "6", "5", "4", "3", "2", "1"]
  return (
    str
      .split('')
      .reverse()
      .reduce((total, currentValue, index) => {
        return (index % 3 ? currentValue : currentValue + ',') + total
      }) + (p ? '.' + p : '')
  )
}
```

#### 单向链表反转(逆序)
```javascript
//节点 头节点 中节点 尾节点
//头指针指向第一个节点 最后一个节点的指针指向空NULL
let LinkedList = {
    head:{key:'head',next:'a'},
    a:{key:'a',next:'b'},
    b:{key:'b',next:'c'},
    c:{key:'c',next:'d'},
    d:{key:'d',next:null},
}
function reverseLinkedList(head) {
  if (head === null || head.next === null)
    return head
  let newHead = null
  while (head) {
    var next = head.next
    head.next = newHead
    newHead = head
    head = next
  }
  return newHead
}
```

#### 查找最长无重复的 子串 长度

https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/solution/zi-jie-leetcode3wu-zhong-fu-zi-fu-de-zui-chang-zi-/

代码实现：

```javascript
var lengthOfLongestSubstring = function (s) {
  let arr = [],
    max = 0

  for (let i = 0; i < s.length; i++) {
    let index = arr.indexOf(s[i])

    if (index !== -1) {
      arr.splice(0, index + 1)
    }

    arr.push(s[i])
    max = Math.max(arr.length, max)
  }

  return max
}
```

时间复杂度：O(n\*n)
空间复杂度：O(n)

#### 超大金额转换，1000000000 -> 10,000,000,000

```javascript
var num = 1000000000
console.log(num.toLocaleString())
```

```javascript
var str = num
  .toString()
  .split('')
  .reverse()
  .map((item, index) => {
    return index !== 0 && index % 3 === 0 ? item + ',' : item
  })
  .reverse()
  .join('')
```

#### 二叉树
1、DLR LDR LRD DFS BFS
[遍历](https://blog.csdn.net/wanshaobo888/article/details/103879260)
2、找到二叉树所有路径
```javascript
function findPath(root) {
    var result = [];
    var path = [];
    function find(root) {
        if(root === null)
            return;
        path.push(root.val);
        if(root.left === null && root.right === null){
            result.push(Array.from(path));//path.slice(0)
        }
        find(root.left);
        find(root.right);
        path.pop()
    }
    find(root)
    //[ [ 1, 2, 15 ],[ 1, 2, 3 ],[ 1, 3, 2, 10, 9, 8 ],[ 1, 3, 2, 12 ] ]
    return result;
    //[ '1->2->15', '1->2->3', '1->3->2->10->9->8', '1->3->2->12' ]
    //return result.map((item)=>(item.join('->')));
}
```
3、找出二叉树中和为n的路径
```javascript
let root = {
    val:1,
    left:{
        val:2,
        left:{
            val:2,
            left: null,
            right: null
        },
        right:{
            val:3,
            left: null,
            right: null
        }
    },
    right:{
        val:3,
        left:{
            val:2,
            left: null,
            right: null
        },
        right:{
            val:2,
            left: null,
            right: null
        }
    }
}
function findPath(root, expectNumber) {
    var path = [];
    var list = [];
    function find(root, total) {
        if(root === null)
            return;
        list.push(root.val);
        total -= root.val;
        if(total === 0 && root.left === null && root.right === null){
            path.push(Array.from(list));
        }
        find(root.left, total);
        find(root.right, total);
        list.pop();
    }
    find(root, expectNumber)
    return path;
}
console.log(findPath(root, 6));//[ [ 1, 2, 3 ], [ 1, 3, 2 ], [ 1, 3, 2 ] ]
```
4、找出二叉树中最大和路径
```javascript
let root = {
    val:1,
    left:{
        val:2,
        left:{
            val:15,
            left: null,
            right: null
        },
        right:{
            val:3,
            left: null,
            right: null
        }
    },
    right:{
        val:3,
        left:{
            val:2,
            left: null,
            right: null
        },
        right:{
            val:2,
            left: {
                val:12,
                left: null,
                right: null
            },
            right: null
        }
    }
}
//找到二叉树所有路径
function findPath(root) {
    var path = [];
    var list = [];
    function find(root) {
        if(root === null)
            return;
        list.push(root.val);
        if(root.left === null && root.right === null){
            path.push(Array.from(list));
        }
        find(root.left);
        find(root.right);
        list.pop();
    }
    find(root)
    return path;
}
//找到二维数组中和最大的数组
function getMaxSum(arr){
    let result = [];
    //对二维数组每一项求和
    let sumArr = arr.map((item)=>{return item.reduce((sum,cur)=>{return sum+cur},0)})
    //数组最大值
    let maxNum = Math.max.apply(null,sumArr);
    let index = sumArr.indexOf(maxNum)
    while(index != -1){
        result.push(arr[index]);
        sumArr.splice(index,1)
        arr.splice(index,1)
        index = sumArr.indexOf(maxNum)
    }
    return result
}
console.log(findPath(root));//[ [ 1, 2, 15 ], [ 1, 2, 3 ], [ 1, 3, 2 ], [ 1, 3, 2, 12 ] ]
console.log(getMaxSum(findPath(root)));//[ [ 1, 2, 15 ], [ 1, 3, 2, 12 ] ]
```
5、找出二叉树中最深路径
```javascript
let root = {
    val:1,
    left:{
        val:2,
        left:{
            val:15,
            left: null,
            right: null
        },
        right:{
            val:3,
            left: null,
            right: null
        }
    },
    right:{
        val:3,
        left:{
            val:2,
            left: null,
            right: {
                val:10,
                left: {
                    val:9,
                    left: null,
                    right: {
                        val:8,
                        left: null,
                        right: null
                    }
                },
                right: null
            }
        },
        right:{
            val:2,
            left: {
                val:12,
                left: null,
                right: null
            },
            right: null
        }
    }
}
//找到二叉树所有路径
function findPath(root) {
    var path = [];
    var list = [];
    function find(root) {
        if(root === null)
            return;
        list.push(root.val);
        if(root.left === null && root.right === null){
            path.push(Array.from(list));
        }
        find(root.left);
        find(root.right);
        list.pop();
    }
    find(root)
    return path;
}
//找到二维数组中最长的数组
function getMaxSum(arr){
    let result = [];
    //二维数组每一项长度
    let lengthArr = arr.map((item)=>(item.length))
    //最大长度
    let maxLength = Math.max.apply(null,lengthArr);
    let index = lengthArr.indexOf(maxLength)
    while(index != -1){
        result.push(arr[index]);
        lengthArr.splice(index,1)
        arr.splice(index,1)
        index = lengthArr.indexOf(maxLength)
    }
    return result
}
//[ [ 1, 2, 15 ],[ 1, 2, 3 ],[ 1, 3, 2, 10, 9, 8 ],[ 1, 3, 2, 12 ] ]
console.log(getMaxSum(findPath(root)));//[ [ 1, 3, 2, 10, 9, 8 ] ]
```

#### 如何实现对象的深拷贝

```javascript
function clone(obj) {
  let result = null

  if (typeof obj === 'object' && obj !== null) {
    result = obj instanceof Array ? [] : {}
    for (let v in obj) {
      result[v] = clone(obj[v])
    }
  } else {
    result = obj
  }

  return result
}
```

#### 写 new 的执行过程

创建一个对象
将对象的 _ proto_ 指向 构造函数的 prototype
将这个对象作为构造函数的 this
返回该对象。

```javascript
function myNew(Con, ...args) {
  let obj = Object.create(Con.prototype)
  let result = Con.apply(obj, args)
  return result instanceof Object ? result : obj
}
```

#### 冒泡排序 时间复杂度分析

```javascript
function bubbleSort(arr) {
  const len = arr.length

  // 2. 外层循环控制循环次数
  for (let i = 0; i < len; i++) {
    // 当循环中没有两个数进行交换 将标志位设置为 true 标识排序完成
    let done = true
    // 1. 内层循环进行两个数的交换
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        done = false
      }
    }

    if (done) {
      break
    }
  }

  return arr
}
```

性能：
时间复杂度： `平均时间复杂度O(n*n) 、最好情况O(n)、最差情况O(n*n)`
空间复杂度： O(1)
稳定性： 稳定

时间复杂度指的是一个算法执行所耗费的时间
空间复杂度指运行完一个程序所需内存的大小
稳定指，如果 a=b,a 在 b 的前面，排序后 a 仍然在 b 的前面
不稳定指，如果 a=b，a 在 b 的前面，排序后可能会交换位置

#### 快排

```javascript
function quickSort(arr) {
  //如果数组<=1,则直接返回
  if (arr.length <= 1) return arr

  let pivotIndex = Math.floor(arr.length / 2)
  // 找基准，并把基准从原数组删除
  let pivot = arr.splice(pivotIndex, 1)[0]
  let left = []
  let right = []

  //比基准小的放在left，比基准大的放在right
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  //递归
  return [...quickSort(left), pivot, ...quickSort(right)]
}
```

（1）在数据集之中，选择一个元素作为"基准"（pivot）。
（2）所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。
（3）对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。

性能：
时间复杂度： `平均时间复杂度O(n log n)、最好情况O(n log n)、最差情况O(n*n)`
空间复杂度： O(log n)
稳定性： 不稳定

#### 找数组中的第二大数字

```javascript
var arr = [2, 4, 14, 20, 8, 3, 15]
var a = arr[0],
  b = arr[1]

if (a > b) {
  var temp = a
  a = b
  b = temp
}

for (var i = 2; i < arr.length; i++) {
  if (arr[i] > a) {
    b = a
    a = arr[i]
  } else if (arr[i] > b) {
    b = arr[i]
  }
}
```

---

2020-07-21 11:03:34

#### 选择排序

```javascript
function selectionSort(arr) {
  let len = arr.length
  let minIndex, temp

  for (var i = 0; i < len - 1; i++) {
    minIndex = i

    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        // 寻找最小的数
        minIndex = j // 将最小数的索引保存
      }
    }

    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }

  return arr
}
```

#### 版本号 从小到大 排序

```javascript
var arr = ['1.1.1', '2.301.3', '0.0.1', '1.0.3', '4.4.1', '4.10.1.5']

function versionSort(arr) {
  arr.sort(compareVersion)

  return arr

  function compareVersion(a, b) {
    let arr1 = a.split('.') //分割字符串
    let arr2 = b.split('.')

    let len = Math.max(arr1.length, arr2.length)

    for (let i = 0; i < len; i++) {
      let data1 = 0,
        data2 = 0

      if (i < arr1.length) {
        data1 = parseInt(arr1[i])
      }
      if (i < arr2.length) {
        data2 = parseInt(arr2[i])
      }

      if (data1 < data2) {
        return -1
      } else if (data1 > data2) {
        return 1
      }
    }

    return 0
  }
}
```

#### 仓储系统

实现一个简单的仓储系统，可以不断转入和转出货物，后屋最多有两层子类目，数字代表该子类目转入/转出的数量。转出时不能出现爆仓的情况

```javascript
{
  productA: {
    a: 1,
    b: 1,
    c: {
      c1: 1,
      c2: 2
    }
  },
  productB: {
    e: 6
  }
}
```

爆仓情况：转入 `{ productA: { a: 3, c: 1 } }`
转出：`{ productA: { a: 4 } }` 此时需要返回报错
加分项：1. 考虑子类目扩展深度（不止两层） 2. 有单元测试

```javascript
class Depository {
  constructor(option) {}

  // 转入货物
  transferIn(cargo) {}

  // 转出货物
  transferOut(userId) {}
}
```
