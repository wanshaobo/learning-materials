//js总结
//第一章 项目方案:图片轮播效果，新闻向上滚动，滚动监听事件，ajax请求，封面mask效果,网页加载进度条  11行
//第一章 jquery库，方法和属性  11行
//第一章 常用函数封装  11行

//时间复杂度和空间复杂度


//jquery所有API都是支持单独调用方式或链式调用方式
//.val() 获取匹配的元素集合中第一个元素的当前值,主要用于获取表单元素的值，比如 input, select 和 textarea。
//.val( value ) 设置匹配的元素集合中每个元素的值。
.show();.hide();
addClass();removeClass();
text();html();
children();find();//子元素 后代元素
parent();parents()//父元素 祖先元素
append();appendTo()//a append() b,在a元素内容末尾追加b元素。a appendTo() b,把a元素放入b元素内容末尾追加。
prepend();prependTo();//在元素内容头部追加元素
//after和before，如同append
after();before();//在匹配元素集合中的每个元素后面插入参数所指定的内容，作为其兄弟节点。|| 根据参数设定，在匹配元素的前面插入内容（译者注：外部插入）
//insertAfter和insertBefore，如同appendTo
insertAfter();insertBefore();
wrap();wrapAll();//在每个匹配的元素外层包上一个html元素。||在所有匹配元素外面包一层HTML结构。
attr();//获取匹配的元素集合中的第一个元素的 属性 的值。设置每一个匹配元素的一个或多个属性。
css();//获取匹配元素集合中的第一个元素的 样式属性 的值.设置每个匹配元素的一个或多个CSS属性。
$('#dynamic-content-pic').append($('.di_content_img').eq(0).clone());
$('.di_content_img').eq(i).children('img').attr('src',imgList[i].imgurl)；
$('.di_praise').append('<li class="di_praise_img float_l"><img src="' + praiseList[i].iconimg_s + '"></li>');
$('.di_praise').append('<li class="di_praise_img float_l"><img src="../Content/images/article_more.png"></li>');
var className = $(this).attr('class');
    $('.dynamic_comment').on('click',function(){
        $(".di_foot").slideUp(300,function(){$(".dynamic_critics").slideDown(300);});
        return false;       
    })
    $(".dynamic_critics").click(function(){
        return false;//点击该控件，不隐藏。点击该控件以外区域，该控件隐藏
    });
    $(document).click(function(){
        $(".dynamic_critics").slideUp(300,function(){$(".di_foot").slideDown(300);});//点击该控件，不隐藏。点击该控件以外区域，该控件隐藏
    });
$(selector).hover(handlerIn, handlerOut) === $(selector).mouseenter(handlerIn).mouseleave(handlerOut);
mouseover();mouseout();
$('#foo').trigger('click');//程序触发绑定的click事件
$('#scroll_up>li').height();//方法有括号
$('#scroll_up>li').length;//方法无括号
animate();stop();
jQuery();$.each();$.getJSON()
val();//获取表单元素的值，比如 input, select 和 textarea。
.context属性


<audio  id="audio" autoplay loop >
  <source src="images/nusic.ogg" type="audio/ogg" >您的浏览器不支持 audio 元素。
</audio>
//控制音乐播放和隐藏，
//使用的是jquery选择器,返回的是jquery对象而非dom对象
//而jquery对象是没有play()方法的，你要么将jquery对象转换成dom对象，要么使用源生选择器document.getElementById
var audio = document.getElementById("audio");
$("#speaker").click(function() {
      if(audio.paused){                 
     audio.play();
 }
 else{
      audio.pause();
 } 
})

//JS 浏览器BOM
//window.location 对象用于获得当前页面的地址 (URL)，并把浏览器重定向到新的页面。
//http://localhost:9701/views/FoundationInfo/foundation_profile.aspx?id=2
//location.hostname 返回 web 主机的域名 => localhost
//location.pathname 返回当前页面的路径和文件名 => /views/FoundationInfo/foundation_profile.aspx
//location.port 返回 web 主机的端口 => 9701
//location.protocol 返回所使用的 web 协议 => http: 或 https:
//location.href 属性返回当前页面的 URL。 => http://localhost:9701/views/FoundationInfo/foundation_profile.aspx?id=2
//window.location 属性返回当前页面的 URL。 => http://localhost:9701/views/FoundationInfo/foundation_profile.aspx?id=2
//window.location.assign("http://www.w3cschool.cc")

//history.back() - 与在浏览器点击后退按钮相同
//history.forward() - 与在浏览器中点击按钮向前相同

window.screen.height;window.screen.width;//电脑显示器宽高,屏幕分辨率的宽高
screen.availHeight;screen.availWidth;//浏览器的宽高，不包括电脑的底部任务栏高度,包括浏览器标题栏以及全部区域
    window.innerHeight;//页面显示出来的可视高，不包括电脑底部任务栏高度，也不包括浏览的标题栏和任务栏和工具栏。但包括滚动条
window.innerWidth;//页面宽，不包括电脑底部任务栏高度，也不包括浏览的标题栏和任务栏和工具栏。但包括滚动条
document.body.clientHeight;document.body.clientWidth;//页面全部高宽，不包括滚动条以及以外区域
document.body.scrollWidth;document.body.scrollHeight;//页面全部高宽，不包括滚动条以及以外区域
document.body.offsetWidth；document.body.offsetHeight；//页面全部高宽，不包括滚动条以及以外区域 (包括边线的宽高)，如果没有边线，和上一个一样
document.body.scrollTop;document.body.scrollLeft;//横竖滚动条距离左上的距离
//PC端高度自适应处理
var height = window.innerHeight - 316;
if ($('.fintro_text').height() <= height) {
    $('.fintro_content').css('min-height',height + 64);
}
//元素除过margin的宽度是
$('body')[0]offsetwidth = border+padding+width;
var avaliWidth = $('html')[0].offsetWidth;//经测试，这个才是浏览器净宽度，不包括工具栏，滚动条




//JS调用函数内部变量有以下两种方法：
//1.添加return返回值  
var a = 5;
function xxx(){
    var a = 10;
    return a;
}
var b = xxx();//这里的b就是10
//2.闭包
var a = 5;
function xxx(){
    var a = 0;
    var ten = function(){
        a = 10;
        return a;
    }
    return ten;
}
var b = xxx();
b();

//移动端 滚动条滚动 监听事件
window.onscroll = function () {
    //获取文档总高度（页面全部内容区域）
    var documentH = document.body.scrollHeight；
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

//限定内容区域图片宽度
var imgW = $('.fintro_text').find('img').width();
//var imgW = $('.fintro_text').children('img').width();
if (imgW > 700) {
    $('.fintro_text').find('img').css('width', '90%');
}
var imgW01 = $('.news_list_content').find('img').width();
if (imgW01 > $('.news_list_content').width()) {
    $('.news_list_content').find('img').css('width', '90%');
}


//ajax请求
var getPraiseList = function(){
    $.ajax({
        async : true,       
        type:'POST',
        url:'../trunk/Manage/DynamicDetail',
        data:{
            userid:'277',
            dynamicid:'206'
        },
        dataType:'text',
        success:function(data){
            //
            var data = eval("("+data+")");
            var failMsg = data.failmsg;    
        },
        error:function(e){
            //
        }       
    });
}
getPraiseList();


//网页加载进度条:方案一，在html页面不同位置放入script标签；方案二，已加载内容/全部内容 = x%
//html
<div id="loading"></div>
$('#loading').animate({ 'width': '25%' }, 300, 'linear');
$('#loading').animate({ 'width': '50%' }, 300, 'linear');
$('#loading').animate({ 'width': '75%' }, 300, 'linear');
$('#loading').animate({ 'width': '100%' }, 300, 'linear');
//css
#loading{background:#00ff00;height:2px;position:fixed;top:0;z-index:2;}
//js
$(document).ready(function(){ 
    $('#loading').fadeOut(1000); 
});



//对html页面填充ajax数据  动态追加 两套方案 
//1.html文档中没有母模板，在js动态加载html结构并填充数据后显示
if(praiseListCount){
    for(var i=0;i<praiseListCount;i++){
        $('.di_praise').append('<li class="di_praise_img float_l"><img src="' + praiseList[i].iconimg_s + '"></li>');                   
    }
    $('.di_praise').append('<li class="di_praise_img float_l"><img src="../Content/images/article_more.png"></li>');//末尾追加省略号图标                
}else{
    //
}
//2.母模板在html文件中隐藏，js复制母模板并加载数据后子结构显示 
if(praiseListCount){
    for(var i=0;i<praiseListCount;i++){
        $('.di_praise').append($('.di_praise_img').eq(0).clone());
        //children()是查找子元素
        $('.di_praise_img').eq(i+1).removeClass('display_n').children('img').attr('src',praiseList[i].iconimg_s);
        //find()是查找后代元素
        //$('.di_praise_img').eq(i+1).removeClass('display_n').find('img').attr('src',praiseList[i].iconimg_s);
    }
    $('.di_praise').append('<li class="di_praise_img float_l"><img src="../Content/images/article_more.png"></li>');                
}else{
    //
}


//设置锚点 页面刷新后跳转到顶部 或指定位置
//不设置锚点 页面刷新 还是停留在当前位置
//onload 通常用于 <body> 元素，在页面完全载入后(包括图片、css文件等等。)执行脚本代码。
window.onload=function(){
  window.location.href="#top";//top指顶部
  //window.location.href="#id";//跳转到指定id位置
}


windows.onload = function(){
    //这段代码会在整个页面的document全部加载完成以后执行,不仅要求页面的DOM tree全部加载完成，而且要求所有的外部图片和资源全部加载完成。更不幸的是，如果外部资源，例如图片需要很长时间来加载，那么这个js效果就会让用户感觉失效了。 
}
$(document).ready(function(){
    //仅仅只需要加载所有的DOM结构，在浏览器把所有的HTML放入DOM tree之前（包括在加载外部图片和资源之前）就执行js效果。
    //比windows.onload执行早
});
$(function(){ 
　　//adding your code here 
}); 

//jquery
//text(),html()
//find(),children()

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


//新闻动态滚动
//深入理解定时器的动画执行过程，如果定时0，则导致事件队列中排列了无数个事件，如果定时时长大于动画执行时间，导致动画间断性执行
<div id="donation_trends">
    <ul id="scroll_up">
        <li class="donation_li_odd"><span class="donation_name">1王二狗</span><span class="donation_program">捐赠项目</span><span class="donation_rmb">10000元</span></li>
        <li class="donation_li_even"><span class="donation_name">2王二狗</span><span class="donation_program">捐赠项目</span><span class="donation_rmb">10000元</span></li>
        <li class="donation_li_odd"><span class="donation_name">3王二狗</span><span class="donation_program">捐赠项目</span><span class="donation_rmb">10000元</span></li>
        <li class="donation_li_even"><span class="donation_name">4王二狗</span><span class="donation_program">捐赠项目</span><span class="donation_rmb">10000元</span></li>
        <li class="donation_li_odd"><span class="donation_name">5王二狗</span><span class="donation_program">捐赠项目</span><span class="donation_rmb">10000元</span></li>
        <li class="donation_li_even"><span class="donation_name">6王二狗</span><span class="donation_program">捐赠项目</span><span class="donation_rmb">10000元</span></li>
        <li class="donation_li_odd"><span class="donation_name">7王二狗</span><span class="donation_program">捐赠项目</span><span class="donation_rmb">10000元</span></li>
        <li class="donation_li_even"><span class="donation_name">8王二狗</span><span class="donation_program">捐赠项目</span><span class="donation_rmb">10000元</span></li>
        <li class="donation_li_odd"><span class="donation_name">9王二狗</span><span class="donation_program">捐赠项目</span><span class="donation_rmb">10000元</span></li>
        <li class="donation_li_even"><span class="donation_name">0王二狗</span><span class="donation_program">捐赠项目</span><span class="donation_rmb">10000元</span></li>
    </ul>
</div>
#scroll_up{position:relative; overflow:hidden;}/*加载animate()方法必须设置*/
#scroll_up>li:hover{cursor:pointer;}
#donation_trends{ width:490px; height:230px; overflow:hidden;/*加载animate()方法必须设置*/}
.donation_li_odd{ background:#3db19e; color:#fff; font-size:16px; line-height:30px; }
.donation_li_even{ background:#fff; color:#6e6e6e; font-size:16px; line-height:30px; }
.donation_name{width:145px; text-align:center; display:inline-block;}
.donation_program{width:200px; text-align:center; display:inline-block;}
.donation_rmb{width:145px; text-align:center; display:inline-block;}
var scrollTimer;//定时器
var listHeight = $('#scroll_up>li').height();
var listCount = $('#scroll_up>li').length;
function scrollNews(){
    scrollTimer = setInterval(function() {
        $('#scroll_up').animate({top: -listHeight },1000,"linear",function(){$('#scroll_up').css('top',0).children('li').eq(0).appendTo('#scroll_up')});
            },1000);
}
scrollNews();
$('#scroll_up').hover(function(){clearInterval(scrollTimer);},function(){scrollNews();});


//轮播动画-PC端，有左右翻页按钮，有底部定位查看某页点击事件，窗口发生变化，重新调整轮播宽度
//如果上传图片高度不定，两个方案,第一，设定固定高度，蒙住下方，第二，固定高度，让图片vertical-align:middle,蒙住上下
<!-- 轮播动画html结构 开始 -->
<div id="animate-box">
    <ul id="animate-pic">
        <li class="animateImg"><img src="../Content/img/hp_pic1.png" /></li>
        <li class="animateImg"><img src="../Content/img/hp_pic1.png" /></li>
        <li class="animateImg"><img src="../Content/img/hp_pic1.png" /></li>
        <li class="animateImg"><img src="../Content/img/hp_pic1.png" /></li>
        <li class="animateImg"><img src="../Content/img/hp_pic1.png" /></li>
        <li class="animateImg"><img src="../Content/img/hp_pic1.png" /></li>
    </ul>
    <ul id="animate-dot">
        <li class="dot dot-bg"></li>
    </ul>
    <div id="animate-last"><</div>
    <div id="animate-next">></div>
</div>
<!-- 轮播动画html结构 结束 -->
/*轮播动画css样式 开始*/
/*样式清空*/
html, body, div, ul, li, image{ margin:0; padding:0; border:none; }
img {border:none; vertical-align:top;}
ul, li { list-style:none; }
/*样式清空*/
#animate-box{width:500px;position:relative;height:auto;overflow:hidden;}/*只改变width的值(可以是50%或100px类型的变量)，可实现全屏/固定宽度的轮播效果*/
#animate-pic{position:relative;}/*width在js动态设置*/
.animateImg{ float:left;}/*width在js动态设置*/
.animateImg img{width:100%; height:100%;}
#animate-dot{position:absolute; bottom:10px;left:50%;overflow:hidden;}
.dot{width:20px;height:20px; float:left; border-radius:10px; margin-right:10px; cursor:pointer;}
.dot-bg{ background:#000; opacity:0.3;filter:alpha(opacity=30);}
.dot-hasbg{ background:#ff0000; opacity:0.3;filter:alpha(opacity=30);}
#animate-last{width:40px;height:120px;line-height:120px;background:#000;opacity:0.3;filter:alpha(opacity=30);position:absolute;top:50%;margin-top:-60px;left:40px;text-align:center;padding-bottom:10px;font-size:40px;color:#fff;cursor:pointer;}
#animate-next{width:40px;height:120px;line-height:120px;background:#000;opacity:0.3;filter:alpha(opacity=30);position:absolute;top:50%;margin-top:-60px;right:40px;text-align:center;padding-bottom:10px;font-size:40px;color:#fff;cursor:pointer;}
/*轮播动画css样式 结束*/
//轮播动画js交互 开始
window.onresize = function () { avaliWidth = $('#animate-box').width(); }//窗口发生变化，重新调整轮播宽度
var avaliWidth = $('#animate-box').width();//获取轮播图的基准宽度，不包括右侧滚动条的屏幕宽度
var imgCount = $('.animateImg').length;//轮播图片的总数量
var animatePicWidth = imgCount * 100 + "%";//所有图片总宽度
var animateImg = 1 / imgCount * 100 + "%";//每个图片宽度宽度
var imgNum = 0;//当前图片编号
var timer = null;//定时器名称
$('#animate-pic').width(animatePicWidth);
$('.animateImg').width(animateImg);
//根据图片数量，设置底部定位点的数量
for (var i = 1; i < imgCount; i++) {
    $('#animate-dot').append($('.dot').eq(0).clone());
}
var animateDotWidth = $('#animate-dot').width();//获取底部定位点整体宽度，必须放在for循环下面
$('#animate-dot').css('margin-left', -(0.5 * animateDotWidth));//让底部定位点整体水平居中
$(".dot").eq(0).addClass("dot-hasbg");//默认设置，第一个定位点有背景色
function imgMove() {
    timer = setInterval(function () {
        imgNum++;
        if (imgNum >= imgCount) {
            imgNum = 0;
        }
        $("#animate-pic").stop().animate({ left: -avaliWidth * imgNum });
        $(".dot").removeClass("dot-hasbg").eq(imgNum).addClass("dot-hasbg");
    }, 2000)
}
imgMove();
$(".dot").on('click', function () {
    imgNum = $(this).index()//重置当前图片编号，保证单击底部定位点后，轮播从“下一张”继续开始
    $("#animate-pic").stop().animate({ left: -avaliWidth * imgNum });
    $(".dot").eq(imgNum).addClass("dot-hasbg").siblings().removeClass("dot-hasbg");
})
$("#animate-last").on('click', function () {
    imgNum--;
    if (imgNum <= 0) {
        imgNum = 0;
    }
    //轮播可循环
    // if (imgNum < 0) {
    //     imgNum = imgCount - 1;
    // }
    $("#animate-pic").stop().animate({ left: -avaliWidth * imgNum });
    $(".dot").eq(imgNum).addClass("dot-hasbg").siblings().removeClass("dot-hasbg");
})
$("#animate-next").on('click', function () {
    imgNum++;
    if (imgNum >= imgCount - 1) {
        imgNum = imgCount - 1;
    }
    //轮播可循环
    // if (imgNum > imgCount - 1) {
    //     imgNum = 0;
    // }
    $("#animate-pic").stop().animate({ left: -avaliWidth * imgNum });
    $(".dot").eq(imgNum).addClass("dot-hasbg").siblings().removeClass("dot-hasbg");
})
$(".dot,#animate-last,#animate-next").mouseover(function () {clearInterval(timer);})
$(".dot,#animate-last,#animate-next").mouseout(function () {imgMove();})
$("#animate-last,#animate-next").mouseover(function () {$(this).css('color', 'red');})
$("#animate-last,#animate-next").mouseout(function () {$(this).css('color', '#fff');})
//轮播动画js交互 结束

//轮播动画-手机端端，采用jquery库的jQuery Mobile JS，左右滑屏翻页，tap和taphold无效（点击和长按）
//jQuery Mobile 事件:触摸事件,滑动事件,定位事件,页面事件
<script src="js/jquery-1.8.3.min.js"></script>
<script src="http://apps.bdimg.com/libs/jquerymobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
<script src="js/script.js"></script>
  $("#animate_box").on("swipeleft",function(){
    clearInterval(timer);
    picN++;
    if(picN >= 4){
      picN = 4;
    }
    picBox.stop().animate({left:-avaliWidth*picN});
    bottomDot.removeClass().addClass("dot_bg");
    bottomDot.eq(picN).removeClass("dot_bg").addClass("dot_hasbg");
    animataMove();
  });
  $("#animate_box").on("swiperight",function(){
    clearInterval(timer);
    picN--;
    if(picN <= 0){
      picN = 0;
    }
    picBox.stop().animate({left:-avaliWidth*picN});
    bottomDot.removeClass().addClass("dot_bg");
    bottomDot.eq(picN).removeClass("dot_bg").addClass("dot_hasbg");
    animataMove();
  });

//轮播动画-手机端端，不采用jquery库的jQuery Mobile，采用浏览器原生事件对象，最早是iOS版Safari浏览器为了向开发人员传达一些信息新添加的事件
touchstart事件：当手指触摸屏幕时候触发，即使已经有一个手指放在屏幕上也会触发。
touchmove事件：当手指在屏幕上滑动的时候连续地触发。在这个事件发生期间，调用preventDefault()事件可以阻止滚动。
touchend事件：当手指从屏幕上离开的时候触发。
touchcancel事件：当系统停止跟踪触摸的时候触发。关于这个事件的确切出发时间，文档中并没有具体说明，咱们只能去猜测了。
这些事件都会冒泡，也都可以取消。
每个触摸事件的"event对象"都提供了在鼠标实践中常见的属性,bubbles,cancelable,clientX,clientY,screenX
  var startX = 0;
  var endX = 0;
  var axisX = 0;
  $("#animate_box").on("touchstart",function(e){
    e.preventDefault();//阻止了手机屏幕的单机事件，只触发触摸事件
    //event.stopPropagation()；//阻止事件向上冒泡
    startX = event.touches[0].clientX;
    clearInterval(timer);
  });
  $("#animate_box").on("touchend",function(e){
    e.preventDefault();//阻止了手机屏幕的单机事件，只触发触摸事件
    //event.stopPropagation()；//阻止事件向上冒泡
    endX = event.changedTouches[0].clientX;
    axisX = endX -startX;
    if(axisX >= 20){
      //向右滑动
      picN--;
      if(picN <= 0){
        picN = 0;
      }
      picBox.stop().animate({left:-avaliWidth*picN});
      bottomDot.removeClass().addClass("dot_bg");
      bottomDot.eq(picN).removeClass("dot_bg").addClass("dot_hasbg");
    }else if(axisX <= -20){
      //向左滑动
      picN++;
      if(picN >= 4){
        picN = 4;
      }
      picBox.stop().animate({left:-avaliWidth*picN});
      bottomDot.removeClass().addClass("dot_bg");
      bottomDot.eq(picN).removeClass("dot_bg").addClass("dot_hasbg");
    }
    animataMove();
  });

引入<link rel="stylesheet" href="http://apps.bdimg.com/libs/jquerymobile/1.4.5/jquery.mobile-1.4.5.min.css">字体出现阴影，需要做处理
text-shadow:none;

引入<script src="http://apps.bdimg.com/libs/jquerymobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>页面下方有“loading”字样，取消方式，加入下面css样式
.ui-loader-default{ display:none}
.ui-mobile-viewport{ border:none;}
.ui-page {padding: 0; margin: 0; outline: 0}

//
function load (){  
    document.addEventListener('touchstart',touch, false);//false- 默认。事件句柄在冒泡阶段执行 true - 事件句柄在捕获阶段执行 
    document.addEventListener('touchmove',touch, false);  
    document.addEventListener('touchend',touch, false);  
    function touch (event){  
        var event = event || window.event;  
        switch(event.type){  
            case "touchstart":  
                //console.log("Touch started (" + event.touches[0].clientX + "," + event.touches[0].clientY + ")");
                console.log(event.touches[0].clientX);
                break;  
            case "touchend":  
                //console.log("<br>Touch end (" + event.changedTouches[0].clientX + "," + event.changedTouches[0].clientY + ")");
                console.log(event.changedTouches[0].clientX);
                break;  
            case "touchmove":  
                event.preventDefault();//阻止默认事件执行，只触发触摸事件。滚动div时，使用它来阻止页面滚动，
                //event.stopPropagation()；//阻止事件向上冒泡
                //console.log("<br>Touch moved (" + event.touches[0].clientX + "," + event.touches[0].clientY + ")");
                break;  
        }  
    }  
}  
window.addEventListener('load',load, false); 

function load (){  
    document.getElementById('animate_box').addEventListener('touchstart',touch, false);  
    document.getElementById('animate_box').addEventListener('touchmove',touch, false);  
    document.getElementById('animate_box').addEventListener('touchend',touch, false);  
    function touch (event){  
        var event = event || window.event;  
        switch(event.type){  
            case "touchstart":  
                //console.log("Touch started (" + event.touches[0].clientX + "," + event.touches[0].clientY + ")");
                startX = event.touches[0].clientX;
                //console.log(startX);
                break;  
            case "touchend":  
                //console.log("<br>Touch end (" + event.changedTouches[0].clientX + "," + event.changedTouches[0].clientY + ")");
                endX = event.changedTouches[0].clientX;
                axisX = startX-endX;
                break;  
            case "touchmove":  
                event.preventDefault();//阻止默认事件执行，只触发触摸事件。滚动div时，使用它来阻止页面滚动，
                //event.stopPropagation()；//阻止事件向上冒泡 
                //console.log("<br>Touch moved (" + event.touches[0].clientX + "," + event.touches[0].clientY + ")");
                break;  
        }  
    }  
}  
window.addEventListener('load',load, false); 


//js事件处理分为三部分：对象.事件处理函数=函数
//js任何事件发生时，都会产生一个事件对象，这个对象中包含着这个事件的相关信息，包括导致事件的元素、事件的类型、以及其它与特定事件相关的信息等。这个对象是在执行事件时，浏览器通过函数传递过来的。
document.onclick=function(){   
    alert(this.value); //this代表着在该作用域中离它最近的对象。  
}
//event对象的接收：在W3C中可以直接接受event对象，如：
input.onclick = function (evt) { //接受 event 对象，名称不一定非要 event  
    alert(evt); //MouseEvent，鼠标事件对象 IE不支持  
    //但是IE中，不支持直接接收，而是通过window.event来接收。
    var e = evt || window.event;
};
//现代浏览器默认都是冒泡类型，所以通常只需要取消冒泡即可。
function stopPro(evt) {  
    var e = evt || window.event;  
    window.event ? e.cancelBubble = true : e.stopPropagation(); <span style="font-family:SimSun;">//兼容W3C和IE</span>  
} 

四、事件对象中的this传递问题
  以上是关于事件对象的一些基础，此外，还需注意在现代事件绑定中匿名函数通过call来进行对象冒充时，传递参数时，第一个参数默认传递给要冒充的事件对象，而从第二个参数开始才开始真正传递给实际要传递的参数。什么意思呢？看一个小例子：
1、事件绑定函数
[javascript] view plain copy print?在CODE上查看代码片派生到我的代码片
function addEvent(obj,type,fn){  
    if ( typeof obj.addEventListener!='undefined'){ //W3C  
        obj.addEventListener(type,fn,false);  
    }else if(typeof obj.attachEvent!='undefined'){//IE  
        obj.attachEvent('on'+type,function(){  
            fn.call(123<span style="font-family:SimSun;">,456,789</span>); <span style="font-family:SimSun;">//利用对象冒充来解决this传递问题</span>  
        });  
    }  
}  
2、调用
[javascript] view plain copy print?在CODE上查看代码片派生到我的代码片
window.onload=function(){  
  
    addEvent(document,'click',fn);  
  
}  
  
function fn(a,b){  
  
    alert(this);//123，默认第一个参数为传递要冒充的对象，为123  
  
    alert(a);//call中从第二个参数起赋值给函数的参数，456   
  
    alert(b);<span style="font-family:SimSun;">//789</span>  
}  
总结：事件对象即是事件触发时，浏览器传递给事件处理的一个对象，通过这个对象，我们可以获得相应时间处理的一些相关信息，以便于我们对接下来的操作做进一步处理。