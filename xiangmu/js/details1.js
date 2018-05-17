	(function(){		
            var sidarr = [];
			var numarr = [];
			function getcookievalue(){
				if(getCookie('cartsid')){//cartsid：cookie里面id的名称
					sidarr=getCookie('cartsid').split(',');
				}
				if(getCookie('cartnum')){//cartnum：cookie里面数量的名称
					numarr=getCookie('cartnum').split(',');
				}
			}
			
			//第三步思路：通过判断商品的id是否存在上面获取的sid里面。
			//如果存在，已经在购物车里面了，否则将商品sid添加到cookie里面
			$('.disabled').on('click', function() {
				var sid = $(this).parents('.goodsinfo').find('.loadimg').attr('sid');//当前按钮对应图片的sid
				getcookievalue();//获取商品的id和数量,放到对应的数组中,利用数组进行匹配
				if ($.inArray(sid, sidarr) != -1) {//是否存在cookie中
					//将之前的数据和当前存的数据相加，存放cookie里面
					if(getCookie('cartnum')==''){
						var num=parseInt($('#p_number').val());
						numarr[$.inArray(sid,sidarr)]=num;
						addCookie('cartnum', numarr.toString(), 7);//修改后的结果
						sidarr[$.inArray(sid,sidarr)]=sid;//将当前id添加到对应的位置。
        				addCookie('cartsid', sidarr.toString(), 7);//将整个数组添加到cookie
					}else{
						var num=parseInt(numarr[$.inArray(sid,sidarr)])+parseInt($('#p_number').val());
						numarr[$.inArray(sid,sidarr)]=num;
						addCookie('cartnum', numarr.toString(), 7);//修改后的结果
					}
					
				}else{//不存在
					sidarr.push(sid);//将当前id添加到数组里面。
        			addCookie('cartsid', sidarr.toString(), 7);//将整个数组添加到cookie
        			numarr.push($('#p_number').val());//存放输入的数量，默认是1
        			addCookie('cartnum', numarr.toString(), 7);
				}
				
			});
			
				var $num=1;
		           $('.increase').on('click',function(){
		           	$num++;
		           	$('#p_number').val($num)
		        })
		            $('.decrease').on('click',function(){
		           	$num--;
		           	if ($num<1) {
		           		$num=1;
		           	}
		           	$('#p_number').val($num)
		        })
})()