$(function() {




//SCROLLED HEADER
$("#header").removeClass("default");
			$(window).scroll(function(){
				if ($(this).scrollTop() > 88) {
					$("#header").addClass("default").fadeIn('fast');
					$('.contacts-line, .contact-us, .logo-wrapper p').hide();
					$('.top-mnu-line').css({'marginTop':'25px'});
				} else {
					$("#header").removeClass("default").fadeIn('fast');
					$('.contacts-line, .contact-us, .logo-wrapper p').show();
					$('.top-mnu-line').css({'marginTop':'66px'});
					$('.logo-wrapper').css({'marginTop':'20px'});
				};
			});


$('#map .button_map').click(function(){
	if($('footer .contact-us-footer').is(':visible')){
		$('footer .contact-us-footer').hide(1000);
		$('#map .button_map').css({'right':'0px'});
	}else{
		$('footer .contact-us-footer').show(1000);
		$('#map .button_map').css({'right':'0px'});

	}
});

//OWL-SLIDER-NEWS
$('.home-news-wrapper-slider').owlCarousel({
    loop:true,
    margin:20,
    nav: false,
    dots:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:2,
            nav:false,
            loop:true
        }
    }
})


//POPUP WINDOW
$("a[href=#callback]").magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});


//OWL-SLIDER-TRUSTED
 $('.trusted-slide-owl').owlCarousel({
        items:1,
        loop:true,
        dots:true,
        mouseDrag:false,
        callbacks: true,
        URLhashListener:false,
        animateOut: 'fadeOut',
        autoplayHoverPause:true,
        startPosition: '#tr1',
         nav:true,
   		 navText: [
      "<i class='icon-chevron-left icon-white'><</i>",
      "<i class='icon-chevron-right icon-white'>></i>"
      ],
      responsive: {
        0: {
            mouseDrag: true,
            touchDrag: true
        },
        991: {
            mouseDrag: true,
            touchDrag: true
        },
         992: {
            mouseDrag: false,
            touchDrag: false
        }
    }
    });
 
$('.slider-trusted').on('changed.owl.carousel', function(event) {
 	var page      = event.page.index; 
	console.log(page); 	

	$('.trusted-slide-owl-icons-wrapper .trusted-slide-owl-icons').each(function(){
		$(this).removeClass('trusted-active');
	});

	$(".trusted-slide-owl-icons").eq(page).addClass('trusted-active');

 });

//OWL-SLIDER-HEADER
var owl = $(".slide-wrapper");
 owl.owlCarousel({
        items:1,
        loop:true,
        center:true, 
        mouseDrag:false,
        dots:true,
        URLhashListener:true,
        autoplayHoverPause:true,
        nav:true,
    	navText: "",
    	animateOut: 'slideOutDown',
        startPosition: '#1',
        responsive: {
	        0: {
	            mouseDrag: true,
	            touchDrag: true
	        },
	        480: {
	            mouseDrag: true,
	            touchDrag: true
	        },
	         481: {
	            mouseDrag: false,
	            touchDrag: false
	        }
	    }
    });

 owl.on('changed.owl.carousel', function(event) {
 	var page      = event.page.index; 
	console.log(page); 	

	$('.dots-line-controls .dots-line-wrapper').each(function(){
		$(this).removeClass('dot_active');
	});

	$(".dots-line-controls .dots-line-wrapper").eq(page).addClass('dot_active');

 });








 $(".next").click(function(){
 	owl.trigger('next.owl.carousel');
 })
 $(".prev").click(function(){
 	owl.trigger('prev.owl.carousel');
 });



  


//MOBILE MENU
$(".sf-menu").after("<div id='my-menu'>");
	$(".sf-menu").clone().appendTo("#my-menu");
	$("#my-menu").find("*").attr("style", "");
	$("#my-menu").find("ul").removeClass("sf-menu");
	$("#my-menu").mmenu({
		extensions : [ 'widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black' ],
		navbar: {
			title: "Menu"
		}
	});

	var api = $("#my-menu").data("mmenu");
	api.bind("closed", function () {
		$(".toggle-mnu").removeClass("on");
	});

	$(".toggle-mnu").click(function() {
		var mmAPI = $("#my-menu").data( "mmenu" );
		mmAPI.open();
		var thiss = $(this).find(".toggle-mnu");
		thiss.toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});
jQuery('.sf-menu').superfish();


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
