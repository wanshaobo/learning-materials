
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