
function a(){
    console.log(1);
}
function b(){
    console.log(2);
}
function c(){
    console.log(3);
}
function d(){
    console.log(4);
}
//reduce() 可以作为一个高阶函数，用于函数的 compose。
function e(...args){
    return args.reduce((res,cur) => (...args) => res(cur(...args)));
}
let e = [a,b,c,d].reduce((res,cur) => (...args) => res(cur(...args)));
console.log(e.toString());//(...args) => res(cur(...args))
e();//4 3 2 1
function f(...args){
    console.log(args);
}
f(a,b,c,d)//[function a(){console.log(1);}, function b(){console.log(2);}, function c(){console.log(3);}, function d(){console.log(4);}]

// compose 从右向左
const compose = (...funcs) => x => funcs.reduceRight((v, f) => f(v), x);
const func1 = n => n + 1; //加1
const func2 = n => n * 2; // 乘2
const funcs = compose(func1,func2);
console.log(funcs(2));; // 6

// pipe 从左向右
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const func1 = n => n + 1; //加1
const func2 = n => n * 2; // 乘2
const funcs = pipe(func1,func2);
console.log(funcs(2));; // 6

//获取函数的形参个数 functionName.length
function abc(){

}
console.log(abc.length)//0
function abc(a){

}
console.log(abc.length)//1
function abc(a,b){

}
console.log(abc.length)//2
//1
function add(a){
    return function (b){
        return function (c){
            return a+b+c
        }
    }
}
var result = add(1)(2)(3);
console.log(result);//6

//2
//函数柯里化问题 Currying 卡瑞化 加里化 是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术
////每次接收不固定参数
function add () {
    var args = [].slice.call(arguments);//arguments转化为数组 Array.prototype.slice.call(arguments);
    var fn = function () {
        var arg_fn = [].slice.call(arguments);
        return add.apply(null, args.concat(arg_fn));
    }
    fn.toString = function() {//fn.valueOf fn.toString 哪个被重写先执行哪个，都被重写的时候先调用valueOf
        return args.reduce((a, b) => a + b);
    }
    return fn;
}
var result = add(1,1)(2)(3)
console.log(result);//f 7
console.log(result.toString());//7
console.log(typeof result.toString());//number
function add() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    var _args = Array.prototype.slice.call(arguments);
    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    var inner = function() {
        _args.push(...arguments);
        return inner;
    };
    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    inner.toString = function () {
        return _args.reduce(function (a, b) {
            return a + b;
        });
    }
    return inner;
}

//3
//每一次接收一个固定参数
function add(x) {
    var sum = x;
    var fn = function (y) {
        sum += y;
        return fn;
    };
    fn.toString = function () {
        return sum;
    };
    return fn;
}
var result = add(1)(2)(3)
console.log(result);//f 6

//4
var add=function(){
    var args=[].slice.call(arguments);
    var tmp = function(){
        //收集参数到args数组
        args = args.concat([].slice.call(arguments));
        return tmp;
    }
    tmp.valueOf = tmp.toString = function(){
        return args.reduce(function(first,second){
            return first+second;
        })
    }
    return tmp;
}
add(1,2,3)(4,5)(6)  //输出21

//5
Number.prototype.add = function(){
    return this + Array.prototype.slice.call(arguments).reduce((res, item) => res + item);//this -> new Number(1)
}
console.log(new Number(1).add(2,3,4,5));//15

//6
//不定参数&不定执行次数的加法器 累加器
function add(){
    var args = Array.prototype.slice.call(arguments);
    var fn = function(){
        args = args.concat(Array.prototype.slice.call(arguments));
        return fn;
    }
    fn.valueOf = fn.toString = function(){
        return args.reduce((res, item) => res+item);
    }
    return fn;
}
console.log(add(1));//1
console.log(add(1, 2, 3));//6
console.log(add(1,2)(3));//6
console.log(add(1)(2)(3));//6
console.log(add(1)(2)(3,4));//10

//7
function curry(){
    var args = Array.prototype.slice.call(arguments, 1);//slice(1)
    console.log(args);
}
curry(1,2,3);//[2,3]

//8
var divs = document.getElementsByTagName('div');
for (var i = 0, len = divs.length; i < len; i++) {
    divs[i].onclick = function() {
        console.log(i);
    };
}
for (var i = 0, len = divs.length; i < len; i++) {
    divs[i].onclick = (function(parm) {
        return function() {
            console.log(parm);
        };
    })(i);
}
for (var i = 0; i < divs.length; i++) {
    (function(parm){
        divs[parm].onclick=function(){
            console.log(parm);
        }
    })(i);
};
for (var i = 0, len = divs.length; i < len; i++) {
    divs[i].onclick = (function() {
        var res = i;
        return function(){
            console.log(res);
        }
    })();
}

//9
function f() {
    console.log("hehe");
}
function a(){
    console.log(f)
    f();
}
a();
//ƒ f() {console.log("hehe");}
//hehe

//10
function f(){
    console.log(this);
}
(function(){
    f();
}())
//window

//11
const f = {
    fn(){
        const a = () => {
            console.log(this);
        }
        a()
        const b = function(){
            console.log(this);
        }
        b()
    }
}
var d = f.fn.bind({age:18})
d();//{age:18} window
f.fn.bind({age:18})();//{age:18} window
f.fn.call({age:18});//{age:18} window

//12
const f = {
    fn(){
        const a = () => {
            console.log(this);
        }
        a()
        const b = function(){
            console.log(this);
        }
        b()
    }
}
var c = f.fn
console.log(c);//fn函数体

//13
var a = 1
function f(){
    if(false){
        var a = 2
    }
    console.log(a);
}
f();//undefined

//14
var a = 1
function f(){
    console.log(a);
    if(false){
        var a = 2
    }
}
f();//undefined

//15
(function(){
    console.log(this);
}())
//Window

//16
(function(){
    console.log(typeof arguments)
}());
//object
(function(){
    return typeof arguments;
})();
//"object"

//17
var y = 1, x = y = typeof x;
x;
// 结果：”undefined”
// 把上面的代码重写一下就是
var y=1;
y=typeof x;//x未定义 y是undefined
x=y
x

//18
//在非箭头函数下, this 指向调用其所在函数的对象,而且是离谁近就是指向谁
//箭头函数中的this指向的是定义时的this,而不是执行时的this
function fn(){
    setTimeout(function (){
        console.log(this);
    }, 1000);

    setTimeout(() => {
        console.log('2',this);
    },1000);
}
var obj = {a: 1};
fn.call(obj);
//Window
//2 {a: 1}

//19
//箭头函数体内没有arguments对象，如果要用，可以用Rest参数代替
const fn = (...arr) => arr;
console.log(fn(1, 2, 3, 4));//[1,2,3,4]

//20
(function(){
    if(1){
        console.log(1);
    }
})
//相当于(a) a.toString()，将括号中的内容转化为字符串
(function(){
	if(1){
		console.log(1);
	}
})()//1

//21
var name = 'wan';
var obj = {
	nama: 'shao',
	fn: function(){
		var that = this;
		this.name = 'bo';
		return function(){
			return that.name;
		}
	}
}
console.log(obj.fn().call(this))

//22、改变this指向
//函数上下文context：定义时上下文 运行时上下文 改变上下文
//call 需要把参数按顺序传递进去，而 apply 则是把参数放在数组里。
// 某个函数的参数数量是不固定的，因此要说适用条件的话，当你的参数是明确知道数量时用 call 。而不确定的时候用 apply，然后把参数 push 进数组传递进去。当参数数量不确定时，函数内部也可以通过 arguments 这个数组来遍历所有的参数。
func.call(this, arg1, arg2);
func.apply(this, [arg1, arg2])
//定义一个 log 方法，让它可以代理 console.log 方法
function log(msg)　{
	console.log(msg);
}
function log(){
	console.log.apply(console, arguments);
};
function log(){
	var args = Array.prototype.slice.call(arguments);//[].slice.call(arguments)
	args.unshift('带自定义前缀');
	console.log.apply(console, args);
	// console.log(args.join(' '))
};
//MDN的解释是：bind()方法会创建一个新函数，称为绑定函数，当调用这个绑定函数时，绑定函数会以创建它时传入 bind()方法的第一个参数作为 this，传入 bind() 方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数。
//多次bind无效，仅第一次有效。原因是，在Javascript中，多次 bind() 是无效的。更深层次的原因， bind() 的实现，相当于使用函数在内部包了一个 call / apply ，第二次 bind() 相当于再包住第一次 bind() ,故第二次以后的 bind 是无法生效的。
var bar = function(){
	console.log(this.x);
}
var foo = {
	x:3
}
var sed = {
	x:4
}
var func = bar.bind(foo).bind(sed);
func(); //3
var fiv = {
	x:5
}
var func = bar.bind(foo).bind(sed).bind(fiv);
func();//3
var obj = {
    x: 81,
};
var foo = {
    getX: function() {
        return this.x;
    }
}
console.log(foo.getX.bind(obj)());  //81
console.log(foo.getX.call(obj));    //81
console.log(foo.getX.apply(obj)); //81
/*
apply 、 call 、bind 三者都是用来改变函数的this对象的指向的；
apply 、 call 、bind 三者第一个参数都是this要指向的对象，也就是想指定的上下文；
apply 、 call 、bind 三者都可以利用后续参数传参；
bind 是返回对应函数，便于稍后调用；apply 、call 则是立即调用 。
*/
// call传入null/undefined值，this会指向window
var value = 'window';
var obj = {
	value: 'obj'
}
function show(num1, num2) {
	console.log(this.value);
	console.log(num1 + num2);
}
show(10,100); //window 110
show.call(obj,10,100); //obj 110
show.call(null,10,100); //window  110
show.apply(obj, [10, 100]);//obj 110
show.apply(null, [10, 100]);//window 110
//call的实现原理：将函数show设置为对象obj的属性；执行该函数；删除该函数
const obj = {
	a: 1,
	b: 2,
	show: function(num1, num2) {
		console.log(this.value);
		console.log(num1 + num2);
	}
};
Function.prototype._call = function() {
	var ctx = arguments[0] || window;
	ctx.fn = this;
	ctx.fn();
	delete ctx.fn;
}
//如何给一个函数传递不定参？ 或者说怎么把不定长的数组转换成多个参数传递给函数？？ 三种办法： eval、apply和es6 的解构语法
/*
eval('obj.fn('+ args +')');
obj.fn.apply(obj, args);
obj.fn(…args);//es6解构语法
*/
Function.prototype._call = function () {
	var ctx = arguments[0] || window;//如果第一个参数为null，this指向window
	var args = [];
	ctx.fn = this;
	for (var i = 1; i < arguments.length; i++) {
		args.push('arguments[' + i + ']');
	}
	var result = eval('ctx.fn(' + args + ')');//[1,2,3]+'' => 1,2,3 数组和字符串拼接调用了数组的toString方法 [1,2,3].toString()+''
	delete ctx.fn;
	return result;//函数调用是有返回值的
}
show._call(obj,1,12)//
Function.prototype._applay = function () {
	var ctx = arguments[0] || window;
	ctx.fn = this;
	var result;
	if(arguments[1]){
		var args = [];
		arguments[1].forEach((item,index)=>{
			args.push('arguments[1][' + index + ']')
		});
		result = eval('ctx.fn(' + args + ')');
	}else{
		result = ctx.fn();
	}
	delete ctx.fn;
	return result;
}
show._applay(obj,[1,12])
//bind
function foo(c, d) {
	this.b = 100
	console.log(this.a)
	console.log(this.b)
	console.log(c)
	console.log(d)
}
var func = foo.bind({a: 1}, '1st');// 我们将foo bind到{a: 1}
func('2nd'); // 1 100 1st 2nd
func.call({a: 2}, '3rd'); // 1 100 1st 3rd 即使再次call也不能改变this。
// 当 bind 返回的函数作为构造函数的时候，bind 时指定的 this 值会失效，但传入的参数依然生效。 所以使用func为构造函数时，this不会指向{a: 1}对象，this.a的值为undefined。如下
new func('4th'); //undefined 100 1st 4th
function foo(c, d) {
	this.b = 100
	console.log(this.a)
	console.log(this.b)
	console.log(c)
	console.log(d)
}
Function.prototype._bind = function (ctx) {
	if (typeof this !== "function")
		throw new TypeError('error');
	var self = this;
	var args = Array.prototype.slice.call(arguments, 1);
	const fn = function () {
		var arg_fn = Array.prototype.slice.call(arguments);
		// 返回函数的执行结果
		// 判断函数是作为构造函数还是普通函数
		// 构造函数this instanceof fn返回true，将绑定函数的this指向该实例，可以让实例获得来自绑定函数的值。
		// 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 ctx
		return self.apply(this instanceof fn ? this : ctx, args.concat(arg_fn));
	}
	var empty = function () {};// 创建空函数
	empty.prototype = this.prototype;// empty函数的prototype为绑定函数的prototype
	fn.prototype = new empty();// 返回函数的prototype等于empty函数的实例实现继承
	// 以上三句相当于Object.create(this.prototype)
	return fn;
}
var func = foo._bind({a: 1}, '1st');
func('2nd');  // 1 100 1st 2nd
func.call({a: 2}, '3rd'); // 1 100 1st 3rd
new func('4th');  //undefined 100 1st 4th

//23、bind http://www.cnblogs.com/heshan1992/p/6667596.html
//scene 1
var a = 1;
function Obj(){
    this.a = 2;
}
var obj = new Obj();
var abc = function (){
    console.log(this.a)
}
abc();//1
//scene 2
var a = 1;
function Obj(){
    this.a = 2;
}
var obj = new Obj();
var abc = (function (){
    console.log(this.a)
}).bind(obj)
abc();//2
//scene 3
var a = 1;
function Obj(){
    this.a = 2;
}
var obj = new Obj();
var abc = (function (b,c,d){
    console.log(this.a + b + c + d)
}).bind(obj)
abc(1,2,3);//8
//scene 4
Function.prototype._bind = function(){
    return this
}
var a = 1;
function Obj(){
    this.a = 2;
}
var obj = new Obj();
var abc = (function (b,c,d){
    console.log(this.a + b + c + d)
})._bind(obj)
abc(1,2,3);//7
//scene 5
var a = 1;
function Obj(){
    this.a = 2;
}
var obj = new Obj();
var abc = (function (b,c,d){
    console.log(this.a + b + c + d)
}).bind(obj)(1,2,3)//8
//scene 6
Function.prototype._bind = function(context){
    var self = this;
    return function(){
		return self.apply(context);
	};
};
var a = 1;
function Obj(){
    this.a = 2;
}
var obj = new Obj();
console.log(obj);//Obj {a: 2}
var abc = (function (b,c,d){
    console.log(this.a);//2
    console.log(b);//undefined
    console.log(this.a + b + c + d)//NaN
})._bind(obj)
abc(1,2,3)
//scene 7
Function.prototype._bind = function(context){
    var self = this;
    return function(){
        return self.apply(context,arguments);
    };
};
var a = 1;
function Obj(){
    this.a = 2;
}
var obj = new Obj();
var abc = (function (b,c,d){
    console.log(this.a + b + c + d)
})._bind(obj)//得到function(){return self.apply(context,arguments);};
abc(1,2,3)//8

//24
function sum(){
	var len = arguments.length,sum = 0;
	for(var i=0;i<len;i++){
		if(typeof arguments[i] == 'number'){
			sum += arguments[i];
		}
	}
	console.log(sum);
	return sum;
}
sum('a',10,3,'',4,5);

//25 记忆函数
/*
纯函数：只要是同一种输入就能得到唯一一个相同的结果的函数
记忆函数：当输入的参数不变时，我们就可以采用缓存的结果，当输入参数有所变化时才重新计算
通过闭包来缓存计算的参数和结果，通过参数的变化与否来决定是否重新计算
*/
//scene 1 缺点：原函数只能传递一个参数
function add(params){
	//这是一个纯函数
	//do something
}
function memorize(fn) {
	var cachedArg;
	var cachedResult;
	return function(arg) {
		if (cachedArg === arg) {
			console.log('memory');
			return cachedResult;
		}
		console.log('init');
		cachedArg = arg;
		cachedResult = fn(arg);
		return cachedResult;
	};
}
var newAdd = memorize(add);
newAdd('wan');//init
console.log('---')//---
newAdd('wan')//memory
console.log('---')
newAdd('shao')//init
console.log('---')
newAdd('shao')//memory
//scene 2 原函数能传递多个参数
function twoArrayIsEquel(arr01,arr02){
	if(arr01.length !== arr02.length){
		return false;
	}
	return arr01.every(function(item01,index01){
		return arr02.some(function(item02,index02){
			return item01 === item02;
		});
	});
}
function add(){
	//这是一个纯函数
	//do something
}
function memorize(fn) {
	var cachedArg;
	var cachedResult;
	return function() {
		var args = Array.prototype.slice.call(arguments)
		if (cachedArg === args) {
			console.log('memory');
			return cachedResult;
		}else{
			if(Array.isArray(cachedArg) && Array.isArray(args) && twoArrayIsEquel(cachedArg,args)){
				console.log('memory');
				return cachedResult;
			}
		}
		console.log('init');
		cachedArg = args;
		cachedResult = fn.apply(this,args);
		return cachedResult;
	};
}
var newAdd = memorize(add);
newAdd(1,2,3)
newAdd(1,2,3)
//scene 3
function factorial1(n){
	if(n === 0 || n === 1){
		return 1;//函数出口
	}
	return n*factorial1(n-1)
}
function memorize(fn){
	var cache = {};  //对象的查找速度比数组快，对象是key-value进行查找。
	return function() {
		var params = Array.prototype.join.call(arguments);  //使得params值唯一。
		if(cache[params]){
			console.log('memory');
			return cache[params];
		}else{
			console.log('init');
			cache[params] = fn.apply(this, arguments);
			return cache[params];
		}
	}
}
var newF = memorize(factorial1);//传入后，factorial就具有了函数记忆的功能。传入参数
newF(5);
newF(4);
newF(5);
newF(4);
//
function memorize(f){
	var cache = {}; //将值保存在闭包内
	return function(){
		//将实参转换为字符串形式，并将其用做缓存的键
		var key = arguments.length + Array.join.call(arguments,",");
		if(key in cache)
			return cache[key];
		else
			return cache[key] = f.apply(this,arguments);
	};

}

//26 函数重载 闭包实现重载
//一组具有相同名字、不同参数列表的函数（方法）
function addMethod(object, name, fn) {
	var old = object[name]; //把前一次添加的方法存在一个临时变量old里面
	object[name] = function() { // 重写了object[name]的方法
		// 如果调用object[name]方法时，传入的参数个数跟预期的一致，则直接调用
		if(fn.length === arguments.length) {
			return fn.apply(this, arguments);
			// 否则，判断old是否是函数，如果是，就调用old
		} else if(typeof old === "function") {
			return old.apply(this, arguments);
		}
	}
}

//27 节流函数-高触发频率事件:滚动事件 触摸事件
var scheduledAnimationFrame = false;
const onScroll = e => {
	if (scheduledAnimationFrame)
		return
	scheduledAnimationFrame = true
	window.requestAnimationFrame(timestamp => {
		scheduledAnimationFrame = false
		function a(timestamp){console.log(timestamp);}
	})
}
window.addEventListener('scroll', onScroll)

//28
var val = 'a'
function hehe(){
    console.log(val)
    var val = 'b'
    console.log(val)
}
hehe()


//currying作用 延迟计算 参数复用 动态生成函数
//延迟计算
// 不定执行次数 不定参数个数 求和
function currying(fn) {
    var args = [];//闭包
    return function () {
        if (arguments.length === 0) {
            return fn.apply(this, args);
        } else {
            Array.prototype.push.apply(args, [].slice.call(arguments));
            return arguments.callee;//函数本身
        }
    }
};
function mul() {
    var total = 0;
    for (var i = 0, c; c = arguments[i++];) {
        total += c;
    }
    return total;
}
var sum = currying(mul);
sum(1,2,3)(4)(5)(6,1);
console.log(sum());//22 空白调用时才是真正的计算
//参数复用
function curryingCheck(reg) {
    return function (str) {
        return reg.test(str);
    }
}
var isNumer = curryingCheck(/\d+/g);
var isString = curryingCheck(/[a-z]+/g)
console.log(isNumer('123')) //true
console.log(isString('wan'));//true
//compose函数是一个函数（函数只接受一个参数）的返回值作为另外一个函数的参数，将需要嵌套执行的函数平铺。
//calc1(calc2(calc3(d))) 可读性差
let calc1 = (x) => x + 1;
let calc2 = (x) => x + 2;
let calc3 = (x) => x + 3;
function compose(...funcs) {
    return function anonymous(val) {
        return funcs.reverse().reduce((num, item) => {
            if (funcs.length === 0) return val;
            if (funcs.length === 1) return funcs[0](val);
            return typeof num === 'function' ? item(num(val)) : item(num);
        });
    }
}
let result = compose(calc1, calc3, calc2);
console.log(result(0));

//将函数 arguments对象 转化为数组的方式
function foo() {
    Array.prototype.slice.call(arguments)
}
function foo() {
    [].slice.call(arguments);
}
function foo() {
    Array.from(arguments); // [ 'a', 'b', 'c' ]
}
function foo() {
    let args = [...arguments]; // [ 'a', 'b', 'c' ]
}

