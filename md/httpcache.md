#### http cache

> 客户端放置缓存方案：给静态资源加入可以代表版本号的文件名 如 main.20151107.css，或者使用 Gulp 之类的 md5 插件来根据文件内容生成唯一的文件名。
//11  cache相关 缓存 http缓存
/*
http://www.cnblogs.com/dreamingbaobei/p/9804445.html
注意，我们讨论的所有关于缓存资源的问题，都仅仅针对GET请求。而对于POST, DELETE, PUT这类行为性操作通常不做任何缓存
浏览器缓存机制
200 from cache
304 not modified

[【前端安全】JavaScript防http劫持与XSS](https://www.cnblogs.com/coco1s/p/5777260.html)
xss 域名劫持

meta语法，阻止浏览器缓存
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Cache-Control" content="no-cache">
<meta http-equiv="Expires" content="0">

清除缓存方案一：随机数法 在你的所有静态资源文件后面添加随机时间戳
<script type="text/javascript" src="https://resources.test.com/js/test.js?version=56965"></script>
<script type=”text/javascript“ src=”/js/test.js?+Math.random()“></script>

清除缓存方案二：cache-control
<meta name="Cache-Control" content="no-cache">

响应头 Cache-Control 用来指导浏览器如何管理缓存
Etag是服务端对不同的文件通过固定的算法生成的一个唯一的hash，当文件被修改时，这个唯一的hash就会发生变化，Last-Modified这个从字面上理解就可以了，他存放的是文件最后的修改时间，这两个都能用来判断当前的文件是否发生了变化。

接下来我们要做的就是如何通过响应头来指导浏览器控制缓存的时间和什么时候发送询问请求询问资源是否过期，这里会涉及到两个响应头
Expires 指导浏览器缓存文件的时间
Expires:<http-date> 在此时候之后，缓存过期 服务器会重新发送确认请求

Cache-Control 指导浏览器何时向浏览器确认当前资源是否已过期 默认的是private
Cache-control: must-revalidate 缓存必须在使用之前验证旧资源的状态，并且不可使用过期资源
Cache-control: no-cache 在释放缓存副本之前，强制高速缓存将请求提交给原始服务器进行验证
Cache-control: no-store 缓存不应存储有关客户端请求或服务器响应的任何内容
Cache-control: no-transform 不得对资源进行转换或转变
Cache-control: public 表明响应可以被任何对象（包括：发送请求的客户端，代理服务器，等等）缓存
Cache-control: private 表明响应只能被单个用户缓存，不能作为共享缓存（即代理服务器不能缓存它）
Cache-control: proxy-revalidate
Cache-Control: max-age=<seconds> 设置缓存存储的最大周期，超过这个时间缓存被认为过期(单位秒)。与Expires相反，时间是相对于请求的时间。
Cache-control: s-maxage=<seconds> 覆盖max-age 或者 Expires 头，但是仅适用于共享缓存(比如各个代理)，并且私有缓存中它被忽略。

expires 是指在某个具体年月日时分秒之前缓存有效
maxage 是指本地可以缓存多长时间有效，从第一次下载到本地开始计算
Cache-Control会覆盖Expires

#### 强缓存和协商缓存 Last-Modified & If-Modified-Since
*/
//百度的一个页面
var ResponseHeaders = {
	Accept-Ranges: bytes
	Cache-Control: max-age=315360000 10年
	Connection: Keep-Alive
	Content-Length: 7877
	Content-Type: image/png
	Date: Tue, 06 Nov 2018 14:42:37 GMT 第一次下载时间，之后200from cache
	Etag: "1ec5-502264e2ae4c0"
	Expires: Fri, 03 Nov 2028 14:42:37 GMT
	Last-Modified: Wed, 03 Sep 2014 10:00:27 GMT
	Server: Apache
}

#### 创建xhr
>发送Ajax一般过程:
 1)创建XHR实例对象(xhr)
 指定onreadystatechange事件处理程序
 （两判断：①先判断xhr.readyState（if语句） ②再判断xhr.status(if-else语句)）。
 2)为发送请求做准备(xhr.open(parame))
 3)正式发送请求(xhr.send(parame/null))
```javascript
var xhr=new XMLHttpRequest();//兼容IE7+,Firefox,Opera,Chrome,Safari均支持原生的XHR对象
xhr.responseText
xhr.responseXML
xhr.status
xhr.statusText
xhr.readyState

//下面的步骤从上到下
readystatechange()//事件处理程序
xhr.open("method","url",boolean)
xhr.setRequestHeader("name","value")
xhr.send(data)
xhr.abort()//在接收到响应之前取消异步请求
xhr.getResponseHeader('Content-Type')//获取相应的响应头部信息
xhr.getAllResponseHeaders()//返回一个包含所有头部信息（key-value）的长字符串
xhr.

//1、创建XHR对象
var xhr=new XMLHttpRequest();
var xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")
console.dir(xhr);
//指定readystatechange事件
xhr.onreadystatechange=function(){
    for(var i=0;i<=4;i++){
        console.log(xhr.readyState);
    }
    if(xhr.readyState==4){
        if (xhr.status>=200&&xhr.status<300||xhr.status==304) {
            //服务器传来的数据为JSON
            var data=JSON.parse(xhr.responseText);
            console.log(data);
        }else{
            console.log(xhr.status);
        }
    }
}
//2、为发送请求做准备
xhr.open('method','url',true);
xhr.setRequestHeader(key, value) // 设置http请求头，且必须在xhr.open()函数之后设置
//3、正式发送请求。
xhr.send(null);

$.ajax({
    type: "GET",
    url: "test.php",
    success: function(data) {
        console.log(data);
    },
    beforeSend: function(xhr) {//ajax设置请求头
        xhr.setRequestHeader("User-Agent", "headertest");
    }
});

```
> 总结：
  1、设置请求头应当在调用open方法之后，调用send方法之前，且该请求消息只针对这次http请求，即每次http请求都需要重新设置请求头
  2、只有在xhr.readyState >= 2（服务器接收到http请求）才能获取到响应消息头
  3、请求头只能在客户端设置，响应头只能在服务器端设置
  4、xhr.onreadystatechange方法最好在xhr.open方法调用之前定义，否则无法监听xhr.readyState === 1时的状态，原因是xhr.open方法初始化了请求，并将xhr.readyState设为1。

后来看W3C标准文档发现，这个请求头不是什么都可以设置的，标准里面明确规定了以下请求头信息是浏览器控制，开发者不允许设置这些请求头
Accept-Charset
Accept-Encoding
Access-Control-Request-Headers
Access-Control-Request-Method
Connection
Content-Length
Cookie
Cookie2
Date
DNT
Expect
Host
Keep-Alive
Origin
Referer
TE
Trailer
Transfer-Encoding
Upgrade
User-Agent
Via

请求头Cache-Control：no-cache表示不使用缓存。

相应头Cache-Control：no-cache表示客户端不缓存。