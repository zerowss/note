--------------------------------------
**监测手机端横竖屏**
> - orientationchange 事件

````
var dir = window.orientation;
window.addEventListener('orientationchange',function () {
    /*
    *   当屏幕横竖切换的时候
    *   window.orientation 返回一个相对应的值 
    *   0 \180 : 竖屏
    *   90\-90 : 横屏
    * */
    dir = window.orientation;
})
````
**监测手机翻转角度**
> - deviceorientation 
````angular2html


````
**audio标签**

    
    基本设置
    1. src：音频文件路径。
    2. autobuffer：设置是否在页面加载时自动缓冲音频。
    3. autoplay：设置音频是否自动播放。
    4. loop：设置音频是否要循环播放。
    5. controls：属性供添加播放、暂停和音量控件。
    
    a)常用的控制函数：
    
    1. load()：加载音频、视频软件
    2. play()：加载并播放音频、视频文件或重新播放暂停的的音频、视频
    3. pause()：暂停出于播放状态的音频、视频文件
    4. canPlayType(obj)：测试是否支持给定的Mini类型的文件
    
    
    b)只读的媒体属性：
    
    1. duration :获取媒体文件的播放时长，以s为单位，如果无法获取，则为NaN
    2. paused :如果媒体文件被暂停，则返回true，否则返回false
    3. ended : 如果媒体文件播放完毕，则返回true
    4. startTime : 返回起始播放时间
    5. error : 返回错误代码
    6. currentSrc : 以字符串形式返回正在播放或已加载的文件
    
    c)可脚本控制的属性值：
    
    1. autoplay：自动播放已经加载的的媒体文件
    2. loop为true：的时候则设定为自动播放
    3. currentTime：以s为单位返回从开始播放到目前所花的时间
    4. controls：显示或者隐藏用户控制界面
    5. volume：音量值,从0.0至1.0之间
    6. muted：设置是否静音
    7. autobuffer：是否进行缓冲加载
    
    
    
    Audio 对象属性
    
    属性	        描述
    audioTracks	返回表示可用音频轨道的 AudioTrackList 对象。
    autoplay	设置或返回是否在就绪（加载完成）后随即播放音频。
    buffered	返回表示音频已缓冲部分的 TimeRanges 对象。
    controller	返回表示音频当前媒体控制器的 MediaController 对象。
    controls	设置或返回音频是否应该显示控件（比如播放/暂停等）。
    crossOrigin	设置或返回音频的 CORS 设置。
    currentSrc	返回当前音频的 URL。
    currentTime	设置或返回音频中的当前播放位置（以秒计）。
    defaultMuted	设置或返回音频默认是否静音。
    defaultPlaybackRate	设置或返回音频的默认播放速度。
    duration	返回音频的长度（以秒计）。
    ended	返回音频的播放是否已结束。
    error	返回表示音频错误状态的 MediaError 对象。
    loop	设置或返回音频是否应在结束时再次播放。
    mediaGroup	设置或返回音频所属媒介组合的名称。
    muted	设置或返回是否关闭声音。
    networkState	返回音频的当前网络状态。
    paused	设置或返回音频是否暂停。
    playbackRate	设置或返回音频播放的速度。
    played	返回表示音频已播放部分的 TimeRanges 对象。
    preload	设置或返回音频的 preload 属性的值。
    readyState	返回音频当前的就绪状态。
    seekable	返回表示音频可寻址部分的 TimeRanges 对象。
    seeking	返回用户当前是否正在音频中进行查找。
    src	设置或返回音频的 src 属性的值。
    textTracks	返回表示可用文本轨道的 TextTrackList 对象。
    volume	设置或返回音频的音量。
    Audio 对象方法
    
    方法	            描述
    addTextTrack()	向音频添加新的文本轨道。
    canPlayType()	检查浏览器是否能够播放指定的音频类型。
    fastSeek()	在音频播放器中指定播放时间。
    getStartDate()	返回新的 Date 对象，表示当前时间线偏移量。
    load()	重新加载音频元素。
    play()	开始播放音频。
    pause()	暂停当前播放的音频。