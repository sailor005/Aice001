<?php
	header("content-type","text/html;charset=utf-8");
	//1接收数据
	$name = $_POST['userName'];
	$pass = $_POST['userPass'];

//$userId = "baobao1";
	//2、在数据库中查询
	   //1)、建立连接，并选择数据库
	$conn=mysql_connect("localhost","root","0515");
    if(!$conn){
       die('Could not connect');
    }else{
      //echo 'scssuss';
    }
	
  //2.选择数据库
  mysql_select_db("fanke",$conn);

//3、执行SQL语句
	$sqlStr="insert into fankeone(userName,userPass)
     values('".$name."','".$pass."')";
   $res = mysql_query($sqlStr,$conn);
  
    //4、关闭数据库
    mysql_close($conn);

?>