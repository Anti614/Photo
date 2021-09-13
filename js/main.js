$(document).ready(function () {

  let nav = $("#navbarMenu");
  $(".navbar a").click(function () {

    $("body,html").animate({
      scrollTop: $("#" + $(this).data('value')).offset().top - $("#header").height()
    }, 700);
    nav.removeClass("show");

  });


  $('#toggle-search').click(function () {
    $('#toggle-search').toggleClass('active');
    $('#searchBar').toggle(500);
  });

  $('body').click(function (e) {

    if (e.target.id !== 'searchBar' && e.target.parentElement.id !== 'toggle-search') {
      $('#toggle-search').removeClass('active');
      $('#searchBar').fadeOut(1000);

    }
  });




  $('#carouselGallery').carousel({
    interval: false
  });


});

