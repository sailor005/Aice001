
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
	if(scrollTop>= 900){
		document.getElementById("piaofu_menu").style.top=scrollTop+"px";
		document.getElementById("piaofu_menu").style.position="absolute";
		document.getElementById("piaofu_menu").style.display="block";
	}else{
		document.getElementById("piaofu_menu").style.top=200+"px";
		document.getElementById("piaofu_menu").style.position="static";
		document.getElementById("piaofu_menu").style.display="none";
	}

}
//回到顶部部分结束。

document.getElementById("tp01").onmouseover=function(){
	document.getElementById("tupian01").src="img04/02fdj_yb05.jpg";
	document.getElementById("tupian02").src="img04/02fdj_yb05.jpg";
}
document.getElementById("tp02").onmouseover=function(){
	document.getElementById("tupian01").src="img04/02fdj_yb03.jpg";
	document.getElementById("tupian02").src="img04/02fdj_yb03.jpg";
}
document.getElementById("tp03").onmouseover=function(){
	document.getElementById("tupian01").src="img04/02fdj_yb04.jpg";
	document.getElementById("tupian02").src="img04/02fdj_yb04.jpg";
}
document.getElementById("tp04").onmouseover=function(){
	document.getElementById("tupian01").src="img04/02fdj_yb06.jpg";
	document.getElementById("tupian02").src="img04/02fdj_yb06.jpg";
}
document.getElementById("weixinId").onmouseout=function(){
	document.getElementById("wx_ewm").style.display="none";
}