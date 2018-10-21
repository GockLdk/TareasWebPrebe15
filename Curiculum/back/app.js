  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

 

   $(document).ready(function(){
    $('.carousel.carousel-slider').carousel();
    fullWidth: true
    setInterval(function(){
    	 $('.carousel').carousel('next');
	} ,3000);

  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.autocomplete');
    var instances = M.Autocomplete.init(elems, options);
  });