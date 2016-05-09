
$(document).ready(function() { 
  $(function(){
    $('#menu').slicknav();

    $("#slider").owlCarousel({
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      rewindNav: true,
      autoPlay: true,
      // Navigation
      navigation: true,
      navigationText : ["<span class='icon-chevron_left'></span>","<span class='icon-chevron_right'></span>"],
        //Pagination
      pagination : false,
  	});
  }); 	
});


