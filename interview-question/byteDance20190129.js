/*今日头条 《2019-01 头条前端笔试题（社招）》*/
/*
1、在线编辑器中我们经常看到如下效果，这种中间镂空透明、四周蒙层遮罩的效果是如何实现？
假设：
内层div width="80px" height="80px"
外层div width="160px" height="160px"
*/
import '../file/interview-img-2019012901.jpg'

/*
2、如下代码的运行结果是什么？
*/
process.nextTick(() => {
	console.log('nextTick')
})
Promise.resolve().then(() => {
	console.log('promise1')
}).then(() => {
	console.log('promise2')
})
setImmediate(() => {
	console.log('setImmediate')
})
console.log('end')
//end nextTick promise1 promise2 setImmediate

/*
3、以下代码输出什么结果，this.name中this指向什么？
*/
window.name = 'ByteDance'
function A(){
	this.name = 123
}
A.prototype.getA = function(){
	console.log(this)
	return this.name + 1
}
let a = new A()
let funcA = a.getA
funcA()
//Window ByteDance

//扩展
window.name = 'ByteDance'
function A(){
	this.name = 123
}
A.prototype.getA = function(){
	console.log(this)
	return this.name + 1
}
let a = new A()
a.getA()
//A {name: 123}
//124

//编程
/*
1、给定一个字符串如下，请统计字符串中出现最多的字母和次数？
*/
const str = 'this is a fe test at toutiao on January'
function findMaxDuplicateChar(str){
	let maxChar = ''
	let maxValue = 1
	var obj = {}
	for(var char of str){
		if(char != ' '){
			if(!obj[char]){
				obj[char] = 1
			}else{
				obj[char]++
			}
		}
		//
		// if(char == ' ')
		// 	continue
		// if(!obj[char]){
		// 	obj[char] = 1
		// }else{
		// 	obj[char]++
		// }
	}
	for(var key in obj){
		if(obj[key] > maxValue){
			maxChar = key
			maxValue = obj[key]
		}
	}
	return {
		maxChar,
		maxValue
	}
}
findMaxDuplicateChar(str)//{maxChar: "t", maxValue: 6}
obj = {
	J: 1,
	a: 5,
	e: 2,
	f: 1,
	h: 1,
	i: 3,
	n: 2,
	o: 3,
	r: 1,
	s: 3,
	t: 6,
	u: 2,
	y: 1,
}

//极限情况，出现次数一样的场景
const str = 'aaabbccc'
function findMaxDuplicateChar(str){
	let maxChar = []
	let maxValue = 1
	var obj = {}
	for(var char of str){
		if(!obj[char]){
			obj[char] = 1
		}else{
			obj[char]++
		}
		if(obj[char] > maxValue){
			maxValue = obj[char]
		}
	}
	for(var key in obj){
		if(obj[key] == maxValue){
			maxChar.push(key)
		}
	}
	return {
		maxChar,
		maxValue
	}
}
console.log(findMaxDuplicateChar(str));
//{maxChar: ["a", "c"], maxValue: 3}
obj = {a: 3, b: 2, c: 3}

/*
2、输入一个整型数组，数组中有正数也有负数，数组中一个或连续的多个整数组成一个子数组。求所有子数组的和的最大值，要求时间复杂度为O(n)
例如输入的数组为[1,-2,3,10,-4,7,2,-5]，最大子数组和为18(最大的子数组为[3,10,-4,7,2])，不需要求(记录)最大的子数组
*/
var arr = [1,-2,3,10,-4,7,2,-5]
function findMax(arr){
	if(arr.length == 0){
		return 0
	}
	let max = arr[0]
	let sum = 0;
	for(var i=0,len=arr.length;i<len;i++){
		if(sum >= 0){
			sum += arr[i]
		}else{
			sum = arr[i]
		}
		if(sum > max){
			max = sum;
		}
	}
	return max
}
console.log(findMax(arr));//18

//记录子数组首尾下标
var arr = [1,-2,3,10,-4,7,2,-5]
function findMax(arr){
	if(arr.length == 0){
		return 0
	}
	//最大和 临时最大和 数组长度 开始下标 结束下标 开始的临时下标
	let max = arr[0], sum = 0, len = arr.length, start = end = temp = len-1;
	for(var i=0;i<len;i++){
		if(sum >= 0){
			sum += arr[i]
		}else{
			sum = arr[i]
			temp = i
		}
		if(sum > max){
			max = sum;
			start = temp;
			end = i;
		}
	}
	console.log(arr.slice(start, end+1))//[3, 10, -4, 7, 2]
	return max
}
console.log(findMax(arr));//18

/*
3、A和B玩抛硬币游戏，AB轮流抛一枚硬币，谁先抛到正面谁就获胜并结束游戏，硬币两面均匀。A先抛，请问A获胜的概率是多少？
2/3
*/
var a = 1/2 + 1/2 * (1/4)^1 + 1/2 * (1/4)^2 +  1/2 * (1/4)^(n-1)