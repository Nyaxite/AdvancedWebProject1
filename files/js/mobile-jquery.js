/*
File: jquery-main.css
Author: Michael Burnie
Website: www.michaelburnie.com
Description: This is the jQuery and JavaScript code for my mobile website. Other plugins are generally called from this page.
*/
$(document).ready(function() {
 
	$("#owl-demo").owlCarousel({

		autoPlay: 3000, //Set AutoPlay to 3 seconds
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		//singleItem:true

		// "singleItem:true" is a shortcut for:
		// items : 1, 
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false

	});
 
});