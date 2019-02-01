var arr = [1,-2,3,10,-4,7,2,-5]
function findMax(arr){
	if(arr.length == 0){
		return 0
	}
	let max = arr[0]
	let sum = 0;
	for(var i=0,len=arr.length;i<len;i++){
		if(sum >= 0){
			sum += arr[i]
		}else{
			sum = arr[i]
		}
		if(sum > max){
			max = sum;
		}
	}
	return max
}
console.log(findMax(arr));