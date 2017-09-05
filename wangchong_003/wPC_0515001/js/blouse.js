
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
	document.getElementById("hui").style.top=scrollTop+((clientHeight+300)/2)+"px";
	

}
window.onload=function(){
	var clientHeight=document.documentElement.clientHeight||document.body.clientHeight;
	document.getElementById("hui").style.top=((clientHeight+300)/2)+"px";
}
//回到顶部部分结束。




$("check01").onmousedown=function(){
	$("boxcheck01").style.display="block";
	$("boxcheck02").style.display="none";
	$("check01").style.background="#b82c22";
	$("check01").style.color="white";
	$("check02").style.background="#f3f3f3";
	$("check02").style.color="black";
}
$("check02").onmousedown=function(){
	$("boxcheck01").style.display="none";
	$("boxcheck02").style.display="block";
	$("check02").style.background="#b82c22";
	$("check02").style.color="white";
	$("check01").style.background="#f3f3f3";
	$("check01").style.color="black";
}

