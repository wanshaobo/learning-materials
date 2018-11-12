var obj = {a:1}
Object.freeze(obj);
obj.a = 2;
console.log(obj);//{a:1}


var table = {
	key:1,
	value:2,
	level01:{
		key:3,
		value:4,
		level0101:{
			key:5,
			value:6
		}
	},
	level02:{
		key:7,
		value:8
	}
}

//线性复杂度O(n)
var arr = [1,0,'true',true,5,false,'false','undefined',undefined,null,'null',NaN,'a','a',NaN,'NaN'];
var newArr = arr.filter((item,index,self) => self.indexOf(item) == index)
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(1));
function uniqueUseNotAllEqual(array) {
	var temp = [], mark = true;
	for (var i = 0, j = array.length; i < j; i++) {
		if (array[i] !== array[i]) {
			mark && temp.indexOf(array[i]) == -1 ? temp.push(array[i]) : '';
			mark = false;
		} else
			temp.indexOf(array[i]) == -1 ? temp.push(array[i]) : '';
	}
	return temp;
}
// console.log(uniqueUseNotAllEqual(arr))
console.log(Array.from(new Set(arr)))
/*
 NaN有两中通用判定方法和数组中一种判定方法：

 一个是绝对不全等于(===)自身
 一个是ES6的isNaN()
 数组原型链上的Array.prototype.includes()
 https://blog.csdn.net/xue4345/article/details/73238253
 https://blog.csdn.net/AinUser/article/details/79953871
 https://www.cnblogs.com/1906859953Lucas/p/9067475.html
百度
 [1,0,undefined,'undefined',null,NaN,NaN] js数组去重
*/
