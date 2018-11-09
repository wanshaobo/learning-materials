var obj = {a:1}
Object.freeze(obj);
obj.a = 2;
console.log(obj);//{a:1}


var table = {
	key:1,
	value:2,
	level01:{
		key:3,
		value:4,
		level0101:{
			key:5,
			value:6
		}
	},
	level02:{
		key:7,
		value:8
	}
}


console.log(1)
new Promise(function(resolve,reject){
    process.nextTick(()=>{console.log(9)})
    console.log(2)
    resolve()
    console.log(3);
    process.nextTick(()=>{console.log(7)})
    setTimeout(function(){console.log(13)},0)
}).then(function(){
    process.nextTick(()=>{console.log(10)})
    console.log(4);
    process.nextTick(()=>{console.log(8)})
    setTimeout(function(){console.log(14)},0)
})
setTimeout(function(){
    process.nextTick(()=>{console.log(11)})
    console.log(5)
    process.nextTick(()=>{console.log(12)})
},0)
console.log(6);//1 2 3 6 9 7 4 10 8 13 5 14 11 12