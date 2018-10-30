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

//8、http cache相关


//9、http 302的过程
