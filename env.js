//js 实现 二叉树数据结构
//js 实现 map数据结构
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
var arr = [1,[2,[3]]];
function flatten(arr){
	return arr.reduce((res,item) => res.concat(Array.isArray(item) ? flatten(item) : item),[])
}
function flatten(arr){
	return arr.reduce((res,item) => res.concat(Array.isArray(item) ? flatten(item) : item),[]);
}
console.log(flatten(arr))

