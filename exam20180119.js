/*今日头条 懂车帝*/
/**
 *基础题
 *1、CSS属性box-sizing的值有哪些？分别有什么含义？
 *2、在HTTP响应的Header中，Set-Cookie的选项有哪些，分别是什么含义？
 *3、rem是什么含义？如何实现页面宽度适配为375px的设计稿？
 *4、for/in、Object.keys和Object.getOwnPropertyNames对属性遍历有什么区别？
 *5、在子frame中调用外层页面的接口，传入一个对象，外层页面如何判断该对象是否为数组？
 */

/*
1、box-sizing:
content-box padding和border和width互相独立
border-box 元素指定宽度和高度包括padding和border
inherit 从父元素继承
2、http cookie的发送是通过http头部来实现的，他早于文件的传递，头部set-cookie的选项有如下5个：
name1=name1; name2=name2;name3=name3 可以设置多个key-value键值对，表示cookie的具体信息
expires=date cookie的有效期限
path=path 设置cookie支持的路径
domain=domain 对cookie生效的域名
secure 如果给出此标志，表示cookie只能通过SSL协议的https服务器来传递
3、rem是CSS3新增的一个相对单位（root em，根em）rem为元素设定字体大小时，仍然是相对大小，但相对的只是HTML根元素
var html = document.getElementsByTagName('html')[0];
var pageWidth = html.getBoundingClientRect().width;//window.screen.width
html.style.fontSize = pageWidth / 375 + "px";
18px = 18rem
4、
for..in 获取可枚举的实例和原型属性名 如果仅想输出自身的属性可以借助 obj.hasOwnProperty(key)过滤掉原型链上的属性。
Object.keys() 返回可枚举的实例属性名组成的数组
Object.getPropertyNames() 返回除原型属性以外的所有属性（包括不可枚举的属性）名组成的数组
*/

/**
 *简答题
 *1、何为跨域？跨域请求数据有几种方式？图片/脚本等资源有什么跨域问题，如何解决？跨域请求时如何携带cookie？
 *2、简要描述HTTPS的安全机制，以及在web服务工程实践中需要注意的问题；描述http2和https的关系
 *3、请简要描述webview中通过js bridge和native通信的技术实现。什么是点击劫持？如何防范？
 */

/*
1、域名,端口,协议
 通过jsonp跨域
 通过修改document.domain来跨子域
 使用window.name来进行跨域
 使用HTML5中新引进的window.postMessage方法来跨域传送数据


 服务端可以设置的响应头信息
 Access-Control-Allow-Origin: <origin> | *
 Access-Control-Allow-Credentials: true | false

 能够成功使用带有 Cookie 的资源请求需要满足以下几个条件：
 (1) XMLHttpRequest 对象中指定了 withCredentials = true xhr.withCredentials = true
 (2) 服务器响应头中 Access-Control-Allow-Credentials: true
 (3) 服务器响应头中 Access-Control-Allow-Origin 不能为 *

 <script src="http://i2.mediapower.mobi/adpower/vm/Bora/js/test.js?callback=callbackfunction"></script>

 <script>
     var callbackfunction = function(data) {
        console.log('我是跨域请求来的数据-->' + data.name);
     };
     var script = document.createElement('script'),
     body = document.getElementsByTagName('body');
     script.src = 'http://i2.mediapower.mobi/adpower/vm/Bora/js/test.js?callback=callbackfunction';
     body[0].appendChild(script);
 </script>

 jQuery中的$.ajax()

 postMessage+iframe
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