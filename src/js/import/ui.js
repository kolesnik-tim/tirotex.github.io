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



