
function $(id){
	return document.getElementById(id);
}

//zchdl
/*
$("zchdl").onclick=function(){
	if(document.getElementById("boxcheck01").style.display="block"){
		document.getElementById("boxcheck01").style.display="none";
		document.getElementById("boxcheck02").style.display="block";
	}else{
		document.getElementById("boxcheck01").style.display="block";
		document.getElementById("boxcheck02").style.display="none";
	}
}
*/

$("zchdl").onclick=function(){
	document.getElementById("boxcheck01").style.display="none";
	document.getElementById("zchdl").style.display="none";
	document.getElementById("wzwz").style.display="none";
	document.getElementById("boxcheck02").style.display="block";
	document.getElementById("zchdl02").style.display="block";
	document.getElementById("wzwz02").style.display="block";
	

	
}
$("zchdl02").onclick=function(){
	document.getElementById("boxcheck01").style.display="block";
	document.getElementById("zchdl").style.display="block";
	document.getElementById("wzwz").style.display="block";
	document.getElementById("boxcheck02").style.display="none";
	document.getElementById("zchdl02").style.display="none";
	document.getElementById("wzwz02").style.display="none";
	
}

$("qyd").onfocus=function(){
		document.getElementById("btnLogin01").style.background="#b52026";
}





/*
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
*/