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
//align-items 交叉轴上如何对齐 flex-start/flex-end/center/baseline/stretch   * baseline: 项目的第一行文字的基线对齐。
//align-content 定义多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。flex-start/flex-end/center/space-between/space-around/stretch
//子元素
//.item{order:1} 定义项目的排列顺序。数值越小，排列越靠前，默认为0。
//.item{flex-grow:<number>} 定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
//.item{flex-shrink:<number>/*default 1*/} 定义项目的缩小比例，默认为1，即如果空间不足，该项目将缩小
//.item{flex-basis:length/*default auto*/}定义在分配多余空间之前，项目占据的主轴空间（main size）
//.item{flex:none} 是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。 该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。 flex 属性用于设置或检索弹性盒模型对象的子元素如何分配空间。
//.item { align-self: auto | flex-start | flex-end | center | baseline | stretch; }允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

//5、Javascript异步编程方法
// https://www.cnblogs.com/nullcc/p/5841182.html
/*
ES 6以前：
* 定时器
* 回调函数
* 事件监听(事件发布/订阅)
* Promise对象

ES 6：
* Generator函数(协程coroutine)

ES 7:
* async和await

PS:如要运行以下例子，请安装node v0.11以上版本，在命令行下使用 node [文件名.js] 的形式来运行，有部分代码需要开启特殊选项，会在具体例子里说明。

异步并发

*/

//async 返回结果是promise
//等多个异步语句执行完的方案
//http cache相关
//http 302的过程
//文字溢出显示省略号
//纵向的flex布局


