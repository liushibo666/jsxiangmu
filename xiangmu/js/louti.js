(function(){
	        var $louti=$('#loutinav');
		    var $loutili=$('#loutinav ul li');
    		var $louceng=$('.zonglou .fenlou');
    		var $head=$('.header');
			$(window).on('scroll',function(){
				var $st=$(window).scrollTop();
				
				if ($st>=30) {
					$head.css({'position':'fixed','top':0,'z-index':'900','width':1263})
				}else if ($st==0) {
					$head.css({'position':''})
				}
				if ($st>=800) {
					$louti.show();
				} else{
					$louti.hide();
				}
				$louceng.each(function(index,element){
                    var $top1=$louceng.eq(index).offset().top+400;
                    if ($top1>$st) {
                    	$loutili.removeClass('active');
                    	$loutili.eq(index).addClass('active');
                    	return false;
                    }
    			})
    		})
    		
    		    $loutili.not('.last').on('click',function(){
    		    	var $top2=$louceng.eq($(this).index()).offset().top;
    		    	$('html,body').animate({
    		    		scrollTop:$top2
    		    	})
    		    })
    		    
    		    $('.last').on('click',function(){
    		    		$('html,body').animate({
    		    		scrollTop:0
    		    	})
    		    })
})()
