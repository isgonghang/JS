
window.onload=function(){
    var list=document.getElementsByClassName("list")[0];
    var prev=document.getElementsByClassName("prev")[0];
    var next=document.getElementsByClassName("next")[0];
    var container=document.getElementsByClassName("container")[0];
	function animate(offset){
	//获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
        //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
		var oLeft=parseInt(list.style.left)+offset;
		list.style.left=oLeft+"px";
		//对偏移量进行判断，left小于4956(三张图的宽度)回到第一张，向前同理
		if(oLeft<-4956){
			list.style.left=-1652+"px";
		}
		if(oLeft>-1652){
			list.style.left=-4956+"px";
		}
	}
	//前后箭头切换图片
    var buttons=document.getElementsByClassName("buttons")[0].getElementsByTagName('span');
    var index=1;

    function buttonsShow() {
        //这里需要清除之前的样式
    	for (var i=0;i<buttons.length;i++) {
            if (buttons[i].id=="on"){
    			buttons[i].id="";
            }
        }
        //数组从0开始，故index需要-1
        buttons[index-1].id="on";
    }

    prev.onclick=function() {
        index-=1;
        if (index<1) {
            index=3;
        }
        buttonsShow();
        animate(1652);
    }
    next.onclick=function() {
        //由于上边定时器的作用，index会一直递增下去，我们只有5个小圆点，所以需要做出判断
        index+= 1;
        if (index>3) {
            index=1;
        }
        buttonsShow();
        animate(-1652);
    }
	//定时器实现图片循环滚动
	var timer;
	function play(){
		timer=setInterval(function(){
			next.onclick()
		},3000)
	}

	function stop(){
		clearInterval(timer);
	}
	//鼠标移入和移出停止和继续滚动
	container.onmouseover=stop;
        container.onmouseout=play;
	play();

	//点击小圆点直接切换到相关图片
	for (var i=0;i<buttons.length;i++) {
        buttons[i].onclick=function () {
            // 在浏览器的控制台打印一下，看看结果
            console.log(i);
            /* 偏移量获取：这里获得鼠标移动到小圆点的位置，用this把index绑定到对象buttons[i]上.*/
            /* 由于这里的index是自定义属性，需要用到getAttribute()这个DOM2级方法，去获取自定义index的属性*/
            var clickIndex=parseInt(this.getAttribute('index'));
            var offset=1652*(index-clickIndex);
            animate(offset); //存放鼠标点击后的位置，用于小圆点的正常显示 
            index=clickIndex;
            buttonsShow();
        }
    }

}
