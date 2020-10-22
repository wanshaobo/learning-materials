/*
https://segmentfault.com/a/1190000003857670?_ea=396445
26个API
返回Boolean：every some
返回数组：concat map slice
返回索引：indexOf lastIndexOf
返回结果：reduce reduceRight join=toString valueOf
遍历数组：forEach
操作数组：pop push unshift shift reverse splice sort

数组遍历:
for break可以结束循环 continue中断当次循环 可以改变原数组
map 返回新数组 不可改变原数组
forEach 没有返回值 不可改变原数组

concat() 返回新数组 不改变原数组
var res = [1,2,3].reduce((res,cur,index,curArr) => res+=cur,10)
console.log(res);//16

判断数组的三种方法
[].constructor.toString();//"function Array() { [native code] }".indexOf("Array") == 9
if(arr.constructor.toString().indexOf("Array") !== -1){
    //是数组
}
[].constructor === Array
[] instanceof Array
Object.prototype.toString.call([]).slice(8,-1)//"Array"
Array.isArray([])
重写
function isArray(obj) {
    return typeof obj == 'object' && obj.constructor == Array
}
*/

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

Array.prototype.toUpperCase = function(){
	for(var i=0;i<this.length;i++){
		this[i] = this[i].toUpperCase();
	}
}
var arr = ['xin','dong','fang']
arr.toUpperCase();//arr = ['XIN','DONG','FANG']

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
Array.prototype._reverse = function(){
	let result = [];
	for(let i=0,j=this.length-1;i<this.length;i++,j--){
		result[i] = this[j]
	}
	return result
}
Array.prototype._pop = function(){
	let temp = this[this.length-1]
	this.length--
	return temp
}

//1、判断数组是数组
var arr = [1,2,3];
console.log(Array.isArray(arr));
console.log(arr instanceof Array);
console.log(arr.constructor === Array);
console.log(Object.prototype.toString.call(arr) === '[object Array]');//‘[object Array]’
Array.prototype.isPrototypeOf([]);//Array是不是[]的原型链
[].constructor.toString()//"function Array() { [native code] }"

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

//3、去重 边界情况  NaN undefined null
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
//遍历数组法
var array=[1,1,1,1,10,4,62,7,4,11,50,7,3,33,3,3,3,33,7,7,7];
//直接删除法 不兼容NaN
function deleteRepeat(arr){
	for(var i=0;i<arr.length;i++){
		if(arr.indexOf(arr[i]) !== i){
			arr.splice(i,1)
			i--;
		}
	}
	return arr
}
//数组下标法  不兼容NaN
function deleteRepeat(arr){
	var newArray = [];
	for(var i=0,len=arr.length;i<len;i++){
		if(newArray.indexOf(arr[i]) == -1){
			newArray.push(arr[i]);
		}
	}
	return newArray;
}
//数组下标法   不兼容NaN
function deleteRepeat(arr){
	var newArray = [];
	for(var i=0;i<arr.length;i++){
		if(arr.indexOf(arr[i]) == i){
			newArray.push(arr[i]);
		}
	}
	return newArray;
}
//对象法 不兼容[NaN,'NaN',null,'null','undefined',undefined]
function deleteRepeat(arr){
	var newArr = [],obj = {};
	arr.forEach((item)=>{
		if(!obj[item]){
			newArr.push(item);
			obj[item] = true;
		}
	});
	return newArr;
}
function deleteRepeat(arr){
	var obj = {};
	arr.forEach((item)=>{
		if(!obj[item]){
			obj[item] = true;
		}
	});
	return Object.keys(obj);
}
//[{key:1},{key:2},{key:3},{key:3},{key:1},{key:1}] -> [{key:1},{key:2},{key:3}]
function unique(arr){
	let res = [],keyArr = [];
	arr.forEach((item)=>{
		if(keyArr.indexOf(item.key) === -1){
			keyArr.push(item.key)
			res.push(item)
		}
	})
	return res
}

//4、扁平化
//非递归
//toString法 String类型 Number类型 var arr = [[1,2,3,4,5,[6,7,[8,9]]], [10, [11, 12]]];
arr.toString().split(',')
arr.toString().split(',').map(item => +item)
//扩展运算符 二维数组
var a = [].concat(...arr)
//whilexu循环法 ES6扩展运算符
function flatten(arr){
	while(arr.some(item => Array.isArray(item))){
		arr = [].concat(...arr);
	}
	return arr;
}
//递归
//concat+for循环
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
//reduce
function flatten(arr){
	return arr.reduce((total,item) => total.concat(Array.isArray(item) ? flatten(item) : item) ,[])
}
//挂载到原型链上
Array.prototype.flat = function (){
	return this.reduce((total,item)=>total.concat(Array.isArray(item)?item.flat():item),[])
}
arr.flat()

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

function sum(){
	let arg = [...arguments];
	arg = arg.filter((item) => (typeof item == 'number' && !isNaN(item)))
	return arg.reduce((total,item)=>{return total+item});
}
sum('a',1,true,2,NaN,3);//6

//数组按照固定格式中的字符串数字排序
let arr = ["https://resource/1593311954488.png","https://resource/1593311954457.png","https://resource/1593311954535.png"]
arr.sort((a,b)=>{
	return +a.split('/').pop().split('.').shift() - b.split('/').pop().split('.').shift()
});

//1.topN排序
//字符串数组string[]，对应有一个权重数组int[]，按照如下规则取出字符串数组的top5
// 1.对数组的每个元素求综合得分，综合得分=权重得分+顺序得分，权重得分为对应权重数组的每个元素的权重值，顺序得分为字符串数组每个元素的序号数（从第一个元素开始为1,2,3,4...）。
// 2按综合得分升序排列，综合得分相同的字符串数组的元素，按原顺序从前到后排列。
// 3输出不能有多余空格、引号，大小写敏感
var strArr = ['A','B','C','D','E','F','G','H'];
var intArr = [7,5,3,2,6,1,4,9];
function topN(strArr,intArr,n){
	var score = [],scoreSort = [],len=strArr.length,index=0,result='';
	for(var i=0;i<len;i++){
		score[i] = i+1+intArr[i];
		scoreSort[i] = i+1+intArr[i];
	}
	scoreSort.sort(function(a,b){
		return a-b;
	});
	console.log(score);//[8, 7, 6, 6, 11, 7, 11, 17]
	console.log(scoreSort);//[6, 6, 7, 7, 8, 11, 11, 17]
	for(var i=0;i<n;i++){
		index=score.indexOf(scoreSort[i]);
		result += strArr[index];
		score.splice(index,1);//splice添加 删除 替换
		strArr.splice(index,1);
	}
	console.log(result);//CDBFA
	return result;
}
topN(strArr,intArr,5);

//2.数组排序
var arrNum = [32, 52, 18, 4, 10, 284, 3, 88, 7, 5];
var arrStr = ['ds','r','sv','s','vtg','n','ol','j','g','pl'];
console.log(arrStr.sort(function (a,b) {return a-b}));//"ds" "r" "sv" "s" "vtg" "n" "ol" "j" "g" "pl" 没有排序
console.log(arrStr.sort());//"ds" "g" "j" "n" "ol" "pl" "r" "s" "sv" "vtg"按照字符编码的顺序进行排序
arrNum.sort();
console.log(JSON.stringify(arrNum));//[10,18,284,3,32,4,5,52,7,88]
arrNum.sort(function(a,b){return a-b});//升序排列 [3,4,5,7,10,18,32,52,88,284]
//比较函数
var compare = function (a, b) {
	return a-b
}
arrNum.sort(compare);//升序排列
//数组排序，第一个排序关键字相同，使用第二个排序关键字
let arr = [{age:3,time:4},{age:1,time:4},{age:2,time:3},{age:2,time:1},{age:2,time:2}]
function compare(a,b){
	if(a.age == b.age){
		return a.time > b.time
	}else{
		return a.age > b.age
	}
}
arr.sort(compare)

//3.排序算法-升序-精通前三个即可，点到为止
//3.1冒泡排序-每次相邻元素遍历调整顺序 时间复杂度为O(Math.pow(n,2))
var array=[1,10,4,62,7,4,11,50,7,3,33];
function bubbleSort(arr){
	var len=arr.length;
	for(var i=0;i<len;i++){
		for (var j = 0; j < len - 1 - i; j++) {
			if (arr[j] > arr[j+1]) {        //相邻元素两两对比
				var temp = arr[j+1];        //元素交换
				arr[j+1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}
//3.2选择排序-每次遍历找到最小元素向前插入到合适位置 时间复杂度为O(Math.pow(n,2))
function selectionSort(arr){
	var len = arr.length;
	for(var i=0;i<len-1;i++){
		var minIndex = i;
		for(var j=i+1;j<len;j++){
			if(arr[j] < arr[minIndex]){
				minIndex = j
			}
		}
		if(minIndex != i){
			//元素换位 a=a+b b=a-b a=a-b
			// arr[i] = arr[i] + arr[minIndex];
			// arr[minIndex] = arr[i] - arr[minIndex];
			// arr[i] = arr[i] - arr[minIndex];
			let temp = arr[i];
			arr[i] = arr[minIndex];
			arr[minIndex] = temp;
		}
	}
	return arr
}
//3.3插入排序-找到基准索引向前插入到已经序列化的位置 时间复杂度为O(Math.pow(n,2))
function insertionSort(arr){
	var len = arr.length;
	for(var i=1;i<len;i++){
		for(var j=i;j>0;j--){
			if(arr[j] < arr[j-1]){
				arr[j] = arr[j] + arr[j-1];
				arr[j-1] = arr[j] - arr[j-1];
				arr[j] = arr[j] - arr[j-1];
			}
		}
	}
	return arr
}
//3.4快速排序 分治法递归法 时间复杂度为O(Math.pow(n,2)) 空间复杂度Ω(n)(需要占用的内存空间)
function quickSort(arr){
	if(arr.length<=1)
		return arr;
	var pivotIndex = Math.floor(arr.length/2);
	//找基准，并把基准从原数组删除
	var pivot = arr.splice(pivotIndex,1)[0];
	//定义左右数组
	var left=[];
	var right=[];
	//比基准小的放在left，比基准大的放在right
	for(var i=0;i<arr.length;i++){
		if(arr[i]<=pivot){
			left.push(arr[i]);
		}
		else{
			right.push(arr[i]);
		}
	}
	//递归
	return quickSort(left).concat([pivot],quickSort(right));
}
console.log(quickSort([5,4,12,0,85,4,3,5,41,2]));//[0, 2, 3, 4, 4, 5, 5, 12, 41, 85]
//in-place算法 分区算法
function quickSort(arr) {
	// 交换
	function swap(arr, a, b) {
		[arr[a], arr[b]] = [arr[b], arr[a]];
	}
	// 分区
	function partition(arr, left, right) {
		/**
		 * 开始时不知最终pivot的存放位置，可以先将pivot交换到后面去
		 * 这里直接定义最右边的元素为基准
		 */
		var pivot = arr[right];
		/**
		 * 存放小于pivot的元素时，是紧挨着上一元素的，否则空隙里存放的可能是大于pivot的元素，
		 * 故声明一个storeIndex变量，并初始化为left来依次紧挨着存放小于pivot的元素。
		 */
		var storeIndex = left;
		for (var i = left; i < right; i++) {
			if (arr[i] < pivot) {
				/**
				 * 遍历数组，找到小于的pivot的元素，（大于pivot的元素会跳过）
				 * 将循环i次时得到的元素，通过swap交换放到storeIndex处，
				 * 并对storeIndex递增1，表示下一个可能要交换的位置
				 */
				swap(arr, storeIndex, i);
				storeIndex++;
			}
		}
		// 最后： 将pivot交换到storeIndex处，基准元素放置到最终正确位置上
		swap(arr, right, storeIndex);
		return storeIndex;
	}
	function sort(arr, left, right) {
		if (left > right)
			return;
		var storeIndex = partition(arr, left, right);
		sort(arr, left, storeIndex - 1);
		sort(arr, storeIndex + 1, right);
	}
	sort(arr, 0, arr.length - 1);
	return arr;
}
//3.5 基数排序
//3.6 希尔排序
//3.7 归并排序 空间复杂度Ω(n)(需要占用的内存空间)
//3.8 堆排序

//4.对象数组排序
//按照 数字 排序
var arrObj = [
	{name:"George",age:32,birth:2014,sex:'male'},
	{name:"link",age:55,birth:1952,sex:'male'},
	{name:"wan",age:27,birth:1989,sex:'male'},
	{name:"bruce",age:44,birth:1961,sex:'male'},
	{name:"shao",age:10,birth:2006,sex:'female'},
	{name:"bob",age:1,birth:2015,sex:'female'},
	{name:"old",age:132,birth:1900,sex:'male'},
	{name:"future",age:515,birth:1800,sex:'male'},
	{name:"year",age:66,birth:1950,sex:'male'},
	{name:"www",age:100,birth:1950,sex:'female'}
];
arrObj.sort((obj1,obj2) => (obj1.age - obj2.age));
var compare = function(obj1,obj2){return obj1.age - obj2.age}
var compare = function(obj1, obj2) {
	var a = obj1.age, b = obj2.age;
	if (a > b) {
		return 1;
	}else if (a < b) {
		return -1;
	}else {
		return 0;
	}
};
arrObj.sort(compare);
//按照 属性名（Number类型） 排序
var compare = function(attrName){
	return function(obj1, obj2) {
		var a = obj1[attrName], b = obj2[attrName];
		//如果 age是 字符串 的数字 "12",需要做转换
		// if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {//!isNaN(Number('111')) => true
		//     val1 = Number(val1);
		//     val2 = Number(val2);
		// }
		if (a > b) {
			return 1;
		}else if (a < b) {
			return -1;
		}else {
			return 0;
		}
	}
};
var compare = function(attrName){
	return function(obj1, obj2) {
		return obj1[attrName] - obj2[attrName]
	}
}
arrObj.sort(compare('age'));
//按照 属性名（String类型） 排序
var compare = function(attrName){
	return  function(obj1,obj2){
		var a = obj1[attrName], b = obj2[attrName];
		if (typeof obj1 === "object" && typeof obj2 === "object" && obj1 && obj2) {
			if(a === b) {
				return 0;
			}
			if(typeof a === typeof b) {
				return a < b ? -1 : 1;
			}
			return typeof a < typeof b ? -1 : 1;
		}else{
			throw ("error");
		}
	}
};
var compare = function(attrName){
	return  function(obj1,obj2){
		var a = obj1[attrName], b = obj2[attrName];
		return a > b ? 1 : -1;
	}
};
//ascii码表，0-127 十六进制字符编码：A-Z 65-90 a-z 97-122
console.log(arrObj.sort(compare('name')));//George,bob,bruce,future,link,old,shao,wan,www,year按照字符编码的顺序进行排序
//如果年龄相同，按照姓名进行排序
var compare = function(attrName01,attrName02){
	return function(obj1,obj2){
		var a = obj1[attrName01],b = obj2[attrName01];
		if(obj1 && obj2 && typeof obj1 === 'object' && typeof obj2 ==='object'){
			if(a === b){
				return typeof attrName02 === 'function' ? attrName02(obj1,obj2) : 0;
			}
			if(typeof a === typeof b){
				return a <b ? -1:1;
			}
			return typeof a < typeof b ? -1 : 1;
		}else{
			throw("error");
		}
	}
};
//age是 number类型的1  或者 string类型的'1'  都可以
var compare = function(attrName01,attrName02){
	return function(obj1,obj2){
		var a = obj1[attrName01],b = obj2[attrName01];
		if(a == b){
			return obj1[attrName02] < obj2[attrName02] ? -1 : 1;
		}else{
			return a-b
		}
	}
}
console.log(arrObj.sort(compare('age','name')));

//5.输出数组中小于等于3位数的元素，大于三位数的元素剔除
var arr = [14,1040,8,702,1,10,10,301,301,30,58,52,9100,5];
var arrThird = [];
for(var i=0,len=arr.length;i<len;i++){
	arr[i] = arr[i] + '';
	if(arr[i].length == 1){
		arrThird.push(arr[i]*100);
	}else if(arr[i].length == 2){
		arrThird.push(arr[i]*10);
	}else if(arr[i].length == 3){
		arrThird.push(Number(arr[i]));
	}else{}
}
console.log(JSON.stringify(arrThird));//[140,800,702,100,100,100,301,301,300,580,520,500]


//7.生成指定区间的指定数量的不重复的随机数
function arrNoRepeat(n,min,max){
	if(max - min < n)
		return
	var arr = [];
	for(var i = 0;i<n;i++){
		let tem = Math.floor(Math.random()*(max-min+1)+min);//返回介于 0（包含） ~ 1（不包含） 之间的一个随机数：
		if(arr.indexOf(tem) === -1){
			arr.push(tem)
		}else{
			i--;
		}
//        arr[i] = Math.floor(Math.random()*(max-min+1)+min);
//        if(arr.indexOf(arr[i]) !== i){
//            i--;
//        }
	}
	return arr;
}
//生成指定区间的指定数量的指定小数位数的不重复的随机数
function arrNoRepeat(n,min,max,point){
	if(max - min < n)
		return
	var arr = [];
	for(var i = 0;i<n;i++){
		arr[i] = Number((Math.random()*(max-min+1) + min).toFixed(point));
		if(arr.indexOf(arr[i]) != i){
			i--;
		}
	}
	return arr;
}

//8.输出数组两个元素和为指定数字的所有组合
//常见的时间复杂度有：常数阶O(1),对数阶O(log2n),线性阶O(n), 线性对数阶O(nlog2n),平方阶O(n2)，立方阶O(n3)
//时间复杂度有：平方阶O(n2)
var arr = [1,3,5,2,8,13,7,23];
var sum = 10;//[3,7],][2,8]
function combina(arr,sum){
	var len=arr.length;
	for(var i=0;i<len-1;i++){
		for(var j=i+1;j<len;j++){
			if(arr[i] + arr[j] == sum){
				console.log('(' + arr[i] + ',' + arr[j] +')');
			}
		}
	}
}
//时间复杂度有：线性阶O(n)
function combina(arr,sum){
//    for(var i=0,len=arr.length;i<len;i++){
//        if(arr.indexOf(sum-arr[i]) != -1 && arr.indexOf(sum-arr[i]) > i){
//            console.log('(' + arr[i] + ',' + (sum-arr[i]) + ')');
//        }
//    }
	arr.forEach((item,index)=>{
		if(arr.indexOf(sum-item) != -1 && arr.indexOf(sum-item) > index){
			console.log('(' + item + ',' + (sum-item) + ')');
		}
	});
}
combina(arr,sum);//(3,7)(2,8)

//9.数组排序和去重
var arr = [82,24,63,45,17,31,24,50];
function unique(arr){
	var newArr = [];
	arr.sort((a,b) => (a-b));
	for(var i=0,len=arr.length;i<len;i++){
		if(newArr.indexOf(arr[i]) == -1){
			newArr.push(arr[i]);
		}
	}
	return newArr
}
console.log(unique(arr));//[17, 24, 31, 45, 50, 63, 82]

//10.给定一个整数数组，输出拼接全部元素的最小值
//[11,15,3,81,9] 11153819
var arr = [3,11,9,81,15];
for(var index in arr){
	arr[index] = arr[index] + '';
}
arr = arr.map((item)=>{
	return item+''
});
arr = arr.map(function(item,index){return item + ''});//返回处理后的数组
console.log(arr.sort().join(''));//最小值 11153819
console.log(arr.sort().reverse().join(''));//最大值 98131511
//检测数组中是否有大于15的元素


//11.数组中最大差值计算，并且最大元素的索引号 大于 最小元素的索引号
var arr = [7,8,4,9,9,3,1,10];
console.log(Math.max.apply(null,arr) - Math.min.apply(null,arr.slice(0,arr.indexOf(Math.max.apply(null,arr)))));

//12.求数组元素乘积的数组，i元素为原数组中除了下标为i的元素之外的元素乘积
//算法复杂度：时间复杂度和空间复杂度
//以平方阶O(n^2)复杂度实现 y = ax^2 + bx + c
var arr = [7,8,4,9,9,3,1,10];//[1,2,3,4,5] [120,60,40,30,24]
var multiply = [];
for(var i= 0,len=arr.length;i<len;i++){
	var newArr = (arr.slice(0,i)).concat(arr.slice(i+1));
	var multiplyIetm = 1;
	for(var index in newArr){
		multiplyIetm *= newArr[index];
	}
	multiply.push(multiplyIetm);
}
console.log(multiply);
//以线性阶O(n)复杂度实现 y = ax + b
var multiply = [];
var multiplyIetm = 1;
for(var index in arr){
	multiplyIetm *= arr[index];
}
for(var index in arr){
	multiply.push(multiplyIetm / arr[index]);
}
console.log(multiply);
//reduce 将数组元素计算为一个值（从左到右）。
arr = arr.map(function(item,index){return (arr.reduce((total,item,index)=>{return total*item}))/item})

//集合三要素：确定性 互异性-没有相同的元素 无序性
//13.求两个数组的交集、并集、补集
var arr01 = [2,4,1,11,0,89,2,12,32,44,67,11];
var arr02 = [13,2,4,1,0,98,21,23,44,67,11,2];
//交集
function crossArr(arr01,arr02){
	var cross = [];
	arr01.forEach((item,index)=>{
		if(arr02.indexOf(item) !== -1 && cross.indexOf(item) == -1){
			cross.push(item)
		}
	});
	return cross
}
console.log(crossArr(arr01,arr02));//[2, 4, 1, 11, 0, 44, 67]
//并集
function unionArr(arr01,arr02){
	var cross = [],arr = arr01.concat(arr02,arr03);
	arr.forEach((item,index)=>{
		if(arr.indexOf(item) == index){
			cross.push(item)
		}
	});
	return cross
}

//14.求三个数组的交集、并集、补集
var arr01 = [2,4,1,11,0,89,2,12,32,44,67,11];
var arr02 = [13,2,4,1,0,98,21,23,44,67,11,2];
var arr03 = [2,13,0,38,38,339];
//交集
function crossArr(arr01,arr02,arr03){
	var cross = [];
	arr01.forEach((item,index)=>{
		if(arr02.indexOf(item) !== -1 && arr03.indexOf(item) !== -1 && cross.indexOf(item) == -1){
			cross.push(item)
		}
	});
	return cross
}
console.log(crossArr(arr01,arr02,arr03));//[2, 21, 0, 67]
//并集
function unionArr(arr01,arr02){
	var cross = [],arr = arr01.concat(arr02);
	arr.forEach((item,index)=>{
		if(arr.indexOf(item) == index){
			cross.push(item)
		}
	});
	return cross
}

//15.整型数组中乘积最大的三个数
var arr = [-10,7,29,30,5,-10,-70];
function maxMultiplu(arr){
	var len = arr.length;
	arr.sort(function(a,b){return a-b});//[-70, -10, -10, 5, 7, 29, 30]
	if(arr[0] < 0 && arr[1] < 0){
		if(arr[len-1]*arr[len-2]*arr[len-3] > arr[0]*arr[1]*arr[len-1]){
			return arr[len-1]*arr[len-2]*arr[len-3];
		}else{
			return arr[0]*arr[1]*arr[len-1];
		}
	}else{
		return arr[len-1]*arr[len-2]*arr[len-3];
	}
}
console.log(maxMultiplu(arr));//21000

//16.寻找连续数组的缺失数字
//n个连续数字的n-1个元素组成数组，已知上下边界，求以线性阶O(n)复杂度找出缺失的数字
var arr = [2,5,1,4,9,6,3,7];
var upper = 9;
var lower = 1;
var lose = 8;
for(var i=lower,len=upper-lower;i<=len;i++){
	if(arr.indexOf(i+lower) == -1){
		console.log(i+lower);
	}
}

//17.比较多选题答案，作答答案和正确答案是否一致
//引申：判断两个不重复数组是否相同
var arr01 = ['a','b'];
var arr02 = ['a','b','c'];
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
console.log(twoArrayIsEquel(arr01,arr02));//false
//every() 方法使用指定函数检测数组中的所有元素是否都符合指定条件
console.log([1,2,3].every((item) => item <= 3));//true
//some() 方法会依次执行数组的每个元素：如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
console.log([1,2,3].some((item) => item > 3));//false

//数组指定位置插入元素 fruits.splice(2,0,"Lemon","Kiwi");
//字符串指定位置插入元素 str = str.substring(0,i) + '' + str.substring(i);

//使用两个栈实现入队与出队
//队列(Queue)也是一种运算受限的线性表，插入只能在表的一端进行(只进不出)，而删除只能在表的另一端进行(只出不进)，允许删除的一端称为队尾(rear)，允许插入的一端称为队头 (Front),队列的操作原则是先进先出的，所以队列又称作FIFO表(First In First Out)
//栈是一种特殊的线性表。其特殊性在于限定插入和删除数据元素的操作只能在线性表的一端进行,栈的操作原则是后进先出（Last In First Out），简称为LIFO线性表。
var inputStack = [1,2,3];//First stack
var outputStack = [4,5,6];//Second stack
function enqueue(stackInput,item){
	return stackInput.push(item);
}
function dequeue(stackInput,stackOutput){
	if(stackInput.length <= 0){
		while(stackInput.length > 0){
			var elementToOutput = stackInput.pop();
			stackOutput.push(elementToOutput);
		}
	}
	return stackOutput.pop();
}

//不使用循环创建一个长度为100的数组，元素的值为它的下边
var a = new Array(100);//[undefined × 100] 长度为100的空数组
var a = Array(100).join(',').split(',').map(function(item,index){return index});

//实现乱序数组
var arr = Array(10).join(',').split(',').map(function(item,index){return index+1});
var sign = 1;
arr.sort(function(a,b){
	sign = (Math.random() > 0.5) ? 1 : -1;
	return (a-b)*sign
})

//以优雅方式求出数组的前10个元素的和
var arr = Array(100).join(',').split(',').map(function(item,index){return index+1});
var sum = arr.slice(0,10).reduce(function(pre,current){return pre+current});
console.log(sum);

//将数组中指定的两个元素放在首尾以字符串形式输出
var strArr = ['A','B','C','D','E','F']
function strSort(strArr,a,b){
	var index;
	index = strArr.indexOf(a);
	strArr.splice(index,1);
	index = strArr.indexOf(b);
	strArr.splice(index,1);
	return a + strArr.join('') + b;
}
strSort(strArr,'A','C');//ABDEFC

Array.prototype.push.apply(arr,arr1)//返回数组的长度 12

//数组最大值
var array_of_numbers = [1,5,20,12,555,18];
var biggest = Math.max.apply(Math,array_of_numbers);
//快速获取数组中的最大值最小值
var a=[1,2,3,5];
console.log(Math.max.apply(null, a));//最大值 //null表示没有对象去调用这个方法，只需要用这个方法进行运算，得到返回的结果就行
console.log(Math.min.apply(null, a));//最小值
// 多维数组可以这么修改：
var a=[1,2,3,[5,6],[1,4,8]];
var ta=a.join(",").split(",");//转化为一维数组
console.log(Math.max.apply(null,ta));//最大值
console.log(Math.min.apply(null,ta));//最小值

var arr = [1,2];
var arr2 = arr.concat();
arr2.push(arr.splice(1,0))//arr.splice(1,0) 返回一个数组，数组中的元素是被删除的元素
console.log(arr)//[1,2]
console.log(arr2)//[1,2,[]]

arr.some(function(item){return item > 15});//true false
//数组提取元素，和字符串提取的方法相同 arr.slice();
arr.forEach(function(item,index){console.log(index,item);})//用数组的元素去做一些事情

//reduce函数当total没有初始化时 index=0不执行函数内容 默认执行执行total=cur
let b = [5,6,7].reduce((total,cur,index)=>{
	console.log(index);//1 2
	// console.log(total);//5 11
	return total+cur
})
console.log(b);//18
let a = [5,6,7].reduce((total,cur,index)=>{
	console.log(index);//0 1 2
	// console.log(total);//8 13 19
	return total+cur
},8)
console.log(a);//26

//二维数组的排列组合
let arr = [['A','B'],['a','b'],[1,2]];
const findAll = arr => {
	if (arr.length === 1) {
		return arr[0]
	}
	return getResult(arr.shift(), findAll(arr))
};
const getResult = (arrA, arrB) => {
	if (!Array.isArray(arrA) || !Array.isArray(arrB)) {
		return
	}
	if (arrA.length === 0) {
		return arrB
	}
	if (arrA.length === 0) {
		return arrA
	}
	let result = [];
	for (let i = 0; i < arrA.length; i++) {
		for (let j = 0; j < arrB.length; j++) {
			result.push(String(arrA[i]) + String(arrB[j]))
		}
	}
	//[ 'a1', 'a2', 'b1', 'b2' ]
	//[ 'Aa1', 'Aa2', 'Ab1', 'Ab2', 'Ba1', 'Ba2', 'Bb1', 'Bb2' ]
	return result
};
console.log(findAll(arr));

// 把数组中按照数字重复出现的次数进行排 如果次数相同 则按照值排序
// [2, 2, 2, 1, 1, 1] => [1, 1, 1, 2, 2, 2]
// [1, 4, 2, 1, 4, 2, 1, 3, 5, 3, 5, 5, 2, 2] => [3, 3, 4, 4, 1, 1, 1, 5, 5, 5, 2, 2, 2, 2]
let arr111 = [1, 4, 2, 1, 4, 2, 1, 3, 5, 3, 5, 5, 2, 2]
function sort(arr){
	let result = [];
	let obj = {};// 数组:次数 {3:2, 4:2, 1:3, 5:5 ...}
	arr.forEach((item,index)=>{
		if(!obj[item]){
			obj[item] = 1
		}else{
			obj[item]++
		}
	})
	let arrObj = [];//[{num:3,count:2},{num:4,count:3},...]
	Object.keys(obj).forEach((num)=>{
		arrObj.push({num:num,count:obj[num]})
	})
	arrObj.sort(compare);
	//升序
	function compare(a,b){
		if(b.count == a.count){
			return a.num - b.num
		}else{
			return a.count - b.count
		}
	}
	arrObj.forEach((item)=>{
		for(let i=0;i<item.count;i++){
			result.push(item.num)
		}
	})
	return result
}


let arr = [1,2,3]
let a = arr.filter((item)=>{return item>1})
let b = arr.map((item)=>{return item+1})
console.log(arr);//[1,2,3]
console.log(a);//[2,3]
console.log(b);//[2,3,4]