
window.screen.height;window.screen.width;//电脑显示器宽高,屏幕分辨率的宽高
screen.availHeight;screen.availWidth;//浏览器的宽高，不包括电脑的底部任务栏高度,包括浏览器标题栏以及全部区域
window.innerHeight;//页面显示出来的可视高，不包括电脑底部任务栏高度，也不包括浏览的标题栏和任务栏和工具栏。但包括滚动条
window.innerWidth;//页面宽，不包括电脑底部任务栏高度，也不包括浏览的标题栏和任务栏和工具栏。但包括滚动条
document.body.clientHeight;document.body.clientWidth;//页面全部高宽，不包括滚动条以及以外区域
document.body.scrollWidth;document.body.scrollHeight;//页面全部高宽，不包括滚动条以及以外区域
document.body.offsetWidth;document.body.offsetHeight;//页面全部高宽，不包括滚动条以及以外区域 (包括边线的宽高)，如果没有边线，和上一个一样
document.body.scrollTop;document.body.scrollLeft;//横竖滚动条距离左上的距离

//移动端 滚动条滚动 监听事件
window.onscroll = function () {
    //获取文档总高度（页面全部内容区域）
    var documentH = document.body.scrollHeight;
    //获取浏览器窗口高度（仅仅是页面内容区域）
    var viewH = window.innerHeight;
    //滚动条距离顶部高度
    var scroolTop = document.body.scrollTop;
    if(viewH + scroolTop === documentH){
        console.log('到底了');
    }else if(scroolTop === 0){
        console.log('到顶了');
    }
}

//手机和电脑同时适配
var screen_w = window.screen.availWidth;
var width_outter = document.getElementById('screenH');
(function(){
 if(screen_w > 768){//移动设备最大的屏幕宽度，pad最大宽度768，如果大于这个逻辑分辨率宽度，证明网页是在PC端打开的
     width_outter.style.width = 650+"px";
     width_outter.style.marginLeft = "auto";
     width_outter.style.marginRight = "auto";
     width_outter.style.marginTop = 0;
     width_outter.style.marginBottom = 0;

     var oHtml = document.getElementsByTagName('html')[0];

     oHtml.style.fontSize = '86.7px';
 }
})();

(function() {
    var oHtml = document.getElementsByTagName('html')[0];
    var fz = window.innerWidth / 7.5;
    oHtml.style.fontSize = fz + 'px';
})();