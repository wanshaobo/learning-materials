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

//绑定事件方法 DOM0 DOM2 w3c标准 IE异同

-10 >>> 0//把-10转化为无符号整数