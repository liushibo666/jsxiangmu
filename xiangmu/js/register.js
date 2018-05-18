(function(){
		var bstop=true;
		var usereg=/^([\u4e00-\u9fa5]|[\w\-]){3,15}$/;
		var passreg=/^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+){6,20}$/;
		var $chpass=$('#Phone_ConfimPassword');
		var $passw=$('#password');
		var $email=$('#email');
		$('#username').on('blur',function(){
		var $username=$(this).val();
		if($username!=''){
			if(usereg.test($username)){
				$.ajax({
					type:'post',
					url:'../php/reg.php',
					data:{
						name:$username
					},
					success:function(d){
						if(d){
							$('#username').next('span').css('color','red').html('用户名已存在');
							bstop=true;
						}else{
							$('#username').next('span').css('color','green').html('√');
							bstop=false;
						}
					}
				})
			}else{
					$(this).next('span').css('color','red').html('格式不正确');
					bstop=true;
				}
			}else{
					$(this).next('span').css('color','red').html('用户名不能为空');
					bstop=true;
			    }
		});
		
		$('#password').on('blur',function(){
			var $password=$('#password').val();
			if (passreg.test($password)) {
				$(this).next('span').css('color','green').html('√');
			}
			else{
				$(this).next('span').css('color','red').html('格式不正确');
			}
		})
		
		$('#Phone_ConfimPassword').on('blur',function(){
			if ($chpass.val()!=$passw.val()) {
				$(this).next('span').css('color','red').html('两次密码不相同');
			}
			if ($chpass.val()==$passw.val()) {
				$(this).next('span').css('color','green').html('√');
			}
		})
		
		
		$('form').on('submit',function(){
			if(bstop||$passw.val()==""||$chpass.val()==""||$chpass.val()!=$passw.val()||$email.val()==""){
				return false;
			}
		});
		
})()
