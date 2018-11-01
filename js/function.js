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
//不定参数&不定执行次数的加法器
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
    divs[i].onclick = (function(i) {
        return function() {
            console.log(i);
        };
    })(i);
}
for (var i = 0; i < divs.length; i++) {
    (function(i){
        divs[i].onclick=function(){
            console.log(i);
        }
    })(i);
};

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



//百度 js高阶函数

