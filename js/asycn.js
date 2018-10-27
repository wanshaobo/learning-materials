//事件循环队列中 Promise的任务会在当前事件循环末尾中执行，而setTimeout中的任务是在下一次事件循环执行
// Promise.resolve().then(b);
// process.nextTick();
// setTimeout(a, 0);

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