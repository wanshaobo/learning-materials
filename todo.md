

模块拆分的方案：
react自带的childRout 按需加载
webpack插件分开打包
拆包

github PC官网有branch选项，有branch和tag两个标签，尝试打tag

继承方案
__proto__父类的原型
a = {}
b = {}
a.__proto__ = b
两个实例实现继承关系

react事件和js原生事件 区别 执行顺序

为什么action触发reducer后就执行render？

移动设备适配方案
媒体查询
@media
rem
bootstrap

前端单页面拆分多个单页面
原因：项目大，动态编译耗时大，最终打包文件不断变大
每次发布版本必须全量发布，即使是改动一点点的功能，无法按模块发布前端代码

cookie如何跨域

css js分离

用 webpack 实现持久化缓存
https://blog.csdn.net/osdfhv/article/details/79017338

// 使用import语法动态导入
		// https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import/#installation
		// Support for the experimental syntax 'dynamicImport' isn't currently enabled
		// Add @babel/plugin-syntax-dynamic-import (https://git.io/vb4Sv) to the 'plugins' section of your Babel config to enable parsing.
	
	<script>
            !function (window, doc) {
                var docEl = document.documentElement;
                var dpr = window.devicePixelRatio || 1;
                var scale = 1 / dpr;
                var metaEl = document.querySelector('meta[name="viewport"]');
                docEl.setAttribute('data-dpr', dpr);
                metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
                function refreshRem() {
                    var rem = docEl.clientWidth / 10;
                    docEl.style.fontSize = rem + 'px';
                }
                refreshRem()
                window.addEventListener('resize', refreshRem)
                window.addEventListener('pageshow', function (e) {
                    if (e.persisted) {
                        refreshRem()
                    }
                })
            }(window, document)
        </script>
        
<script>
        (function flexible(d,b){
            let h=b.documentElement;
            let c=d.devicePixelRatio||1;
            function g(){
                if(b.body){
                    b.body.style.fontSize=(12*c)+"px"
                }else{
                    b.addEventListener("DOMContentLoaded",g)
                }
            }
            g();
            function a(){
                let i=h.clientWidth/10;
                h.style.fontSize=i+"px"
            }
            a();
            d.addEventListener("resize",a);
            d.addEventListener("pageshow",function(i){if(i.persisted){a()}});
            if(c>=2){
                let f=b.createElement("body");
                let e=b.createElement("div");
                e.style.border=".5px solid transparent";
                f.appendChild(e);
                h.appendChild(f);
                if(e.offsetHeight===1){
                    h.classList.add("hairlines")
                }
                h.removeChild(f)
            }}(window,document));
    </script>
    <script>
        (function (win, doc) {
            let docEl = doc.documentElement;

            function setRemUnit () {
                let docWidth = docEl.clientWidth;
                let rem = docWidth / 10;
                docEl.style.fontSize = rem + 'px';
            }

            win.addEventListener('resize', function () {
                setRemUnit();
            }, false);
            win.addEventListener('pageshow', function (e) {
                if (e.persisted) {
                    setRemUnit();
                }
            }, false);

            setRemUnit();

            if (win.devicePixelRatio && win.devicePixelRatio >= 2) {
                let testEl = doc.createElement('div');
                let fakeBody = doc.createElement('body');
                testEl.style.border = '0.5px solid transparent';
                fakeBody.appendChild(testEl);
                docEl.appendChild(fakeBody);
                if (testEl.offsetHeight === 1) {
                    docEl.classList.add('hairlines');
                    console.log(2);
                }
                docEl.removeChild(fakeBody);
            }
        }) (window, document);
    </script>
    https://github.com/li-shuaishuai/screen_flex
!function (e, t) {
    var i = t.documentElement, o = e.devicePixelRatio || 1;
    function n() {
        t.body ? t.body.style.fontSize = 12 * o + "px" : t.addEventListener("DOMContentLoaded", n)
    }
    function d() {
        var e = i.clientWidth / 10;
        i.style.fontSize = e + "px"
    }
    if (n(), d(), e.addEventListener("resize", d), e.addEventListener("pageshow", function (e) { e.persisted && d() }), o >= 2) {
        var a = t.createElement("body"), s = t.createElement("div");
        s.style.border = ".5px solid transparent", a.appendChild(s), i.appendChild(a), 1 === s.offsetHeight && i.classList.add("hairlines"), i.removeChild(a)
    }
}(window, document);


var html = document.documentElement, dpr = window.devicePixelRatio || 1;
function initBody(){
    document.body ? document.body.style.fontSize = 12 * dpr + "px" : document.addEventListener("DOMContentLoaded", initBody)
}
initBody();
function initHtml(){
    html.style.fontSize = html.clientWidth / 10 + "px"
}
initHtml();
window.addEventListener("resize", initHtml)
window.addEventListener("pageshow", function (e) { e.persisted && initHtml() })
if(dpr >= 2){
    var newBody = document.createElement("body"), newDiv = document.createElement("div")
    newDiv.style.border = '.5px solid transparent';
    newBody.appendChild(newDiv)
    html.appendChild(newBody)
    1 === newDiv.offsetHeight && html.classList.add("hairlines")
    html.removeChild(newBody)
}