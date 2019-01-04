//前端模块规范
/*
需要解决的问题：模块封装、引入规则

CommonJS的模块规范
使用场景：服务器端模块规范
加载方式：同步加载模块
模块导入：var test = require('./boobar').foobar;
模块导出：exports.foobar = foobar
代表：，Node.js采用了这个规范


AMD（Asynchronous Module Definition）
使用场景：浏览器端
加载方式：异步加载模块
模块导入：
模块导出：
代表：
模块导入的地方：依赖前置
define(['a', 'b'], function(a, b) {
  a.doSomething();
  b.doSomething();
})

CMD（Common Module Definition）
CMD是SeaJS 在推广过程中对模块定义的规范化产出
模块导入的地方：依赖就近
define(function(require, exports, module) {
  var a = require('./a');
  a.doSomething();
  var b = require('./b');
  b.doSomething();
})

RequireJS 是一个前端的模块化管理的工具库，遵循AMD规范，它的作者就是AMD规范的创始人 James Burke

UMD是AMD和CommonJS的糅合
Universal Module Definition
(function (window, factory) {
    if (typeof exports === 'object') {
        //CommonJS
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        //AMD
        define(factory);
    } else {
        window.eventUtil = factory();
    }
})(this, function () {
    // module ...
});
*/

//1 异步模块规范 AMD
// 定义方法：define() 函数，第一参数是一个依赖数组，第二个参数是回调函数
// 文件名: foo.js
define(['jquery', 'underscore'], function ($, _) {
    function a(){}; // 私有方法，因为没有被返回(见下面)
    function b(){}; // 公共方法，因为被返回了
    function c(){}; // 公共方法，因为被返回了
    return {
            b: b,
            c: c
        }
});

//2 CommonJS（node 模块）
//NodeJS使用CMD模块系统，主模块作为程序入口点，所有模块在执行过程中只初始化一次。
/*
CommonJS 定义的模块分为: 模块标识(module)、模块定义(exports) 、模块引用(require)
浏览器不兼容CommonJS的根本原因，正是在于缺少四个Node.js环境的变量：module，require，exports，global

CommonJS包规范
一个package.json文件应该存在于包顶级目录下
二进制文件应该包含在bin目录下
js代码应该包含在lib目录下
文档应该在doc目录下
单元测试应该在test目录下

npm包属于CommonJS规范
*/
//文件名: foo.js
var $ = require('jquery');
var _ = require('underscore');
//methods
function a(){};    //    私有方法，因为它没在module.exports中 (见下面)
function b(){};    //    公共方法，因为它在module.exports中定义了
function c(){};    //    公共方法，因为它在module.exports中定义了
//暴露公共方法
module.exports = {
    b: b,
    c: c
};


//3 UMD 通用模块规范 兼容了AMD和CommonJS
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        //AMD
        define(['jquery', 'underscore'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS之类的
        module.exports = factory(require('jquery'), require('underscore'));
    } else {
        // 浏览器全局变量(root 即 window)
        root.returnExports = factory(root.jQuery, root._);
    }
    }(this, function ($, _) {
        //    方法
        function a(){};    //    私有方法，因为它没被返回 (见下面)
        function b(){};    //    公共方法，因为被返回了
        function c(){};    //    公共方法，因为被返回了
        //    暴露公共方法
        return {
            b: b,
            c: c
        }
    })
);

//4 ES6 中的模块导出导入
/*
export 与 export default 均可用于导出常量、函数、文件、模块等
在一个文件或模块中，export、import可以有多个，export default 仅有一个
通过 export 方式导出，在导入时要加 { } ， export default 则不需要
export 能直接导出变量表达式， export default 不行。

import a from .. 导入的是 export default

和 import {a,b,c} from 'add' 导入的是 export
和 import * as add from 'add' 导入的是 export

*/

//响应式编程 函数式编程 设计模式
//immutable Ramda
// 函数柯里化 curry 的概念很简单：将一个低阶函数转换为高阶函数的过程就叫柯里化。

/*
参考链接
http://es6.ruanyifeng.com/#docs/module
https://blog.csdn.net/qq_38801354/article/details/78024680 内容包含四个链接
http://wiki.commonjs.org/wiki/CommonJS
http://www.commonjs.org/
http://seajs.org/docs/
https://github.com/amdjs/amdjs-api/wiki/AMD
https://github.com/seajs/seajs/issues/269
https://github.com/seajs/seajs/issues/242
https://www.zhihu.com/question/20351507
http://blog.jobbole.com/49290/
http://www.cnblogs.com/qianshui/articles/4930892.html
http://blog.chinaunix.net/uid-26672038-id-4112229.html
https://www.tuicool.com/articles/MVrMBrI
https://www.tuicool.com/articles/2ARZf2v
https://www.tuicool.com/articles/ZFvIfmz
https://www.tuicool.com/articles/y2uqeaM
http://www.ruanyifeng.com/blog/2012/10/javascript_module.html
https://www.jianshu.com/p/bd4585b737d7
https://www.davidbcalhoun.com/2014/what-is-amd-commonjs-and-umd/
https://www.davidbcalhoun.com/
https://www.tuicool.com/articles/nueqi27
https://www.jianshu.com/p/00ee4e45c0cd
https://www.jianshu.com/p/00ee4e45c0cd
https://github.com/seajs/seajs/issues/242
https://www.cnblogs.com/omelette/p/6652472.html
https://www.jianshu.com/p/33dbfaddadd1
*/
