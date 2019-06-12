/* 新东方教育科技集团-优能前端团队-2019年6月-笔试试卷一*/

/**
 *基础题
 *1、CSS定位属性
 * https://www.runoob.com/css/css-positioning.html
 *1、什么是 CSS Float（浮动）？如何清除浮动？
 */


/**
 *编程题
 *1、为字符串扩展一个rewrite函数，接受一个正则pattern和一个字符串result，如果该字符串符合pattern，则以result对结果进行转义输出，如：
 *'/foo'.rewrite(/^\/foo/, '/bar') //'/bar'
 *'/u1234'.rewrite(/^\/u(\d+)/, '/user/$1') //'/user/1234'
 *'/i'.rewrite(/^\/o/, '/oooo')  //null
 *2、实现一个js对象序列化函数，将js对象序列化为可反序列化的代码。要求：
 *尽量和json兼容
 *支持不可反序列化的值，如underfined/NaN/Infinify/-Infinity
 *支持特殊对象，如正则、Date等
 *如：
 *serialize({}) //'{}'
 *serialize({a:'b'}) //'{"a":"b"}'
 *serialize({a:0/0}) //'{"a":NaN}'
 *serialize({a:/foo/}) //'{"a":/foo/}'
 */