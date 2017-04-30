window.onload=function(){
	var xhr=new XMLHttpRequest();
	xhr.open("get","json/app.json",true);
	xhr.send();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			var obj=JSON.parse(xhr.responseText);
			document.getElementsByClassName("temperature")[0].innerHTML=obj["temperature"][Math.floor(Math.random()*9)];
			document.getElementsByClassName("clothes")[0].innerHTML=obj["clothes"][Math.floor(Math.random()*3)];
			document.getElementsByClassName("car")[0].innerHTML=obj["car"][Math.floor(Math.random()*3)];
			document.getElementsByClassName("travel")[0].innerHTML=obj["travel"][Math.floor(Math.random()*3)];
			document.getElementsByClassName("exercise")[0].innerHTML=obj["exercise"][Math.floor(Math.random()*3)];
			document.getElementsByClassName("rays")[0].innerHTML=obj["rays"][Math.floor(Math.random()*3)];
			document.getElementsByClassName("future")[0].innerHTML=obj["future"][0];
		}
	}
}