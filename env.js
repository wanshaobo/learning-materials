//统计元素出现的个数
// var arr = ['a','a','b','b','c','a'];
var arr = [1,1,2,2,3,1];
function statisticsEle(arr){
// function moseEle(arr){
    var obj = {},num = 0,ele;
    arr.forEach((item,index) => {
        if(!obj[item])
            obj[item] = 1;
        else
            obj[item]++;
        // if(obj[item] < num){
        //     num = obj[item];
        //     ele = item
        // }
    })
    return obj;
}
console.log(statisticsEle(arr));

