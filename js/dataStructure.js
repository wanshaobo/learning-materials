//树
//深度优先遍历(DFS)
//广度优先遍历(BFS)

//crud是指在做计算处理时的增加(Create)、读取查询(Retrieve)、更新(Update)和删除(Delete)几个单词的首字母简写


/*
  A
 B C D
E F
*/
let arr = [{value:'A',children:[{value:'B',children:[{value:'E',children:[]},{value:'F',children:[]}]},{value:'C',children:[]},{value:'D',children:[]}]}]
//DFS ABEFCD
function outputNode1(arr){
	arr.forEach((item)=>{
		console.log(item.value)
		if(item.children.length > 0){
			outputNode1(item.children)
		}
	})
}
outputNode1(arr)
//BFS ABCDEF 广度优先遍历-层次遍历
function outputNode(arr){
	let temp = []
	arr.forEach((item)=>{
		console.log(item.value)
		if(item.children.length > 0){
			temp.push(item.children)
		}
	})
	temp.forEach((item)=>{
		outputNode(item)
	})
}
outputNode(arr)