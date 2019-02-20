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
//类（伪）数组使用数组方法
Array.prototype.slice.call(document.getElementsByTagName("*"));

//0、实现原生push方法
Array.prototype._push = function(){
	for(var i=0,len=arguments.length; i<len; i++){
		this[this.length] = arguments[i];
	}
	return this.length;
}
Array.prototype._push = function(){
	var args = Array.prototype.slice.call(arguments);
	var _len = this.length;
	for(var i=0,len=args.length; i<len; i++){
		this[_len+i] = args[i];
	}
	return this.length;
}
var arr = [1,2,3]
console.log(arr._push(4,5,6));//6
console.log(arr);//[ 1, 2, 3, 4, 5, 6 ]

//1、判断数组是数组
var arr = [1,2,3];
console.log(Array.isArray(arr));
console.log(arr instanceof Array);
console.log(arr.constructor === Array);
console.log(Object.prototype.toString.call(arr) === '[object Array]');//‘[object Array]’
Array.prototype.isPrototypeOf([]);//Array是不是[]的原型链

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
var arr = [1,1,'1','1',0,0,'0','0','true','true',true,true,false,false,'false','false','undefined','undefined',undefined,undefined,null,null,'null','null',NaN,NaN,'NaN','NaN'];
//schme 0 api法 时间自由度：未知 兼容NaN
console.log(Array.from(new Set(arr)));//[1, "1", 0, "0", "true", true, false, "false", "undefined", undefined, null, "null", NaN, "NaN"]
console.log([...new Set(arr)]);//扩展运算符[1, "1", 0, "0", "true", true, false, "false", "undefined", undefined, null, "null", NaN, "NaN"]
//schme 1 对象键值法 时间自由度：O(n*2) 兼容NaN
function unique(arr){
	var obj = {}, res = [];
	for (var i=0,len=arr.length; i<len; i++) {
		var item = arr[i];
		var type = typeof item;
		if (!obj[item]) {//obj[item]会调用item的toString()，导致obj[1] --> obj['1']
			obj[item] = [type];
			res.push(item);
		} else if (obj[item].indexOf(type) == -1) {//obj[item].indexOf()不会调用item的toString()
			obj[item].push(type);
			res.push(item);
		}
	}
	return res;
}
console.log(unique(arr));//[1, "1", 0, "0", "true", true, false, "false", "undefined", undefined, null, "null", NaN, "NaN"]
//schme 2 时间自由度：O(n*2) 兼容NaN
function unique(arr){
	var res = [],flag = true;
	for(var i=0,len=arr.length;i<len;i++){
		if(arr[i] === arr[i]){
			(res.indexOf(arr[i]) == -1) ? res.push(arr[i]) : null;
		}else{
			(flag && res.indexOf(arr[i]) == -1) ? res.push(arr[i]) : null;
			flag = false;
		}
	}
	return res
}
console.log(unique(arr));//[1, "1", 0, "0", "true", true, false, "false", "undefined", undefined, null, "null", NaN, "NaN"]
//schme 3 缺点：时间自由度：O(n*2) 无法筛选出NaN
arr.indexOf(NaN);//-1
var r = arr.filter((element, index, self) => self.indexOf(element) === index);
console.log(r);//[1, "1", 0, "0", "true", true, false, "false", "undefined", undefined, null, "null", "NaN"]
//schme 4 对象法，不能区分string 和 真值，比如"undefined"  undefined
function unique(arr){
	var res = [], obj = {};
	for(var i=0,len=arr.length;i<len;i++){
		if(!obj[arr[i]]){
			obj[arr[i]] = true;
			res.push(arr[i])
		}
	}
	return res
}
console.log(unique(arr));//[1, 0, "true", false, "undefined", null, NaN]
//schme 5 对象法，不能区分string 和 真值，比如"undefined"  undefined
function unique(arr){
	var obj = {}
	return arr.reduce((res,item) => {
		obj[item] ? null : obj[item] = true && res.push(item);
		return res
	},[])
}
console.log(unique(arr));//[1, 0, "true", false, "undefined", null, NaN]
//schme 6 数组下标法 时间自由度：O(n*2) 结果返回全部NaN
function unique(arr){
	var res = [];
	for(var i=0,len=arr.length;i<len;i++){
		if(res.indexOf(arr[i]) == -1){
			res.push(arr[i])
		}
	}
	return res;
}
console.log(unique(arr));//[1, "1", 0, "0", "true", true, false, "false", "undefined", undefined, null, "null", NaN, NaN, "NaN"]
//scene 7 排序后相邻去除法 时间自由度：O(n) 排序成功，但改变了原数组顺序
function unique(arr){
	arr.sort();
	var temp=[arr[0]],nanFlag = true;
	for(var i = 1; i < arr.length; i++){
		if(arr[i] !== temp[temp.length-1]){
			temp.push(arr[i]);
			if(!(arr[i] === temp[temp.length-1]) && nanFlag){
				temp.pop();
				nanFlag = false;
			}
		}
	}
	return temp;
}
console.log(unique(arr));//[0, "0", 1, "1", "NaN", NaN, false, "false", null, "null", "true", true, "undefined", undefined]
//scene 8 时间自由度：O(n) 兼容NaN 不改变了原数组顺序

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

//数组过滤空值：false null 0 "" undefined NaN
var arr = [false,null,0,'',undefined,NaN,1,true,'1']
console.log(arr.filter(item => !!item));//[1, true, "1"]

var arr = Array(9).fill('a')
console.log(arr);//[ 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a' ]