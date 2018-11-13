//判断对象是对象
console.log(Object.prototype.toString.call(obj) === '[object Object]');
Object.prototype.toString.call(null);//”[object Null]”
Object.prototype.toString.call(undefined);//”[object Undefined]”
Object.prototype.toString.call('abc');//”[object String]”
Object.prototype.toString.call(123);//”[object Number]”
Object.prototype.toString.call(true);//”[object Boolean]”
Object.prototype.toString.call(fn);//”[object Function]”
Object.prototype.toString.call(date);//”[object Date]”
Object.prototype.toString.call(arr);//”[object Array]”

console.log({} instanceof Object)
console.log({}.constructor === Object)
console.log(Object.prototype.toString.call({}) === '[object Object]')

//1、原型链继承
function SuperType(){
	this.name = 'super';
}
SuperType.prototype.age = [18,19]
function SubType(){
	this.name = 'sub';
}
SubType.prototype = new SuperType();
var instance = new SubType();
console.log(instance.constructor);//SuperType
//问题一：父类构造函数中定义的属性(父类原型对象定义的属性)被子类实例共享，子类任何一个实例都可以修改这个属性。
//问题二：创建子类实例时，不能像父类构造函数传递参数

//2、构造函数继承
function SuperType(){
	this.colors = ['red'];
}
function SubType(){
	SuperType.call(this);
}
var instance1 = new SubType();
instance1.colors.push('blue');//['red','blue']
console.log(instance1.colors);
var instance2 = new SubType();
instance2.colors.push('green');//['red','green']
console.log(instance2.colors);
//问题一：父类原型对象上定义的方法，子类实例不可见
//这句话的原因：SubType.prototype.constructor = SubType;
function SuperType(){}
function SubType(){
	SuperType.call(this);
}
SubType.prototype = new SuperType();
console.log(SubType.prototype.constructor);//ƒ SuperType(){}
SubType.prototype.constructor = SubType;
console.log(SubType.prototype.constructor);//ƒ SubType(){SuperType.call(this);}

//3、组合继承
function SuperType(){}
function SubType(){
    SuperType.call(this);
}
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;

//4、原型式继承
var person = {
	name:'name',
	age: [17,18]
}
var wanshaobo = Object.create(person)
wanshaobo.name = 'wanshaobo';
wanshaobo.age.push(19)
// var zhangsan = Object.create(person,{name:{value: 'zhangsan'}});//覆盖原型的同名属性
var zhangsan = Object.create(person);//覆盖原型的同名属性
zhangsan.name = 'zhangsan';
var lisi = Object.create(person,{name:{value: 'lisi'}});//覆盖原型的同名属性
console.log(wanshaobo.name);//wanshaobo
console.log(zhangsan.name)//zhangsan
console.log(lisi.name)//lisi
console.log(wanshaobo.age)//[17,18,19]
console.log(zhangsan.age)//[17,18,19]
console.log(lisi.age)//[17,18,19]
//问题一：父类引用类型值的属性，被子类实例共享；但普通类型值的属性不会被共享和其他子类修改
//问题二：浏览器兼容性，IE9+

//5、父类静态属性和方法不被子类实例继承，但实例属性和方法方法可以被继承
function SuperType(){

}
SuperType.staticProp = "this is a static prop";//静态属性
SuperType.staticMethod = function(){//静态方法
    console.log("this is a static method");
}
SuperType.prototype.instanceProp = "this is a instance prop"//实例属性
SuperType.prototype.instanceMethod = function(){//实例方法
    console.log("this is a instance method");
}
console.log(SuperType.staticProp);
SuperType.staticMethod();
function SubType(){

}
SubType.prototype = new SuperType();
var instance1 = new SubType();
console.log(SubType.staticProp);//undefined
SubType.staticMethod();//SubType.staticMethod is not a function
instance1.instanceMethod();//this is a instance method

//6、原型属性和实例属性的判断
function SuperType(){
    this.name = 'wansahobo';
}
SuperType.prototype.age = 18;
var instance1 = new SuperType();
instance1.sex = 'man';
console.log(instance1.hasOwnProperty('name'));//true 原型属性
console.log(instance1.hasOwnProperty('age'));//false 原型对象属性
console.log(instance1.hasOwnProperty('sex'));//true 实例属性
console.log(instance1.constructor);//SuperType

//7、__proto__ 实例原型的prototype
//对象实例的__proto__指向构造函数的prototype(原型)
function SuperType(){
    this.name = 'wansahobo';
}
SuperType.prototype.age = 18;
var instance1 = new SuperType();
console.log(instance1.prototype);//undefined
console.log(instance1.__proto__ == SuperType.prototype);//true
console.log(instance1.__proto__);//{age: 18, constructor: ƒ SuperType()}
console.log(SuperType.__proto__);//ƒ () { [native code] }
console.log(Function.__proto__);//ƒ () { [native code] }
console.log(Function.__proto__ == SuperType.__proto__);//true
console.log(instance1.constructor);//ƒ SuperType(){this.name = 'wansahobo';}
console.log(instance1.constructor == SuperType);//true
console.log(SuperType.prototype);//{age: 18, constructor: ƒ SuperType()}
console.log(SuperType.prototype.constructor);//ƒ SuperType(){this.name = 'wansahobo';}
console.log(SuperType.prototype.constructor == SuperType);//true
console.log(instance1.constructor.prototype);//{age: 18, constructor: ƒ}
console.log(instance1.constructor.prototype == SuperType.prototype);//true
console.log(SuperType.constructor);//ƒ Function() { [native code] }
console.log(SuperType.constructor == Function);//true
//A.isPrototypeOf(B) A是否是B的原型链
console.log(SuperType.isPrototypeOf(instance1));//false
console.log(instance1 instanceof SuperType);//true
console.log(SuperType.prototype.isPrototypeOf(instance1));//true

//8、对象遍历
//Object.keys 返回一个数组,包括对象自身的和继承的所有可枚举属性(不含Symbol属性).
function SubType(){
	this.name = 'wan';
}
var instance = new SubType();
instance.a = 1;
instance.b = 2;
instance.c = 3;
console.log(Object.keys(instance));//[ 'name', 'a', 'b', 'c' ]
//for in  循环遍历对象自身的和继承的可枚举属性(不含Symbol属性).
function SubType(){
	this.name = 'wan';
}
var instance = new SubType();
instance.a = 1;
instance.b = 2;
instance.c = 3;
for(var item in instance){
	console.log(item);
}
//getOwnPropertyNames 返回一个数组,包含对象自身的所有属性(不含Symbol属性,但包括不可枚举属性).
function SubType(){
	this.name = 'wan';
}
var instance = new SubType();
instance.a = 1;
instance.b = 2;
instance.c = 3;
Object.getOwnPropertyNames(instance);//[ 'name', 'a', 'b', 'c' ]
//Reflect.ownKeys(obj) 返回一个数组,包含对象自身的所有属性,不管属性名是Symbol或字符串,也不管是否可枚举.
function SubType(){
	this.name = 'wan';
}
var instance = new SubType();
instance.a = 1;
instance.b = 2;
instance.c = 3;
console.log(Reflect.ownKeys(instance));//[ 'name', 'a', 'b', 'c' ]

//9、构造函数方法与原型prototype上的方法
//定义在构造函数内部的方法,会在它的每一个实例上都克隆这个方法;
//定义在构造函数的prototype属性上的方法会让它的所有示例都共享这个方法,但是不会在每个实例的内部重新定义这个方法.
//如果我们的应用需要创建很多新的对象,并且这些对象还有许多的方法,为了节省内存,我们建议把这些方法都定义在构造函数的prototype属性上
//当然,在某些情况下,我们需要将某些方法定义在构造函数中,这种情况一般是因为我们需要访问构造函数内部的私有变量.
function SuperType(){
	this.name = 'abc';
	this.eat = function(){
		console.log(1);
	}
}
SubType.prototype.drink = function(){
	console.log(2);
}

//10、new干了什么 一个对象创建的过程 4步
var arr = new Array();
//var obj = {};
//obj.__proto__ = Array.prototype //原型链 obj --> Array.prototype --> Object.prototype --> null
//Array.call(obj) 使用新对象调用构造函数，构造函数中的this被指向新实例对象
//return obj
//注意：若构造函数中返回this或返回值是基本类型（undefined null Boolean String Number）的值，则返回新实例对象；若返回值是引用类型的值，则实际返回值为这个引用类型。
function _new(fun) {
	return function() {
		let obj = {
			__proto__: fun.prototype
		}
		fun.apply(obj, arguments)
		return obj
	}
}

//11、构造函数内有无return的理解
//没有return
function SuperType(){
	this.a = 1;
}
SuperType.prototype.say = function(){
	console.log('i am SuperType')
}
var instance = new SuperType();
console.log(instance.a);//1
instance.say();//i am SuperType
//有return 返回值的类型 对构造函数没有影响
function SuperType(){
	this.a = 1;
	return 123
}
SuperType.prototype.say = function(){
	console.log('i am SuperType')
}
var instance = new SuperType();
console.log(instance.a);//1
instance.say();//i am SuperType
//有return 返回引用类型 构造函数原型上的方法不会被继承
function SuperType(){
	this.a = 1;
	return {a:2}
}
SuperType.prototype.say = function(){
	console.log('i am SuperType')
}
var instance = new SuperType();
console.log(instance.a);//2
instance.say();//instance.say is not a function

//12、深拷贝 deep copy
// $.extend( [deep ], target, object1 [, objectN ] )
//$.extend( object1, object2 );合并两个对象，并修改第一个对象，并且第二个对象中的同名属性会覆盖第一个对象中的引用
//$.extend( true, object1, object2 ); 采用递归方式合并两个对象，并修改第一个对象。
//$.extend( {}, defaults, options ); 合并 defaults 和 options 对象，并且不修改 defaults 对象。这是常用的插件开发模式。
// JSON.parse(JSON.stringify(a));
function deepCopy(src, res) {
	var res = res || {};
	for (var key in src) {
		if (typeof src[key] === 'object') {
			res[key] = (src[key].constructor === Array) ? [] : {};
			deepCopy(src[key], res[key]);
		} else {
			res[key] = src[key];
		}
	}
	return res;
}
var a = {a:1,b:2,c:[{d:2}]}
var b = deepCopy(a,{e:3})
var c = deepCopy(a)
console.log(a);
console.log(b);
console.log(c);

//13、冻结 freeze 只能冻结值类型的数据，深层数据需要遍历冻结 Object.freeze()冻结的是值，因此可以将变量的引用替换掉
var obj = {a:1}
Object.freeze(obj);
obj.a = 2;
console.log(obj);//{a:1}
//
var obj = {a:{b:1}}
Object.freeze(obj);
obj.a.b = 2;
console.log(obj);//{ a: { b: 2 } }
//
var obj = {
	a:1,
	b:{
		c:2
	}
}
Object.freeze(obj);
obj.a = 2
obj.b.c = 3;
console.log(obj);//{ a: 1, b: { c: 3 } }
Object.freeze(obj.b)
obj.a = 2
obj.b.c = 4;
console.log(obj);//{ a: 1, b: { c: 3 } }
//
var obj = {
	a:1,
	b:{
		c:2
	}
}
function freeze(obj){
	Object.freeze(obj);
	Object.values(obj).forEach(function (value,index) {
		if(typeof value === 'object'){
			freeze(value);
		}
	})
}
freeze(obj)
obj.a = 2
obj.b.c = 3;
console.log(obj);//{ a: 1, b: { c: 2 } }
//对象的扩展、密封和冻结。
Object.preventExtensions();//阻止对象扩展，让一个对象变的不可扩展，也就是永远不能再添加新的属性
Object.isExtensible();//判断一个对象是否可扩展，即是否可以给它添加新属性
Object.seal();//让一个对象密封，并返回被密封后的对象。密封对象是指那些不能添加新的属性，不能删除已有属性，以及不能修改已有属性的可枚举性、可配置性、可写性，但可以修改已有属性的值的对象。
Object.isSealed();//判断一个对象是否是密封的（sealed）
Object.freeze();//这个方法比 Object.seal 更绝，冻结对象是指那些不能添加新的属性，不能修改已有属性的值，不能删除已有属性，以及不能修改已有属性的可枚举性、可配置性、可写性的对象。也就是说，这个对象永远是不可变的。
Object.isFrozen();//判断一个对象是否被冻结（frozen）







