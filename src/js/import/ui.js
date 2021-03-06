import rangeslider from 'ion-rangeslider';
import selectric from 'selectric';
import datepicker from 'air-datepicker';
import '../lib/maskedinput';



//maskedinput
$("input[type='tel']").mask('(999)-999-99-99').on('click', function() {
  if ($(this).val() === '(___)-___-__-__') {
    $(this).get(0).setSelectionRange(0, 0);
  }
});

if($(window).width() <= 992) {
  $('.datepicker-birth').attr('disabled', 'disabled');
}


//datepicker
var myDatepicker = $('.datepicker-birth').datepicker({
  showEvent: '',
  autoClose: true
}).data('datepicker');
$('.calendar-open').on('click',function(event) {
  event.preventDefault();
  myDatepicker.show();
});

// select
$('select').selectric({
  arrowButtonMarkup: '<b class="button"><i class="icon-arrow-down"></i></b>',
  disableOnMobile: false
});


//product
$('.product__info__btn .button-secondary').on('click', function(event) {
  event.preventDefault();
  let i = 0;
  $('.product__info__size input').each(function(index, el) {
    if($(el).prop('checked')) {
    } else{
      i = ++i;
    }
  });  
  console.log(i);
  if(i < 6) {
    $('.product__info__size__error').slideUp();
  } else{
    $('.product__info__size__error').slideDown();
  }
});



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






//tabs
$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
  $(this).addClass('active').siblings().removeClass('active')
    .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});


// page search
//dropdown
$('.search__filters__block h3').on('click', function() {
  if($(window).width() <= 767) {
    $(this).toggleClass('active');
    $(this).siblings('.search__filters__dropdown').slideToggle();
  } else{
    if($(this).parents('.search__filters__block').hasClass('search__filters__block--primary')) {
      $(this).toggleClass('active');
      $(this).siblings('.search__filters__dropdown').slideToggle();
    }
  }
}); 

$('.search__text strong').on('click', function() {
  if($(window).width() <= 992) {
    $(this).toggleClass('active');
    $(this).siblings('.search__text__dropdown').slideToggle();
  }
});





//range-slider
$('.js-range-slider').ionRangeSlider({
  type: 'double',
  grid: false,
  min_interval: 100,
  hide_min_max: true,
  skin: 'sharp'
});


//.filters-open
$('.filters-open').on('click', function(event) {
  event.preventDefault();
  $('.search__filters').fadeIn();
  $('body').css({'overflow': 'hidden'});
});
$('.filters-close').on('click', function(event) {
  event.preventDefault();
  $('.search__filters').fadeOut();
  $('body').css({'overflow': 'visible'});
});

$('.sorting-open').on('click', function(event) {
  event.preventDefault();
  $('.search__sorting').fadeIn();
});
$('.sorting-close').on('click', function(event) {
  event.preventDefault();
  $('.search__sorting').fadeOut();
});





//

$('.cabinet__mobile-btn').on('click', function() {
  $(this).toggleClass('active');
  $(this).next().slideToggle();
});
