//算法题汇总

//数组深拷贝
let arr = [1,2,3];
arr.slice();
function deepCloneArray(arr){
    let result = [];
    for(let i=0;i<arr.length;i++){
        result[i] = arr[i] instanceof Array ? deepCloneArray(arr[i]) : arr[i];
    }
    return result
}
//对象深拷贝5中方案
//递归法
function _deepClone(source) {
    let target;
    if (typeof source === 'object') {
        target = Array.isArray(source) ? [] : {}
        for (let key in source) {
            if (source.hasOwnProperty(key)) {
                if (typeof source[key] !== 'object') {
                    target[key] = source[key]
                } else {
                    target[key] = _deepClone(source[key])
                }
            }
        }
    } else {
        target = source
    }
    return target
}
function deepCloneObject(obj){
    let result = {};
    for(let key in obj){
        result[key] = typeof obj[key] === 'object' ? deepCloneObject(obj[key]) : obj[key];
    }
    return result
}
//当对象中只有一级属性，没有二级属性的时候，此方法为深拷贝，但是对象中有对象的时候，此方法，在二级属性以后就是浅拷贝。
//如果对象的属性值为简单类型 得到的新对象为深拷贝；如果属性值为对象或其它引用类型，那对于这个对象而言其实是浅拷贝的。
Object.assign({},{},{});//将每个参数对象中所有可枚举属性的值从一个或多个源对象复制到目标对象 返回目标对象 如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖。后面的源对象的属性将类似地覆盖前面的源对象的属性。
lodash.cloneDeep();
$.extend(true, {}, obj1);//jquery
JSON.parse(JSON.stringify({a:123}));//可以转成 JSON 格式的对象才能使用这种方法，如果对象中包含 function 或 RegExp 这些就不能用这种方法了
let obj = {
    a:1,
    b:function(){
        console.log(2)
    },
    c:/^\d%/ig
}
JSON.stringify(obj);//{"a":1,"c":{}}
JSON.parse(JSON.stringify(obj));//{"a":1,"c":{}}

//a-1 b-2 ... z-26 aa-27 ab28 az-52 ba-53 bb-54
function getNum(str){
    let char = 'abcdefghigklmnopqrstuvwxyz';
    let arr = str.split('');
    let result = 0;
    for(let i=0,len=arr.length;i<len-1;i++){
        result += Math.pow(26,len-i-1)*(char.indexOf(arr[i])+1)
    }
    result += (char.indexOf(arr.pop())+1)
    return result
}
console.log(getNum('a'));//1
console.log(getNum('z'));//26
console.log(getNum('ba'));//53
console.log(getNum('zz'));//702
console.log(getNum('zzz'));//18278

//返回页面最多的n个标签
function getMaxTags(n){
    let tags = document.querySelectorAll('*');//1148
    let obj = {};//{HTML:1,DIV:12}
    tags.forEach((element)=>{
        if(!obj[element.nodeName]){
            obj[element.nodeName] = 1;
        }else{
            obj[element.nodeName]++;
        }
    })
    //有序 ["HTML", "HEAD", "TITLE", "BODY", "TABLE", "TBODY", "H3", "SELECT", "H4", "H1", "TH", "EM", "FORM", "BUTTON", "HR", "STYLE", "IFRAME", "DL", "DT", "META", "BR", "STRONG", "INS", "H2", "IMG", "LINK", "LABEL", "UL", "SPAN", "OPTION", "INPUT", "SCRIPT", "P", "DD", "TR", "I", "DIV", "LI", "TD", "A"]
    let res = Object.keys(obj).sort((a,b)=>{return obj[a] - obj[b]});//按照对象的属性值排序
    res.reverse().forEach((item,index)=>{
        if(index < n){
            console.log(item,obj[item])
        }
    })
}
getMaxTags(10);
//扩展 obj = {a:{num:1},b:{num:2},c:{num:3}} Object.keys(obj).sort((a,b)=>{return obj[a].num - obj[b].num})

//时间复杂度和空间复杂度衡量一个算法的优良
//无序数组找到前10个最小 [1, 1, 1, 1, 1, 1, 1, 1, 1, 2]
let arr = [1, 1, 23, 14, 21, 1, 50, 1, 468, 11, 217, 582, 33, 356, 332, 176, 419, 42, 11, 13, 13, 17, 19, 2, 6, 13, 63, 3, 1, 1, 1, 3, 5, 28, 1, 7, 8, 2, 5, 5, 20, 1, 2, 2, 6];
//api 法
//不是真正按照数字排序，而是按照字符的先后顺序排序
// arr.sort();//[1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 11, 13, 13, 13, 14, 17, 176, 19, 2, 2, 2, 2, 20, 21, 217, 23, 28, 3, 3, 33, 332, 356, 419, 42, 468, 5, 5, 5, 50, 582, 6, 6, 63, 7, 8]
//真正按照数字排序
// arr.sort((a,b) => a - b);//[1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 5, 5, 5, 6, 6, 7, 8, 11, 11, 13, 13, 13, 14, 17, 19, 20, 21, 23, 28, 33, 42, 50, 63, 176, 217, 332, 356, 419, 468, 582]
//排序算法
//冒泡排序 需要全部执行完毕才能确保前十个是最小的 内层for循环执行990次 为真594次
//选择排序 每次找到最小的放在第一位 外层for循环执行10次即可 内层for循环执行429次 为真27次
//插入排序 需要全部执行完毕才能确保前十个是最小的 内层for循环执行990次 为真594次
//快速排序 递归调用67次 for循环执行226次

//找到数组中两个和为8的元素，返回索引号
let arr = [1,2,3,4,5];
function getIndex(arr){
    while(arr.length){
        let index = arr.length - 1;
        let cur = 8 - arr.pop();
        if(arr.indexOf(cur) != -1){
            return [arr.indexOf(cur),index];
        }
    }
}
function getIndex(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] + arr[j] == 8){
                return [i,j]
            }
        }
    }
}

/**
 * 实现一个方法来检测该字符串是否合法，其规则为’()’、’{}’、’[]'必须互相匹配，可嵌套
 * 示例：
 *   isValid(’(’); // false
 *   isValid(’()’); // true
 *   isValid(’()[]{}’); // true
 *   isValid(’{()[]}’); // true
 *   isValid(’(]’); // false
 *   isValid(’([)]’); // false
 *   isValid(’({})’); // true
 */
function isValid(str){
    if(str.length%2 != 0)
        return false
    while(str.length){
        if(str.length == 1)
            return true
        let cur = str.charAt(0);
        let index = -1;
        switch (cur){
            case '(':
                index = str.indexOf(')');
                if(index != -1){
                    str = str.slice(1,index) + str.slice(index+1);
                    break;
                }else{
                    return false
                }
            case ')':
                index = str.indexOf('(');
                if(index != -1){
                    str = str.slice(1,index) + str.slice(index+1);
                    break;
                }else{
                    return false
                }
            case '[':
                index = str.indexOf(']');
                if(index != -1){
                    str = str.slice(1,index) + str.slice(index+1);
                    break;
                }else{
                    return false
                }
            case ']':
                index = str.indexOf('[');
                if(index != -1){
                    str = str.slice(1,index) + str.slice(index+1);
                    break;
                }else{
                    return false
                }
            case '{':
                index = str.indexOf('}');
                if(index != -1){
                    str = str.slice(1,index) + str.slice(index+1);
                    break;
                }else{
                    return false
                }
            case '}':
                index = str.indexOf('{');
                if(index != -1){
                    str = str.slice(1,index) + str.slice(index+1);
                    break;
                }else{
                    return false
                }
            default:
                break;
        }
    }
    return true
}
console.log(isValid('('));
console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('{(){}}'));
console.log(isValid('(]'));
console.log(isValid('([)]'));
console.log(isValid('({})'));

//格式化字符串 "i'm??汉字?driving呵呵to这234Beijing汉字after特殊符号breakfase" -> "i'm driving to 'Beijing after breakfase"
let str = "i'm??汉字?driving呵呵to这234Beijing汉字after特殊符号breakfase";
function formatStr(str){
    //第一步将 非 大小写字母和撇号 找到并替换为空格
    //第一步将连续多个空格替换为单个空格
    return str.replace(/[^a-zA-Z\']/g," ").replace(/\s+/g," ")
}
formatStr(str);

//不用控制循环的方法和关键字生成数数组 每次加3
function getArr(startNum,len){
    if(len <= 0)
        return [startNum]
    return new Array(len).fill(startNum).map((item,index) => item + 3*index )
}
getArr(1,10);//[ 1, 4, 7, 10, 13, 16, 19, 22, 25, 28 ]
getArr(13,8);//[ 13, 16, 19, 22, 25, 28, 31, 34 ]
getArr(3,-4);//[ 3 ]

//实现对象代理源码
function Proxy(target,handle){
    //深拷贝
    let targetCopy = deepCoypObject(target);
    //遍历当前对象所有属性
    Object.keys(targetCopy).forEach(function(key){
        Object.defineProperty(targetCopy, key, {
            get: function() {
                return handle.get && handle.get(target,key);
            },
            set: function(newVal) {
                handle.set && handle.set(target,key,newVal);
            }
        });
    });
    return targetCopy;
}
function deepCoypObject(obj){
    let result = {};
    for(let key in obj){
        result[key] = typeof obj[key] === 'object' ? deepCoypObject(obj[key]) : obj[key];
    }
    return result
}
let person = {name:''};
let personProxy = new Proxy(person,{
    get(target,key){
        console.log('get方法被拦截');
        return target[key];
    },
    set(target,key,value){
        console.log('set方法被拦截');
        target[key] = value + "set";
    }
});
personProxy.name = 'wanshaobo';  // set方法被拦截。。。
console.log(personProxy.name);   //wanshaoboset get方法被拦截。。。
//实现如下Proxy代理
let Person = {name: '万少博'}
console.log(ProxyPerson.name) // '万少博'
console.log(ProxyPerson.age) // '保密'
ProxyPerson.rate = 'A'
console.log(ProxyPerson.rate) // '推荐'
ProxyPerson.rate = 'B'
console.log(ProxyPerson.rate) // '待提高'
const ProxyPerson = new Proxy(Person, {
    get(target, key) {
        if (key != 'age') {
            return target[key]
        } else {
            return '保密'
        }
    },
    set(target, key, value) {
        if (key === 'rate') {
            target[key] = value === 'A' ? '推荐' : '待提高'
        }
    }
})
//Object.defineProperty(obj,props,desc) 劫持一个对象的属性 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
let desc = {
    value: '',//和 get 不能同时存在
    writable: false,
    get: function(){},
    set: function(){},
    configrable: false,//不可重新配置 不可删除
    enumerable: true//会出现在for in 或者 Object.keys()的遍历中
}
const object1 = {};
Object.defineProperty(object1, 'property1', {value: 42, writable: true});
object1.property1 = 77;
console.log(object1);//{property1: 77}
Object.defineProperty(object1, 'property1', {value: 42, writable: false});//writable 不写默认false
object1.property1 = 77;
console.log(object1.property1);//42
console.log(object1);//{property1: 42}

//生成逐级缩进的树 每个层级插入index？
class Tree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.data = [{name:'课程',hasChild:true,child:[
            {name:'数学',hasChild:true,child:[
                {name:'小学数学',hasChild:false,child:[]},
                    {name:'初中数学',hasChild:true,child:[
                        {name:'代数',hasChild:false,child:[]},
                         {name:'几何',hasChild:false,child:[]}
                    ]},
                ]},
            {name:'语文',hasChild:false,child:[]},
             {name:'英语',hasChild:false,child:[]}
        ]}]
    }
    getTree(arr){
        return arr.map((item,index)=>{
            if(item.hasChild){
                return <div key={index} className={styles.node}>{item.name}{this.getTree(item.child)}</div>
            }else{
                return <div key={index} className={styles.node}>{item.name}</div>
            }
        })
    }
    render() {
        return <div className={styles.contianer}>{this.getTree(this.data)}</div>
    }
}
.contianer{
    width: 100%;
    height: 100%;
    font-size: 16px;
    margin-left: -20px;
.node{
        margin-left: 20px;
    }
}

//parentId为0表示根元素 将id和parentId无序的一维数组arr转化为具有层级结构的树tree
let data = [
    {id:2122,name:'几何',parentId:212},
    {id:1,name:'课程',parentId:0},
    {id:2121,name:'代数',parentId:212},
    {id:21,name:'数学',parentId:1},
    {id:212,name:'初中数学',parentId:21},
    {id:22,name:'英语',parentId:1},
    {id:23,name:'语文',parentId:1},
    {id:211,name:'小学数学',parentId:21}
];
function toTree(data){
    let result = [];
    if(!Array.isArray(data))
        return result
    let obj = {};
    data.forEach((item)=>{
        obj[item.id] = item;
    });
    data.forEach((item,index)=>{
        let parent = obj[item.parentId];
        if(parent){
            (parent.children || (parent.children = [])).push(item);
        }else{
            result.push(item);
        }
    });
    return result
}
console.log(toTree(data));
let tree = [
    {"id":1,"name":"课程","parentId":0,"children":[
            {"id":21,"name":"数学","parentId":1,"children":[
                    {"id":212,"name":"初中数学","parentId":21,"children":[
                            {"id":2122,"name":"几何","parentId":212},
                            {"id":2121,"name":"代数","parentId":212}
                        ]},
                    {"id":211,"name":"小学数学","parentId":21}
                ]},
            {"id":22,"name":"英语","parentId":1},
            {"id":23,"name":"语文","parentId":1}
        ]}
]

//树结构增加id和parentId
let arr = [{name:'课程',hasChild:true,children:[
        {name:'数学',hasChild:true,children:[
                {name:'小学数学',hasChild:false,children:[]},
                {name:'初中数学',hasChild:true,children:[
                        {name:'代数',hasChild:false,children:[]},
                        {name:'几何',hasChild:false,children:[]}
                    ]},
            ]},
        {name:'语文',hasChild:false,children:[]},
        {name:'英语',hasChild:false,children:[]}
    ]}]
function setId(arr,parentId){
    if(parentId != undefined){
        parentId = parentId + ''
    }
    arr.forEach((item,index)=>{
        index += 1
        if(item.children && item.children.length){
            if(parentId){
                item.id = parentId + index
                item.parentId = parentId
                this.setId(item.children,parentId + index)
            }else{
                item.id = index
                item.parentId = 0;
                this.setId(item.children,index)
            }
        }else{
            item.id = parentId + index
            item.parentId = parentId
        }
    })
    console.log(JSON.stringify(arr));
}
let tree = [
    {"name":"课程","hasChild":true,"children": [
        {"name":"数学","hasChild":true,"children":[
            {"name":"小学数学","hasChild":false,"children":[],"id":"111","parentId":"11"},
            {"name":"初中数学","hasChild":true,"children":[
                {"name":"代数","hasChild":false,"children":[],"id":"1121","parentId":"112"},
                {"name":"几何","hasChild":false,"children":[],"id":"1122","parentId":"112"}],"id":"112","parentId":"11"}],"id":"11","parentId":"1"},
        {"name":"语文","hasChild":false,"children":[],"id":"12","parentId":"1"},
        {"name":"英语","hasChild":false,"children":[],"id":"13","parentId":"1"}], "id":1,"parentId":0}
]

//避免定时器处于游离状态不能被清理 在初始化的时候进行clear
//setInterval 不能终止的场景
//1 1 1 1 1 3 1 3 1 3 1
let timer = setInterval(()=>{
    console.log(1)
},1000)
function time(){
    timer = setInterval(()=>{
        console.log(2)
    },1500)
}
time();
setTimeout(()=>{
    clearInterval(timer)//没有终止了任何定时器
    timer = setInterval(()=>{
        console.log(3)
    },1000)
},5000)
clearInterval(timer);//终止了log2定时器
//1 1 1 1 1 3 1 3 1 3 1
let timer = setInterval(()=>{
    console.log(1)
},1000)
function time(){
    timer = setInterval(()=>{
        console.log(2)
    },1500)
}
time();
setTimeout(()=>{
    clearInterval(timer)//没有终止了任何定时器
    timer = setInterval(()=>{
        console.log(3)
    },1000)
},5000)
clearInterval(timer);//终止了log2定时器
clearInterval(timer);//没有终止了任何定时器
//1 3 1 3 1 3 1 3 1
let timer = setInterval(()=>{
    console.log(1)
},1000)
timer = setInterval(()=>{
    console.log(2)
},1000)
function time3(){
    //只能清空作用域链中的一个定时器 连续多个clearInterval只有第一个生效
    clearInterval(timer);//终止了log2定时器
    timer = setInterval(()=>{
        console.log(3)
    },1500)
}
time3();
// clearInterval(timer);//有效终止log3定时器
function time4(){
    // clearInterval(timer);//有效终止log3定时器
    timer = setInterval(()=>{
        console.log(4)
    },1000)
}
time4()
clearInterval(timer);//终止了log4定时器
//1 2 3 1 2 3 1 2 3
let timer = setInterval(()=>{
    console.log(1)
},1000)
timer = setInterval(()=>{
    console.log(2)
},1000)
function time3(){
    timer = setInterval(()=>{
        console.log(3)
    },1000)
}
time3();
function time4(){
    timer = setInterval(()=>{
        console.log(4)
    },1000)
}
time4()
clearInterval(timer);//终止了log4定时器
//1 2 3 4 1 2 3 4
let timer = setInterval(()=>{
    console.log(1)
},1000)
timer = setInterval(()=>{
    console.log(2)
},1000)
function time3(){
    timer = setInterval(()=>{
        console.log(3)
    },1000)
}
time3();
function time4(){
    timer = setInterval(()=>{
        console.log(4)
    },1000)
    timer = setInterval(()=>{
        console.log(5)
    },1000)
}
time4()
clearInterval(timer);//终止了log5定时器
//1 1 count++ 1 11 1 11 1 count++ 1 12 1 12 1 count++ 1 13 1 13 1
let count = 10;
let timer = setInterval(()=>{
    console.log(1)
},1000)
timer = setInterval(()=>{
    console.log(2)
},1000)
setInterval(()=>{
    count++;
    console.log('count++');
    clearInterval(timer);//终止了下面这条语句的定时器
    timer = setInterval(()=>{
        console.log(count)
    },1000)
},3000)
clearInterval(timer);//终止了log2定时器
//定时器会返回进程id clearInterval是杀进程
let a = setInterval(()=>{},1000)
let b = setInterval(()=>{},1000)
let d = setInterval(()=>{},1000)
console.log(a,b,d);//浏览器空标签页面 1 2 3

//函数防抖和函数节流
//函数防抖 戳按钮 高频率不间断触发事件 只有在停止后再过n秒才会执行一次 || 第一次触发有效
//非立即执行 只有在停止后再过n秒才会执行一次
//防抖函数
function debounce(cb,wait){
    let timeoutID = null;
    return function(){
        let _this = this;
        let args = arguments
        if(timeoutID)
            clearTimeout(timeoutID);//取消方法执行
        timeoutID = setTimeout(()=>{
            cb.apply(_this,args)
        },wait)
    }
}
//真正的需要执行的函数
function eat(){
    console.log([].slice.apply(arguments));
}
//防抖函数实例化
let mouseMove = debounce(eat,2000);
let count = 0
//用定时器模拟鼠标移动事件(高频率不间断事件)
let timer = setInterval(()=>{
    count++
    console.log(count);
    if(count == 100){
        //终止 高频率不间断事件
        clearInterval(timer)
        count = 0
    }
    //高频率不间断触发事件执行
    mouseMove(1,2,3)
},10)
//立即执行版 第一次触发有效
//防抖函数
function debounce(cb,wait){
    let timeoutID = null;
    return function(){
        let _this = this;
        let args = arguments;
        if(timeoutID)
            clearTimeout(timeoutID)
        let callNow = !timeoutID;
        timeoutID = setTimeout(()=>{
            timeoutID = null;
        },wait)
        if(callNow){
            cb.apply(_this,args)
        }
    }
}
//真正的需要执行的函数
function eat(){
    console.log([].slice.apply(arguments));
}
//防抖函数实例化
let mouseMove = debounce(eat,2000)
let count = 0;
//用定时器模拟鼠标移动事件(高频率不间断事件)
let timer = setInterval(()=>{
    //高频率不间断触发事件执行
    mouseMove(1,2,3)
    console.log(count);
    count++
    if(count == 20){
        //终止 高频率不间断事件
        clearInterval(timer)
        count = 0
    }
},100)
/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
function debounce(func,wait,immediate) {
    let timeoutID;
    return function () {
        let _this = this;
        let args = arguments;
        if (timeoutID) clearTimeout(timeoutID);
        if (immediate) {
            var callNow = !timeoutID;
            timeoutID = setTimeout(() => {
                timeoutID = null;
            }, wait)
            if (callNow) func.apply(_this, args)
        } else {
            timeoutID = setTimeout(function(){
                func.apply(_this, args)
            }, wait);
        }
    }
}

//函数节流 滚动条 高频率不间断事件 稀释执行频率
//时间戳版
function throttle(func,wait){
    let previous = 0;
    return function(){
        let now = Date.now();
        let _this = this;
        let args = arguments;
        if(now - previous > wait){
            func.apply(_this,args);
            previous = now;
        }
    }
}
function eat(){
    console.log([].slice.apply(arguments));
}
let mouseMove = throttle(eat,1000)
setInterval(()=>{
    mouseMove(1,2,3)
},10)
//定时器版
function throttle(func,wait){
    let timeoutID = null;
    return function(){
        let _this = this;
        let args = arguments;
        if(!timeoutID){
            timeoutID = setTimeout(()=>{
                func.apply(_this,args);
                clearTimeout(timeoutID)
                timeoutID = null;
            },wait)
        }
    }
}
/**
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1 表时间戳版，2 表定时器版
 */
function throttle(func, wait ,type) {
    if(type===1){
        let previous = 0;
    }else if(type===2){
        let timeout;
    }
    return function() {
        let context = this;
        let args = arguments;
        if(type===1){
            let now = Date.now();

            if (now - previous > wait) {
                func.apply(context, args);
                previous = now;
            }
        }else if(type===2){
            if (!timeout) {
                timeout = setTimeout(() => {
                    timeout = null;
                    func.apply(context, args)
                }, wait)
            }
        }
    }
}


/*
* 找出多维数组中指定维度的项并返回
* @param arr 原始数组
* @param num 维度
* */
function findItem(arr,num){
    let result = [];
    function find(arr,num){
        num--;
        arr.forEach((item)=>{
            if(num <= 0){
                result.push(item)
            }else{
                if(Array.isArray(item)){
                    find(item,num)
                }
            }
        })
    }
    find(arr,num)
    return result
}
let arr = [[[[1989,10,1]]],[2020,7,27],[[['wan','shao','bo']]],1,5]
console.log(findItem(arr, 1));//[[[[1989,10,1]]],[2020,7,27],[[['wan','shao','bo']]],1,5]
console.log(findItem(arr, 2));//[ [ [ 1989, 10, 1 ] ], 2020, 7, 27, [ [ 'wan', 'shao', 'bo' ] ] ]
console.log(findItem(arr, 3));//[ [ 1989, 10, 1 ], [ 'wan', 'shao', 'bo' ] ]
console.log(findItem(arr, 4));//[ 1989, 10, 1, 'wan', 'shao', 'bo' ]
console.log(findItem(arr, 5));//[]

//function request(urls, maxNumber, callback) ，根据urls数组内的url地址进行并发网络请求，最大并发数maxNumber,当所有请求完毕后调用callback函数
function request(urls, maxNumber, callback) {
    let allResponse = []
    let chunk = urls.slice(0,maxNumber);
    urls = urls.slice(maxNumber)
    chunk.forEach((url)=>{f(url,'data')})
    function f(url,data){
        fetch({url,data}).then((response)=>{
            allResponse.push(response)
            if(allResponse.length == urls.length){
                callback(allResponse)
            }
            if(urls.length != 0){
                f(urls.shift(),'data')
            }
        })
    }
}

//卡特兰数 从左下角走到右上角的路径数
//动态规划矩阵有多少种走法 最长公共最序列 最长公共子串
// 1 2 3
// 4 5 6
// 7 8 9
//返回路径和最大的路径
//[1,2,3,6,9] [1,2,5,6,9] [1,2,5,8,9]
//[1,4,7,8,9] [1,4,5,8,9] [1,4,5,6,9]
let arr = [[1,2,3],[4,5,6],[7,8,9]]
let result = []
let path = [];
//路径总数
function find(arr,x,y){
    if(x == arr.length-1 && y == arr[0].length-1){
        return 1
    }else if(x == arr.length-1){
        return find(arr,x,y+1)
    }else if(y == arr[0].length-1){
        return find(arr,x+1,y)
    }else{
        return find(arr,x+1,y) + find(arr,x,y+1)
    }
}
console.log(find(arr,0, 0));//6
// 1 1 1
// 1 2 3
// 1 3 6
function find(m, n) {
    let h = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
    for(let  i=0; i<=n; i++){
        for(let j=0; j<=m; j++){
            if(i>0 && j>0){
                h[j][i] = h[j-1][i] + h[j][i-1];
            }else{
                h[j][i] = 1;
            }
        }
    }
    return h[m][n];
}
console.log(find(2, 2));


//一个楼梯有n (n >= 1)级，每次走1级或两级，请问从1级台阶走到第n级台阶一共有多少种走法(假设一开始站在第0级台阶上)


//鸡兔同笼，30只动物，72只脚，用编程的方式计算出鸡兔各几只。
function getNum(animals,foots){
    //chicken 2  rabbit 4
    let chicken = 0;
    while(chicken*2 + (animals - chicken)*4 != foots){
        chicken++
    }
    console.log('chicken',chicken,'rabbit',animals - chicken);
}
getNum(30,72)

promisify(fs.readFile)(path).then(()=>{})
promisify(fs.writeFile)(path,content).then(()=>{})
//fs.readFile(path,(err,val)=>{})
//fs.writeFile(path,content,(err,val)=>{})
function promisify(fn){
    return function (){
        let rest = [].slice.call(arguments)
        return new Promise((resolve,reject)=>{
            rest.push(cb)
            function cb(err,val){
                if(err){
                    reject(err)
                }else{
                    resolve(val)
                }
            }
            fn.apply(this,rest)
        })
    }
}



