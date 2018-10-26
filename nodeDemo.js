const fs = require('fs');
// console.log(__dirname)
// console.log(__filename)

//   /a.json 表示 D:/
//   a.json 表示 当前目录
fs.rename('a.json', 'a.json', (err) => {
	if (err) throw err;
	console.log('重命名完成');
});

fs.stat('a.json', (err, stats) => {
	if (err) throw err;
	// console.log(`文件属性: ${JSON.stringify(stats)}`);
	console.log(stats.isFile());//true
	console.log(stats.isDirectory());//false
	console.log(stats.dev);//2929734567
});

console.log("123",process.cwd());


var http = require('http'); // 加载http模块
http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'}); // 200代表状态成功, 文档类型是给浏览器识别用的
	res.write('<meta charset="UTF-8"> <h1>我是标题啊！</h1> <font color="red">这么原生，初级的服务器，下辈子能用着吗?!</font>'); // 返回给客户端的html数据
	res.end(); // 结束输出流
}).listen(3000); // 绑定3ooo, 查看效果请访问 http://localhost:3000
