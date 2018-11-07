function strToCamel(str){
	return str.replace(/\-[a-z]/g,(value, index, self) => value.charAt(1).toUpperCase());
}
console.log(strToCamel('aa-b'))