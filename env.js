//js 实现 二叉树数据结构
//js 实现 map数据结构
const obj = {
	a: 1,
	b: 2,
	show: function(num1, num2) {
		console.log(this.value);
		console.log(num1 + num2);
	}
};
function show(num1, num2) {
	console.log(this.value);
	console.log(num1 + num2);
}
Function.prototype._call = function () {
	var ctx = arguments[0] || window;
	ctx.fn = this;
	var args = [];
	for (var i = 1; i < arguments.length; i++) {
		args.push('arguments[' + i + ']');
	}
	var result = eval('ctx.fn(' + args + ')');//[1,2,3]+'' => 1,2,3 数组和字符串拼接调用了数组的toString方法 [1,2,3].toString()+''
	delete ctx.fn;
	return result;
}
show._call(obj,1,12)//

Function.prototype._applay = function () {
	var ctx = arguments[0] || window;
	ctx.fn = this;
	var result;
	if(arguments[1]){
		var args = [];
		arguments[1].forEach((item,index)=>{
			args.push('arguments[1][' + index + ']')
		});
		result = eval('ctx.fn(' + args + ')');
	}else{
		result = ctx.fn();
	}
	delete ctx.fn;
	return result;
}
show._applay(obj,[1,12])