//for...of语句在可迭代对象(包括 Array, Map, Set, String, TypedArray，arguments 对象等等)上创建一个迭代循环，对每个不同属性的属性值,调用一个自定义的有执行语句的迭代挂钩
var str = 'abc';
for(var item of str){
	console.log(item);//a b c
}
var arr = ['a','b','c']
for(var item in arr){//item是索引
	console.log(item);// 0 1 2
}
for(var item of arr){//item是元素
	console.log(item);//a b c
}

// javascript原生遍历方法的建议用法：
// 用for循环遍历数组
// 用for-in遍历对象
// 用for-of遍历类数组对象（ES6）
// 用Object.keys()获取对象属性名的集合

str.charAt(0)