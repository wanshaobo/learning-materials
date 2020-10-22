//1
var a = {}, b = '123', c = 123;
a[b] = 'b';
a[c] = 'c';
console.log(a[b]);//c
console.log(a[c]);//c

var a = {};
var b = Symbol('123');
var c = Symbol('123');
a[b] = 'b';
a[c] = 'c';
console.log(b);//Symbol(123)
console.log(c);//Symbol(123)
console.log(a[b]);//b
console.log(a[c]);//c

var a = {};
var b = {key:'123'};
var c = {key:'456'};
a[b] = 'b';
a[c] = 'c';
console.log(a);//{'[object Object]': 'c'}
console.log(a[b]);//c
console.log(a[c]);//c

var a = new Map(), b = '123', c = 123;
a[b] = 'b';
a[c] = 'c';
console.log(a[b]);//c
console.log(a[c]);//c

var a = new Map();
var b = Symbol('123');
var c = Symbol('123');
a[b] = 'b';
a[c] = 'c';
console.log(b);//Symbol(123)
console.log(c);//Symbol(123)
console.log(a[b]);//b
console.log(a[c]);//c

var a = new Map();
var b = {key:'123'};
var c = {key:'456'};
a[b] = 'b';
a[c] = 'c';
console.log(a);//Map {'[object Object]': 'c'}
console.log(a[b]);//c
console.log(a[c]);//c

//2
function Foo(){
    Foo.a = function(){
        console.log(1);
    }
    this.a = function(){
        console.log(2);
    }
}
Foo.prototype.a = function(){
    console.log(3);
}
Foo.a = function(){
    console.log(4);
}
Foo.a();//4
let obj = new Foo();
obj.a();//2
Foo.a();//1
//让 obj.x 为100 obj.x = 100; Foo.prototype.x = 100;
//让 Foo.y 为200 Foo.y = 200; Object.prototype.y = 200;

//3
async function async1(){
    console.log(1);
    await async2();
    console.log(2);
}
async function async2(){
    console.log(3);
}
console.log(4);
setTimeout(()=>{
    console.log(5);
    Promise.resolve().then(()=>{
        console.log(6);
    });
},0);
setTimeout(()=>{
    console.log(7);
    Promise.resolve().then(()=>{
        console.log(8);
    });
},0);
async1();
new Promise((resolve)=>{
    console.log(9);
    resolve();
}).then(()=>{
    console.log(10);
});
console.log(11);
//node环境 4 1 3 9 11 10 2 5 7 6 8
//浏览器环境 4 1 3 9 11 2 10 5 6 7 8

//4
class Example extends React.Component{
    constructor(){
        super();
        this.state = {
            val: 0
        }
    }
    componentDidMount(){
        //同步语句中只有最后一个 setState 有效
        this.setState({val: this.state.val+1});//无效
        console.log(this.state.val);//0
        this.setState({val: this.state.val+2});//无效
        console.log(this.state.val);//0
        this.setState({val: this.state.val+3});//无效
        console.log(this.state.val);//0
        setTimeout(()=>{
            //异步语句中每个 setState 有效
            this.setState({val: this.state.val+4});
            console.log(this.state.val);//11
            this.setState({val: this.state.val+5});
            console.log(this.state.val);//16
            this.setState({val: this.state.val+6});
            console.log(this.state.val);//22
        },1000);
        this.setState({val: this.state.val+7});//生效
        console.log(this.state.val);//0
    }
    render(){
        return null;
    }
}

//5
//合并有序递增数组，保持原数组元素顺序，时间复杂度O(n)
let arr1 = [1,5];
let arr2 = [2,5,6,8];
function mergeOrder(arr1,arr2){
    return [...arr1,...arr2].sort();//arr1.concat(arr2).sort();
}
function mergeOrder(arr1,arr2){
    let arr1Index = 0;
    let arr2Index = 0;
    let result = [];
    for(let i=0;i<arr1.length+arr2.length;i++){
        if(arr1[arr1Index] == undefined){
            result.push(arr2[arr2Index++]);
            continue;
        }
        if(arr2[arr2Index] == undefined){
            result.push(arr1[arr1Index++]);
            continue;
        }
        if(arr1[arr1Index] >= arr2[arr2Index]){
            result.push(arr2[arr2Index++]);
        }else{
            result.push(arr1[arr1Index++]);
        }
    }
    return result
}
function mergeOrder(arr1, arr2) {
    const len = [...arr1, ...arr2].length
    let arr1Index = 0
    let arr2Index = 0
    let result = []

    for (let i = 0; i < len; i++) {
        if (arr1[arr1Index] === undefined) {
            result.push(...arr2.splice(arr2Index))
            break
        }

        if (arr2[arr2Index] === undefined) {
            result.push(...arr1.splice(arr1Index))
            break
        }

        if (arr1[arr1Index] < arr2[arr2Index]) {
            result.push(arr1[arr1Index++])
        } else if (arr1[arr1Index] > arr2[arr2Index]) {
            result.push(arr2[arr2Index++])
        } else {
            result.push(arr1[arr1Index++], arr2[arr2Index++])
        }
    }

    return result
}
console.log(mergeOrder(arr1, arr2));;//[1,2,5,5,6,8]

//6
//F(1)=1，F(2)=1, F(n)=F(n - 1)+F(n - 2)（n ≥ 3，n ∈ N*）
//打印斐波那契数列数列前十项，每秒钟打印一项 1、1、2、3、5、8、13、21、34、55
//var和let的区别
function fibonacci(n){
    if(n <= 0)
        return 0
    if(n == 1 || n == 2)
        return 1
    return fibonacci(n-1) + fibonacci(n-2)
}
for(let i=1;i<=10;i++){
    setTimeout(function(){
        console.log(fibonacci(i));
    },1000*i)
}
for(var i=1;i<=10;i++){
    (function(i){
        setTimeout(function(){
            console.log(fibonacci(i));
        },1000*i);
    })(i)
}