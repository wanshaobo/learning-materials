/* 新东方教育科技集团-优能前端团队-2019年6月-笔试试卷一*/

/**
 *基础题
 *1、简述(画图描绘)盒子模型。
 *1、input元素的type属性的值有哪些，你用过哪些？
 *1、请列举css的选择器。
 *1、positon属性的五个值分别是什么，分别用在什么场景下？
 *1、CSS定位属性
 *1、什么是 CSS Float（浮动）？如何清除浮动？
 *1、简述伪类和伪元素
 *1、移动端如何做适配方案
 *1、简述弹性盒子布局
 *2、在HTTP响应的Header中，Set-Cookie的选项有哪些，分别是什么含义？
 *3、rem是什么含义？如何实现页面宽度适配为375px的设计稿？
 *4、for/in、Object.keys和Object.getOwnPropertyNames对属性遍历有什么区别？
 *5、在子frame中调用外层页面的接口，传入一个对象，外层页面如何判断该对象是否为数组？
 */

框架层面的问题

/**
 *简答题
 *1、简述HTML5 web 存储的两个对象，你在哪种场景下用过？
 *1、本地资源(图片、文档、音视频)上传的方案有哪些？常用的数据存放方案有哪些
 *1、简述跨域，常用的跨域方案有哪些？
 *2、前端数据请求方式有哪些？如XMLHttpRequest、fetch、axios、websocket之间的异同。
 *3、请简要描述webview中通过js bridge和native通信的技术实现。什么是点击劫持？如何防范？
 */

/**
 *项目经验题
 *1、如何实现一个可拖拽元素，该元素需要添加哪些属性和事件？
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