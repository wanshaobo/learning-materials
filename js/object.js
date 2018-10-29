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
console.log(instance1.hasOwnProperty('name'));//true 实例属性
console.log(instance1.hasOwnProperty('age'));//false 原型属性
console.log(instance1.hasOwnProperty('sex'));//true 实例属性

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





