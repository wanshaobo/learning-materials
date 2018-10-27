var obj = {};
console.log(Object.prototype.toString.call(obj) === '[object Object]');

Object.prototype.toString.call(null);//”[object Null]”
Object.prototype.toString.call(undefined);//”[object Undefined]”
Object.prototype.toString.call('abc');//”[object String]”
Object.prototype.toString.call(123);//”[object Number]”
Object.prototype.toString.call(true);//”[object Boolean]”
Object.prototype.toString.call(fn);//”[object Function]”
Object.prototype.toString.call(date);//”[object Date]”
Object.prototype.toString.call(arr);//”[object Array]”