/*
Math.ceil(2/5);//1 取大
Math.floor(2/5); //0 取小
var num = 1;
Math.abs(num);//返回绝对值
Math.ceil(1.4)//2 对一个数进行上舍入
Math.cos(3);//弧度
Math.cos(30*Math.PI/180);//角度
Math.floor(1.6);//1 对一个数进行下舍入
Math.max(5,10,1);//返回较大的值的那个数
Math.min(5,10);
Math.pow(4,3);//64 返回4的3次幂
Math.random();//返回介于 0（包含） ~ 1（不包含） 之间的一个随机数：
Math.floor((Math.random()*10)+1);//1≤ x < 10
Math.round(2.5);//把数四舍五入为最接近的整数
Math.sqrt(9);//返回数的平方根
Math.round(21/5);//4 取整 四舍五入
Math.round(5/2);//3
parseInt(5/2);//2 丢弃小数部分,保留整数部分
console.log(12345678901234561890)//输入大于16位的数字精度损失 超过16位损失精度 12345678901234560000
*/

//1、数字千分位，边界问题 | 临界值问题，数字长度不能大于16
//JS精度只有16位，超过16为数字，num + ''，16位以后四舍五入 0-0 1-0 2-2 3-4 4-4 5-4 6-6 7-8 8-8 9-8 10-20 11-20 ...
//字符串拼接法
function thousands(num){
	num = num+'';
	let [left,right=''] = num.split('.');
	let res = '';
	while(left.length > 3){
		res = ',' + left.slice(-3) + res;
		left = left.substring(0,left.length-3);
	}
	return left+res+(right ? '.'+right : '')
}
console.log(thousands('12345678901234567890.1224'));//显式使用字符串表示数字 没有精度损失 123,456,789,012,345,678,90
console.log(thousands(12345678901234567890));//显式使用数字 直接导致精度损失 12,345,678,901,234,567,000
//数组暂存法
function thousands(num){
	num = num + '';
	let arr = [];
	let [str, right=''] = num.split('.');
	while(str.length > 3){
		arr.unshift(str.slice(-3));
		str = str.substring(0,str.length-3);
	}
	arr.unshift(str);
	return arr.join(',') + (right ? '.'+right : '');
}
//toLocaleString 入参是Number 小于等于16位整数有效 小数点后三位有效 有小数的总长度小于等于16位有效
console.log(new Date().toLocaleString());//2020-7-17 21:22:04
let num = 1234567890123456;
console.log(num.toLocaleString());// 1,234,567,890,123,456
// reduce法
function thousands(num) {
	var [str, p = ''] = (num + '').split('.')
	return str.split('').reverse().reduce((total, currentValue, index) => {
		//reduce函数当total没有初始化时 index=0不执行函数内容 默认执行执行total=cur
		return (index%3 ? currentValue : currentValue+',') + total
	}) + (p ? '.'+p : '')
}
console.log(thousands('12345678901234567890123.12345'));//string 12,345,678,901,234,567,890,123.12345
// 正则法 不兼容小数
function thousands(num) {
	var [str, right = ''] = (num + '').split('.')
	// n+ 至少一个
	// n$ 以n结尾
	// \d{3} 匹配包含连续 3 个 数字 的序列
	// ?=(\d{3}) 匹配任何其后紧接(\d{3})的字符串
	// \d{1,3} 连续出现至少 1 次，至多 3 次的数字
	// var reg = /\d{1,3}(?=(\d{3})+$)/g;
	var reg = /\d(?=(\d{3})+$)/g;
	// $& 匹配到的值
	return (str + '').replace(reg, '$&,') + (right ? '.'+right : '')
}
console.log(thousands('12345678901234567890.123456'));//12,345,678,901,234,567,890.123456
function thousands(num) {
	num = num + '';
	if (!num.includes('.')) {
		num += '.'
	}
	//return num.replace(/(\d)(?=(\d{3})+\.)/g, function (cur) {return cur + ','}).replace(/\.$/, '');
	// return num.replace(/(\d)(?=(\d{3})+\.)/g, '$1,').replace(/\.$/, '');
	return num.replace(/(\d)(?=(\d{3})+\.)/g, '$&,').replace(/\.$/, '');
}
//不能处理小数
var str="12345678901234567890";
var reg=/(?=(?!(\b))(\d{3})+$)/g;
console.log(str.replace(reg,","));

//2、递归算法，n的阶乘：n! = n*(n-1)*...2*1
function factorial(n){
	if(n<=1){
		return 1;
	}else{
		return n*factorial(n-1);
	}
}
console.log(factorial(5));//120

//3、递归算法，gcd最大公约数(公约数，能除尽给定的那个数)
// 辗转相除法,greatest common divisor ( gcd )
function gcd1(m,n){
	var temp=n;
	while(n!=0){
		temp=m%n;
		m=n;
		n=temp;
	}
	return m;
}
console.log(gcd1(11,53));//1
console.log(gcd1(12,3));//3
function gcd2(m,n){
	var temp=n;
	for(var i=1;i>0;i++){
		if(n!=0){
			temp=m%n;
			m=n;
			n=temp;
		}else{
			break;
		}
	}
	return m;
}
console.log(gcd2(12,24));//12

//4、递归算法，最小公倍数
//lowest common multiple ( LCM )
function LCM(m,n){
	if(m==0){
		return n;
	}else{
		return gcd1(n%m,m);
	}
	return Array.prototype.slice.apply(arguments).reduce(function(m,n){return m*n / gcd1(m,n);},1);
}
console.log(gcd2(4,8));//4

//5、从100位观众中一次抽取不重复的10个幸运数字
//floor下舍 round四舍五入 ceil上舍
function random10Num(){
	var arr = [];
	for(var i=0;i<10;i++){//
		var random = Math.ceil(Math.random()*100);
//			var random = Math.floor((Math.random()*100)+1);
		if(arr.indexOf(random) == -1){
			arr.push(random);
		}else{
			i = i - 1;
		}
	}
	return arr;
}
console.log(random10Num());//[]


//进制转换 binary 2  octonary 8  decimalism 10  hexadecimal 16
//10 => 16
function hexCharset(num) {
	switch (num){
		case 10:
			return 'A'
			break;
		case 11:
			return 'B'
			break;
		case 12:
			return 'C'
			break;
		case 13:
			return 'D'
			break;
		case 14:
			return 'E'
			break;
		case 15:
			return 'F'
			break;
		default:
			return num;
	}
}
//recursion 递归
function DecToHexRecursion(num){
	var a,b,result = '';
	a = num % 16;
	b = Math.floor(num / 16);//取商数,floor()为下舍
	a = hexCharset(a);
	// a = hexCharset(a.toString());//比较保守
	if(b >= 16){
		result += a.toString() + DecToHexRecursion(b);
	}else{
		result += a.toString() + hexCharset(b).toString();
	}
	return result;
}
function DecToHex(num){
	var a,result = '';
	a = DecToHexRecursion(num);
	for(var i = a.length - 1;i >= 0;i--){
		result += a.charAt(i);
	}
	if (result.charAt(0) === '0') {//剔除首个无意义0字符
		result = result.slice(1);
	}
	return result;
}
console.log(DecToHex(10));//7D
console.log(DecToHex(255));//7D
console.log(DecToHex(15));//7D
console.log(DecToHex(17));//11

//16 => 10
function Hex2Dec(num) {
	return eval('0x' + num);
}
console.log(Hex2Dec('A'));//10
console.log(Hex2Dec('ff'));//255
console.log(Hex2Dec('f'));//15

//生成随机数 [0,9]
function getNum(){
	return Math.floor(Math.random() * 10)
}
for(let i=0;i<20;i++){
	console.log(getNum());
}