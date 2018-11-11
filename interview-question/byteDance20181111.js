/*今日头条 广告部门 《2018-10 头条前端笔试题（社招）》*/
/*
简答题：
1、css3特性中的transform:translateZ(0)有什么作用？
2、请列举三种禁止浏览器缓存的头字段，并写出相应的设置值
3、精确获取页面元素位置的方式有哪些？
4、请用正则从2018-10-07T11:48:47 Asia/zh-cn提取出结果["2018","10","07","11","48","47"]
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