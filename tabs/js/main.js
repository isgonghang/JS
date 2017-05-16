window.onload=function(){
	//取得head和text的Nodelist
	var head=document.getElementsByTagName("li");
	var text=document.getElementsByTagName("p");
	//对head做循环
	for(let i=0;i<head.length;i++){
		//为head节点依次添加index:1,2,3,4
		head[i].index=i;
		head[i].onclick=function(){
			//text循环后，先将所有节点隐藏
			for(var j=0;j<text.length;j++){
				text[j].style.display="none";
			}
			//再将当前点击的节点显示
			text[this.index].style.display="block";
		}
	}
}