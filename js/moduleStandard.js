//模块规范

//参考链接
// http://es6.ruanyifeng.com/#docs/module
//https://blog.csdn.net/qq_38801354/article/details/78024680 内容包含四个链接

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
