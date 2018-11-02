//http://lodash.think2011.net/ https://lodash.com/ https://www.lodashjs.com/ https://github.com/lodash/lodash
//一个 JavaScript 的实用工具库, 表现一致性, 模块化, 高性能, 以及 可扩展
// ES6模块规范
// 13个静态方法 实现原理
function lodash(){

}
var _ = lodash();

//62
lodash.Array = {

}
_.chunk(array, [size=0])//将数组拆分成多个 size 长度的块，并组成一个新数组。 如果数组无法被分割成全部等长的块，那么最后剩余的元素将组成一个块。
_.compact(array)//创建一个移除了所有假值的数组。例如：false、null、 0、""、undefined， 以及NaN 都是 “假值”.
_.concat(array, [values])// 创建一个用任何数组 或 值连接的新数组。
_.difference(array, [values])//创建一个差异化后的数组，不包括使用 SameValueZero 方法提供的数组。
_.differenceBy(array, [values], [iteratee=_.identity])//这个方法类似 _.difference，除了它接受一个 iteratee 调用每一个数组和值。iteratee 会传入一个参数：(value)。
_.differenceWith(array, [values], [comparator])//这个方法类似 _.difference，除了它接受一个 comparator 调用每一个数组元素的值。 comparator 会传入2个参数：(arrVal, othVal)。
_.drop(array, [n=1])//裁剪数组中的前 N 个数组，返回剩余的部分。
_.dropRight(array, [n=1])//从右边开始裁剪数组中的 N 个数组，返回剩余的部分。

//24
lodash.Collection = {

}

//1
lodash.Date = {

}

//23
lodash.Function = {

}

//54
lodash.Lang = {

}

//12
lodash.Math = {

}

//1
lodash.Methods = {

}

//3
lodash.Number = {

}

//41
lodash.Object = {

}

//7
lodash.Properties = {

}

//12
lodash.Seq = {

}

//30
lodash.String = {

}

//28
lodash.Util = {

}