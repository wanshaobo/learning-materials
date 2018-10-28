//
//arr.reduce((res, item, index, self) => {},"resInit")//形参详解

//1、判断数组是数组
var arr = [1,2,3];
console.log(Array.isArray(arr));
console.log(arr instanceof Array);
console.log(arr.constructor === Array);
console.log(Object.prototype.toString.call(arr) === '[object Array]');//‘[object Array]’

//2、数字转字符串
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr02 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = arr.map(String);
console.log(result);//[ '1', '2', '3', '4', '5', '6', '7', '8', '9' ]
//求奇偶数
var r = arr.filter((element, index, self) => element%2 != 0);
console.log(r);//[ 1, 3, 5, 7, 9 ]
//求奇偶数
var s = Array.prototype.filter.call(arr,(ele, index, arro2) => ele%2 == 0)
console.log(s);//[ 2, 4, 6, 8 ]

//3、去重
var arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
var r = arr.filter((element, index, self) => self.indexOf(element) === index);
console.log(r);



//4、扁平化
//Number类型的数组
var arr = [[1,2,3],[4,5,6],7,8,9]
console.log(arr.toString().split(',').map( item => parseInt(item)));//split把字符串分割为字符串数组。
//String类型的数组
var arr = [['a','b','c'],['d','e','f'],'g','h','i']
console.log(arr.toString().split(','));//split把字符串分割为字符串数组。
//引用类型的数组
function flatten(arr){
    var res = [];
    arr.forEach((item, index, self) => {
        if(Array.isArray(item)){
            res = res.concat(flatten(item))
        }else{
            res.push(item)
        }
    });
    return res
}
function flatten(arr){
    return arr.reduce((res,item) => res.concat(Array.isArray(item) ? flatten(item) : item),[]);
}
var arr = [[{a:1},{b:2},{c:3}],[{d:4}],{e:5}]
console.log(flatten(arr));


//sort()方法会直接对Array进行修改，它返回的结果仍是当前Array：
var a1 = ['B', 'A', 'C'];
var a2 = a1.sort();
a1; // ['A', 'B', 'C']
a2; // ['A', 'B', 'C']
a1 === a2; // true, a1和a2是同一对象

//统计元素出现的个数
// var arr = ['a','a','b','b','c','a'];
function statisticsEle(arr){
    var obj = {},num = 0,ele;
    arr.forEach((item,index) => {
        if(!obj[item])
            obj[item] = 1;
        else
            obj[item]++;
    })
    return obj;
}
console.log(statisticsEle(arr));

//数组中最多的元素，极限情况 多个元素数量一样多
var arr = [1,2,3,4,4,4]
function moseEle(arr){
    var obj = {},num = 0,ele;
    arr.forEach((item,index) => {
        if(!obj[item])
            obj[item] = 1;
        obj[item]
    })
    console.log(obj);
}