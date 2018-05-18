		function Fdj(){//面向对象
			this.box=document.querySelector('.box');
			this.smallbox=document.querySelector('.smallbox');
			this.smallglass=document.querySelector('.smallglass');
		    this.bigbox=document.querySelector('.bigbox');
		    this.bigpic=document.querySelector('.bigpic');
		    this.aLi=document.querySelectorAll('li')
		    var that=this;
		    this.init=function(){
		    	this.smallbox.onmouseover=that.mouseover;
		    	this.smallbox.onmousemove=function(ev){
		    		var ev=ev||window.event;
		    		that.musemove(ev);
		    	}
		    	this.smallbox.onmouseout=that.mouseout;
		    }	
		    
			    this.mouseover=function(){
				that.smallglass.style.visibility='visible';
				that.bigbox.style.visibility='visible';
				that.smallglass.style.width= that.bigbox.offsetWidth*that.smallbox.offsetWidth/that.bigpic.offsetWidth+'px'
				that.smallglass.style.height= that.bigbox.offsetHeight*that.smallbox.offsetHeight/that.bigpic.offsetHeight+'px'	
			  }
		   
			    this.musemove=function(ev){
				var ev=ev||window.event;
				var bili=that.bigpic.offsetWidth/that.smallbox.offsetWidth;
				var l=ev.clientX-that.box.offsetLeft-that.smallglass.offsetWidth/1.7;
				var t=ev.clientY-that.box.offsetTop-that.smallglass.offsetHeight/1.7;
				if (l<0) {
					l=0;
				}else if (l>=that.smallbox.offsetWidth-that.smallglass.offsetWidth-2) {
					l=that.smallbox.offsetWidth-that.smallglass.offsetWidth-2;
				}
				if (t<0) {
					t=0;
				}else if (t>=that.smallbox.offsetHeight-that.smallglass.offsetHeight-2) {
					t=that.smallbox.offsetHeight-that.smallglass.offsetHeight-2;
				}
				that.smallglass.style.left=l+'px';
				that.smallglass.style.top=t+'px';
				
				that.bigpic.style.left=-bili*l+'px';
				that.bigpic.style.top=-bili*t+'px';
			   }
			    this.mouseout=function(){
				that.bigbox.style.visibility='hidden';
				that.smallglass.style.visibility='hidden'
			}
			    for (var i = 0; i < this.aLi.length; i++) {
                    this.aLi[i].onmouseover = function() {
                          that.smallbox.getElementsByTagName('img')[0].src = this.getElementsByTagName('img')[0].src;
                        that.bigpic.src = this.getElementsByTagName('img')[0].src;
                    };
                };
		}		
			
		new Fdj().init()