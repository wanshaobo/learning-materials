/*今日头条 广告部门 《2018-10 头条前端笔试题（社招）》*/
/*
简答题：
1、css3特性中的transform:translateZ(0)有什么作用？
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
	Last-Modified: Wed, 03 Sep 2014 10:00:27 GMT
}

3、精确获取页面元素位置的方式有哪些？（相对于谁的位置）
方案一：
<script>
    var ele = document.getElementById('getPisiton');
    function getPosition(dom){
    	var res = dom.getBoundingClientRect()//元素的大小及其相对于视口的位置
    	res = {
    		x: 0,//元素左边距离视口左部距离
            y: 0,//元素顶部距离视口顶部距离
            width: 0,//包括border 和 padding
            height: 0,//包括border 和 padding
            top: 0,//元素顶部距离视口顶部距离
            right: 0,//元素右边距离视口左边距离
            bottom: 0,//元素底部距离视口顶部距离
            left: 0//元素左边距离视口左部距离
        }
	    console.log(dom.offsetTop);//子元素顶部距离父元素顶部距离
	    console.log(dom.offsetLeft);//子元素左边距离父元素左边距离
	    console.log(dom.offsetWidth);//document文档中的位置信心
	    console.log(dom.offsetHeight);//document文档中的位置信心
    }
    document.body.addEventListener('click',function(){
    	getPosition(ele)
    },false)
</script>
视区域的大小
document.documentElement.clientWidth
document.documentElement.clientHeight
页面的实际大小
document.documentElement.scrollWidth
document.documentElement.scrollHeight
元素宽高
dom.clientWidth;//元素宽度，不包括border 和 padding
dom.clientHeight;//元素高度，不包括border 和 padding

4、请用正则从2018-10-07T11:48:47 Asia/zh-cn提取出结果["2018","10","07","11","48","47"]
var str = '2018-10-07T11:48:47 Asia/zh-cn'
console.log(str.match(/\d+/g));//[ '2018', '10', '07', '11', '48', '47' ]

5、如何判断一个object是数组类型？
 var arr = [1,2,3];
 console.log(Array.isArray(arr));
 console.log(arr instanceof Array);
 console.log(arr.constructor === Array);
 console.log(Object.prototype.toString.call(arr) === '[object Array]');//‘[object Array]’
*/

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
users.unique(users);//["a","b"]
/*
2、已知如下对象，请基于es6的proxy方法设计一个属性拦截读取操作的例子，要求实现当去访问目标对象example中不存在的属性时，抛出错误：Property "${property}" does not exist
*/
const man = {
    name: 'jscoder',
    age:22
}
const proxy = new Proxy()//
proxy.name//jscoder
proxy.age//22
proxy.location //Property "location" does not exist

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