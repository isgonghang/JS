var getClass=function(node){
	//将nodelist转化为数组,slice将一个类数组(Array-like)对象/集合转换成一个数组.
	//call改变函数作用域,querySelectorAll()获取nodelist.
	return Array.prototype.slice.call(document.querySelectorAll(node));
}
var cursors=getClass(".container .cursor");
var prev=getClass(".container .prev")[0];
var next=getClass(".container .next")[0];

//为圆点(光标)绑定点击事件,点击圆点(光标)直接切换到该页
cursors.forEach(function(item,index,array){
	cursor.addEventListener('click', function(){
		slider.nav(index);
	},false)
})
//向前按钮
prev.addEventListener('click',function(){
	slider.prev();
},false)
//向后按钮
next.addEventListener('click',function(){
	slider.next();
},false)
