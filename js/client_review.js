jQuery(document).ready(function($) {
        		"use strict";
        		//  TESTIMONIALS CAROUSEL HOOK
  $('#customer-testimonoals').owlCarousel({
		    loop:true,
		    center: true,
		    items:3,
		    margin:0,
		    autoplay: true,
		    dots: true,
		    autoplayTimeout: 8500,
		    smartSpeed: 450,
		    nav:false,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:3
		        }
		    }
		});
        	});