(function(){
        var $box=$('#box');
    	var $overbtns=$('#box ol li');
        var $picli=$('#box ul li');
        var $lbtn=$('#box #al');
        var $rbtn=$('#box #a2');
        var $prev=0;
        var $index=0;
        var $timer=0;
        var $lmenu_l=$('#box .lmenu_1');
        var $lmenu_l_a=$('#box .lmenu_1 a')
        var $twomenu=$('#box .two_menu')
        //$picli.not('.a').find('img').css('opacity',0)
       $picli.not('.a').find('img').css('display','none')
        $box.hover(function(){
        	$lbtn.show();
        	$rbtn.show();
          	clearInterval($timer)
        },function(){
        	$lbtn.hide();
        	$rbtn.hide();
        $timer=setInterval(function(){
               $rbtn.click()
            },5000)	
        })
        
        $overbtns.on('mouseover',function(){
        	$index=$(this).index();
        		tab();
        })
        
        $rbtn.on('click',function(){
        		   	$index++;
            	if ($index>5) {
            		$index=0;
            	}
            		tab();
        })
     
        $lbtn.on('click',function(){
            		$index--;
            	if ($index<0) {
            		$index=5;            	
            	}
            		tab();
        })
        
        function tab(){          	
        	$overbtns.eq($index).addClass('active').siblings('li').removeClass('active');      
            	$picli.eq($index).find('img').stop(true).animate({
            		height:500,
            		marginLeft:130,
            		marginTop:0,
                    display:'block'                          
            	},4000)	
            	
            	$picli.eq($prev).find('img').stop(true).animate({
            		height:600,
            		marginLeft:0,
            		marginTop:-30                 		
            	}).css('display','none')	
                 $prev=$index;
                  
            }
        $timer=setInterval(function(){
              $rbtn.click();
        },5000)
})()