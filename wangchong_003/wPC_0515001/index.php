<?php
    header("content-type","text/html;charset=utf-8");
    
    $userName = $_GET['userName'];
      //1.链接数据库
    $conn=mysql_connect("localhost","root","0515");
    if(!$conn){
       die('Could not connect');
    }else{
      //echo 'scssuss';
    }
	
  //2.选择数据库
  mysql_select_db("fankeone",$conn);
  //3、执行SQL语句
  $sqlStr="select * from fankeone where userName='".$userName."'";
    $result = mysql_query($sqlStr,$conn);
    $rowCount = mysql_num_rows($result);
    //echo $rowCount;
    if($rowCount==0){
      echo "0";//用户名不存在     
    }else{
      echo "1";//用户名存在
    }
    //4、关闭数据库
    mysql_close($conn); 
?>