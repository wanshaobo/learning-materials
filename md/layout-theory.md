
#### 1、BFC
>块级格式上下文：块级元素自顶向下排列，同级之间的containing block顶部一个接一个垂直排列，水平方向上撑满宽度。因为两个相邻的BFC之间距离由margin决定，在同一个BFC内部，两个垂直方向相邻的块级元素margin值会"共用"，导致塌陷。也是经典的外边距塌陷问题。
https://www.jianshu.com/p/1702af88e9e7
>BFC 理解为一个封闭盒子，盒子内部的元素无论如何，都不会影响到外部。

###### 如何产生BFC
- body根元素
- 浮动元素：float：除none以为的值
- 块级元素[https://baike.baidu.com/item/%E5%9D%97%E5%85%83%E7%B4%A0/6997452?fr=aladdin]
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
