//basket
$('.open-basket').on('click', function(event) {
  event.preventDefault();
  $(this).parents('.header__basket').siblings('.header__basket__dropdown').fadeToggle();
});
$('.basket__close').on('click', function(event) {
  event.preventDefault();
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
$('.mobile-menu-bg, .menu-close, .entrance-open, .registration-open').on('click', function() {
  $('.mobile-menu-bg').fadeOut();
  $('.mobile-menu').removeClass('active');
  $('.menu-close').fadeOut(300);
});
$('.registration-open').on('click', function() {
  $('.pop-up-bg').css({'top': '100px'});
});

//list
$('.mobile-menu__nav span').on('click', function() {
  $('.mobile-menu__nav ul').slideUp();
  $(this).siblings('ul').slideToggle();
});



//entrance
//open
$('.entrance-open').on('click', function() {
  $('#entrance').fadeIn();
});

//forgot-password
$('.forgot-password').on('click', function() {
  $('.form-primary').fadeOut(300);
  setTimeout(function() {
    $('.form-secondary').fadeIn();
  }, 300);
});
//close
$('.entrance-close').on('click', function() {
  $('#entrance').fadeOut();
  $('.form-secondary').fadeOut(300);
  setTimeout(function() {
    $('.form-primary').fadeIn();
  }, 300);
});

$(document).mouseup(function(e) { // событие клика по веб-документу
  var div = $('#entrance'); // тут указываем ID элемента
  if (!div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0) { // и не по его дочерним элементам
    div.fadeOut(); // скрываем его
    setTimeout(function() {
      $('.form-secondary').fadeOut(300);
      $('.form-primary').fadeIn();
    }, 600);
  }
});
