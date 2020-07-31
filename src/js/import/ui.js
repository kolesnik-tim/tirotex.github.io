// import '../lib/maskedinput.js';
// import modal from 'jquery-modal';
// import selectric from 'selectric';

//select
// $('select').selectric();


// //pop-up
// $('[rel="modal:open"]').on('click', function(event) {
//   $(this).modal({
//     fadeDuration: 200
//   });
//   return false;
// });



//plus minus home
if($(window).width() < 767) {
  $('.home-about__dropdown h4').on('click', function() {
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  });
}





//order
$('.order__step__dropdown .next').on('click', function(event) {
  event.preventDefault();
  $(this).parents('.order__step').addClass('check').removeClass('active');
  $(this).parents('.order__step__dropdown').slideUp();
  $(this).parents('.order__step').next().find('.order__step__dropdown').slideDown();
  $(this).parents('.order__step').next().addClass('active');
});
