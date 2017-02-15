-----------------------------
**canvas**
1. 检查支持性
        通过简单的测试getContext()方法的存在，脚本可以检查编程支持性。
    
```angular2html
if (canvas.getContext){
  var ctx = canvas.getContext('2d');
  // drawing code here
} else {
  // canvas-unsupported code here
}
```       
2.canvas是基于状态绘图的。