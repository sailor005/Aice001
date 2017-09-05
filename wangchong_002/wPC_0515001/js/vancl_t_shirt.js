
function $(id){
	return document.getElementById(id);
}


//轮播图部分开始：

//轮播图部分结束。


//回到顶部部分开始：
function show(){
		document.body.scrollTop=0;
}
window.onscroll=function(){
	var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
	var scrollTop01=document.body.scrollTop||document.documentElement.scrollTop;
	var clientHeight=document.documentElement.clientHeight||document.body.clientHeight;
	document.getElementById("hui").style.top=scrollTop+((clientHeight+300)/2)+"px";
	if(scrollTop>= 200){
		document.getElementById("menu_03").style.top=scrollTop01+"px";
		document.getElementById("menu_03").style.position="absolute";
	}else{
		document.getElementById("menu_03").style.top=200+"px";
		document.getElementById("menu_03").style.position="static";
	}

}
window.onload=function(){
	var clientHeight=document.documentElement.clientHeight||document.body.clientHeight;
	document.getElementById("hui").style.top=((clientHeight+300)/2)+"px";
}
//回到顶部部分结束。


