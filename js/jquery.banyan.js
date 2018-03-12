;(function($){
	function mobileNav(){
		$(".btnNav").on("click", function(e){
			e.stopPropagation();
			var display = $(".topNav").css("display");
			if(display == "none"){
				$(this).addClass("closeNav");
				$(this).next(".topNav").stop(true, true).slideDown(300);
			}
			else{
				$(this).removeClass("closeNav");
				$(this).next(".topNav").stop(true, true).slideUp(300);
			}
		});


		$(document).click(function (e){
            var container = $(".topNav");
            if (!container.is(e.target) && container.has(e.target).length === 0){
            	$(".btnNav").removeClass("closeNav");
                container.stop(true, true).slideUp(300);
            }
        });

	}

	function gotSection(){
		$(".topNav li a").each(function(){
			$(this).on("click", function(){
				var headHeight = $(".header").outerHeight();
				var target = $(this).attr("href");
				$(".topNav").stop(true, true).slideUp(300);
				$(".btnNav").removeClass("closeNav");
				$("html, body").animate({
					scrollTop:($(target).offset().top) - headHeight
					//scrollTop:($(target).offset().top)
				}, 1000);
				return false;
			});
		});
	}

	function fixHeader(){
		$(window).on("scroll", function(){
			var topScroll = $(this).scrollTop();
			if(topScroll >= 100){
				$(".header").addClass("fixHeader");
			}
			else{
				$(".header").removeClass("fixHeader");	
			}
		});
	}

	function bannerText(){
		TweenMax.from("#tag1", 0.5, {left:-100, scale:0, opacity:0, ease: Power3.easeInOut});
		TweenMax.from("#tag2", 0.5, {right:-100, scale:0, delay:0.2, opacity:0, ease: Power3.easeInOut});
	}

	

	$(function(){
		mobileNav();
		bannerText();
		gotSection();
		fixHeader();
	});

})(jQuery);




