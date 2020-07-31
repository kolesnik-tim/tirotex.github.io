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
if($(window).width() < 768) {
  $('.home-about__dropdown h4').on('click', function() {
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  });
}
//plus minus product pages
if($(window).width() < 993) {
  $('.product__tabs__content h5').on('click', function() {
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  });
}




//tooltip
$('.tooltip-open').on('click', function(event) {
  event.preventDefault();
  $(this).find('.tooltip-block').fadeToggle();
});




//page order
$('.order__step__dropdown .next').on('click', function(event) {
  event.preventDefault();
  $(this).parents('.order__step').addClass('check').removeClass('active');
  $(this).parents('.order__step__dropdown').slideUp();
  $(this).parents('.order__step').next().find('.order__step__dropdown').slideDown();
  $(this).parents('.order__step').next().addClass('active');
});



//tabs
$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
  $(this).addClass('active').siblings().removeClass('active')
    .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});
