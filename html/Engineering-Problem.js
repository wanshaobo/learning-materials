//1、移动端键盘遮住输入框的解决方案
window.onload = function(){
	setTimeout(function(){
		window.scrollTo(0,document.body.clientHeight);
	}, 500);
}
$(function() {
	$('input').on('click', function () {
		var target = this;
		setTimeout(function(){// 使用定时器是为了让输入框上滑时更加自然
			target.scrollIntoView(true);
		},100);
	});
})

//2、点击穿透原理及解决
// https://blog.csdn.net/qq_17746623/article/details/55805425

//3、canvas放置图片，canvas转化为图片 用canvas的toDataURL()将图片转为dataURL(base64)
//https://www.jianshu.com/p/17d7e5ddf10a
//dataURL 的语法 data:[<mediatype>][;base64],<data>
var src="data:image/gif;base64,R0lGODdhMAAwAPAAAAAAAP///ywAAAAAMAAwAAAC8IyPqcvt3wCcDkiLc7C0qwyGHhSWpjQu5yqmCYsapyuvUUlvONmOZtfzgFzByTB10QgxOR0TqBQejhRNzOfkVJ+5YiUqrXF5Y5lKh/DeuNcP5yLWGsEbtLiOSpa/TPg7JpJHxyendzWTBfX0cxOnKPjgBzi4diinWGdkF8kjdfnycQZXZeYGejmJlZeGl9i2icVqaNVailT6F5iJ90m6mvuTS4OK05M0vDk0Q4XUtwvKOzrcd3iq9uisF81M1OIcR7lEewwcLp7tuNNkM3uNna3F2JQFo97Vriy/Xl4/f1cf5VWzXyym7PHhhx4dbgYKAAA7";
//<img>是可以的，并且可以被绘制到<canvas>中，而<canvas>正巧拥有.toDataURL()方法。
//我们只需要把<img>获取到的图片放到<canvas>里再通过.toDataURL()方法转化下，就可以得到以 base64 编码的 dataURL
function getBase64(url,callback){
	//通过构造函数来创建的 img 实例，在赋予 src 值后就会立刻下载图片，相比 createElement() 创建 <img> 省去了 append()，也就避免了文档冗余和污染
	var Img = new Image(), dataURL='';
	Img.src=url;
	Img.onload=function(){ //要先确保图片完整获取到，这是个异步事件
		var canvas = document.createElement("canvas"), //创建canvas元素
			width=Img.width, //确保canvas的尺寸和图片一样
			height=Img.height;
		canvas.width=width;
		canvas.height=height;
		canvas.getContext("2d").drawImage(Img,0,0,width,height); //将图片绘制到canvas中
		dataURL=canvas.toDataURL('image/jpeg'); //转换图片为dataURL
		callback ? callback(dataURL) : null; //调用回调函数
	};
}
getBase64('//upload.jianshu.io/users/upload_avatars/555630/fdd1b798e6b0.jpg',(dataURL)=>{
	console.log(dataURL);
});

//4、flex布局 https://www.cnblogs.com/shixy1617/p/7569565.html
//父元素 display 属性规定元素应该生成的框的类型。 block块级元素 https://www.cnblogs.com/zhongfufen/p/6424189.html flex兼容性
//flex-direction 决定主轴的方向 row/row-reverse/column/column-reverse
//flex-wrap 项目排列方式 wrap/nowrap/wrap-reverse
//justify-content 主轴的对齐方式 flex-start/flex-end/center/space-between/space-around
//align-items 交叉轴上如何对齐 flex-start/flex-end/center/baseline/stretch   * baseline: 项目的第一行文字的基线对齐。 stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度
//align-content 定义多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。flex-start/flex-end/center/space-between/space-around/stretch
//子元素
//.item{order:1} 定义项目的排列顺序。数值越小，排列越靠前，默认为0。
//.item{flex-grow:<number>} 定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
//.item{flex-shrink:<number>/*default 1*/} 定义项目的缩小比例，默认为1，即如果空间不足，该项目将缩小
//.item{flex-basis:length/*default auto*/}定义在分配多余空间之前，项目占据的主轴空间（main size）
//.item{flex:none} 是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。 该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。 flex 属性用于设置或检索弹性盒模型对象的子元素如何分配空间。
//.item { align-self: auto | flex-start | flex-end | center | baseline | stretch; }允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

//5、Javascript异步编程方法 https://www.cnblogs.com/nullcc/p/5841182.html
//回调函数
function callback(){
	console.log(1);
}
setTimeout(callback,1000)
//事件监听
document.getElementById("btn").onclick = callback//传统事件绑定方法 DOM0
var dom = document.getElementById('id')
dom.addEventListener('click',callback,false);//addEventListener() DOM2
dom.attachEvent('onclick',callback);//attachEvent是 IE 有的方法，它不遵循W3C标准
//发布/订阅
var EventEmitter = require('events');
var emitter = new EventEmitter();
emitter.on('eventType',callback);
emitter.emit('eventType', "message for you");
//Promise
new Promise((resolve,reject)=>{setTimeout(resolve,1000,'hehe')}).then(param => console.log(param))
//原生js实现Promise 只能处理同步
function _Promise(){
	this.status = 'pending';
	this.msg = 'none';
	var self = this;
	var process = arguments[0];
	process(function(){
		self.status = 'resolve';
		self.msg = arguments[0];
	},function(){
		self.status = 'reject';
		self.msg = arguments[0];
	});
	return this;
}
_Promise.prototype.then = function(){
	if(this.status == 'resolve'){
		arguments[0](this.msg);
	}else if(this.status == 'reject'&& arguments[1]){
		arguments[1](this.msg);
	}
}
new _Promise(function(resolve,reject){resolve(123)}).then(function(msg){
	console.log(msg);
	console.log('success');
},function(msg){
	console.log(msg);
	console.log('fail!');
});
//原生js实现Promise 可以处理同步和异步
function _Promise(){
	this.status = 'pending';
	this.statusSave = [];
	this.msg = 'none';
	var self = this;
	var executor = arguments[0];
	executor(function(){
		var success = arguments[0]
		self.status = 'resolved';
		self.msg = success;
		for (const { resolve } of self.statusSave) {
			resolve(success);
		}
	},function(){
		var err = arguments[0];
		self.status = 'rejected';
		self.msg = err;
		for (const { reject } of self.statusSave) {
			reject(err);
		}
	});
	// return this;
}
_Promise.prototype.then = function(){
	var resolve = arguments[0];
	var reject = arguments[1];
	if(this.status == 'resolved'){
		resolve(this.msg);
	}else if(this.status == 'rejected'&& reject){
		reject(this.msg);
	}else{
		this.statusSave.push({resolve,reject})
	}
}
new _Promise((resolve,reject) => {setTimeout(resolve,1000,'he')}).then(function(msg){
	console.log(msg);
	console.log('success');
},function(msg){
	console.log(msg);
	console.log('fail!');
});
//Generator“生成器”函数(协程coroutine)
// 调用 Generator 函数，返回一个遍历器对象，代表 Generator 函数的内部指针
// 以后，每次调用遍历器对象的next方法，就会返回一个有着value和done两个属性的对象。
// ES 7:* async和await
async function getItem(){
	await new Promise((resolve) => {setTimeout(resolve, 2000);});
	console.log(1);
	return 2 //return语句触发async的then回调
}
//async返回promise对象，需要用then回调接收async函数的return值
getItem().then((value)=>{
	console.log(value);
})

//6、异步并发  多个异步的操作方案
Promise.all([new Promise(), new Promise(), new Promise()]).then();

//7、js自定义方法 ImgLoader多图片预加载 https://blog.csdn.net/zeping891103/article/details/72649718
function ImgLoader(){
	this.img = new Object();
	this.eventTarget = new Object();
	this.COMPLETE = "COMPLETE";
	this.PROGRESS = "PROGRESS";
	this.ERROR = "ERROR";
}
ImgLoader.prototype.on = function(eventsName,cb){
	this.eventTarget[eventsName] = cb
}
ImgLoader.prototype.load = function(imgUrl){
	var img = new Image();
	this.img[url] = img;
	img.onload = this.imgLoadedHandle.bind(this);
	img.onerror = this.imgErrorHandle.bind(this);
	img.src = imgUrl;
}
ImgLoader.prototype.imgLoadedHandle = function(){
	this.response = {};//{target:{msg:'',data:''},type:{}}
	this.response.target = {};
	this.response.type = this.PROGRESS;
	this.response.target.msg = "加载中！";
	this.response.target.data = 1;
	this.trigger(this.PROGRESS, this.response);
	// 抛出加载成功事件
	this.response.type = this.COMPLETE;
	this.response.target.msg = "加载成功！";
	this.response.target.data = this.img;
	this.trigger(this.COMPLETE, this.response);
}
ImgLoader.prototype.imgErrorHandle = function(evt){
	this.response = {};
	this.response.target = {};
	this.response.type = this.ERROR;
	this.response.target.msg = "加载失败！";
	this.response.target.data = evt.target.src;
	this.trigger(this.ERROR, this.response);
}
ImgLoader.prototype.trigger = function(event,params){
	for(var eventType in this.eventTarget) {
		var callback = this.eventTarget[eventType];
		if(eventType == event) {
			callback(params);
			break;
		}
	}
}
//实例
var imgUrl = "images/1.png";
function eventHandler(response){
	var type = response.type;
	switch (type){
		case "COMPLETE":
			break;
		case "PROGRESS":
			break;
		case "ERROR":
			break;
		default:
			break;
	}
}
var loader = new ImgLoader();
loader.on("COMPLETE",eventHandler);
loader.on("PROGRESS",eventHandler);
loader.on("ERROR",eventHandler);
loader.load(imgUrl);

//8、http cookie
//服务端操作cookie
// 不同域名的Cookie是不能互相访问的
public void setCookie(HttpServletRequest request, HttpServletResponse response, String key,String value) {
    Cookie cookie = new Cookie(key, value);// 创建一个cookie，cookie的名字是key
    cookie.setDomain(request.getServerName());
    cookie.setPath(request.getContextPath());
    // 设置Cookie的有效期
    cookie.setMaxAge(Constants.cookieMaxAge);
    // cookie.setHttpOnly(true);//true 服务器写入了cookie,客户端取不到cookie。
    // 将cookie对象添加到response对象中，这样服务器在输出response对象中的内容时就会把cookie也输出到客户端浏览器
    response.addCookie(cookie);
}
/*
Cookie的主要构成如下：
name:一个唯一确定的cookie名称。通常来讲cookie的名称是不区分大小写的。
value:存储在cookie中的字符串值。最好为cookie的name和value进行url编码
domain:cookie对于哪个域是有效的。所有向该域发送的请求中都会包含这个cookie信息。这个值可以包含子域(如：yq.aliyun.com)，也可以不包含它(如：.aliyun.com，则对于aliyun.com的所有子域都有效).
path: 表示这个cookie影响到的路径，浏览器跟会根据这项配置，像指定域中匹配的路径发送cookie。
expires:失效时间，表示cookie何时应该被删除的时间戳(也就是，何时应该停止向服务器发送这个cookie)。如果不设置这个时间戳，浏览器会在页面关闭时即将删除所有cookie；不过也可以自己设置删除时间。这个值是GMT时间格式，如果客户端和服务器端时间不一致，使用expires就会存在偏差。
max-age: 与expires作用相同，用来告诉浏览器此cookie多久过期（单位是秒），而不是一个固定的时间点。正常情况下，max-age的优先级高于expires。
HttpOnly: 告知浏览器不允许通过脚本document.cookie去更改这个值，同样这个值在document.cookie中也不可见。但在http请求张仍然会携带这个cookie。注意这个值虽然在脚本中不可获取，但仍然在浏览器安装目录中以文件形式存在。这项设置通常在服务器端设置。
secure: 安全标志，指定后，只有在使用SSL链接时候才能发送到服务器，如果是http链接则不会传递该信息。就算设置了secure 属性也并不代表他人不能看到你机器本地保存的 cookie 信息，所以不要把重要信息放cookie就对了

如果不设置expires和max-age浏览器会在页面关闭时清空cookie

客户端cookie：
有大小和个数的限制 50个4Kb
有生命周期
满足同源策略

 document.cookie="name="+username;
 document.cookie.split(";")[0].split("=")[1];
 document.cookie= name + "="+cval+";expires="+exp.toGMTString();
*/


//9、http 302的过程 http方法有哪些，异同点
/*
 1	GET	请求指定的页面信息，并返回实体主体。
 2	HEAD	类似于get请求，只不过返回的响应中没有具体的内容，用于获取报头
 3	POST	向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。POST请求可能会导致新的资源的建立和/或已有资源的修改。
 4	PUT	从客户端向服务器传送的数据取代指定的文档的内容。
 5	DELETE	请求服务器删除指定的页面。
 6	CONNECT	HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器。
 7	OPTIONS	允许客户端查看服务器的性能。
 8	TRACE	回显服务器收到的请求，主要用于测试或诊断。

*/

//10、跨域
/*
 https://segmentfault.com/a/1190000011145364
 1、 通过jsonp跨域
 2、 document.domain + iframe跨域
 3、 location.hash + iframe
 4、 window.name + iframe跨域
 5、 postMessage跨域
 6、 跨域资源共享（CORS）
 7、 nginx代理跨域
 8、 nodejs中间件代理跨域
 9、 WebSocket协议跨域

jsonp cors WebSocket postMessage

 postMessage是HTML5 XMLHttpRequest Level 2中的API，且是为数不多可以跨域操作的window属性之一，它可用于解决以下方面的问题
 页面和其打开的新窗口的数据传递
 多窗口之间消息传递
 页面与嵌套的iframe消息传递
 上面三个场景的跨域数据传递

解决跨域方案，CORS-cross origin resource sharing，即服务器设置响应头：
请求头 request.header{
 Origin: http://www.wanshaobo.com/
}
响应头 response.header{
Access-Control-Allow-Origin:http://www.wanshaobo.com/ //允许跨域访问的源 * 支持全域名访问，不安全，部署后需要固定限制为客户端网址
Access-Control-Allow-Methods:GET, POST, HEAD, PUT, DELETE //限制允许跨域访问的http方法类型，多个以逗号隔开
Access-Control-Allow-Headers: Origin,Content-Type,Accept,token,X-Requested-With //限制允许跨域访问的http头，包含这里设置的头，才允许跨域访问 比如

Access-Control-Allow-Credentials:true
}

CORS可以分成两种：简单请求 复杂请求
一个简单的请求大致如下：
HTTP方法是下列之一:HEAD GET POST
HTTP头包含:
Accept
Accept-Language
Content-Language
Last-Event-ID
Content-Type，但仅能是下列之一
    application/x-www-form-urlencoded
    multipart/form-data
    text/plain
任何一个不满足上述要求的请求，即被认为是复杂请求。一个复杂请求不仅有包含通信内容的请求，同时也包含预请求（preflight request）。


*/

//11  cache相关 缓存 http缓存
/*
http://www.cnblogs.com/dreamingbaobei/p/9804445.html
注意，我们讨论的所有关于缓存资源的问题，都仅仅针对GET请求。而对于POST, DELETE, PUT这类行为性操作通常不做任何缓存
浏览器缓存机制
200 from cache
304 not modified

meta语法，组织浏览器缓存
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Cache-Control" content="no-cache">
<meta http-equiv="Expires" content="0">

清除缓存方案一：随机数法 在你的所有静态资源文件后面添加随机时间戳
<script type="text/javascript" src="https://resources.test.com/js/test.js?version=56965"></script>
<script type=”text/javascript“ src=”/js/test.js?+Math.random()“></script>

清除缓存方案二：cache-control
<meta name="Cache-Control" content="no-cache">

响应头 Cache-Control 用来指导浏览器如何管理缓存
Etag是服务端对不同的文件通过固定的算法生成的一个唯一的hash，当文件被修改时，这个唯一的hash就会发生变化，Last-Modified这个从字面上理解就可以了，他存放的是文件最后的修改时间，这两个都能用来判断当前的文件是否发生了变化。

接下来我们要做的就是如何通过响应头来指导浏览器控制缓存的时间和什么时候发送询问请求询问资源是否过期，这里会涉及到两个响应头
Expires 指导浏览器缓存文件的时间
Expires:<http-date> 在此时候之后，缓存过期 服务器会重新发送确认请求

Cache-Control 指导浏览器何时向浏览器确认当前资源是否已过期 默认的是private
Cache-control: must-revalidate 缓存必须在使用之前验证旧资源的状态，并且不可使用过期资源
Cache-control: no-cache 在释放缓存副本之前，强制高速缓存将请求提交给原始服务器进行验证
Cache-control: no-store 缓存不应存储有关客户端请求或服务器响应的任何内容
Cache-control: no-transform 不得对资源进行转换或转变
Cache-control: public 表明响应可以被任何对象（包括：发送请求的客户端，代理服务器，等等）缓存
Cache-control: private 表明响应只能被单个用户缓存，不能作为共享缓存（即代理服务器不能缓存它）
Cache-control: proxy-revalidate
Cache-Control: max-age=<seconds> 设置缓存存储的最大周期，超过这个时间缓存被认为过期(单位秒)。与Expires相反，时间是相对于请求的时间。
Cache-control: s-maxage=<seconds> 覆盖max-age 或者 Expires 头，但是仅适用于共享缓存(比如各个代理)，并且私有缓存中它被忽略。

expires 是指在某个具体年月日时分秒之前缓存有效
maxage 是指本地可以缓存多长时间有效，从第一次下载到本地开始计算
Cache-Control会覆盖Expires

协商缓存 Last-Modified & If-Modified-Since
*/

//12 前端通信
/*
 enctype示例说明（ form , ajax, fetch 三种示例 )
 form
 xhr
 fetch fetch api是基于Promise设计

 SSE Server-Sent Events 服务器推送

 webstock 客户端与服务器双向通信 WebSocket

 postmessage 客户端与客户端页面之间的通信 postMessage
 1. window.postMessage() 方法可以安全地实现跨域通信
 2.主要用于两个页面之间的消息传送
 3. 可以使用iframe与window.open打开的页面进行通信.

 web workers
 Web Workers 进程通信（html5中的js的后台进程）javascript设计上是一个单线，也就是说在执行js过程中只能执行一个任务, 其他的任务都在队列中等待运行。

*/

