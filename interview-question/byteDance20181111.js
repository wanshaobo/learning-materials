/*今日头条 广告部门 《2018-10 头条前端笔试题（社招）》*/
/*
简答题：
1、css3特性中的transform:translateZ(0)有什么作用？
精简答案：GPU加速，优化前端性能
使用translateZ的元素会单独占据一个渲染层，利用GPU加速，提高浏览器渲染的性能；
canvas也会开启gpu渲染

2、请列举三种禁止浏览器缓存的头字段，并写出相应的设置值
var ResponseHeaders = {
	//允许客户端缓存该文件时长10年
	Cache-Control: max-age=315360000
	//服务端对不同的文件通过固定的算法生成的一个唯一的hash，当文件被修改时，这个唯一的hash就会发生变化
	Etag: "1ec5-502264e2ae4c0"
	//期望该文件在客户端过期的具体日期
	Expires: Fri, 03 Nov 2028 14:42:37 GMT
	//该文件在服务端上次修改的时间
	Last-Modified: Wed, 03 Sep 2014 10:00:27 GMT,
	Pragma：no-cache
}
*/

//3、精确获取页面元素位置的方式有哪些？（相对于谁的位置）
var ele = document.getElementById('getPisiton');
//scheme 1
ele.getBoundingClientRect()//元素的大小及其相对于视口的位置
var res = {
	x: 0,//元素左边距离视口左部距离
	y: 0,//元素顶部距离视口顶部距离
	width: 0,//包括border 和 padding
	height: 0,//包括border 和 padding
	top: 0,//元素顶部距离视口顶部距离
	right: 0,//元素右边距离视口左边距离
	bottom: 0,//元素底部距离视口顶部距离
	left: 0//元素左边距离视口左部距离
}
//scheme 2
console.log(ele.offsetTop);//子元素顶部距离父元素顶部距离
console.log(ele.offsetLeft);//子元素左边距离父元素左边距离
//scheme 3 元素距离文档左上角的位置
function getTop(ele){
	return ele.offsetParent ? ele.offsetTop + getTop(ele.offsetParent) : ele.offsetTop
}
function getLeft(ele){
	return ele.offsetParent ? ele.offsetLeft + getLeft(ele.offsetParent) : ele.offsetLeft
}
//scheme 3
var X= this.getBoundingClientRect().left;
var Y =this.getBoundingClientRect().top;
//再加上滚动距离，就可以得到绝对位置
var X= this.getBoundingClientRect().left + document.documentElement.scrollLeft;
var Y =this.getBoundingClientRect().top + document.documentElement.scrollTop;
// 视区域的大小
document.documentElement.clientWidth
document.documentElement.clientHeight
// 页面的实际大小
document.documentElement.scrollWidth
document.documentElement.scrollHeight
// 元素宽高
ele.clientWidth;//元素宽度，不包括border 和 padding
ele.clientHeight;//元素高度，不包括border 和 padding
//滚动条位置
console.log(document.documentElement.scrollTop)
console.log(document.documentElement.scrollLeft)


//4、请用正则从2018-10-07T11:48:47 Asia/zh-cn提取出结果["2018","10","07","11","48","47"]
//scheme 1
var str = '2018-10-07T11:48:47 Asia/zh-cn'
console.log(str.match(/\d+/g));//[ '2018', '10', '07', '11', '48', '47' ]
//scheme 2
str = str.match(/(\S*)/)[1]
str = str.replace(/-|\T|\:/g, ",")
str =str.split(",")

//5、如何判断一个object是数组类型？
var arr = [1,2,3];
console.log(Array.isArray(arr));
console.log(arr instanceof Array);
console.log(arr.constructor === Array);
console.log(Object.prototype.toString.call(arr) === '[object Array]');//‘[object Array]’

/*
编程题
1、已知数据结构users，请实现语法支持users.unique()能够按name字段去重，并输出数据结构为:["a","b"]
*/
const users = [
    {id:1, name:'a'},
    {id:2, name:'a'},
    {id:3, name:'b'},
    {id:4, name:'b'},
]
Array.prototype.unique = function(){
    var res = []
    this.forEach((item,index)=>{
        if(res.indexOf(item.name) == -1){
            res.push(item.name)
        }
    })
    return res;
}
Array.prototype.unique = function(){
    var res = []
    this.map((item,index,self)=>{
        if(res.indexOf(item.name) == -1){
            res.push(item.name)
        }
    },res)
    return res;
}
Array.prototype.unique = function(){
	var obj = {}
	return this.reduce(function(res, item) {
		obj[item.name] ? '' : obj[item.name] = true && res.push(item.name);
		return res;
	}, []);
}
Array.prototype.unique = function () {
	var res;
	this.map(item => {
		this[item.id - 1] = item.name
	})
	//console.log(this);//[ 'a', 'a', 'b', 'b' ]
	//Set是一种新的数据结构，它可以接收一个数组或者是类数组对象，自动去重其中的重复项目。
	res = new Set(this);//{ 'a', 'b' }
	//Array.from 把类数组对象、可迭代对象转化为数组。
	res = Array.from(res);
	return  res
}
users.unique(users);//["a","b"]

/*
2、已知如下对象，请基于es6的proxy方法设计一个属性拦截读取操作的例子，要求实现当去访问目标对象example中不存在的属性时，抛出错误：Property "${property}" does not exist
*/
const man = {
    name: 'jscoder',
    age:22
}
console.log('name' in man);//true
console.log('a' in man);//false
const proxy = new Proxy(man, {
	get: function(target, property) {
		if(property in target) {
			return target[property];
		} else {
			return `Property ${property} does not exist.`;
			// throw new ReferenceError(`Property ${property} does not exist.`);
		}
	}
})
console.log(proxy.name);//jscoder
console.log(proxy.age);//22
console.log(proxy.location);//Property "location" does not exist

/*
3、给出如下虚拟dom的数据结构，如何实现一个简单的虚拟DOM渲染得到目标DOM书？
*/
let domNode = {
    tagName:'ul',
    props:{class:'list'},
    children:[{
        tagName:'li',
        children:['toutiao']
    },{
        tagName:'li',
        children:['douyin']
    }]
}
//构建一个render函数，将domNode对象渲染为以下dom
/*
<ul class="list">
    <li>toutiao</li>
    <li>douyin</li>
</ul>
*/
//scheme 1
function render(domNode){
    var res = document.createElement(domNode.tagName)
    if(domNode.props){
        res.className = domNode.props.class
    }
    if(domNode.children){
        for(var i=0,len=domNode.children.length;i<len;i++){
            if(typeof domNode.children[i] == 'string'){
                res.appendChild(document.createTextNode(domNode.children[i]))
            }else{
                res.appendChild(render(domNode.children[i]))
            }
        }
    }
    return res
}
document.querySelector('body').appendChild(render(domNode));
//scheme 2
Element.prototype.render = function(){
	var el = document.createElement(this.tagName),
		props = this.props,
		propName,
		propValue;
	for(propName in props){
		propValue = props[propName];
		el.setAttribute(propName, propValue);
	}
	this.children.forEach(function(child){
		var childEl = null;
		if(child instanceof Element){
			childEl = child.render();
		}else{
			childEl = document.createTextNode(child);
		}
		el.appendChild(childEl);
	});
	return el;
};
document.querySelector('body').appendChild(domNode.render());

//知识点扩展
//js截取两个字符串之间的内容
var str = "aaabbbcccdddeeefff";
str = str.match(/aaa(\S*)fff/)[1];
console.log(str);//结果bbbcccdddeee
//js截取某个字符串前面的内容
str = str.match(/(\S*)fff/)[1];
//js截取某个字符串后面的内容
str = str.match(/aaa(\S*)/)[1];