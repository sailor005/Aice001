

/*回到顶部------------------------------------------------------------------*/
function backtop(){
		document.body.scrollTop=0;
}


/*顶部导航栏的消失与重现------------------------------------------------------*/
window.onscroll=function(){
	var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
	var scrollTop01=document.body.scrollTop||document.documentElement.scrollTop;
	var clientHeight=document.documentElement.clientHeight||document.body.clientHeight;
	/*顶部导航栏*/
	if(scrollTop>=100&&scrollTop<=800){
		document.getElementById("header").style.top="-100px";
	}else{
		document.getElementById("header").style.top="0";
	}
	/*回到顶部按钮*/
	if(scrollTop<=100){
		document.getElementById("header_backtop").style.display="none";
	}else{
		document.getElementById("header_backtop").style.display="block";
	}

}
