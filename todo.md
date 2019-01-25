自动打包提高效率，排除公共文件的轮训，比如react、公共静态js
[
  new UglifyJsPlugin({
    exclude: /\/excludes/
  })
]
exclude /node_module/
不需要手动打包，每次按保存键自动打包
自动打包方案一：配置watchOptions
watchOptions:{
    poll:1000,//监测修改的时间(ms)
    aggregeateTimeout:500, //防止重复按键，500毫米内算按键一次
    ignored:/node_modules/,//不监测
    ignored:/common/js/,//不监测
    hot:inline
}

devServer:{
    contentBase:path.resolve(__dirname, 'dist'),
    host:'10.125.30.11',
    compress:true,
    port: 8080
}
自动打包方案二：配置watchOptions在终端中输入：webpack --watch 进行打包


webpack
https://webpack.docschina.org/configuration/dev-server/#devserver-inline
devServer.inline
devServer.lazy
webpack-dev-server --inline=false
webpack-dev-server --inline=true

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

new webpack.BannerPlugin('hezihao版权所有！')