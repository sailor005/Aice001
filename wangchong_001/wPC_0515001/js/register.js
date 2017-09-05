
function $(id){
	return document.getElementById(id);
}


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
$("userId").onfocus=function(){
	var neirong=$("userId").value;
	if(neirong=="请输入用户名"){
		$("userId").value="";
	}else{
		$("userId").value=neirong;
	}
}
$("userId").onblur=function(){
	var neirong=$("userId").value;
	if(neirong.length==0){
		$("userId").value="请输入用户名";
	}else{
		$("userId").value=neirong;
	}

}