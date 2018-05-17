<?php
	header('content-type:text/html;charset="utf-8"');
	$conn=@mysql_connect('localhost','root');
	if(!$conn){
		die('数据库连接有问题:'.mysql_error());
	}
	mysql_select_db('xiangmu');
	mysql_query('SET NAMES UTF8');
	
	if(isset($_POST['name']) || isset($_POST['submit'])){
		$username=@$_POST['name'];
	}else{
		exit('非法操作');
	}
	
	$query1="select * from xinxi where username='$username'";
	
	$result=mysql_query($query1);
	if(mysql_fetch_array($result)){
		echo true;
	}else{
		echo false;
	}
	
	//注册的信息放置到数据库里面
if(isset($_POST['submit'])){
		$user=$_POST['username'];
		$pass=md5($_POST['password']);
		$email=$_POST['email'];
//      $user='kkk';
//		$pass=md5('333');
//		$email='jj@qq.com';
		$query="insert xinxi values(null,'$user','$pass','$email')";
		mysql_query($query);
		header('location:../html/login.html');
}

?>