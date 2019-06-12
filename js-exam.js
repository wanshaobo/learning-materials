
console.time('a');
console.timeEnd('a');

for(var i=0;i<5;i++){
	setTimeout(function(){
		console.log(i)
	},1000);//5个5，异步回调函数
}

for(var i=0;i<5;i++){
	setTimeout(function(i){
		console.log(i)
	}(i),1000);//0,1,2,3,4，闭包形式
}

// AssignmentExpression :  
//     ConditionalExpression  
//     LeftHandSideExpression AssignmentOperator AssignmentExpression  
// 一个“赋值表达式”， 
//   可以由一个“条件表达式”构成； 
//   或者可以由一个“左手边表达式”加上一个“赋值运算符”加上一个“赋值表达式”构成。 

//结合性、优先级和求值顺序的关系
//运算符结合性（associativity）与求值顺序（order of evaluation）的概念
//一切都是对象，一切都是引用调用
//赋值运算符=是除逗号运算符,外优先级最低的，并且是右结合的。

//在这里a指向了一个对象{n:1}（暂称它为对象A），b指向了a所指向的对象，在这时候a和b都是指向对象A
var a= {n:1};
var b = a;
//js的赋值运算顺序永远都是从右往左的，不过由于“.”是优先级最高的运算符，所以这行代码先“计算”了a.x。
//这时候发生了这个事情,a指向的对象{n:1}新增了属性x（虽然这个x是undefined的）
//A={n:1,x:undefined},a和b都指向它
//接着，依循“从右往左”的赋值运算顺序先执行 a={n:2} ，这时候，a指向的对象发生了改变，变成了新对象{n:2}（我们称为对象B）：
//B={n:2}，此时a指向它
a.x = a = {n:2};//a.x = (a = {n:2}),等号左边a.x指向内存中的某个地址，等号右边把变量a指向对象{n:2}，然后返回该引用
console.log(a);//Object {n: 2}
console.log(a.x);//undefined
console.log(b);//Object {n: 1, x: Object}
console.log(b.x);//Object {n: 2}
console.log(a.n);//2
console.log(b.n);//1
//细节可参见浏览器收藏夹链接


//类型转换,原理'true'等同于1,'false'等同于0
console.log([1<2==1,3<2==0]);//[true, true]
console.log([1<2<3,3<2<1]);//[true, true]
console.log(1<2);//true
console.log(true < 2);//true
console.log(true > 2);//false
console.log(false < 2);//true
console.log(false > 2);//false
console.log(true == 1);//true
console.log(true === 1);//false
console.log(false == 0);//true
console.log(false === 0);//false

console.log(({}+{}).length);//30  ({}.toString() + {}.toString()).length
console.log({}.toString());//[object Object]
console.log({}.toString().length);//15
console.log({});//Object {}
console.log({}+'');//[object Object]
console.log({}+{});//[object Object][object Object]
console.log({}.length);//undefined
console.log({n:1,x:2}.length);//undefined

if(!('a' in window)){
	var a = 1;
}
console.log(a);//undefinde

//注意输出顺序 线程 和 进程
var a;
function test(){
	var a = 1;
	setTimeout(function(){a=2;console.log(a);},0);//输出顺序 3，输出内容 2
	console.log(a);//输出顺序 1，输出内容 1
}
test();
setTimeout(function(){console.log(3)},0);//输出顺序 4，输出内容 3
console.log(a);//输出顺序 2，输出内容 undefined

var url = 'http://www.baidu.com?aadfd=134&b=2&c=3';
function urlToObj(url){
	var dataObj = new Object();
	url = url.slice(url.indexOf('?') + 1);
	while(url.indexOf('=')){
		dataObj[url.slice(0,url.indexOf('='))] = url.slice(url.indexOf('=') + 1,url.indexOf('&'));
		url = url.slice(url.indexOf('&') + 1);
		if(url.indexOf('&') === -1){
			dataObj[url.slice(0,url.indexOf('='))] = url.slice(url.indexOf('=') + 1);
			break;
		}
	}
	return dataObj;
}
console.log(urlToObj(url));//Object {aadfd: "134", b: "2", c: "3"}

function urlToObj(url){
	var arrData = url.slice(url.indexOf('?') + 1).split('&');
	var dataObj = new Object();
	for(var i=0;i<arrData.length;i++){
		dataObj[arrData[i].slice(0,arrData[i].indexOf('='))] = arrData[i].slice(arrData[i].indexOf('=') + 1);
	}
	return dataObj;
}
console.log(urlToObj(url));//Object {aadfd: "134", b: "2", c: "3"}

function urlToObj(url){
	var arrData = url.slice(url.indexOf('?') + 1).split('&');
	var dataObj = new Object();
	var i = 0;
	while(i < arrData.length){
		dataObj[arrData[i].slice(0,arrData[i].indexOf('='))] = arrData[i].slice(arrData[i].indexOf('=') + 1);
		i++;
	}
	return dataObj;
}
console.log(urlToObj(url));//Object {aadfd: "134", b: "2", c: "3"}

//字符串转换成对象具体属性 var str = '123' obj[str] = str;
//返回指定位置的字符串：str.charAt(10));
//返回字符串中出现指定字符的数量：str.match(/=/g).length
//字符串中指定字符首次出现的位置：str.indexOf('=');
//检测字符串中是否存在指定字符：str.indexOf('=') === -1;

//降低页面加载时间的方法
//图片懒加载，
