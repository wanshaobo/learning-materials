/*快手*/
//1、HTML常见行内元素有哪些？block，inline-block，inline三者之间有什么区别？

//2、HTML5新增了哪些标签，input新增了哪些类型？

//3、什么是BFC(Block Formatting Context)，什么情况下会产生BFC？

//4、写CSS实现左右两列登高容器布局，要求元素实际占用的高度以两列中较高的为准(如果左侧元素内容高度为100px，右侧元素内容高度为200px)，则左右容器实际占用高度都为200px

//5、请使用CSS实现三角形，圆形

//6、写出程序运行结果
//scene 1
console.log(typeof(null));//object
console.log(typeof(undefined));//undefined
console.log(typeof(NaN));//number
console.log(NaN == undefined);//false
console.log(1+2+'3'+4);//334
var str = '12345f'
//console.log(str++);//NaN
//console.log(+'12345');//12345 string -> number
console.log(typeof(str++))//自增自减运算符优先级最高 number
console.log('a' == new String('a'));//true
console.log('a' === new String('a'));//false
//scene 2
var x = 1,y = 0,z = 0;
var add = function(x){
    return x = x + 1;//此时只返回等号左边被计算的形参，传入的实参x并没有被赋值(更改)
}
y = add(x);//执行的是var add
function add(x){//函数声明提前，且早于自变量var add声明的匿名函数，导致var add实际生效
    return x = x + 3
}
z = add(x);//执行的是var add
console.log(x,y,z);//1 2 2
//scene 3
var num = 1;//4
var myObject = {
    nmu:2,//3
    add:function(){
        this.num = 3;
        (function(){//自执行函数作用域为window
            console.log(this.num);
            this.num = 4;
        })();
        console.log(this.num);
    },
    sub:function(){
        console.log(this.num);
    }
}
myObject.add();//1 3
console.log(myObject.num);//3
console.log(num);//4
var sub = myObject.sub;
sub();//4
//1 3 3 4 4
//scene 4
for(var i=0;i<3;i++){
    document.body.addEventListener('click',function(){console.log(i)})
}
document.body.dispatchEvent(new MouseEvent('click',{
    bubbles:true,
    cancelable:true,
    view: window
}))
//3 3 3
for(var i=0;i<3;i++){
    document.body.addEventListener('click',function(item){
        return function(){
            console.log(item)
        }
    }(i))
}
for(var i=0;i<3;i++){
    document.body.addEventListener('click',function(){
        var item = i;
        return function(){
            console.log(item)
        }
    }())
}
//0 1 2
// todo 不用闭包如何实现 0 1 2


//7、JS中new操作符具体做了什么？请用代码解释
var obj = {};
obj.__proto__ = Array.prototype //原型链 obj --> Array.prototype --> Object.prototype --> null
Array.call(obj);//使用新对象调用构造函数，构造函数中的this被指向新实例对象
//return obj

//8、请列出至少两种JS继承方式的实现方案

//9、数组扁平化
var arr = [1,[2,[3,4,2],2],5,[6]]
function flatten(arr){
    return arr.reduce((res,item,index,self) => res.concat(Array.isArray(item) ? flatten(item) : item), []);
}
console.log(flatten(arr))
//todo 不用递归如何实现
//递归return 算法精简

//10、请实现一个querystring的序列化函数，stringfy()
var obj1 = {a:1,b:2}
function stringfy(obj){
    var res = '';
    for(var key in obj){
        res += key + '=' + obj[key] + '&'
    }
    return res.substr(0, res.length-1)
}
console.log(stringfy(obj1));//a=1&b=2
JSON.stringify({a: 1, b: {c: 2}});//"{"a":1,"b":{"c":2}}"
var obj1 = {a:1,b:{c:2}}//todo 

//11、写出下面2段代码的执行结果
console.log('A');
var promise = new Promise((resolve,reject)=>{
    console.log('C');
    setTimeout(()=>{
        console.log('D');
        //下面这三条语句是同步的，等执行完之后，才会执行then回调
        resolve();//只能设置一次promise的状态，设置为resolve之后，下面两条语句无法改变promise的实例，同时下面两条语句没有任何意义，执行之后不会触发then回调
        reject();
        resolve()
    },10);
    setTimeout(()=>{console.log('H');},0);
});
promise.then((res)=>{//resolve回调可以绑定多个函数，都可以执行
    console.log('E');
});
promise.then((res)=>{//resolve回调可以绑定多个函数，都可以执行
    console.log('F');
});
promise.catch((res)=>{
    console.log('G');
});
console.log('B');
//A C B H D E F