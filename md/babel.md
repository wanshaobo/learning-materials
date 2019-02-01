https://www.babeljs.cn/
https://babeljs.io/

#### babel使用方法
读取顺序？
###### 第一种
>.babelrc
```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": ["@babel/plugin-syntax-dynamic-import"]
}
```
###### 第二种
>在package.json内部设置babel
```json
{
"dependencies": {
	"jquery": "^3.3.1",
	"react": "^16.6.3",
	"react-dom": "^16.6.3",
	"react-router-dom": "^4.3.1",
},
"devDependencies": {
	"@babel/core": "^7.1.2",
	"@babel/plugin-syntax-dynamic-import": "^7.2.0",
	"@babel/preset-env": "^7.1.0",
	"@babel/preset-react": "^7.0.0",
	"babel-loader": "^8.0.4",
},
"babel":{
    "presets": ["@babel/preset-env", "@babel/preset-react"],
    "plugins": ["@babel/plugin-syntax-dynamic-import"]
  }
}
```

###### 第三种
>在webpack中配置babel
```JavaScript
module.exports = {
	module:{
		rules:[
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
						//babelrc: false,// 不采用.babelrc的配置
					}
				}
			}
		]
	}
}
```

###### 第四种
>babel.config.js
```javascript
module.exports = {
	"presets": ["@babel/preset-env", "@babel/preset-react"],
	"plugins": ["@babel/plugin-syntax-dynamic-import"]
};
```

babel 6
babel-preset-react `Babel preset for all React plugins.`
babel-plugin-transform-class-properties
babel-plugin-syntax-dynamic-import

babel 7
@babel/core `Core Library`
@babel/cli `CLI tool ,use babel from the terminal`
preset
@babel/preset-env `Without any configuration, this preset will include all plugins to support modern JavaScript`
@babel/preset-react`Babel preset for all React plugins.比如react-dom-router`
plugin
@babel/plugin-transform-arrow-functions `To transform ES2015+ syntax into ES5`
@babel/plugin-syntax-dynamic-import

Babel会从当前目录查找.babelrc文件。这个目录是文件被编译的目录。如果不存在，那么他会根据目录树上寻这个文件，或者在package.json中寻找"babel":{}这个选项。
使用"babelrc":false进行设置来停止查找行为，或者

https://blog.csdn.net/weixiaoderensheng/article/details/82993332

Config Files
https://babeljs.io/docs/en/config-files#file-relative-configuration

presets字段设定转码规则，官方提供以下的规则集，你可以根据需要安装。
# ES2015转码规则
$ npm install --save-dev babel-preset-es2015
# react转码规则
$ npm install --save-dev babel-preset-react
# ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个
$ npm install --save-dev babel-preset-stage-0
$ npm install --save-dev babel-preset-stage-1
$ npm install --save-dev babel-preset-stage-2
$ npm install --save-dev babel-preset-stage-3

{
    "presets": [
    "es2015",
    "react",
    "stage-2"
    ],
    "plugins": []
}

如果你在旧浏览器里使用import()，别忘了用像es6-promise或者promise-polyfill的polyfill来shim 许诺。
旧浏览器没有Promise相关的api，需要兼容处理
import Es6Promise from'es6-promise';
Es6Promise.polyfill();
// or
import'es6-promise/auto';
// or
import Promise from'promise-polyfill';
if(!window.Promise){
  window.Promise = Promise;
}
// or ...