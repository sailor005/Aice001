<?php
	//1、接收客户端的输入
	$userName = $_POST['userName'];
	$userPass = $_POST['userPass'];
	
	//2、处理(假定数据库中有一个用户：名字是jzm，密码是：123)
	if($userName=="jzm"){
		echo "0";
	}else{
		//保存（保存用户名和密码到数据库中）。
		
		echo "1";
	}
	
	//3、响应（0：表示注册失败，1：注册成功！）


?>