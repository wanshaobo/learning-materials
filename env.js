//js 实现 二叉树数据结构
//js 实现 map数据结构
var fs = require("fs")
var dir = './js'
function walk(dir) {
	var children = []
	fs.readdirSync(dir).forEach(function(filename){
		var path = dir+"/"+filename
		var stat = fs.statSync(path)
		if (stat && stat.isDirectory()) {
			children = children.concat(walk(path))
		}
		else {
			children.push(path)
		}
	})
	return children
}

console.log(walk(dir));