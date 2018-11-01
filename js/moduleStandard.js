//模块规范


// 异步模块规范 AMD
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

// CommonJS
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


// UMD 通用模块规范 兼容了AMD和CommonJS
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

//https://www.lodashjs.com/
// Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。
//响应式编程 函数式编程 设计模式
//immutable Ramda
// 函数柯里化 curry 的概念很简单：将一个低阶函数转换为高阶函数的过程就叫柯里化。
