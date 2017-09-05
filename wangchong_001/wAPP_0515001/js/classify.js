

function $(id){
	return document.getElementById(id);
}


//轮播图部分开始：

//轮播图部分结束。


//回到顶部部分开始：
function show(){
		document.body.scrollTop=0;
}



$("kaiguan").onmousedown=function(){
	if($("caidan").style.display=="block"){
		$("caidan").style.display="none";
		$("kaiguan").style.display="block";
		$("kaiguan02").style.display="none";
	}else{
		$("caidan").style.display="block";
		$("kaiguan").style.display="none";
		$("kaiguan02").style.display="block";
	}	
}

$("kaiguan02").onmousedown=function(){
		$("kaiguan").style.display="block";
		$("caidan").style.display="none";
		$("kaiguan02").style.display="none";
}


