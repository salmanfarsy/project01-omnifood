$(document).ready(function(){
  $('.section-features').waypoint(function(direction){
      if(direction == 'down'){
          $('nav').addClass('sticky');
      } else{
          $('nav').removeClass('sticky');
      }

  }, {
      offset: '90%;'
  });
$('.btn-full').click(function(){
   $('html, body').animate({scrollTop:$('.plan').offset().top}, 1000); 
})

$('.btn-ghost').click(function(){
    $('html, body').animate({scrollTop:$('.section-features').offset().top}, 1000); 
 })

 $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
  $('.section-features').waypoint(function(direction){
 $('#js-1').addClass('animate__fadeIn') 
}, {
  offset: '65%;'
});

$('.section-steps').waypoint(function(direction){
  $('.app').addClass('animate__fadeInUp') 
 }, {
   offset: '65%;'
 });

 $('.cities').waypoint(function(direction){
  $('#js-2').addClass('animate__fadeIn') 
 }, {
   offset: '0;'
 });

 $('.plan').waypoint(function(direction){
  $('#js-3').addClass('animate__fadeInRightBig') 
 }, {
   offset: '50%;'
 });

 $('.section-meals').waypoint(function(direction){
  $('.section-meals').addClass('animate__fadeInLeft') 
 }, {
   offset: '50%;'
 });

 $('#menu').click(function(){
   $('.main-nav').slideToggle(500);
 })
 
});
