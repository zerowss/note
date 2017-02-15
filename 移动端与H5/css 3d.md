---------------------
transform3D

    1. perspective:300px
        a)父级元素设置景深（声明这里将会是一个3d场景的舞台，并且设置离这个舞台有多远）
        b)有两种书写形式，
        一种用在舞台元素上（动画元素们的共同父辈元素）；
        第二种就是用在当前动画元素上，与transform的其他属性写在一起
        (注意区别：一般加在父级上，可以看到每一个子级的不一样，加在子级身上，以子级自身为视角的意思了，从整体上看就不看到每个子级元素的明显变化)
        
    2. perspective-origin  （视角变化方向或者说是以哪个中心点来看）
     
    3. transform-style: preserve-3d|flat(3d透视|平面)
        (一般设置在容器上)
        
    4. backface-visibility：hidden（元素背面隐藏）
        （css3中默认是可以看到背后的元素的）
        
    5. 一个3d场景大概的结构如下
          wrap
            container
                element
                element
                element
    6.transform属性如下
    
      translate3d(x,y,z)	定义 3D 转化。
      translateX(x)	        定义 3D 转化，仅使用用于 X 轴的值。
      translateY(y)	        定义 3D 转化，仅使用用于 Y 轴的值。
      translateZ(z)	        定义 3D 转化，仅使用用于 Z 轴的值。
      scale3d(x,y,z)	    定义 3D 缩放转换。
      scaleX(x)	            定义 3D 缩放转换，通过给定一个 X 轴的值。
      scaleY(y)	            定义 3D 缩放转换，通过给定一个 Y 轴的值。
      scaleZ(z)	            定义 3D 缩放转换，通过给定一个 Z 轴的值。
      rotate3d(x,y,z,angle)	定义 3D 旋转。
      rotateX(angle)	    定义沿 X 轴的 3D 旋转。
      rotateY(angle)	    定义沿 Y 轴的 3D 旋转。
      rotateZ(angle)	    定义沿 Z 轴的 3D 旋转。
    
    7. animation :用css3的animation完成一个动画，当只有这个动画完成时才执行令一个事件
        第一种方法：用计时器，设定一个和动画时长一样的time，过time事件去执行这个函数。setTimeout(function(){ },time); 
        第二种方法：当-webkit-animation动画结束时有一个webkitAnimationEnd事件，只要监听这个事件就可以了。 
        (-webkit-animation动画其实有三个事件： 
         开始事件 webkitAnimationStart 
         结束事件 webkitAnimationEnd 
         重复运动事件 webkitAnimationIteration)
         (css3的过渡属性transition，在动画结束时，也存在结束的事件：webkitTransitionEnd; )
        