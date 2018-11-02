/*
https://webpack.docschina.org/
https://github.com/webpack/webpack/releases 更新日志
*/

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

//自动打包
// watch: true,
webpack.watchOptions = {
	poll:1000, //监测修改的时间(ms) 指定毫秒为单位进行轮询 等同于 watch: true,
	aggregateTimeout:500, //防止重复按键，500毫米内算按键一次
	ignored: /node_modules/
}

//框架代码 与 业务代码 拆分
//单独打包类库文件原因：框架代码稳定性比较高，而业务代码更新迭代快，希望浏览器尽可能长的时间对框架代码进行缓存来减少服务器流量，让用户加载速度更快。
webpack.entry = {
	app: path.join(__dirname, 'src/index.js'),
	vendor: ['vue','react'] //这个entry会单独打包
}
webpack.optimization = {
	runtimeChunk: {
		name: "manifest"
	},
	splitChunks: {
		cacheGroups: {
			commons: {
				name: "vendor",
				chunks: "initial",
				minChunks: 2
			}
		}
	}
}

//d代码分离

