(function(){
			$.ajax({
				url:'../php/conn.php',
				type:'get',
				async:true,
			    success:function(d){
			    	
					var $data=JSON.parse(d);
					var $newarr=$data.info1;
					var $menuarr=$data.info2;
					var $bannertuarr=$data.info3;
					var $tup4=$data.info4;
					var $louceng=$('.louceng .floor-side');
					var $louceng4=$('.louceng4 .floor-side');
					var $html='';
					var $html1='';
					var $html2='';
					var $html3='';
					var $html4='';
						$html=`<img src=${$newarr[0].url} alt="" />`;
					$louceng.each(function(index,ele){
						$louceng.html($html);	
					})

                        $html1=`<img src=${$newarr[1].url} alt="" />`;
					$louceng4.each(function(index,ele){
						$louceng4.html($html1);	
					})
					
					var $loucengli=$('.louceng .floor-main ul');
						
					$.each($newarr,function(index,ele){
						$html2+=`<li><img src=${$newarr[2].url} alt="" /></li>`;
						
					})
					$loucengli.html($html2);
					
					var $loucengli1=$('.louceng .floor-main li');
						$loucengli1.eq(2).html(`<img src=${$newarr[4].url} alt="" />`)
						$loucengli1.eq(3).html(`<img src=${$newarr[5].url} alt="" />`)
						$loucengli1.eq(13).html(`<img src=${$newarr[5].url} alt="" />`)
						$loucengli1.eq(14).html(`<img src=${$newarr[4].url} alt="" />`)
						$loucengli1.eq(24).html(`<img src=${$newarr[4].url} alt="" />`)
						$loucengli1.eq(25).html(`<img src=${$newarr[5].url} alt="" />`)
						
						
						
					var $louceng4coli1=$('.louceng4 .col1');
						var $col="";
						$col=`<img src=${$newarr[8].url} alt="" />`;
					$louceng4coli1.each(function(index,ele){
						$louceng4coli1.html($col);	
					})
									
					var $louceng4coli2=$('.louceng4 .col2 ul');
						var $col2="";             
                    	$.each($newarr,function(index,ele){
						$col2+=`<li><img src=${$newarr[9].url} alt="" /></li>`;
						
					})
					$louceng4coli2.html($col2);
                    
					var $louceng4coli3=$('.louceng4 .col3');
						var $col3="";
						$col3=`<img src=${$newarr[10].url} alt="" />`;
					$louceng4coli3.each(function(index,ele){
						$louceng4coli3.html($col3);	
					})
						
		    		var $menu=$('.two_menu');
					var $htmlmenu='';
					$.each($menuarr,function(index,ele){
						$htmlmenu+=`<span>
						            ${$menuarr[index].ziti}
						            </span>`;
					})
					$menu.html($htmlmenu);
						
					var $tu=$('.tu4 ul');
					var $htmltu4='';
					$.each($tup4,function(index,ele){
						$htmltu4+=`<li>
						<a href="details.html" target="_blank"><img src=${$tup4[index].url} /></a>
						<p><b>新品专区</b>探访源头产地 臻选当令时鲜</p>
						</li>`;
					})	
					$tu.html($htmltu4);
					
// 				    var $bannertu=$('#box ul');
//					var $htmlbanner='';	
//					$.each($bannertuarr,function(index,ele){
//						$htmlbanner+=`<li>
//						<img src=${$bannertuarr[index].url} />
//						</li>`;
//					})
//						$bannertu.html($htmlbanner)

                }
			})

})()