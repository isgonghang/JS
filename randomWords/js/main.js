window.onload=function(){
	var btn=document.getElementsByClassName("btn")[0];
	var words=document.getElementsByClassName("words")[0];
	btn.onclick=function(){
		//发送HTTP请求
		var xhr=new XMLHttpRequest();
		// open方式用于指定HTTP动词、请求的网址、是否异步
		xhr.open("get","json/words.json",true);
		xhr.send();
		// 指定通信过程中状态改变时的回调函数
		xhr.onreadystatechange=function(){
			// 通信成功时，状态值为4
			if(xhr.readyState==4&&xhr.status==200){
				//返回从服务器接收到的JSON数据并用JSON.parse解析
				var obj=JSON.parse(xhr.responseText);
					//使用Math函数将JSON中的数据随机添加到页面中
					words.innerHTML=obj.word[Math.floor(Math.random()*10+1)];

			}
		}
	}
}