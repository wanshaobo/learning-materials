

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

var arr = [1,2,3,1,2,3,NaN,NaN]
var set = new Set(arr)
console.log(set);
去重，包括NaN
测试

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