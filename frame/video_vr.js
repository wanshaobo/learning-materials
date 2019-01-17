//播放VR视频的方案

var THREE = require('three');
var Stats = require('stats');

//视频容器
var videoContainer = document.getElementById( 'vr' );
var videoElement = document.createElement('video');
videoElement.src = 'http://www.abc.com/mp401'

//创建相机 透视投影,即远景相机,模仿人眼
var camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 1, 1000);

//创建成像模型建立半径为500,水平垂直分割面分别为60,40的缓冲球面
var geometry = new THREE.SphereBufferGeometry(300, 60, 40);
//将视频元素插入视频容器 视频纹理
var texture = new THREE.VideoTexture(videoElement);
//创建背景成像材料
var material = new THREE.MeshBasicMaterial({map: texture});
//创建网格，参数为 成像模型-球面 和 成像模型的材质
var mesh = new THREE.Mesh(geometry, material);

//创建场景
var scene = new THREE.Scene();
//将 网格对象 放入到场景中，并让它在场景中自由移动
scene.add(mesh);

//创建渲染器
var renderer = new THREE.WebGLRenderer();
//设置渲染器的尺寸，第三个参数updateStyle设为false,以较低的分辨率来渲染
renderer.setSize(window.innerWidth, window.innerHeight, false);
//渲染器执行渲染，参数为 场景和相机
renderer.render( scene, camera );

//创建监听器
var stats = new Stats();
stats.showPanel( 0 );
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';

//渲染器渲染出来的canvas放入页面中
videoContainer.appendChild(renderer.domElement);
//状态查看器 插入文档中
videoContainer.appendChild(stats.domElement);

//执行渲染动作函数
function update() {
	//渲染
	renderer.render( scene, camera );
	stats.update();
}

//刷新页面函数
function animate() {
	//requestAnimationFrame相当于定时器setInterval 刷新率60次/秒
	//当用户切换到其它的标签页时，它会暂停
	requestAnimationFrame( animate );
	update();
}

//无限重复刷新页面
animate();

/*
打开本地demo的方案
D:\project\vr\three.js\examples\webgl_materials_video.html
换成如下路径：D:\project\ 替换成 http://test.iqiyi.com/ 因为http://test.iqiyi.com/是服务器

带有video的demo
http://test.iqiyi.com/vr/three.js/examples/webgl_materials_video.html
http://test.iqiyi.com/vr/three.js/examples/webgl_materials_video_webcam.html
http://test.iqiyi.com/vr/three.js/examples/webgl_video_panorama_equirectangular.html
http://test.iqiyi.com/vr/three.js/examples/webgl_kinect.html
http://test.iqiyi.com/vr/three.js/examples/webvr_video.html

https://threejs.org/examples/#webgl_gpgpu_birds
https://threejs.org/examples/#webgl_animation_cloth
http://www.utovr.com/

HTML5新增的定时器requestAnimationFrame
window.requestAnimationFrame() 方法告诉浏览器您希望执行动画并请求浏览器在下一次重绘之前调用指定的函数来更新动画。该方法使用一个回调函数作为参数，这个回调函数会在浏览器重绘之前调用。
大多数电脑显示器的刷新频率是60Hz，大概相当于每秒钟重绘60次。因此，最平滑动画的最佳循环间隔是1000ms/60，约等于16.6ms
requestAnimationFrame采用系统时间间隔，保持最佳绘制效率，不会因为间隔时间过短，造成过度绘制，增加开销；也不会因为间隔时间太长，使用动画卡顿不流畅，让各种网页动画效果能够有一个统一的刷新机制，从而节省系统资源，提高系统性能，改善视觉效果
浏览器UI线程队列

setTimeout(function(){console.log(1);});//函数放入异步队列
console.log(0);
浏览器先执行完同步队列里的任务，才会去执行异步队列中的任务
*/
