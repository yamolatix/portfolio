jQuery(document).ready(function($) {


	var mastheadheight = $('#mainNav').outerHeight();
	//console.log(mastheadheight);
	$("#site-header,.ds-main-section-inner").css("margin-top" , mastheadheight);

	

	$(window).scroll(function(){
	    if ($(window).scrollTop() >= 10) {
	        $('#mainNav').addClass('ds-fixed-header');
	    }
	    else {
	        $('#mainNav').removeClass('ds-fixed-header');
	    }
	}).scroll();

	// Cache selectors
	var lastId,
	    topMenu = $("#navbarResponsive"),
	    //topMenuHeight = topMenu.outerHeight(),
	    // All list items
	    menuItems = topMenu.find("a"),
	    // Anchors corresponding to menu items
	    scrollItems = menuItems.map(function(){
	      var item = $($(this).attr("href"));
	      if (item.length) { return item; }
	    });

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e){
	  var href = $(this).attr("href"),
	      offsetTop = href === "#" ? 0 : $(href).offset().top-mastheadheight+1;
	  $('html, body').stop().animate({ 
	      scrollTop: offsetTop
	  }, 300);
	  e.preventDefault();
	});

	// Bind to scroll
	$(window).scroll(function(){
	   // Get container scroll position
	   var fromTop = $(this).scrollTop()+mastheadheight;
	   
	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
	     if ($(this).offset().top < fromTop)
	       return this;
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   
	   if (lastId !== id) {
	       lastId = id;
	       // Set/remove active class
	       menuItems
	         .parent().removeClass("active")
	         .end().filter("[href='#"+id+"']").parent().addClass("active");
	   }                   
	});


	$('.ds-banner-slider').slick({
		  autoplay: true,
		  autoplay: true,
	      autoplaySpeed: 0,
	      speed: 8000,
	      cssEase: 'linear',
		  arrows: false,
		  slidesToShow: 3,
		  responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        
		        slidesToShow: 1
		      }
		    }
		  ]
	});

	$('.ds-work-slider').slick({
	  autoplay: true,
	  arrows: false,
	  dots: true,
	  autoplaySpeed:4000,
	});


	$('.ds-logo-list-slider').slick({
	  autoplay: true,
	  autoplaySpeed: 3000,
	  arrows: false,
	  dots: false,
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	      	slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	      	slidesToShow: 2,
	      }
	    }
	  ]
	});

	$(".ds-menu-icon").click(function(){
	  $(".ds-nav-wrapper,.ds-menu-icon").toggleClass("ds-menu-open");
	});
	$(".nav-link").click(function(){
	  $(".ds-nav-wrapper,.ds-menu-icon").removeClass("ds-menu-open");
	});

});