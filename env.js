setTimeout(() => {
	console.log('timeout0');
	process.nextTick(() => {
		console.log('nextTick1');
		process.nextTick(() => {
			console.log('nextTick2');
		});
	});
	process.nextTick(() => {
		console.log('nextTick3');
	});
	console.log('sync');
	setTimeout(() => {
		console.log('timeout2');
	}, 0);
}, 0);