//js css html 基础

//JavaScript 7种数据类型: undefined null Boolean String Number Object Symbol
// Symbol 由于每一个 Symbol 值都是不相等的，这意味着 Symbol 值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性。
isFinite(num)//判断一个数是有限的，而非正负无穷大 infinite -infinite
isNaN("blue")//判断一个变量不是NaN

Math.max.apply(null, [1, 2, 3, 4, , 8, 1, 1]);//NaN 缺失5号元素，没有容错机制
Math.max.apply(null, [1, 2, 3, 4, 5, 8, 1, 1]);//8
Math.max(...[1, 2, 3, 4, 5, 8, 1, 1]);//8 扩展运算符（spread）是三个点（...）
Math.max(1, 2, 3, 4, 5, 8, 1, 1);//8

//绑定事件方法 DOM0 DOM2 w3c标准 IE异同