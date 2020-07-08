/*
宏队列 微队列
https://www.cnblogs.com/ZavierTang/p/ZavierTang.html
event loop
事件循环执行顺序：
同步语句-本次事件循环全部微任务(如果有)
微任务-本次事件循环全部微任务(如果有)
宏任务-本次事件循环全部宏任务(如果有)
...

任务队列：宏任务队列和微任务队列，FIFO-先进先出
宏任务：setTimeout setInterval setImmediate I/O UI-rendering
微任务(在其所处的事件循环最后 && 事件循环进入下一个循环的阶段前执行)：process.nextTick Promise.then Object.observer Mutation.Observer

setImmediate和process.nextTick是Node.js提供的两个任务队列
setImmediate和setTimeout的执行顺序具有随机性
setImmediate()是将事件插入到事件队列尾部，主线程和事件队列的函数执行完成之后立即执行setImmediate指定的回调函数，和setTimeout(fn,0)的效果差不多，但是当他们同时在同一个事件循环中时，执行顺序是不定的。

js中为了防止线程阻塞，阻止全局代码的执行，衍生出很多异步执行解决方案，这些方案都会按需加载到指定的队列中，当全局队列执行完毕后，开始循环从 微队列->宏队列->微队列->宏队列...这种执行顺序执行下去

参考
https://segmentfault.com/a/1190000011198232
https://segmentfault.com/a/1190000013102056
https://www.jianshu.com/p/ada516ceb1da
*/

//some subject
//1
console.log(1);
setTimeout(function(){
	console.log(2)
	setTimeout(function(){
		console.log(3);
	},0)
	process.nextTick(()=>{
		console.log(4);//process.nextTick()方法将 callback 添加到"next tick 队列"。 一旦当前事件轮询队列的任务全部完成，在next tick队列中的所有callbacks会被依次调用。
		//这种方式不是setTimeout(fn, 0)的别名。它更加有效率。事件轮询随后的ticks 调用，会在任何I/O事件（包括定时器）之前运行。
	})
},100)
new Promise((resolve,reject)=>{
	console.log(5)
}).then(()=>{
	console.log(6)
})
setTimeout(function(){
	console.log(7)
	setTimeout(function(){
		console.log(8);
	},0)
},100)
console.log(10);
//1 5 10 2 7 4 3 8

//2
console.log(1);
setTimeout(function(){
	console.log(2)
	setTimeout(function(){
		console.log(3);
	},0)
	process.nextTick(()=>{
		console.log(4);
	})
},100)
new Promise((resolve,reject)=>{
	console.log(5)
	resolve()
}).then(()=>{
	console.log(6)
})
setTimeout(function(){
	console.log(7)
	setTimeout(function(){
		console.log(8);
	},0)
},100)
console.log(10);
//1 5 10 6 2 7 4 3 8

//3
console.log(1);
new Promise((resolve, reject) => {
	console.log(2);
	setTimeout(() => {
		resolve('result');
		console.log(3);
	}, 100)
	process.nextTick(()=>{
		console.log(4);
	})
}).then(()=>{
	console.log(5)
}).catch(()=>{
	console.error(6)
});
console.log(7);
//1 2 7 4 3 5

//4
function a(){
	console.log("a");
}
function b(){
	console.log("b");
}
function c(){
	setTimeout(a, 0);
	Promise.resolve().then(b);
	console.log("c");
}
c();//c b a

//5
const promise = new Promise(function(resolve, reject) {
	if (true){
		resolve("success");
	} else {
		reject("filure");
	}
});
function a(param = 1){
	console.log(param);
}
function b(param = 2){
	console.log(param);
}
promise.then(a,b);//success
Promise.resolve().then(a,b);//1
Promise.reject().then(a,b);//2

//6
function timeout(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, ms, 'done');
	});
}
timeout(100).then((value) => {
	console.log(value);
});
//done

//7
let promise = new Promise(function(resolve, reject) {
	console.log('Promise');
	resolve();
});
promise.then(function() {
	console.log('resolved.');
});
console.log('Hi!');
// Promise
// Hi!
// resolved

//8
function a(paras){
	console.log(paras);
}
function b(paras){
	console.log(paras);
}
Promise.reject(new Error('Could not load image at ')).then(a,b);
//Error: Could not load image at

//9
//Promise.prototype的then方法可以链式调用，如果前者的then方法返回promise实例，后者直接链式使用then
//一般来说，不要在then方法里面定义 Reject 状态的回调函数（即then的第二个参数），而是使用catch方法。
new Promise((resolve, reject) => {
	console.log(1);
	resolve(2)
}).then((params) => {
	return new Promise((resolve, reject) => {
		console.log(params);
		reject(3);
	});
}, () => {}).then((params) => {
	console.log(4);
}, (params) => {
	console.log(5);
	console.log(params);
});
//1 2 5 3

//10
//Promise.all() 将多个 Promise 实例，包装成一个新的 Promise 实例,只有全部resolve才会触发resolve,当一个reject就会触发reject
//Promise.race([p1, p2, p3]) 最先改变的传给then
// 生成一个Promise对象的数组
const promises = [1,2,3].map(function (id) {
	return new Promise((resolve, reject) => {resolve(id)});
});
console.log(promises);//[promise{1},promise{2},promise{3}]
Promise.all(promises).then(function (posts) {
	console.log(posts);//[1,2,3]
}).catch(function(reason){});

//11
var p1 = new Promise(function(resolve,reject){
	console.log(1)
	resolve(2)
})
var p2 = new Promise(function(resolve,reject){
	console.log(3)
	resolve(p1)//resolve函数的参数除了正常的值以外，还可能是另一个 Promise 实例 这时p1的状态就会传递给p2，也就是说，p1的状态决定了p2的状态 执行了p1的resolve(2)
})
p1.then((res)=>{
	console.log(4)
	console.log(res)
})
p2.then((res)=>{
	console.log(5)
	console.log(res)
})
console.log(6);//1 3 6 4 2 5 2

//12 定时器 闭包
//https://blog.csdn.net/weixin_38409093/article/details/78604187 dom元素绑定的几种方法
for(var i = 0;i<5;i++){
	setTimeout(function(){console.log(i)},1000*i);//每间隔一秒打印一个5，打印五次
}
for(var i = 0;i<5;i++){
	setTimeout(function(){console.log(i)},1000);//一秒后打印5个5
}
for(var i = 0;i<5;i++){
	setTimeout((function(res){
		return function(){
			console.log(res);
		}
	})(i),1000);//一秒后打印0 1 2 3 4
}
for(var i = 0;i<5;i++){
	setTimeout((function(res){//传参的自执行匿名函数
		return function(){
			console.log(res);
		}
	})(i),1000*i);//每一秒后打印一个数字，总共打印5次，分别是：0 1 2 3 4
}
for(var i = 0;i<5;i++){
	setTimeout((function(){//不传参的自执行匿名函数
		var res = i;
		return function(){
			console.log(res)
		}
	})(),1000*i);//每一秒后打印一个数字，总共打印5次，分别是：0 1 2 3 4
}
for(var i = 0;i<5;i++){
	setTimeout((function(res){
		return function(){
			console.log(res);
		}
	})(i),1000);//一秒后 0 1 2 3 4
}
for(var i = 0;i<5;i++){
	function foo(res){
		setTimeout(function(){
			console.log(res)
		},1000*i);//每一秒后打印一个数字，总共打印5次，分别是：0 1 2 3 4
	}
	foo(i);
}

//13
//scene 1
console.log(1)//当前队列
new Promise(function(resolve,reject){
	console.log(2)//当前队列
	resolve()
	console.log(3);//当前队列
}).then(function(){
	console.log(4);//微队列
})
setTimeout(function(){console.log(5)},0)//宏队列
console.log(6);//当前队列
// 1 2 3 6 4 5
//scene 2
console.log(1)
new Promise(function(resolve,reject){
	console.log(2)
	resolve()
	console.log(3);
	process.nextTick(()=>{console.log(7)})
}).then(function(){
	console.log(4);
})
setTimeout(function(){console.log(5)},0)
console.log(6);//1 2 3 6 7 4 5
//scene 3
console.log(1)
new Promise(function(resolve,reject){
	console.log(2)
	resolve()
	console.log(3);
	process.nextTick(()=>{console.log(7)})
}).then(function(){
	console.log(4);
	process.nextTick(()=>{console.log(8)})
})
setTimeout(function(){console.log(5)},0)
console.log(6);//1 2 3 6 7 4 8 5
//scene 4
console.log(1)
new Promise(function(resolve,reject){
	process.nextTick(()=>{console.log(9)})
	console.log(2)
	resolve()
	console.log(3);
	process.nextTick(()=>{console.log(7)})
}).then(function(){
	console.log(4);
	process.nextTick(()=>{console.log(8)})
})
setTimeout(function(){console.log(5)},0)
console.log(6);//1 2 3 6 9 7 4 8 5
//scene 5
console.log(1)
new Promise(function(resolve,reject){
	process.nextTick(()=>{console.log(9)})
	console.log(2)
	resolve()
	console.log(3);
	process.nextTick(()=>{console.log(7)})
}).then(function(){
	process.nextTick(()=>{console.log(10)})
	console.log(4);
	process.nextTick(()=>{console.log(8)})
})
setTimeout(function(){console.log(5)},0)
console.log(6);//1 2 3 6 9 7 4 10 8 5
//scene 6
console.log(1)
new Promise(function(resolve,reject){
	process.nextTick(()=>{console.log(9)})
	console.log(2)
	resolve()
	console.log(3);
	process.nextTick(()=>{console.log(7)})
}).then(function(){
	process.nextTick(()=>{console.log(10)})
	console.log(4);
	process.nextTick(()=>{console.log(8)})
})
setTimeout(function(){
	process.nextTick(()=>{console.log(11)})
	console.log(5)
},0)
console.log(6);//1 2 3 6 9 7 4 10 8 5 11
//scene 7
console.log(1)
new Promise(function(resolve,reject){
	process.nextTick(()=>{console.log(9)})
	console.log(2)
	resolve()
	console.log(3);
	process.nextTick(()=>{console.log(7)})
}).then(function(){
	process.nextTick(()=>{console.log(10)})
	console.log(4);
	process.nextTick(()=>{console.log(8)})
})
setTimeout(function(){
	process.nextTick(()=>{console.log(11)})
	console.log(5)
	process.nextTick(()=>{console.log(12)})
},0)
console.log(6);//1 2 3 6 9 7 4 10 8 5 11 12
//scene 8
console.log(1)
new Promise(function(resolve,reject){
	process.nextTick(()=>{console.log(9)})
	console.log(2)
	resolve()
	console.log(3);
	process.nextTick(()=>{console.log(7)})
	setTimeout(function(){console.log(13)},0)
}).then(function(){
	process.nextTick(()=>{console.log(10)})
	console.log(4);
	process.nextTick(()=>{console.log(8)})
})
setTimeout(function(){
	process.nextTick(()=>{console.log(11)})
	console.log(5)
	process.nextTick(()=>{console.log(12)})
},0)
console.log(6);//1 2 3 6 9 7 4 10 8 13 5 11 12
//9
console.log(1)
new Promise(function(resolve,reject){
	process.nextTick(()=>{console.log(9)})
	console.log(2)
	resolve()
	console.log(3);
	process.nextTick(()=>{console.log(7)})
	setTimeout(function(){console.log(13)},0)
}).then(function(){
	process.nextTick(()=>{console.log(10)})
	console.log(4);
	process.nextTick(()=>{console.log(8)})
	setTimeout(function(){console.log(14)},0)
})
setTimeout(function(){
	process.nextTick(()=>{console.log(11)})
	console.log(5)
	process.nextTick(()=>{console.log(12)})
},0)
console.log(6);//1 2 3 6 9 7 4 10 8 13 5 14 11 12
//10
console.log('1===>全局队列script')
setTimeout(function(){
	console.log('2===>timeout1')
	new Promise(function(resolve){
		console.log('3===>timeout1_promise')
		resolve()
	}).then(function(){
		console.log('4===>timeout1_promise_then')
	})
},2000)
for(var i=1;i<=5;i++){
	setTimeout(function(){
		console.log('5===>timeout2='+i)
	},i*1000)
	console.log('6===>全局队列script='+i)
}
new Promise(function(resolve){
	console.log('7===>promise1')
	resolve()
}).then(function(){
	console.log('8===>then1')
})
setTimeout(function(){
	console.log('9===>timeout3')
	new Promise(function(resoleve){
		console.log('10===>timeout3_promise')
		resoleve()
	}).then(function(){
		console.log('11===>timeout3_promise_then')
	})
},1000)
new Promise(function(resoleve){
	console.log('12===>promise2')
	resoleve()
}).then(function(){
	console.log('13===>promise2_then2')
})
var interval = setInterval(function(){
	console.log('15===>setInterval')
	new Promise(function(resoleve){
		console.log('16===>setinterval_promise')
		resoleve()
	}).then(function(){
		console.log('17===>setinterval_promise_then')
	})
},1000)
setTimeout(function(){
	clearInterval(interval)
},1000)
console.log('18===>全局队列script')

/*
1===>全局队列script
6===>全局队列script=1
6===>全局队列script=2
6===>全局队列script=3
6===>全局队列script=4
6===>全局队列script=5
7===>promise1
12===>promise2
18===>全局队列script

8===>then1
13===>promise2_then2

5===>timeout2=6
9===>timeout3
10===>timeout3_promise

15===>setInterval
16===>setinterval_promise
11===>timeout3_promise_then
17===>setinterval_promise_then
2===>timeout1
3===>timeout1_promise
4===>timeout1_promise_then
5===>timeout2=6
5===>timeout2=6
5===>timeout2=6
5===>timeout2=6
*/
//11
setTimeout(() => {
	console.log('timeout0');
	process.nextTick(() => {
		console.log('nextTick1');
		process.nextTick(() => {
			console.log('nextTick2');
		});
	});
	process.nextTick(() => {
		console.log('nextTick3');
	});
	console.log('sync');
	setTimeout(() => {
		console.log('timeout2');
	}, 0);
}, 0);
//timeout0 sync nextTick1 nextTick3 nextTick2 timeout2
