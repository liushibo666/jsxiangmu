<?php
	header('content-type:text/html;charset=utf-8');
	$conn=@mysql_connect('localhost','root','');
	if(!$conn){
		die('数据库连接失败'.mysql_error());
	}
	mysql_select_db('xiangmu');
	mysql_query('SET NAMES UTF8');
	
	if(isset($_POST['name'])){
		$username=$_POST['name'];
		$password=md5($_POST['pass']);
	}else{
		exit('非法操作');
	}
//	    $username='zhangsan';
//		$password=md5('123');

	$query="select * from xinxi where username='$username' and password='$password'";
	$result=mysql_query($query);
	
	if(mysql_fetch_array($result)){
		echo true;
	}else{
		echo false;
	}

//$query4='select * from xinxi';
//$result4=mysql_query($query4);
//	$arr4=array();
//	for($i=0;$i<mysql_num_rows($result4);$i++){
//		$arr4[$i]=mysql_fetch_array($result4,MYSQL_ASSOC);
//	}
//	echo json_encode($arr4);



	
	
