$(function(){
		
		$.fn.startCarousel = function() {
	  		var bodywidth = $('body').width(),
				itemwidth = $('.mycarousel li').outerWidth(true),		
				mycontwidth = bodywidth > itemwidth ? bodywidth - bodywidth%itemwidth : itemwidth,
				licount = $('.mycarousel li').size(),
				jscroll = 1;
				
			if(licount > mycontwidth/itemwidth){
				jscroll =  mycontwidth/itemwidth;
			} else {
				jscroll = 0;
				mycontwidth = licount * itemwidth;
			}
			
			$('.mycont').width(mycontwidth);
				
	    	$('.mycarousel').jcarousel({
				scroll:jscroll
			});
	  	};
		
		$(this).startCarousel();
		
		$(window).resize(function(){
			$(this).startCarousel();
		}); 
		
		$('.mycarousel').jcarousel({
			scroll:1
		});
		
});