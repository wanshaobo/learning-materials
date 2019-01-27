#### 我用到的东西

#### 自动编译打包：webpack 监听文件变化，当它们修改后会重新编译
方案一：
module.exports = {
  watch: true
};
方案二：
webpack-dev-server 和 webpack-dev-middleware 里 Watch 模式默认开启
方案三：
module.exports = {
  watchOptions: {
    aggregateTimeout: 300,//当第一个文件更改后，重新构建前增加延迟的时间，毫秒
    poll: 1000,//指定具体时间进行轮训，毫秒
    ignored: /node_modules/,//监听大量文件系统会导致大量的 CPU 或内存占用，ignored排除一些巨大的文件夹的监听
    //ignored: ['files/**/*.js', 'node_modules']
    info-verbosity:'none',//none info verbose 控制webpack在编译过程中，生命周期消息的详细程度
  }
};
注意：watchOptions 在使用惰性模式时无效。devServer: {lazy: true}
方案四：
webpack --watch


#### 启动一个服务器：不仅本机可以访问这个项目，其他机器也可以访问这个项目
方案一：
webpack-dev-server
方案二：
module.exports = {
  devServer: {
    publicPath: path.join(__dirname, 'dist'),//此路径下的打包文件可在浏览器中访问。从哪里提供 bundle，并且此选项优先contentBase。
    contentBase: path.join(__dirname, 'dist'),//告诉服务器从哪个目录中提供内容，推荐使用绝对路径
    compress: true,//一切服务都启用 gzip 压缩
    port: 9000,//指定要监听请求的端口号
    hot: true,//启用 webpack 的模块热替换特性，必须有 webpack.HotModuleReplacementPlugin 才能完全启用 HMR
    host:localhost,//默认localhost
    open: true,//自动打开浏览器
    useLocalIp: true,//允许浏览器使用本地 IP 打开
    inline: true//默认true-内联模式 false-iframe 模式
  }
};

#### 将运行进度输出到控制台
webpack --progress
webpack-dev-server --progress


#### 压缩混淆打包成一行代码

#### code splitting


webpack 的模块热替换

context
webpack-dev-server 和 webpack-dev-middleware 里 Watch 模式默认开启。