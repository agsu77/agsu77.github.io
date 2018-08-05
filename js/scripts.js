$(document).ready(function () {
	
	
      $(window).scroll(function () {
      	// body...
	   
	   var ico= $(".icoApp").offset();
           pxico= ico.top; // saco el px del elem.
        var scroll=$(window).scrollTop(); //saco el scroll hecho 

        var pxico = pxico - 300;

      	if(scroll > pxico){
		
			$(".imgSection").css("-webkit-animation-play-state", "running");
			$(".icoEmp").css("-webkit-animation-play-state", "running");
			$(".imgPlan").css("-webkit-animation-play-state", "running");
	}//if 
	   
      })  ;

	$("#btn-form").click(function () {
		
	alert(pxico + "el px de ico "+ scroll)	
	});


		//smooth scroll

	// Select all links with hashes
	$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
    	location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    	&& 
    	location.hostname == this.hostname
    	) {
      // Figure out element to scroll to
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
        	scrollTop: target.offset().top - 50
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
          	return false;
          } else {
          //  $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
        };
    });
    }
}
});

}); //end document ready
