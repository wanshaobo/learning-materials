
#### 1、BFC
>块级格式上下文：块级元素自顶向下排列，同级之间的containing block顶部一个接一个垂直排列，水平方向上撑满宽度。因为两个相邻的BFC之间距离由margin决定，在同一个BFC内部，两个垂直方向相邻的块级元素margin值会"共用"，导致塌陷。也是经典的外边距塌陷问题。
https://www.jianshu.com/p/1702af88e9e7 https://blog.csdn.net/sinat_36422236/article/details/88763187
>BFC 理解为一个封闭盒子，盒子内部的元素无论如何，都不会影响到外部。
>独立的渲染区域，独立的布局环境，其中的元素布局是不受外界的影响

###### 如何产生BFC
- body根元素
- 浮动元素：float：除none以为的值
- 块级元素 https://baike.baidu.com/item/%E5%9D%97%E5%85%83%E7%B4%A0/6997452?fr=aladdin
- 块级容器:display：flex、inline-block、table-cell、table-capation
- 绝对定位元素:position：absolute/fixed
- overflow: hidden scroll auto

###### BFC解决的两个问题
###### 父元素高度塌陷
>应用了“计算BFC高度时，浮动元素也参与计算在内”的特性；
###### 解决垂直方向上兄弟元素的margin重叠
>应用了“属于同一个BFC的两个相邻Boc的margin会发生重叠”的特性。意味着如果相邻兄弟元素不属于同一个BFC，就不会发生margin重叠了；

#### BFC特征应用
###### 实现自适应两栏布局
>应用了“BFC的区域不会与float box重叠”的特性；一边浮动，另一边自适应的部分形成BFC，那么两者就不会重叠，避免了出现文字环绕及类似情形。

###### 2、盒子模型
>https://www.cnblogs.com/smyhvae/p/7256371.html

>box-sizing: content-box|border-box|inherit:

>position: absolute|fixed|relative|static|sticky|inherit|initial

#### 3 空页面仅有一个div元素撑满屏幕
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>video demo</title>
    <style type="text/css">
        #box{
            width: 100%;
            height: 100%;
            background: #57a900;
            position: absolute;
        }
    </style>
</head>
<body>
<div id="box"></div>
</body>
</html>
```
#### 4 空页面有两个兄弟元素，第一个div元素撑满屏幕
```html
<!DOCTYPE html>
<html lang="en"  xmlns:Qvideo>
<head>
    <meta charset="UTF-8">
    <title>video demo</title>
    <style type="text/css">
        #box{
            width: 100%;
            height: 100%;
            background: #57a900;
        }
        html,body{
            width: 100%;
            height: 100%;
        }
    </style>
</head>
<body>
<div id="box">这是一个满屏元素</div>
<div id="box1">这个元素只能在第二屏显示</div>
</body>
</html>
```

#### 5 宽高未知图片撑满屏幕-图片水平垂直居中
>图片高度超过屏幕高度，图片自适应宽度；图片宽度超过屏幕宽度，图片自适应高度；
width: 200px;
height: 200px;
object-fit: cover;

object-fit: fill; 
object-fit: contain; 
object-fit: cover; 
object-fit: none; 
object-fit: scale-down; 

fill: 中文释义“填充”。默认值。替换内容拉伸填满整个contentbox,不保证保持原有的比例。
contain: 中文释义“包含”。保持原有尺寸比例。保证替换内容尺寸一定可以在容器里面放得下。因此，此参数可能会在容器内留下空白。
cover: 中文释义“覆盖”。保持原有尺寸比例。保证替换内容尺寸一定大于容器尺寸，宽度和高度至少有一个和容器一致。因此，此参数可能会让替换内容（如图片）部分区域不可见（上面讲解的例子就是如此）。
none: 中文释义“无”。保持原有尺寸比例。同时保持替换内容原始尺寸大小。
scale-down: 中文释义“降低”。就好像依次设置了none或contain, 最终呈现的是尺寸比较小的那个。

与background-position类似，object-position的值类型为<position>类型值。也就是说，CSS3的相对坐标设定样式支持的。
object-position 默认值是50% 50%，也就是居中效果
注：目前IE应该还不支持object-fit和object-position属性