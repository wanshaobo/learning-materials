//https://nodejs.org/api/stream.html
/*
全局变量
__dirname D:\project\learning-materials
path.resolve() 把一个路径或路径片段的序列解析为一个绝对路径
path.resolve('/foo/bar', './baz');
// 返回: '/foo/bar/baz'

*/


fs.readFile('./a.json', 'utf8', function(err, data){
	console.log(data);
});
var data = fs.readFileSync('./a.json', 'utf8');
console.log(data);

//将指定路径文件夹下的html文件名存入一个数组中
var path = require('path');
let ABSOLUTE_PATH = path.resolve(__dirname, './file');
var fileNameArr = fs.readdirSync(ABSOLUTE_PATH);//[ 'bucuo.png', 'hehe.html', 'nihao.html', 'wanshaobo.jpg' ]
var res = []
fileNameArr.forEach((item,index)=>{
	if(item.search(/.html$/) !== -1)
		res.push(item.split('.')[0]);
});
console.log(res);//['hehe','nihao']
//
var path = require('path');
var fs = require('fs');
var res = [];
fs.readdir(path.resolve(__dirname, './file'),(err,files)=>{
	//console.log(files);//[ 'bucuo.png', 'hehe.html', 'nihao.html', 'wanshaobo.jpg' ]
	files.forEach((item,index)=>{
		if(item.search(/.html$/) !== -1)
			res.push(item.split('.')[0]);
	})
	console.log(res);
})

//获取文件夹下所有文件和路径
var path = require('path');
var fs = require('fs');
let ABSOLUTE_PATH = path.resolve(__dirname, './file');
function readFileList(path, filesList) {
	var files = fs.readdirSync(path);// [ 'bucuo.png', 'hehe.html', 'nihao.html', 'wanshaobo.jpg' ]
	files.forEach((item, index) => {//iem 'bucuo.png'
		var stat = fs.statSync(path + '/' + item);
		if (stat.isDirectory()) {
			readFileList(path + '/' + item + "/", filesList)//递归读取文件
		} else {
			var obj = {};
			obj.path = path;
			obj.filename = item;
			filesList.push(obj);
		}
	})
}

var filesList = [];
readFileList(ABSOLUTE_PATH, filesList);
console.log(filesList);