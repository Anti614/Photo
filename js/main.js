$(document).ready(function(){

  let nav = $("#navbarMenu");
  $(".navbar a").click(function() {
        
      $("body,html").animate({
       scrollTop:$("#" + $(this).data('value')).offset().top - $("#header").height()
      }, 700);
      nav.removeClass("show");

  });


  $('#toggle-search').click(function(){
    $('#toggle-search').toggleClass('active');
    $('#searchBar').toggle(250);
    });




  $('#carouselGallery').carousel({
    interval: false
    });
    
});