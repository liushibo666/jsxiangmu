    (function(){        	    
            var $box=$('.box');
			var $smallbox=$('.smallbox');
			var $smallglass=$('.smallglass');
		    var $bigbox=$('.bigbox');
		    var $bigpic=$('.bigpic');
		    var $aLi=$('li')
		    $smallbox.on('mouseover',function(){
		    	$smallglass.css('visibility','visible');
				$bigbox.css('visibility','visible');
				$smallglass.width($bigbox.width()*$smallbox.width()/$bigpic.width()) 
				$smallglass.height($bigbox.height()*$smallbox.height()/$bigpic.height())
				
			$smallbox.on('mousemove',function(ev){
				var ev=ev||window.event;
				var bili=$bigpic.width()/$smallbox.width();
				var l=ev.clientX-$box.offset().left-$smallglass.width()/1.7;
				var t=ev.clientY-$box.offset().top-$smallglass.width()/1.7;
				if (l<0) {
					l=0;
				}else if (l>=$smallbox.width()-$smallglass.width()-2) {
					l=$smallbox.width()-$smallglass.width()-2;
				}
				if (t<0) {
					t=0;
				}else if (t>=$smallbox.height()-$smallglass.height()-2) {
					t=$smallbox.height()-$smallglass.height()-2;
				}
				$smallglass.css('left',l)
				$smallglass.css('top',t)
				
				$bigpic.css('left',-bili*l)
				$bigpic.css('top',-bili*t)
				
			$smallbox.on('mouseout',function(){
				$bigbox.css('visibility','hidden');
				$smallglass.css('visibility','hidden');
			})
			
              $.each($aLi,function(index,ele){
              	$(this).on('mouseover',function(){
              		$smallbox.find('img')[0].src = $(this).find('img')[0].src;
                    $bigbox.find('img')[0].src = $(this).find('img')[0].src;
              	})
              })

                
			})
		})
    })()