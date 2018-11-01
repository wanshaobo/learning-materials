var webpack = {};
//1、webpack 热刷新开关 devServer.inline

//https://github.com/webpack/webpack/tree/master/examples 官方实例

//2、Webpack 的打包速度 打包提速
//彻底解决Webpack打包慢的问题 https://blog.csdn.net/fengyinchao/article/details/52100357

// dll 动态链接库（dynamic link library）

//创建 library webpack 还可以用于打包 JavaScript library
webpack.output = {
	// the type of the exported library 控制 library 如何以不同方式暴露的选项。
	libraryTarget: 'umd', // universal module definition   UMD：在 AMD 或 CommonJS 的 require 之后可访问
	// the name of the exported library
	//对外暴露的名字
	// ES2015 模块导入 import MyLibrary from "MyLibrary.js"
	// CommonJS 模块导入 var MyLibrary = require('MyLibrary');
	// AMD 模块导入 require(['MyLibrary'], function ( MyLibrary) { });
	library:'MyLibrary'
}

//插件
// DLLPlugin 和 DLLReferencePlugin 用某种方法实现了拆分 bundles，同时还大大提升了构建的速度。

//性能(performance)
webpack.performance = {
	hints: false ,// false关闭提示 | "error"适用于生产环境 | "warning"默认值 适用于开发环境
}
