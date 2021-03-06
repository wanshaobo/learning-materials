//es6学习记录
//https://segmentfault.com/a/1190000002904199
//http://blog.csdn.net/m0_37576830/article/details/78676107http://blog.csdn.net/m0_37576830/article/details/78676107

//1.默认参数-直接把默认值放在函数声明里
var link = function(height = 50, color = 'red', url = 'http://azat.co') {
    //
}

//2.模板对象
var name = 'Your name is ' + first + ' ' + last + '.';
var url = 'http://localhost:3000/api/messages/' + id;

var name = `Your name is ${first} ${last}. `;
var url = `http://localhost:3000/api/messages/${id}`;

//3.多行字符串
var name = 'w'+
        's'+
        'b';
var name = `w
s
b`;

//4.解构赋值
//对象
var wanshaobo = {name:'wsb',age:28};
var {name,age} = wanshaobo
//数组
var arr = [1,2,3];
var [a,b,c] = arr

//5.增强的对象字面量

//6.箭头函数
/*
箭头函数有几个使用注意点。
（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
（4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
上面四点中，第一点尤其值得注意。this对象的指向是可变的，但是在箭头函数中，它是固定的。
*/
//rest参数
var sum = (...rest)=>{
	console.log(rest)
}
sum(1,2,3,4);//[1, 2, 3, 4]

//7.Promises
//下面是一个简单的用setTimeout()实现的异步延迟加载函数:
setTimeout(function(){
    console.log('Yay!');
}, 1000);
//用promise重写实现的异步延迟加载函数:
var wait1000 =  new Promise(function(resolve, reject) {
    setTimeout(resolve, 1000);
}).then(function() {
    console.log('Yay!');
});
//或者用ES6的箭头函数：
var wait1000 =  new Promise((resolve, reject)=> {
        setTimeout(resolve, 1000);
}).then(()=> {
    console.log('Yay!');
});

var wait1000 =  ()=> new Promise((resolve, reject)=> {setTimeout(resolve, 1000)});
wait1000().then(function() {
        console.log('Yay!')
        return wait1000()
    }).then(function() {
        console.log('Wheeyee!')
    });

//8.块作用域和构造let和const

//9. Classes （类）in ES6

//10. Modules （模块）in ES6
module.exports = {
    port: 3000,
    getAccounts: function() {}
}
//在ES5中，main.js需要依赖require(‘module’) 导入module.js：
var service = require('module.js');
console.log(service.port); // 3000
//但在ES6中，我们将用export and import。例如，这是我们用ES6 写的module.js文件库：
export var port = 3000;
export function getAccounts(url) {}
//如果用ES6来导入到文件main.js中，我们需用import {name} from ‘my-module’语法，例如：
import {port, getAccounts} from 'module';
//或者我们可以在main.js中把整个模块导入, 并命名为 service：
import * as service from 'module';
console.log(service.port); // 3000

//11.变量声明
var a = 1;
var a = 1;//不会报错
let a = 1;
let a = 1;//报错
//let声明的变量，只有在let命令所在的代码块内有效。适用范围for循环，没有变量提升
let a = 0;
const b = 0;
//var声明的变量，代码块外可以访问；变量提升，变量可以在声明之前使用，为undefined
var c = 0;
//es6
//let命令；块级作用域(es5只有全局作用域和函数作用域)；const命令声明只读常量，指向的那个内存地址不得改动
//ES6 声明变量的六种方法-ES5 只有两种声明变量的方法：var命令和function命令。ES6 除了添加let和const命令，后面章节还会提到，另外两种声明变量的方法：import命令和class命令。所以，ES6 一共有 6 种声明变量的方法。
//数组和对象的解构赋值let [head, ...tail] = [1, 2, 3, 4];
//模板字符串
//函数参数默认值，箭头函数
//柯里化函数求和求积
function curryingSum (a) {
	return function (b) {
		return function (c) {
			return a+b+c;
		};
	};
}

//12、生成值和地址都不可变数组和对象

//13 map set

// Promise原理与实现 https://www.jianshu.com/p/b4f0425b22a1
Promise.all = function(promises){
    return new Promise((resolve,reject)=>{
        let counter = 0;
        let result = new Array(promises.length);
        promises.forEach((promise,index)=>{
            Promise.resolve(promise).then((value)=>{
                counter++;
                result[index] = value;
                if(counter == promises.length){
                    resolve(result);
                }
            },(reason)=>{
                reject(reason);
            })
        })
    });
}
Promise.race = function(promises){
    return new Promise((resolve,reject)=>{
        promises.forEach((promise)=>{
            Promise.resolve(promise).then((value)=>{
                resolve(value);
            },(reason)=>{
                reject(reason);
            })
        })
    });
}
Promise.allSettled = function(promises){
    return new Promise((resolve,reject)=>{
        let counter = 0;
        let result = new Array(promises.length);
        promises.forEach((promise,index)=>{
            Promise.resolve(promise).then((value)=>{
                counter++;
                result[index] = {status:"fulfilled",value};
                if(counter == promises.length){
                    resolve(result);
                }
            },(reason)=>{
                counter++;
                result[index] = {status:"rejected",reason};
                if(counter == promises.length){
                    resolve(result);
                }
            })
        })
    });
}