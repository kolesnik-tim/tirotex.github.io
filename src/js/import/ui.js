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


//basket
$('.open-basket').on('click', function(event) {
  event.preventDefault();
  $(this).parents('.header__basket').siblings('.header__basket__dropdown').fadeToggle();
});
$('.basket__close').on('click', function() {
  $(this).parents('.header__basket__dropdown').fadeToggle();
});
//header search
$('.header__search__input input').on('keyup', function() {
  if($(this).val() !== '') {
    $('.header__search__dropdown').slideDown();
  } else{
    $('.header__search__dropdown').slideUp();
  }
}); 

//header dropdown
$('.header__footer__list li').hover(function() {
  clearTimeout($.data(this,'timer'));
  $(this).children('ul').stop(true,true).fadeIn();
}, function() {
  $.data(this,'timer', setTimeout($.proxy(function() {
    $('ul',this).stop(true,true).fadeOut();
  }, this), 100));
});

//header mobile
$(window).scroll(function() {
  if($(this).scrollTop() >= 100) {
    $('.header__body').addClass('active');
  } else{
    $('.header__body').removeClass('active');
  }
});




////mobile-menu
//open
$('.menu-open').on('click', function() {
  $('.mobile-menu-bg').fadeIn();
  $('.mobile-menu').addClass('active');
  $('.menu-close').fadeIn(900);
});
//close
$('.mobile-menu-bg, .menu-close').on('click', function() {
  $('.mobile-menu-bg').fadeOut();
  $('.mobile-menu').removeClass('active');
  $('.menu-close').fadeOut(300);
});

//list
$('.mobile-menu__nav span').on('click', function() {
  $('.mobile-menu__nav ul').slideUp();
  $(this).siblings('ul').slideToggle();
});
