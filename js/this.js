//本文记录this 作用域 作用域链
//this 和 作用域不能混淆
//http://www.cnblogs.com/lisha-better/p/5684844.html
/*
函数的六种调用方式：
普通函数调用
作为方法来调用
作为构造函数来调用
使用apply/call方法来调用
Function.prototype.bind方法
es6箭头函数

注意以下两点：
不管是哪种方法来调用函数，谁调用这个函数或方法,this关键字就指向谁
箭头函数中的this和该函数被谁调用没有关系，仅仅与当前的执行上下文有关
*/

var a = 1;
var obj = {
	a:2,
	b:this.a,
	func(){
		console.log(this)
		console.log(this.b)
	}
}
obj.func();//{a: 2, b: 1, func: ƒ} 1
//方法调用的时候this指向obj，执行上下文是obj，obj对象中的this指向window
var f = obj.func;
f()//window undefined

var a = 1;
var obj = {
	a:2,
	b:this.a,
	func:() => {
		console.log(this)
		console.log(this.b)
	}
}
obj.func();//window undefined
//当前的执行上下文是window，window对象没有b属性

var a = 1;
var obj = {
	a:2,
	b:this.a,
	func(){
		console.log(this)
		console.log(this.b)
	}
}
function test(cb){
	cb()
}
test(obj.func)//undefined

var a = 1;
var obj = {
	a:2,
	b:this.a,
	func:() => {
		console.log(this.b)
	}
}
function test(cb){
	cb()
}
test(obj.func)//undefined

//对象中函数的三种写法
var a = 1;
var obj = {
	a:2,
	b:this.a,
	like(){
		console.log(this.a)
		console.log(this.b)
	},
	eat: function(){
		console.log(this.a)
		console.log(this.b)
	},
	drink:() => {
		console.log(this.a)
		console.log(this.b)
	}
}
obj.like();//2 1
obj.eat();//2 1
obj.drink();//1 undefined 箭头函数中的this和该函数被谁调用没有关系，仅仅与当前的执行上下文有关，当前的执行上下文是window

console.log(a);//ƒ a() {}
function a() {}
var a = 1
function b() {
	console.log(a);//Cannot access 'a' before initialization
	let a = 2
}
b()

let a = {n:0}
let b = a
a.x = a = {l:0}
console.log(a);//{l: 0}
console.log(b);//{n:0,x:{l:0}}

let a = {n:0}
a.x = a = {l:0}
console.log(a);//{l: 0}
console.log(a.x);//undefined

var type = 'global';
function bar() {
	var type = 'function';
	function foo() {
		console.log(type);//function
		console.log(this.type);//global
	}
	foo();
}
bar();

//let声明的变量需要遵循先声明后使用的原则 提前获取会报错
console.log(a);//ƒ a() {}
function a() {}
var a = 1
function b() {
	console.log(a);//Uncaught ReferenceError: Cannot access 'a' before initialization
	let a = 2
}
b()

//实现addSleep
let o = {
	foo: function() {
		console.log('bar');
	}
}
let mo = addSleep(o);
mo.sleep(1).foo();
function addSleep(o){
	function sleep(time){
		let a = o.foo
		o.foo = function(){setTimeout(()=>{a()},time*1000)}
		return o

	}
	return {sleep}
}

var x  =  30;
function test(x){
	console.log(x);//ƒ x() {}
	var x  =  10;
	console.log(x);//10
	x  =  20;
	function x() {};
	console.log(x);//20
}
test(40);

var x  =  30;
function test(x){
	console.log(x);//ƒ x() {}
	console.log(x);//ƒ x() {}
	x  =  20;
	function x() {};
	console.log(x);//20
}
test(40);

var x  =  30;
function test(x){
	console.log(x);//40
	console.log(x);//40
	x  =  20;
	console.log(x);//20
}
test(40);

var x  =  30;
function test(x){
	console.log(x);//40
	var x  =  10;
	console.log(x);//10
	console.log(x);//10
}
test(40);