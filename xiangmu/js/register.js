(function(){
		var bstop=true;
		var usereg=/^([\u4e00-\u9fa5]|[\w\-]){3,15}$/;
		var $chpass=$('#Phone_ConfimPassword');
		var $passw=$('#password');
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
		
		$('#Phone_ConfimPassword').on('blur',function(){
			if ($chpass.val()!=$passw.val()) {
				$(this).next('span').css('color','red').html('两次密码不相同');
			}
			if ($chpass.val()==$passw.val()) {
				$(this).next('span').css('color','red').html('');
			}
		})
		
		
		$('form').on('submit',function(){
			if(bstop||$passw.val()==""||$chpass.val()==""||$chpass.val()!=$passw.val()){
				return false;
			}
		});
		
})()
