<?php
	header('content-type:text/html;charset=utf-8');

	$conn=@mysql_connect('localhost','root','');
	if(!$conn){
		die('数据库连接失败'.mysql_error());
	}
	
	mysql_select_db('xiangmu');
	mysql_query('SET NAMES UTF8');
	
	
	$query1='select * from photos';
	$query2='select * from twomenu';
	$query3='select * from banner';
	$query4='select * from tu4';
	
	$result1=mysql_query($query1);
	$result2=mysql_query($query2);
	$result3=mysql_query($query3);
	$result4=mysql_query($query4);
	
	$arr1=array();
	for($i=0;$i<mysql_num_rows($result1);$i++){
		$arr1[$i]=mysql_fetch_array($result1,MYSQL_ASSOC);
	}
	$arr2=array();
	for($i=0;$i<mysql_num_rows($result2);$i++){
		$arr2[$i]=mysql_fetch_array($result2,MYSQL_ASSOC);
	}
	$arr3=array();
	for($i=0;$i<mysql_num_rows($result3);$i++){
		$arr3[$i]=mysql_fetch_array($result3,MYSQL_ASSOC);
	}
	$arr4=array();
	for($i=0;$i<mysql_num_rows($result4);$i++){
		$arr4[$i]=mysql_fetch_array($result4,MYSQL_ASSOC);
	}
	
	  class information{
      }
	$data=new information();
	$data->info1=$arr1;
	$data->info2=$arr2;
	$data->info3=$arr3;
	$data->info4=$arr4;
	
	
	echo json_encode($data);
	mysql_close($conn);
?>