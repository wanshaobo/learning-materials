
//1
//注意事项：replace返回新的结果，不会改变原字符串
var str = '__A__123456__B____C__alsdjfl';
var reg = /__[^_]+__/g;
var result = str.replace(reg,function(){
	//回调有四个参数:
	//匹配到的字符串
	//如果正则使用了分组匹配就为多个，否则无此参数 (red|blue|black)
	//匹配字符串的对应索引位置
	//原始字符串
	var match = arguments[0];//"__A__" '__B__' '__C__'
	var res = ''
	switch (match){
		case '__A__':
			res = '吃';
			break;
		case '__B__':
			res = '喝';
			break;
		case '__C__':
			res = '玩';
			break;
		default:
			break;
	}
	return res
})
console.log(result);//吃123456喝玩alsdjfl

//2
//正则表达式.的用法
//.代表匹配任何字符
var a = 'a123654e';
var a = 'ae';
//以a开始 以e结束 中间是任意字符 零个或多个
/^a.*e$/.test(a);//返回true;

//3
var str = '__A__123456__B____C__alsdjfl';
str.match(/[^_]*__/g);//["__", "A__", "123456__", "B__", "__", "C__"]

//4 正则校验IP 0-255
var ip = 260;
var ipReg = /(^\d$|^[1-9]\d$|^1\d{2}$|^2[0-4]\d$|^25[0-5]$)/;
//0-9     ^\d$
//10-99   ^[1-9]\d$
//100-199 ^1\d{2}$
//200-249 ^2[0-4]\d$
//250-255 ^25[0-5]$
console.log(ipReg.test(ip));

//5 正则表达式匹配所有二级域名是shao.cn和其目录下的网站
//\w 元字符用于查找单词字符。单词字符包括：a-z、A-Z、0-9，以及下划线, 包含 _ (下划线) 字符。
function isMyWeb(url){
	if(/\w+\.9game.cn[/]*$/.test(url)){
		return true
	}else{
		return false
	}
}

//连字符 -> 驼峰
//back-ground-color -> backGroundColor
let reg = /-[a-z]/g;
let str = 'back-ground-color';
let match = str.match(reg);//['-g','-c']
match.forEach((item) => {
	str = str.replace(item, item.split('')[1].toUpperCase())
})
console.log(str);
//驼峰 -> 连字符
//backGroundColor -> back-ground-color
console.log('backGroundColor'.replace(/[A-Z]/g,'-$&').toLowerCase());//background-color

let str = 'abcdefgWhigk-kdfanDdfakld-dkldkGfg'
let reg = /-[a-z]|[A-Z]/g;
//console.log(str.match(reg));//[ 'W', '-', 'D', '-', 'G' ]
str.replace(reg,function(match,index,source){
	console.log(1,match);//W
	console.log(2,index);//7
	console.log(3,source);//abcdefgWhigk-kdfanDdfakld-dkldkGfg
})

//两个子表达式是或的关系
var str ='111xyz22xxxx';
var res= str.replace(/(\d{3})|(\d{2})/g,'a$1b$2c');
console.log(res);//a111bcxyzab22cxxxx

//两个子表达式是与的关系
var str ='11122xxxx';
var res= str.replace(/(\d{3})(\d{2})/g,'a$1b$2c');
console.log(res);//a111b22cxxxx
console.log(RegExp.$1);//111
console.log(RegExp.$2);//22

// $1 $2 ... 识别的子表达式必须用()包围
console.log('abcdefgWhigk-kdfanDdfakld-dkldkGfg'.replace(/([A-Z])|(-[a-z])/g, 'x$1y$2z'));//abcdefgxWyzhigkxy-kzdfanxDyzdfakldxy-dzkldkxGyzfg
console.log('abcdefgWhigk-kdfanDdfakld-dkldkGfg'.replace(/[A-Z]|(-[a-z])/g, 'x$1y$2z'));//abcdefgxy$2zhigkx-ky$2zdfanxy$2zdfakldx-dy$2zkldkxy$2zfg
console.log('11122xxxx11122xxxx'.replace(/(\d{3})(\d{2})/g, 'a$1b$2c'));

//replact(reg,replacement) replacement可以是函数 也可以是字符串($字符具有特定的含义)
//$1-$9 存放着正则表达式中最近的9个正则表达式的匹配结果，这些结果按照子匹配的出现顺序依次排列
// 基本语法RegExp.$n 这些属性是静态的，除了replace中的第二个参数可以省略RegExp之外，其他地方使用都要加上RegExp。
//$1 $2 $3 与reg中的第1/2/3个子表达式(用括号包围的表达式)匹配到的内容
//$&　与reg相匹配的子串
//$`　位于匹配子串左侧的文本
//$'　位于匹配子串右侧的文本

//(?=pattern) 正向肯定预查 (?!pattern) 正向否定预查 https://www.cnblogs.com/dogecheng/p/11466687.html
//()表示捕获分组 (?:)表示非捕获分组-匹配的值不会保存起来
function thousands (num) {
	return (num+ '').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
}
console.log(thousands ('12345678901234567890.4567845678'));//12,345,678,901,234,567,890.4,567,845,678

let str = 'abcdefgWhigk-kdfanDdfakld-dkldkGfg'
let reg = /[A-Z]|-[a-z]/g;
console.log(str.match(reg));//[ 'W', '-k', 'D', '-d', 'G' ]

let str = "ABC is an great man, which means ABC is great"
let res = str.replace(/ABC/g,'Batman')
console.log(res);//Batman is an great man, which means Batman is great