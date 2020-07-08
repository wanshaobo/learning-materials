//1、移动端click事件300ms延迟
/*
原因是，移动浏览器提供一个特殊的功能：双击（double tap）放大，用户碰触页面之后，需要等待一段时间来判断是不是双击（double tap）动作，而不是立即响应单击（click），等待的这段时间大约是300ms。
解决方案，不使用click事件，用移动设备提供的原生touch（touchstart 、 touchmove 、 touchend）事件，或某些移动端手势库提供的tap事件。

封装一个tap事件不等300ms就能触发事件
tap事件原理也非常简单，是由touchstart和touchend组合而成，首先要判断touchend和touchstart的偏移距离，然后阻止掉touchend事件300ms之后触发的click事件，并且始终以touchend事件作为触发的必要条件，
*/
function tap(node,callback,scope) {
	node.addEventListener(TOUCHSTART, function(e) {
		x = e.touches[0].pageX;
		y = e.touches[0].pageY;
	});
	node.addEventListener(TOUCHEND, function(e) {
		e.stopPropagation();//event.cancelBubble = true;
		e.preventDefault();//event.returnValue = false; 阻止touchend事件300ms之后触发的click事件
		var curx = e.changedTouches[0].pageX;
		var cury = e.changedTouches[0].pageY;
		if (Math.abs(curx - x) < 6 && Math.abs(cury - y) < 6) {
			callback.apply(scope, arguments);
		}
	});
}
//下面是zepto的tap事件实现源码：
function tap(){
	var deltaX,deltaY;
	if (deltaX < 30 && deltaY < 30) {
		tapTimeout = setTimeout(function() {
			var event = $.Event('tap')
			event.cancelTouch = cancelAll
			touch.el.trigger(event)

			if (touch.isDoubleTap) {
				if (touch.el) touch.el.trigger('doubleTap')
				touch = {}
			}else {
				touchTimeout = setTimeout(function() {
					touchTimeout = null
					if (touch.el) touch.el.trigger('singleTap')
					touch = {}
				}, 250)
			}
		}, 0);
	}
}

//2 移动端1像素边框问题
// https://www.jianshu.com/p/fa670b737a29

