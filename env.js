Promise.resolve().then(() => {
	console.log('promise1')
}).then((a) => {
	console.log(a)
}).then(() => {
	console.log('promise3')
}).then(() => {
	console.log('promise4')
})