/*
substr(start,length)
substring([from,to))
slice([start,end))
*/
//for...of语句在可迭代对象(包括 Array, Map, Set, String, TypedArray，arguments 对象等等)上创建一个迭代循环，对每个不同属性的属性值,调用一个自定义的有执行语句的迭代挂钩
var str = 'abc';
for(var item of str){
	console.log(item);//a b c
}
var arr = ['a','b','c']
for(var item in arr){//item是索引
	console.log(item);// 0 1 2
}
for(var item of arr){//item是元素
	console.log(item);//a b c
}

// for in
// for of 区别


// javascript原生遍历方法的建议用法：
// 用for循环遍历数组
// 用for-in遍历对象
// 用for-of遍历类数组对象（ES6）
// 用Object.keys()获取对象属性名的集合

//连字符命名规范的字符串 转换成 驼峰命名规范的字符串 abc-def-ghi-ss abcDefGhiSs
var str = 'abc-def-ghi-ss';
function strToCamel(str){
	return str.replace(/\-[a-z]/g,(value, index, self) => value.charAt(1).toUpperCase());//箭头函数没有arguments对象
}
console.log(strToCamel(str));//abcDefGhiSs
function strToCamel(str){
	while(str.indexOf('-') != -1){
		var index = str.indexOf('-');
		str = str.slice(0,index) + str.charAt(index+1).toUpperCase() + str.slice(index+2);
	}
	return str;
}

//字符串提取出固定格式的内容，输出结果为数字
let a = "https://resource/1593311954488.png";
console.log(+a.split('/').pop().split('.').shift());//Number 1593311954488

let str = 'abcd';
function deleteSingleChar(str,index){
	return str.slice(0,index) + str.slice(index+1)
}
deleteSingleChar(str,str.indexOf('b'));//acd

// fffggjjj -> f4g2j3

//字符串转数组
Array.from("RUNOOB");//[ 'R', 'U', 'N', 'O', 'O', 'B' ]