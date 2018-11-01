//基础
//arr.reduce((res, item, index, self) => {},"resInit")//形参详解
//sort()方法会直接对Array进行修改，它返回的结果仍是当前Array：
var arr = [555,8,2,8,5,6,11]
arr.sort((a,b) => a-b)
console.log(arr);
var a1 = ['B', 'A', 'C'];
var a2 = a1.sort();
a1; // ['A', 'B', 'C']
a2; // ['A', 'B', 'C']
a1 === a2; // true, a1和a2是同一对象

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

//5、统计元素出现的个数
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

//6、统计数组中出现最多元素个数：返回该元素和个数
var arr = ['a','a','b','b','c','a'];
function moseEle(arr){
    var obj = {},num = 0,ele;
    arr.forEach((item,index) => {
        if(!obj[item])
            obj[item] = 1;
        else
            obj[item]++;
        if(obj[item] > num){
            num = obj[item];
            ele = item
        }
    })
    return "ele:" + ele + ", num:" + num;
}
console.log(moseEle(arr));

//7、统计数组中出现最多元素，极限情况，多个元素数量一样多：返回该元素和个数
var arr = ['a','b','b','c','a'];
function mostEle(arr){
    var obj = {},num = 0,mostTimes = 0;
    arr.forEach((item,index) => {
        if(!obj[item])
            obj[item] = 1;
        else
            obj[item]++;
        if(obj[item] > mostTimes){
            mostTimes = obj[item]
        }
    })
    Object.keys(obj).forEach((item,index)=>{
        if(obj[item] < mostTimes)
            delete obj[item]
    })
    return obj;
}
console.log(mostEle(arr));//{ a: 2, b: 2 }

//8、不定长度数组乱序化 长度为10000的数组测试 运行的毫秒数 new Date().getTime() Date.now()
var arr = [1,2,3,4,5,6,7,8,9,10,11];
//时间复杂度约为 O(n2)，splice()方法会遍历一次
function shuffle(arr){//10000 14ms
	var result = [];
	while(arr.length){
		var index = parseInt(Math.random()*(arr.length));//Math.random()  0 <= x < 1 16位小数
		result.push(arr.splice(index,1)[0]);
	}
	return result
}
//但是这不是真正意义上的完全乱序，一些需求中（比如抽奖）这样的写法会出大问题。
arr.sort(() => Math.random() > 0.5 ? -1 : 1);//10000 22ms
Array.prototype.sort.call(arr,() => Math.random() > 0.5 ? -1 : 1)
//
function disorder(arr){//10000 9ms
	if (!Array.prototype.shuffle) {
		Array.prototype.shuffle = function() {
			for(var index,tmp,len = this.length; len; index = parseInt(Math.random() * (--len)), tmp = this[len], this[len] = this[index], this[index] = tmp);
			return this
		};
	}
	arr.shuffle();
	// return arr.shuffle();
}
disorder(arr)
//演变 时间复杂度为 O(n)
function shuffle(arr){//10000 9ms
	for(var index,tmp,len = arr.length; len; index = parseInt(Math.random() * (--len)), tmp = arr[len], arr[len] = arr[index], arr[index] = tmp);
}
//演变 时间复杂度为 O(n)
function shuffle(arr){
	var index,tmp,len = arr.length;
	while (len > 2){//极限情况 剩下的2个元素进行交换 也需要随机交换
		index = parseInt(Math.random() * (--len));
		tmp = arr[len];
		arr[len] = arr[index];
		arr[index] = tmp;
	}
	Math.random() > 0.5 ? (tmp = arr[1],arr[1] = arr[0],arr[0] = tmp) : 0;
}
shuffle(arr)