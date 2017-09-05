

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
	var clientHeight=document.documentElement.clientHeight||document.body.clientHeight;
	document.getElementById("hui").style.top=scrollTop+((clientHeight-100)/2)+"px";
}
window.onload=function(){
	var clientHeight=document.documentElement.clientHeight||document.body.clientHeight;
	document.getElementById("hui").style.top=((clientHeight-100)/2)+"px";
}
//回到顶部部分结束。


//顶部二维码的显示与消失--开始：
document.getElementById("weixinId").onmouseover=function(){
	document.getElementById("wx_ewm").style.display="block";
}
document.getElementById("weixinId").onmouseout=function(){
	document.getElementById("wx_ewm").style.display="none";
}
//顶部二维码的显示与消失--结束。