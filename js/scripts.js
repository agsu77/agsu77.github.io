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


});