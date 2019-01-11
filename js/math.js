/*
Math.ceil(2/5);//1 取大
Math.floor(2/5); //0 取小

Math.round(21/5);//4 取整 四舍五入
Math.round(5/2);//3

parseInt(5/2);//2 丢弃小数部分,保留整数部分
*/

//1、数字千分位，边界问题 | 临界值问题，数字长度不能大于16
//JS精度只有16位，超过16为数字，num + ''，16位以后四舍五入 0-0 1-0 2-2 3-4 4-4 5-4 6-6 7-8 8-8 9-8 10-20 11-20 ...
var num = 1234567890123456;
function thousands(num){
	var src = num+'', res = '';
	while(src.length > 3){
		res += src.substr(0,3) + ',';
		src = src.substr(3);
	}
	return res + src
}
console.log(thousands(num))

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