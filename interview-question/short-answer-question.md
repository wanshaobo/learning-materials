## 简答题汇总
- https://www.runoob.com/w3cnote/front-end-developer-questions-and-answers.html
https://juejin.im/post/6854573219908321293?utm_source=gold_browser_extension#heading-23
https://job.bytedance.com/society/position
https://github.com/always-on-the-road/one-question-per-day/issues
https://blog.csdn.net/qq_42308316/article/details/106859937

event loop 浏览器 node
js 事件队列
宏任务队列和微任务队列


#### html
- html文档基本结构包含什么
- 语义化标签 <article></article>页面独立的内容区域 <aside></aside>页面的侧边栏内容 <footer></footer>section/document的页脚 <header></header>文档的头部区域 <nav></nav>导航链接 <section></section>区块（有语义化的div）
ie8以下不支持 便于浏览器解析页面结构 增强html文档可读性
因为像部分标签自带样式如h1系列，p等，使用语义化的标签可以在样式加载不出的时候有基本样式，而不显混乱
语义化标签也有利于SEO，语义化标签可以有利于爬虫抓取到网页，因为爬虫依赖于标签来确定上下文和各个关键字的权重。
语义化标签的实现有利于一些特殊设备的解析，比如盲人阅读器，这为他们浏览网页带来了便利
语义化标签代码可读性良好，便于代码维护
html语义化让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析；

- <!DOCTYPE>声明必须是HTML文档的第一行，位于<html>标签之前 告知浏览器文档类型

-重排与重绘 document.write重排整个页面 innerHTML可以重绘页面的一部分
- bfc
独立渲染区域 创建bfc的4中方法 BFC是一个独立的布局环境，其中的元素布局是不受外界的影响，并且在一个BFC中，块盒与行盒（行盒由一行中所有的内联元素所组成）都会垂直的沿着其父元素的边框排列。
https://blog.csdn.net/sinat_36422236/article/details/88763187  
- 快速给10000个li标签绑定点击事件，点击后弹出li的文本内容 事件委托
window.onload = function () {
    var oul = document.getElementsByTagName('ul')[0];
    //用事件委托方式添加的事件，后期新添加的子元素仍有这个事件。
    oul.onclick = function (ev) {
        var ev = window.event || ev;//兼容
        var targ = ev.target;
        if(targ.tagName.toLowerCase() == 'li'){
            console.log(targ.innerHTML);
        }
    }
}
var li = document.querySelectorAll("li");
var list = document.getElementsByTagName("li");
for(var i = 0;i<list.length;i++){
    list[i].onclick = function(){
        this.style.color = "red";
    }
}
- 图片懒加载原理及实现

#### 安全
- CSRF 跨站点请求伪造
- xss Cross Site Scripting 跨站脚本攻击
使用cookie，localStorage，sessionStorage时要注意是否有代码存在XSS注入的风险
非持久型 单个请求的响应结果包含xss代码
持久型 将留言板中包含XSS代码<div><script>alert(1111)</script></div>的留言到存储到数据库 每个用户都可能收到攻击

#### 浏览器
- 运行机制 构建DOM树、构建渲染树、布局渲染树、绘制渲染树
重绘是指一个元素外观的改变所触发的浏览器行为，浏览器会根据元素的新属性重新绘制，使元素呈现新的外观。
重排，当渲染树中的一部分(或全部)因为元素的规模尺寸，布局，隐藏等改变而需要重新构建
重排必定会引发重绘，但重绘不一定会引发重排
- 动画
1、javascript直接实现 setTimeout setInterval
2、svg
3、CSS3 transition 
4、CSS3 animation
5、Canvas动画
6、window.requestAnimationFrame(f)

- 浏览器内核六个线程：GUI渲染线程 JavaScript引擎线程 定时触发器线程 事件触发线程 异步http请求线程

- 跨域
同源策略 协议+域名+端口 缺少了同源策略览器很容易受到XSS|CSFR等攻击
1、 通过jsonp跨域 script、img、iframe标签的src属性
```javascript
window["handler"] = function(response) {
    JSON.parse(response)
    document.body.removeChild(script);
}
var script = document.createElement("script");
//组合请求URL
script.src = "http://localhost/index.php?name=wan&callback=handler";
//将创建的新节点添加到BOM树上
document.body.appendChild(script); 
```

2、 document.domain + iframe跨域 仅限主域相同，子域不同的跨域应用场景
3、 location.hash + iframe
4、 window.name + iframe跨域
5、 postMessage跨域
6、 跨域资源共享（CORS）Access-Control-Allow-Origin
7、 nginx代理跨域
8、 nodejs中间件代理跨域
9、 WebSocket协议跨域 socket.io.js

- 浏览器解析HTML的过程 https://segmentfault.com/a/1190000018652029 https://blog.csdn.net/u013617791/article/details/82047852
1、根据HTML结构生成DOM Tree
2、根据CSS生成 CSSOM
3、将DOM和CSSOM整合形成 Render Tree
4、根据 RenderTree 开始渲染和展示
5、遇到 <script> 时，会执行并阻塞渲染，因为 Javascript 代码有权利改变DOM树
- load和DOMContentLoaded区别
window.addEventListener('load',function(){})// 页面全部资源加载完才会执行，包括图片、视频等
window.addEventListener('DOMContentLoaded',function(){})// DOM渲染完即可执行，此时图片、视频还没加载完

- 从输入url到得到html的过程
1、域名解析DNS查IP 浏览器缓存的IP/操作系统缓存的IP地址/读取本地的HOST文件/运营商服务器找IP
2、建立与服务器的 TCP/IP 连接，三次握手
3、向服务器发送 http / https 请求，创建端口/查找http强弱缓存
4、Nginx服务器负载均衡
4、http响应
5、tcp关闭（四次挥手）
6、服务器在端口监听客户端请求 接收请求根据路径参数经过后端处理后/返回状态和内容
7、浏览器得到返回内容 拿到HTML页面代码开始解析页面
将HTML解析成DOM树的结构/将css解析出结构化的css,也就是cssom/将DOM树和cssom合并在一起形成render tree,即渲染树/根据render tree进行渲染/遇到<script>标签时，浏览器会先加载js,阻塞其它进程，只有当js加载完，才会继续对dom渲染
碰到的js|css|图片等静态资源发起请求
8、遇到script有3种可能：script阻塞渲染直接执行 defer是“渲染完再执行”，async是“下载完就执行”
8、调用 GPU 绘制，合成图层

- 火焰图
http://www.ruanyifeng.com/blog/2017/09/flame-graph.html
- 本地存储localStorage和会话存储sessionStorage IndexedDB cookie 生命周期/同源策略
cookie 同源策略 跨域解决方案 nginx反向代理
Domain和path两个部分来共同确认一个 cookie 在哪些页面上可用。
Domain确定这个 cookie 所属的域名，不能带端口或协议。因此 cookie 便可在不同端口/不同协议下共享,只要域名相同。有一个例外是父子域名间也能共享 cookie，只需将 Domain 设置为.父域名。
path就简单多了，通过 Domain 确定哪些域名可以共享 cookie，然后在通过path来确定 cookie 在哪些路径下可用。使用/表示所有路径都可共享。
document.cookie = "name=value;path=/";
对于每个源（origin）sessionStorage 和 localStorage 使用不同的 Storage 对象独立运行和控制。
localStorage 没有过期时间 直到手动去除 同域名同浏览器共享一个localStorage对象 同域名不同浏览器不共享localStorage 无法被爬虫抓取到 IE8以上才支持 修改set方法和get方法设置过期时间
function write (key, data) {
    try {
        localStorage.setItem(key, data);
    } catch (e) {
        if (e.code === QUOTA_EXCEEDED_ERR_CODE) {
            localStorage.clear();
            localStorage.setItem(key, data);
        }
    }
}
 indexedDB 存文件类型的数据，localStorage 存业务数据
sessionStorage 刷新页面不失效 跳转页面删除
sessionStorage的失效机制 只有在当前页面打开的链接，才可以访sessionStorage的数据，使用window.open打开页面和改变localtion.href方式都可以获 取到sessionStorage内部的数据;
- IndexedDB 同源策略
一种底层API 浏览器提供的本地数据库 用于客户端存储大量结构化数据 文件/二进制大型对象(blobs)。
关系型数据库（不支持 SQL 查询语句），更接近 NoSQL 数据库
a、键值对储存： IndexedDB 内部采用对象仓库（object store）存放数据，所有类型的数据都可以直接存入，包括 JavaScript 对象，对象仓库中，数据以"键值对"的形式保存，每一个数据记录都有对应的主键，主键是独一无二的，不能有重复，否则会抛出一个错误
b、异步： IndexedDB 操作时不会锁死浏览器，用户依然可以进行其他操作，这与 LocalStorage 形成对比，后者的操作是同步的，异步设计是为了防止大量数据的读写，拖慢网页的表现
c、支持事务： IndexedDB 支持事务（transaction），这意味着一系列操作步骤之中，只要有一步失败，整个事务就都取消，数据库回滚到事务发生之前的状态，不存在只改写一部分数据的情况
d、同源限制：IndexedDB 受到同源限制，每一个数据库对应创建它的域名，网页只能访问自身域名下的数据库，而不能访问跨域的数据库
e、储存空间大： IndexedDB 的储存空间比 LocalStorage 大得多，一般来说不少于 250MB，甚至没有上限
f、支持二进制储存：IndexedDB 不仅可以储存字符串，还可以储存二进制数据（ArrayBuffer 对象和 Blob 对象）
var request = window.indexedDB.open('test-db');//创建并打开一个数据库
request.onsuccess = function(event) {
    var db = this.result;
    console.log(db);
};
- Web Workers
构造函数接受一个JavaScript文件URL js代码将在worker线程中运行

- 前端兼容性问题
css兼容性
1、不同浏览器标签默认margin和padding不同
2、样式兼容性问题 CSS-prefixer -webkit- -moz- -o-  CSS-Hack 属性前缀法|选择器前缀法|IE条件注释法
CSS透明度 60 0.6
怪异模式是没有遵守W3C规范 box-sizing: border-box
让chrome支持小于12px的字体
#box{
  font-size: 8px;
  -webkit-text-size-adjust: none;
}
/* 但是，上面这个方法 chrome27 以后就不能用了。但我们可以用 css3 解决这个问题 */
#box{
  font-size: 12px;
  -webkit-transform: scale(0.75);
}
画0.5px线直线 transform scaleX 12px->8px 缩放
js兼容性
1、创建XMLHttpRequest对象 new XMLHttpRequest || new ActiveXObject
2、获取事件对象 IE6/7/8只支持window.event 其他浏览器通过参数event参数传入
3、获取事件对象 IE下event.srcElement属性 其他even.target属性
4、注册事件 dom.attachEvent() dom.addEventListener()
Babel中的preset-env Polyfill 为旧浏览器提供它没有原生支持的较新的功能。

  
#### 服务器
反向代理（Reverse Proxy）方式是指以代理服务器来接受Internet上的连接请求，然后将请求转发给内部网络上的服务器；并将从服务器上得到的结果返回给Internet上请求连接的客户端，此时代理服务器对外就表现为一个服务器。
反向代理服务器对于客户端而言它就像是原始服务器，并且客户端不需要进行任何特别的设置。客户端向反向代理 的命名空间(name-space)中的内容发送普通请求，接着反向代理将判断向何处(原始服务器)转交请求，并将获得的内容返回给客户端，就像这些内容 原本就是它自己的一样。

#### http https://developer.mozilla.org/zh-CN/docs/Web/HTTP
- dns解析、建立TCP/IP连接(三次握手四次分手)、解析服务器返回文档
- 建立TCP连接的三次握手与四次挥手
网络七层协议 7应用层(文件传输协议ftp 普通文件传送协议tftp 超文本传输协议http 简单邮件传输协议smtp 简单网络管理协议snmp 远程终端协议telnet DNS HTTPS POP3 DHCP) 6表示层(没有协议) 5会话层(没有协议) 4传输层(传输控制协议tcp 用户数据报协议udp无连接的传输协议) 3网络层(互联网协议ip) 2数据链路层 1物理层
1991-http/0.9 1996-http/1.0(tcp三次握手成功只能发一个http请求) 1999-http/1.1(tcp三次握手成功后可发多个http请求) 2015-http/2
TCP就是单纯建立连接，不涉及任何请求的实际数据，http是用来收发数据
如果TCP连接保持，第二个请求发送就没有这“三次握手”的消耗。HTTP/2中同一个TCP连接里还可以并发地传输http请求。
tcp报文中的三个核心字段：序列号 确认号 标志位
sequence number seq序列号
acknowledgement number ack确认号
ack = seq + 1
flgs 标志位(urgent pointer紧急指针有效urg 确认序号有效ack 接收方应该尽快将这个报文交给应用层psh 重置连接rst 发起一个新连接syn 释放一个连接fin)
第一次握手 client -> server tcp报文中的标志位SYN seq=x
第二次握手 server -> client tcp报文中的标志位SYN+ACK seq=y ack=x+1
第三次握手 client -> server tcp报文中的标志位ACK seq=x+1 ack=y+1
第一次挥手 client -> server tcp报文中的标志位FIN seq=x
第二次挥手 server -> client tcp报文中的标志位ACK seq=y ack=x+1
第三次挥手 server -> client tcp报文中的标志位FIN+ACK seq=z ack=x+1
第四次挥手 client -> server tcp报文中的标志位ACK seq=x+1 ack=z+1
- https 443 为什么HTTPS就是安全的?HTTPS的底层原理如何实现?用了HTTPS就一定安全吗?
HTTPS = HTTP + SSL/TLS
SSL-Secure Sockets Layer安全套接层协议
TLS-Transport Layer Security传输层安全协议 它建立在SSL 3.0协议规范之上，是SSL 3.0的后续版本
HTTP请求都是明文传输 传输的内容没有经过加密
CA Certificate Authority 证书认证中心 对公钥进行认证和担保 全球知名的CA也就100多个
对称加密-私钥加密 速度快
非对称加密-公钥加密 被公钥加密过的密文只能被私钥解密 被私钥加密过的密文只能被公钥解密 速度慢
HTTPS两阶段：证书验证 数据传输
证书验证阶段：浏览器发起HTTPS请求连接服务器443端口号 服务端返回数字证书 客户端验证证书是否合法
数据传输阶段：证书验证合法后在本地生成随机数(对称加密的秘钥) 通过证书中的公钥对随机数(对称加密的秘钥)加密并传输到服务端 服务端通过私钥对随机数(对称加密的秘钥)进行解密 服务端用随机数(对称加密的秘钥)对数据进行加密后传输
certificate ca证书验证使用非对称加密 
传输的数据使用对称加密 对称加密所要使用的密钥通过非对称加密传输
浏览器是如何确保CA证书的合法性?
- http 2的新特性
服务端推送(不用等待浏览器解析html直接将关联的js和css发送) 消息头部使用HPACK压缩传输 二进制格式传输数据 多路复用(一个tcp连接可以进行多个请求)
- 3xx
301 302http/1.0(post方法非幂等性http/1.1 303 307) 304 305
307 可以被缓存，缓存时间根据 max-age 而定，一般建议缓存 1 年甚至更长。
303状态码：对于POST请求，它表示请求已经被处理，浏览器将POST转为GET请求 请求地址为header头中的Location
307状态码：对于POST请求，表示请求还没有被处理，客户端应该继续向Location里的URI重新发起POST请求。

#### 强缓存 协商缓存 https://www.jianshu.com/p/227cee9c8d15
- GET请求到的数据能被缓存 POST请求到的数据不能被缓存
- 强缓存-给资源设置个过期时间 from memory cache
浏览器请求文件，服务端就在respone header里面对该文件做了缓存配置，缓存的时间和缓存类型都由服务端控制
nginx/node/tomcat 服务器配置文件中会包含html/css/js文件的缓存配置项
缓存优先级：pragma > cache control > expires
Response Headers:{Pragma/Cache-Control/Expires}
Response Headers:{cache-control:max-age=1000000s,public} 有效期内客户端和nginx代理服务器都可以缓存该资源,强缓存有效，但用户刷新会触发重新获取
Response Headers:{cache-control:max-age=1000000s,private} 有效期内客户端可以缓存该资源；nginx代理服务器不缓存
Response Headers:{cache-control:max-age=1000000s,immutable} 有效期内强缓存有效
Response Headers:{cache-control:no-cache} 强缓存失效，协商缓存有效；
Response Headers:{cache-control:no-store} 强缓存和协商缓存失效
Expires
- 协商缓存-当强缓存失效(时间过期)时 浏览器向服务器发起请求 请求头携带第一次请求的响应头中的数据 {ETag、Last-Modified} {If-Not-Match 、If-Modified-Since} 服务器会进行比对
Response Headers:{ETag/If-Not-Match 、Last-Modified/If-Modified-Since}
设置协商缓存 etag-http1.1 last-modified-http1.0
- 不使用get缓存的方案
url参数追加时间戳 Response-Headers设置 Request-Header设置 post替换get
- e-tag生成规则 由于Last-Modified最小单位是秒存在误差
express采用etag库生成 长度-时间戳
nginx 中 etag 由响应头中的 Last-Modified 与 Content-Length ETag: "5cbee66d-264" 表示为十六进制组合而成 https://www.jianshu.com/p/b0d2deea84ac 
Last-Modified是nginx服务器读取本地静态文件属性的 修改时间

#### css
- css reset 样式重置
“覆盖”浏览器的CSS默认属性。最最简单的说法就是把浏览器提供的默认样式覆盖掉！
HTML标签在浏览器中都有默认的样式，不同的浏览器的默认样式之间存在差别 a ul image
- CSS预处理器
Sass，2007，最早最成熟的CSS预处理器，有两种语法，分别以 .sass 和 .scss 为扩展名。SCSS是Sass 3引入的新语法，完全兼容CSS3，并继承了Sass的强大功能，和CSS语法结构更接近
Less，2009，受Sass影响大，以 .less 为扩展名
Stylus，2010，来自Node.js社区，主要用来给Node项目进行CSS预处理支持，以 .styl 为扩展名
- 水平垂直居中
1、父元素text-align:center + line-height
2、子元素是图片 父元素line-height + text-align:center + font-size:0 + 子元素vertical-align:middle
table
1、父元素diaplay:table-cell + text-align:center + vertical-align:middle + 子元素display: inline-block;
2、父元素diaplay:table-cell + vertical-align:middle + 子元素display: table + margin: 0 auto
绝对定位
1、父元素position: relative + 子元素position: absolute + margin: auto + topleftbottomright:0
2、父元素position: relative + 子元素position: absolute + top:50% + left:50% + transform: translate(-50%,-50%)
3、父元素position: relative + 子元素position: absolute + top:50% + left:50% + margin-left:-50px + margin-top: -50px
flex
1、父元素display: flex + justify-content:center + align-items:center
2、父元素display: flex + 子元素margin: auto
grid
1、父元素display: grid + 子元素align-self: center + justify-self: center
2、父元素display: grid + align-content: center + justify-content: center
- <link href="/css/styles.82155efc.chunk.css" rel="stylesheet"> 和 @import url(style.css) 的区别
1、link是html标签 @import是css的语法(向css文件导入css文件)
2、link引入的文件同步加载 @import等待页面全部被下载完才加载


#### 原生js https://developer.mozilla.org/zh-CN/docs/Web/JavaScript
- defer是“渲染完再执行” async是“下载完就执行” defer会在DOMContentLoaded前依次执行
- 闭包的应用场景 dom元素绑定监听事件打印当前的值 防抖函数
- 模块化
- js无法处理超过大于16位的整数，大于16位会精度损失
JS遵循IEEE754规范，采用双精度存储（double precision），占用 64 bit
JS 中能精准表示的最大整数是 Math.pow(2, 53)，十进制即 9007199254740992
0.1+0.2 0.30000000000000004 (0.1*10+0.2*10)/10=0.3
- 判断数据类型的4种方法 https://www.cnblogs.com/yadiblogs/p/10750775.html
- Function.prototype.apply() bind call toString https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

- new做了什么
Object.prototype.__proto__ === null
function Base(){
    this.name = 'wan'
}
//Base.prototype.__proto__ === Object.prototype true
let base = new Base();
//base.__proto__ === Base.prototype true
var obj  = {};//创建一个新对象
obj.__proto__ = Base.prototype;//{constructor: ƒ} 新对象的__proto__指向构造函数的原型对象 将构造函数的作用域赋给新对象
Base.call(obj);//构造函数的this指向正在创建的新对象 执行构造函数的代码向新对象中添加属性和方法
//返回新的对象 返回新对象地址
- 计时器调度函数 JavaScript
- this的理解 
this表示当前对象，this的指向是根据调用的上下文来决定的，默认指向window对象
new指向这个新对象 箭头函数的是没有属于自己的this的
this加分项：可以用来区分全局变量和局部变量 返回函数当前的对象 将当前的对象传递到下一个函数
- es6 ES5只有全局作用域和函数作用域没有块级作用域
箭头函数：函数体内的this对象就是定义时所在的对象 不可以当作构造函数不可以使用new命令 不可以使用arguments可以用rest参数代替 不可以使用yield命令箭头函数不能用作 Generator 函数
let：不存在变量提升 暂时性死区 不允许重复声明
const:声明一个只读的常量。一旦声明，常量的值就不能改变 对于复合类型的数据指针不可变，但实际数据可以改变

- 模拟用户点击
document.body.addEventListener('click',function(){
    console.log(2);
},false);
document.body.addEventListener('click',function(){
    console.log(3);
},false);
document.body.addEventListener('click',function(){
    console.log(4);
},false);
document.body.click();

- 隐式类型转换
https://blog.csdn.net/itcast_cn/article/details/82887895
https://blog.csdn.net/qq_33120763/article/details/88296955

- 原型链继承和面向对象继承的区别

- 垃圾回收 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management
引用计数垃圾收集，无法处理循环引用的事例
标记-清除算法，2012年，从根开始（在Javascript里，根是全局对象），垃圾回收器将找到所有可以获得的对象和收集所有不能获得的对象


#### git
https://juejin.im/post/6844904191203213326#heading-0

###### defineProperty Proxy
- Object.defineProperty()  Proxy 实现监听属性的访问和修改 实现监听对象属性值的变化
Object.keys(obj).forEsach((key)=>{ Object.defineProperty(obj,key,{get(){},set(){}} })
- 监听对象属性发生变化 在set中做 触发UI渲染和DOM结构变化
defineProperty是Object的一个方法 es5 在对象上新增或编辑某个属性 重写属性的get读取和set设置 只能劫持对象的属性 进行对象读取拦截时需要对每个属性遍历
Proxy es6 入参可以是Object/Function/Array/Proxy 可以拦截get/set/has/apply/construct/deleteProperty/defineProperty/setProtogypeOf/getPrototypeOf多达13种操作 可以劫持整个对象，并返回一个新对象 最大问题在于浏览器支持度不够，而且很多效果无法使用 poilyfill 来弥补
Vue 2 数据绑定是通过 defineProperty Vue 3 数据绑定是通过 Proxy 实现的
以 Object.defineProperty() 实现的响应式有两个问题：1. 给对象新增属性并不会更新 DOM；2. 以索引的方式修改数组也不会触发 DOM 的更新。最终 Vue 是通过重写函数的方式解决了这两个问题，但对于数组的数据绑定依然有瑕疵 而这些问题，对于 Proxy 来说都不是问题

#### 前端性能优化
- 嗨，送你一张Web性能优化地图 [](https://zhuanlan.zhihu.com/p/40197752)
1、编码优化
精简HTML的代码和结构 优化CSS文件和结构 合理的放置JS代码
2、静态资源优化
图片使用iconfont
webpack使用url-loader减少http请求数量，将html和css中的图片大于10kb转化为base64
- 构建优化：
减少静态资源的体积 css和js分离、代码压缩混淆、图片处理(小于10kb转化为base64)、
DllPlugin(DLLPlugin 和 DLLReferencePlugin 用某种方法实现了拆分 bundles，同时还大大提升了构建的速度。)
react分离出来不打包通过script标签静态引入到html中从cdn获取、多进程打包
- 运维：静态资源cdn加速、nginx配置浏览器缓存策略、多域名(单个域名资源最多允许同时加载10个资源)
- 后端：优化接口(小接口合并成大接口、类似接口增加类型合并)、接口缓存、get缓存
- 前端：
缩短首屏加载时间、ssr、骨架屏、预加载下一个页面数据
React.lazy 组件懒加载 按需加载 从路由层面控制
- 计算机网络 减少HTTP请求
- 数据算法
- 图形图像处理
- 浏览器渲染 减少重绘和重排
- 使用过程中 减少DOM操作、减少重排
- 编码优化 运行时性能
- css 性能优化8个技巧：内联首屏关键CSS、 异步加载CSS、文件容量压缩减少浏览器的加载时间、去除无用CSS、有选择地使用选择器、减少使用昂贵的属性、优化重排与重绘、不要使用@import

#### 前端监控系统 用户行为监控 js运行
https://blog.csdn.net/weixin_42284354/article/details/80416157
http://fex.baidu.com/blog/2014/05/front_end-data/
http://fex.baidu.com/blog/2014/05/build-performance-monitor-in-7-days/
http://www.alloyteam.com/2014/03/front-end-data-monitoring/
http://www.alloyteam.com/2016/01/points-about-resource-loading/
Google Analytic-代码监控
webpageTest-工具监控 不用将统计代码部署到页面中，一般依托于虚拟机，给出各种性能指标：瀑布流、静态文件数量、首屏渲染时间
前端性能监控指标：
白屏时间：从打开网站到有内容渲染出来的时间节点；dns查询、建立tcp连接、发送首个http请求（如果使用https还要介入TLS的验证时间）、返回html文档、html文档head解析完毕
首屏时间：首屏内容渲染完毕的时间节点；
用户可操作时间节点：dom ready触发节点；
总下载时间：window.onload的触发节点。
收集html5-performance信息 window.performance
收集脚本执行错误 JavaScript代码异常监控 try…catch捕获 和 window.onerror捕获
统计每个页面的JS和CSS加载时间
```html
<script>var cssLoadStart = +new Date</script>
<link rel="stylesheet" href="xxx.css" type="text/css" media="all">
<link rel="stylesheet" href="xxx1.css" type="text/css" media="all">
<link rel="stylesheet" href="xxx2.css" type="text/css" media="all">
<sript>
   var cssLoadTime = (+new Date) - cssLoadStart;
   var jsLoadStart = +new Date;
</script>
<script type="text/javascript" src="xx1.js"></script>
<script type="text/javascript" src="xx2.js"></script>
<script type="text/javascript" src="xx3.js"></script>
<script>
   var jsLoadTime = (+new Date) - jsLoadStart;
   var REPORT_URL = 'xxx/cgi?data='
   var img = new Image;
   img.onload = img.onerror = function(){
      img = null;
   };
   img.src = REPORT_URL + cssLoadTime + '-' + jsLoadTime;
</script>
```


#### 模块规范
- commonjs和es6模块规范区别
this指向 输出方式 加载内容(全部 部分) 加载时机 导入的读写属性 值的变化
- Commonjs node Jest webpack的配置文件
const stuff = require('./a.js') require方法node和es6都支持的引入方式
module.exports = status;
module.exports = { obj,plusCount } 返回的是模块对象本身 类
exports.status = false
exports.fun = function(){} 返回的是模块函数
exports === module.exports exports只是module.exports的引用
1、值的拷贝(可读可写 可以重新赋值) 即原来模块中的值改变不会影响已经加载的值
2、运行时加载模块
3、模块都被视作一个对象 当使用require命令加载某个模块时 会运行整个模块的代码 当第二次用require命令加载同一个模块时 不会再执行该模块 而是取到缓存之中的值
4、this 指向当前模块
- es2015
const stuff = require('./a.js') require方法node和es6都支持的引入方式
import stuff from './stuff';
import {a,b} from './stuff';
export default stuff; 仅有一个
export function test(){};
export {a,b}
1、值的引用(只读 不可重新赋值) 即原来模块中的值改变会影响已经加载的值
2、编译时加载模块
3、模块是不对象 可以单独导入模块中部分属性和方法
4、this 指向undefined
- CMD AMD 最早的模块规范已弃用
CMD依赖就近 服务器端
define(function(require, exports, module) {var a = require('./a');a.doSomething();var b = require('./b');b.doSomething()})
AMD依赖前置 浏览器端
define(['./a', './b'], function(a, b) {a.doSomething();b.doSomething()})

#### 工程化 https://www.zhihu.com/question/24558375
前端工程化是前端架构中重要的一环，包括模块化、组件化、规范化、自动化
1、模块化 在文件层面上，对代码或资源的拆分
将一个大文件拆分成相互依赖的小文件，再进行统一的拼装和加载 为了多人协作
js 模块化 ES6Module-静态加载的特性 CommonJS AMD CMD
CSS模块化
资源模块化 依赖关系单一化 资源处理集成 项目结构清晰化
2、组件化 在设计层面上，对UI（用户界面）的拆分
每个组件包含模板(HTML)+样式(CSS)+逻辑(JS)完备功能
3、规范化
目录结构的制定 编码规范(ESLint和StyleLint 配置git-hooks Lint不过 不能提交代码) 前后端接口规范(前后端接口管理平台) 文档规范 组件管理 Git分支管理 Commit描述规范 定期CodeRevie 视觉图标规范
4、自动化
Webpack图标合并 持续集成 自动化构建 自动化部署 自动化测试

- CICD 改变了开发人员和测试人员如何发布软件 https://blog.csdn.net/weixin_44903147/article/details/96291588
持续集成的重点是将各个开发人员的工作集合到一个代码仓库中。通常，每天都要进行几次，主要目的是尽早发现集成错误，使团队更加紧密结合，更好地协作。
持续交付的目的是最小化部署或释放过程中固有的摩擦。它的实现通常能够将构建部署的每个步骤自动化，以便任何时刻能够安全地完成代码发布（理想情况下）。
持续部署是一种更高程度的自动化，无论何时对代码进行重大更改，都会自动进行构建/部署。
- Devops https://www.jianshu.com/p/c5d002cf25b9

#### babel
"presets" "env" "modules": false
babel就不会吧import形式转变成require形式。为webpack进行tree-shaking创造了条件。

#### webpack
- 你用过webpack哪些功能
打包分为三种模式 none develop production

- production模式优化
https://blog.csdn.net/u012961419/article/details/107093974
- 打包过程分为哪些环节 https://www.cnblogs.com/sylys/p/11803986.html
https://webpack.docschina.org/configuration/optimization/
https://webpack.docschina.org/guides/lazy-loading/
- 打包原理和过程
分析代码 转换代码 编译代码 输出代码
- 基本配置
entry output devtool devServer plugins mode module-rules-test/use
- loader和plugin
编写一个 loader https://www.webpackjs.com/contribute/writing-a-loader/
编写一个插件 https://www.webpackjs.com/contribute/writing-a-plugin/
loader，文件加载器，转换器，将A文件进行编译形成B文件，操作的是文件，将A.scss转换为A.css，单纯的文件转换过程
plugin，扩展器，不直接操作文件，监听webpack打包的整个过程，某些节点执行广泛的任务 CleanWebpackPlugin删除dist目录 HtmlWebpackPlugin重新创建html文件
自己手写一个loader 
- loader 加载顺序 从右向左 从下向上
webpack选择了函数式编程的方式
Webpack选择了compose方式，而不是pipe的方式而已，在技术上实现从左往右也不会有难度
compose : require("style-loader!css-loader!sass-loader!./my-styles.sass");
pipe : require("./my-styles.sass!sass-loader!css-loader!style-loader");
- css-loader只是帮我们解析了css文件里面的css代码 
- style-loader就是帮我们直接将css-loader解析后的内容挂载到html页面当中

- 代码分离 拆包 splitChunks dll
1、多入口打包 将没有无关系(没有互相引用)的两个js模块独立打包 运行时并行加载 这种方式相比较于加载一个等价大小的js模块有速度上的提升。
2、避免重复
splitChunks配置方案：optimization-splitChunks || plugins-[new SplitChunksPlugin({optimization:{splitChunks:{...}}})]
3、css单独打包
require('mini-css-extract-plugin')
plugins: [new MiniCssExtractPlugin()],
module:{rules:[{test: /\.css$/i,use: [MiniCssExtractPlugin.loader, 'css-loader']}]}
4、动态导入
import()   //ES的提案，返回以一个promise，导入的模块在then中拿到
require.ensure()  //webpack在编译时会静态地解析代码中的require.ensure()，将里面require的模块添加到一个分开的chunk中。这个新chunk会被webpack通过jsonp来按需加载。
5、react包拆分
optimization-splitChunks-chunks:all

- Tree Shaking 摇树优化
开启方式：production默认开启 
1、移除es6模块代码中JavaScript上下文中的未引用代码(dead-code)
2、Tree-shaking只对ES6模块规范有效 对commonjs和umd无效 因为tree-shaking是针对静态结构进行分析 只有import和export是静态的导入和导出 commonjs的require('foo')和exports.baz是动态导入和导出
3、babel编译默认将ES模块转换为commonjs，需要配置.babelrc的presets-[{module:false}] 和 package.json的{sideEffects: false}才可以进行tree-shaking
4、rollup的tree-shaking比webpack的要强一些
5、webpack4在生产模式production默认开启tree-shaking mode:production
6、非production模式开启tree-shaking需要配置optimization-usedExports:true && minimize:true(告知webpack使用TerserPlugin 或者 在optimization.minimizer定义的插件压缩bundle optimization-minimizer-[new TerserPlugin({...})]) 
8、全局js和css需要添加到白名单 具有副作用的文件不应该做tree-shaking
package.json sideEffects-true 所有的文件都有副作用 没有一个文件可以 tree-shaking
package.json sideEffects-false 告诉Webpack没有文件有副作用 所有文件都可以 tree-shaking
package.json sideEffects-['a.js','b.css'] 除了数组中指定的文件外 其他文件都可以tree-shaking
9、对全局css设置白名单的另一种方案
module-rules-[{test: /regex/,use: [loaders],sideEffects: true}]
https://blog.csdn.net/u012961419/article/details/107093974
https://www.cnblogs.com/lzkwin/p/11878509.html
https://blog.csdn.net/HaoDaWang/article/details/77199980

- Scope Hoisting
concatenateModules: true
作用域提升 既提升了运行效率又减少了代码的体积 尽可能的将所有模块合并输出到一个函数中

- 提升打包速度

- output.publicPath 按需加载(on-demand-load)或加载外部资源(external resources)的地址 https://webpack.docschina.org/configuration/output/#outputpublicpath

- plugin webpack 插件是一个具有 apply 属性的 JavaScript 对象。apply属性会被 webpack compiler 调用，并且 compiler 对象可在整个编译生命周期访问。通过Function.prototype.apply方法，你可以把任意函数作为插件传递(this 将指向compiler)。我们可以在配置中使用这样的方式来内联自定义插件。

#### js 设计模式
- 学习设计模式，有助于写出可复用和可维护性高的程序。设计模式的原则是“找出 程序中变化的地方，并将变化封装起来”，它的关键是意图，而不是结构。
- 三大类设计模式 https://www.cnblogs.com/panrui1994/p/9402831.html https://www.runoob.com/design-pattern/prototype-pattern.html
创建型，如何创建对象：简单工厂模式、工厂方法、抽象工厂模式、建造者模式、单例模式
结构型，如何将零散的类和对象组合成为更强大的结构：适配器模式、桥接模式、装饰模式、外观模式、享元模式、代理模式
行为型，类与对象之间的行为分配：命令模式、中介者模式、观察者模式、状态模式、策略模式
- 单例模式 一个类只有一个实例, 并且提供一个全局访问的方法
- 工厂模式
- 代理模式 为一个对象提供一个代用品或占位符，以便控制对它的访问
- 观察者模式 发布-订阅模式 定义了对象间的一种一对多的依赖关系，当一个对象的状态发 生改变时，所有依赖于它的对象都将得到通知
webpack 的事件流机制应用了观察者模式，和 Node.js 中的 EventEmitter 非常相似
绑定 compiler.plugin('event-name', params => {});
触发 compiler.apply('event-name',params)

#### 语言层面
- call apply bind

#### react
- 源码
- 优化 React.lazy() Suspense组件中 基于路由的代码分割
- 虚拟dom工作原理 底层数据发生改变时UI都将在Virtual DOM描述中重新渲染、计算 DOM 前后差异、完成计算后将实际更改的内容更新
- this.setState({},()=>{}) 原理 更新组件的状态 有时候同步有时异步
由React控制的事件处理程序，以及生命周期函数调用setState不会同步更新state 。大部分开发中用到的都是React封装的事件，比如onChange、onClick、onTouchMove等，这些事件处理程序中的setState都是异步处理的。React控制之外的事件中调用setState是同步更新的。比如原生js绑定的事件，setTimeout/setInterval等。
- 生命周期三阶段 初始渲染阶段、更新阶段、卸载阶段
- 合成事件 原生事件
- refs
- 高阶组件（HOC）HOC 是“纯（Pure）”组件 重用组件逻辑的高级方法  HOC是自定义组件，在它之内包含另一个组件。
代码重用，逻辑和引导抽象
渲染劫持
状态抽象和控制
Props 控制
- 纯（Pure） 组件是可以编写的最简单、最快的组件。它们可以替换任何只有 render() 的组件。这些组件增强了代码的简单性和应用的性能。
- key 用于识别唯一的 Virtual DOM 元素及其驱动 UI 的相应数据。它们通过回收 DOM 中当前所有的元素来帮助 React 优化渲染。
- 无状态组件就是一个单纯的render函数
- 纯组件是通过控制shouldComponentUpdate生命周期函数，减少render调用次数来减少性能损耗的。
- React.Fiber 异步渲染ui的解决方案 window.requestIdleCallback() 在浏览器空闲时，让开发者在主事件循环中执行后台或低优先级的任务，而且不会对像动画和用户交互这样延迟触发的关键事件产生影响。函数一般会按先进先调用的顺序执行，除非函数在被浏览器调用之前的等待时间，超过了它的超时时间。
- ref={'Timer'} this.refs.Timer.stopTime() 获取自定义组件的实例
- Context
谨慎使用，因为Context会使得组件的复用性变差。
使用context可以避免通过中间元素传递props 无需为每层组件手动添加props，就能在组件树间进行数据传递的方法。Context设计目的是为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言。Context提供了一种在组件之间共享某些属性的方式，而不必显式地通过组件树的逐层传递 props。
顶层类创建 NameContext=React.createContext('wanshaobo') 注册 NameContext.Provider
子组件使用Context的三种方式 static contextType = NameContext; MyClass.contextType = NameContext; <NameContext.Consumer>{value => {console.log(value,2)}}</NameContext.Consumer>

- 组件间复用状态逻辑
高阶组件
render props
自定义 Hook 可以让你在不增加组件的情况下达到同样的目的

- hooks 在不编写class(组件)的情况下使用state以及其他的React特性。Hook 解决的问题 组件间复用状态逻辑很难
import React, { useState,useEffect,useContext,useReducer,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue  } from 'react';
使用规则 只能在函数最外层调用Hook 只能在React的函数组件中调用Hook
const [count, setCount] = useState(0);
useEffect(() => {document.title = `You clicked ${count} times`;return func});// 函数体在componentDidMount和componentDidUpdate执行时触发 返回值会在组件销毁componentWillUnmount时执行

- diff算法和三种优化策略
react为追求性能的极致，采用了虚拟dom，本身是一个js对象。创建一个对象的开销比创建一个dom节点的开销小很多。
diff算法是调和的具体实现 调和 将虚拟dom树转换成真实dom树的最少操作的过程 针对不同情况，diff算法有三种优化策略
树的优化策略 分层求异 tree diff 虚拟DOM树分层比较 只对同层节点比较 当根节点不一致时，销毁旧节点及其所有子节点，组件实例将执行componentWillUnmount()方法 创建新节点，组件实例将执行componentWillMount()和componentDidMount()
组件的优化策略 相同类生成相似树形结构，不同类生成不同树形结构 component diff 组件间的比较 如果是同类型组件，组件实例保持不变，只更新该组件实例的属性(style className func) 如果是不同类型组件，按照tree diff执行
元素的优化策略 设置唯一key element diff 递归DOM节点的子元素 基于唯一标识key进行 插入 移动 删除

- 受控组件的数据存储在react组件的state中 非受控组件的数据通过ref从DOM节点中获取 非受控组件<input defaultValue="Bob" type="text" ref={this.input} />默认值通过defaultValue设定
- 高阶组件
https://riptutorial.com/zh-CN/reactjs/example/30238/%E7%94%A8%E4%BA%8E%E6%A3%80%E6%9F%A5%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81%E7%9A%84%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6

- react-router-dom
BrowserRouter H5的history API，IE9及以下不兼容，需要由web server支持
HashRouter URL的hash，不需要由web server支持

- 优化Refs(Refs用于获取DOM节点或React组件实例)
在react中设置refs的四种方案(前三种用于类组件，第四种用于函数组件)：
1、字符串res，已废弃
<input ref={'textInput'} /> this.refs.textInput访问DOM节点
2、回调 Ref，更精细地控制何时 refs 被设置和解除。React 将在组件挂载时，会调用 ref 回调函数并传入 DOM 元素，当卸载时调用它并传入 null。
3、React.createRef()，React 16.3 版本引入
this.myRef = React.createRef(); this.myRef.current访问DOM节点
<div ref={this.myRef} />;
4、useRef
const textInput = useRef(null);
<input type="text" ref={textInput} />

- Fiber
协调引擎。它的主要目的是使 Virtual DOM 可以进行增量式渲染


#### 代码分离
- https://webpack.docschina.org/guides/code-splitting/
- https://zh-hans.reactjs.org/docs/code-splitting.html#reactlazy

#### 前言技术探索
- node
- ts https://www.runoob.com/typescript/ts-tutorial.html
- electron

#### 函数式编程
函数作为第一类对象，是一种强调以函数使用为主的软件开发风格
HOF Higher-order-function 高阶函数 操作其它函数的函数，有两种情况：实参(回调函数)是函数；返回值是函数

#### 移动端适配 
- 静态设置 html{font-size:16px} 比较笨拙 1rem=16px;
- JS实时监听屏幕大小变化，通过实时计算来实现比例的转换
- 通过postcss插件postcss-adaptive 和 webpack 配置一劳永逸解决px2rem问题
- 通过webpack 插件 px2rem来实现转换
- 移动端1px像素问题 仅仅对border造成困扰？ UI设计师要求的1px是指设备的物理像素1px，而CSS里记录的像素是逻辑像素，它们之间存在一个比例关系，通常可以用 javascript 中的 window.devicePixelRatio 来获取，也可以用媒体查询的 -webkit-min-device-pixel-ratio 来获取。当然，比例多少与设备相关。
devicePixelRatio = 1 1px的边框在会显示成1px
devicePixelRatio = 2 1px的边框在会显示成2px
devicePixelRatio = 3 1px的边框在会显示成3px
方案一 IOS8+ 媒体查询解决方案
.border { border: 1px solid #999 }
@media screen and (-webkit-min-device-pixel-ratio: 2) {
    .border { border: 0.5px solid #999 }
}
@media screen and (-webkit-min-device-pixel-ratio: 3) {
    .border { border: 0.333333px solid #999 }
}
if (window.devicePixelRatio && devicePixelRatio >= 2) {
    var main = document.getElementById('main');
    main.style.border = '.5px solid #000000';
}
方案二 viewport + rem + js
<meta name="viewport" id="WebViewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
var viewport = document.querySelector("meta[name=viewport]")
if (window.devicePixelRatio == 1) {
    viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no')
} 
if (window.devicePixelRatio == 2) {
    viewport.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no')
} 
if (window.devicePixelRatio == 3) {
    viewport.setAttribute('content', 'width=device-width, initial-scale=0.333333333, maximum-scale=0.333333333, minimum-scale=0.333333333, user-scalable=no')
} 
var html = document.documentElement;
html.style.fontSize = (html.clientWidth / 375) + 'px';//UI搞 12px = css 12rem
方案三 伪元素 + transform: scale(0.5)
原先元素的 border 去掉，然后利用 :before 或者 :after 重做 border ，并 transform 的 scale 缩小一半，原先的元素相对定位，新做的 border 绝对定位。
.border-1px:after {
    content: '';
    position: absolute;
    box-sizing: border-box;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    border: 1px solid #000;
    border-radius: 4px;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-transform-origin: top left;
}
方案四 媒体查询+transform
/* 2倍屏 */
@media only screen and (-webkit-min-device-pixel-ratio: 2.0) {
    .border-bottom::after {
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
    }
}

/* 3倍屏 */
@media only screen and (-webkit-min-device-pixel-ratio: 3.0) {
    .border-bottom::after {
        -webkit-transform: scaleY(0.33);
        transform: scaleY(0.33);
    }
}



#### 响应式布局
当屏幕宽度小css使用rem 当屏幕宽度大css使用px

#### 管理经验
- 团队协作 跨团队沟通能力 推进项目前行
- 绩效考核制度
- 需求分配 平衡团队内部发展
- 引领团队技术发展 向原理和源码方向深入学习

#### 工作中的优缺点
- 优点 基础扎实 编码能力强 务实 正直 沟通能力 学习能力 总结能力 探索和钻研能力
- 缺点 

react高阶组件的应用实例
架构设计的时候 classComponent functionComponent

#### 数据结构
- 链表 https://www.cnblogs.com/songliquan/p/13064588.html

#### react和vue对比
https://cn.vuejs.org/v2/guide/comparison.html

小程序双线程
webpack生命周期
webpack打包流程
webpack打包原理
js bridge
js 垃圾回收