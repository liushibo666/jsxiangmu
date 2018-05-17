            (function(){       
                function addCookie(key,value,day){
					var date=new Date();//创建日期对象
					date.setDate(date.getDate()+day);//过期时间：获取当前的日期+天数，设置给date
					document.cookie=key+'='+encodeURI(value)+';expires='+date;//添加cookie，设置过期时间
				}
				$('#btnLogin').on('click',function(){
					var $username=$('#UserName').val();
					var $password=$('#Pwd').val();
					$.ajax({
						type:'post',
						url:'../php/login.php',
						data:{
							name:$username,
							pass:$password
						},
						success:function(data){
							if(!data){
								$('.jinggao').html('用户名或者密码错误')
								$('#Pwd').val('');
							}else{
//								addCookie('UserName',$username,7);
								location.href='index.html';
							}
						}
					})
				});
	     })()	