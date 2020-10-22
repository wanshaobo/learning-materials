//js css html 基础 最新语法和最新经验

//用try catch 捕获不能打断点的地方
try{
	var a = new Uint8Array(1024)
	this.data.set([1,2,3], 1024);//填充溢出只能用catch捕获
}catch(e){
	console.log(e);
}

//选择器
document.getElementById()
document.querySelector();//返回文档中匹配指定的CSS选择器的第一元素
document.querySelectorAll();//HTML5中引入的新方法，返回文档中匹配的CSS选择器的所有元素节点列表

//JavaScript 7种数据类型: undefined null Boolean String Number Object Symbol
// Symbol 由于每一个 Symbol 值都是不相等的，这意味着 Symbol 值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性。
isFinite(num)//判断一个数是有限的，而非正负无穷大 infinite -infinite
isNaN("blue")//判断一个变量不是NaN

Math.max.apply(null, [1, 2, 3, 4, , 8, 1, 1]);//NaN 缺失5号元素，没有容错机制
Math.max.apply(null, [1, 2, 3, 4, 5, 8, 1, 1]);//8
Math.max(...[1, 2, 3, 4, 5, 8, 1, 1]);//8 扩展运算符（spread）是三个点（...）
Math.max(1, 2, 3, 4, 5, 8, 1, 1);//8

-10 >>> 0//把-10转化为无符号整数

//判断NaN是NaN 三种方法
isNaN(NaN)
NaN === NaN//false
Array.prototype.includes(NaN)

var arr = [NaN];
arr.indexOf(NaN);//-1

console.log(typeof null);//object
console.log(typeof undefined);//undefined
console.log(typeof NaN);//number
console.log(typeof true);//boolean
typeof undefined == 'undefined' //true

function isNull(tmp){
	if (!tmp && typeof tmp != "undefined" && tmp != 0){
		alert("null");
	}
}


var arr = [1,2,3],arr1 = [],num = 1,str = 'aa';
arr1 = arr.map(parseInt);
console.log(arr1);//[1, NaN, NaN]
console.log(NaN == NaN);//false  原因是 NaN 与所有值都不相等，包括它自己。
console.log(Number.NaN);//NaN
console.log(NaN);//NaN
console.log(isNaN(num));//false

console.log(isNaN(NaN));//true
console.log(isNaN(new Object()));//true
console.log(isNaN(undefined));//true
console.log(isNaN(str));//true
console.log(isNaN('str'));//true
console.log(isNaN(''));//false 相当于undefined
console.log(isNaN('a'));//true

console.log([1<2<3,3<2<1]);//[true, true]
console.log(1<2<3);//true
console.log(3<2<1);//true
console.log(3<2);//false
//false为0
//非0值都是true
console.log(false < 1);//true
console.log(false > 1);//false
console.log(true < 1);//false
console.log(true < 3);//true
console.log(true > 3);//false
console.log(true > 1);//false

console.log('12' > '9');//false   字符串按位比较
console.log('12' < '9');//true

console.log(parseInt(12.5) == parseFloat(1.25));//12.5 1.25 false
console.log(Number('') == parseFloat(''));//0 NaN false
console.log(isNaN('abc') == NaN);//false
console.log(typeof NaN === 'number');//true
console.log(typeof NaN);//number
console.log(isNaN('abc'));//true

var a = 1;
function a(b) {
	console.log(b);
}
a(2);//a is not a function 由于函数声明提前了，又赋值了1，a成为变量

// https://github.com/mqyqingfeng/Blog
// https://juejin.im/user/58e4b9b261ff4b006b3227f4/posts
// https://juejin.im/post/59278e312f301e006c2e1510

//逗号运算符
let a = (b = 8*2, b*4);
console.log(a);//64
let a = b = (c = 5, c * 2);
console.log(a,b);//10
function add(){
	var a = 1;
	var b = 1;
	return a++,b++,a+b;
}
console.log(add());//4
console.log((0,9));//9

//进制转换
function num2str(str){
	let arr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G'];
	return arr[str]
}
//十进制 - 十七进制
function num2Seventeen(num){
	if(num <= 0){
		return num
	}
	let res = ''
	while(num != 0){
		res = num2str(num%17) + res;//取模
		num = Math.floor(num/17);//取商
	}
	console.log(res);
}
//十进制 - 二进制
function num2Binary(num){
	if(num <= 0){
		return num
	}
	let res = ''
	while(num != 0){
		res = num%2 + res
		num = Math.floor(num/2)
	}
	console.log(res);
}
//十进制 - 二进制
function num2Binary(num){
	if(num <= 0){
		return num
	}
	let res = ''
	while(num != 0){
		res = num%2 + res
		num = num>>1
	}
	console.log(res);
}

var num = 100;
console.log(num.toString(2));
parseInt(num,8);   //八进制转十进制
parseInt(num,16);   //十六进制转十进制
parseInt(num).toString(8)  //十进制转八进制
parseInt(num).toString(16)   //十进制转十六进制
parseInt(num,2).toString(8)   //二进制转八进制
parseInt(num,2).toString(16)  //二进制转十六进制
parseInt(num,8).toString(2)   //八进制转二进制
parseInt(num,8).toString(16)  //八进制转十六进制
parseInt(num,16).toString(2)  //十六进制转二进制
parseInt(num,16).toString(8)  //十六进制转八进制

console.log(11>'10');//纯数字和数字字符串相比较，则将字符串数字隐式转换成数字再进行比较 true
console.log(10>'10');//false
console.log(999>'a');//纯数字和非数字字符串比较，都返回false 由于parseInt('a')永远是NaN
console.log(1>NaN);//false
console.log(1<NaN);//false
console.log('10'>'5');//纯字符串比较，转换成ASCII码再进行比较 false
console.log('b'>'a');//纯字符串比较，转换成ASCII码再进行比较 true
console.log('2'>'!');//true
console.log("abc"<"acd");//true
//js最大数字 2^53 9007199254740992
console.log(9007199254740991);
console.log(9007199254740992);
console.log(9007199254740993);
let num1 =  0.1,num2 = 0.2;
console.log(num1+num2);
console.log((num1*10 + num2*10)/10);


var a = {n:1}
var b = a;
a.x = a = {n:2};//从左到右进行  a.x = {n:2}  a = {n:2}
console.log(a);//{n:2}
console.log(b);//{ n: 1, x: { n: 2 } }
console.log(b.x);//{n:2}
console.log(a.x);//undefined
a === b.x//true

//创建10个*的字符串
new Array(10).join("*");//"*********"
//初始化一个数组
new Array(10).fill(1);//[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]