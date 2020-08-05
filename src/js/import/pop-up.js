$('a').on('click', function(event) {
  //open
  if($(this).attr('rel') === 'modal:open') {
    event.preventDefault();
    let href = $(this).attr('href');
    if(href === '#success') {
      let i = 0;
      $('.order__step input').each(function(index, el) {
        if($(el).val() === '') {
          $(el).addClass('invalid');
          $(el).prev('span').css({'color': '#f62459'});
          i = ++i;
          if(i === 1) {
            $('html, body').animate({scrollTop: $('.order__step input.invalid').offset().top - 100},300);
          }
        } else{
          $(el).removeClass('invalid');
          $(el).prev('span').css({'color': '#333333'});
        }
      });
      if(i === 0) {
        $('.order__step input').removeClass('invalid');
        $('.order__step input').prev('span').css({'color': '#333333'});
        $(href).fadeIn();
        $('.pop-up-bg').fadeIn();
      }
    } else{
      $(href).fadeIn();
      $('.pop-up-bg').fadeIn();
      if(href === '#reviews') {
        if($(window).width() < 767) {
          $('.pop-up-bg').css({'top': '100px'});
        }
      }
    }

  } 
  //close
  else if($(this).attr('rel') === 'modal:close') {
    event.preventDefault();
    let href = $(this).attr('href');
    $(href).fadeOut();
    $('.pop-up-bg').fadeOut();
    setTimeout(function() {
      $('.pop-up-bg').css({'top': '0px'});
    }, 400);
   
  }
});
//close
$('.pop-up-bg').on('click', function() {
  $('.pop-up').fadeOut();
  $('.pop-up-bg').fadeOut();
  setTimeout(function() {
    $('.pop-up-bg').css({'top': '0px'});
  }, 400);
}); 




//reviews
$('.pop-up-order__reviews li').on('click', function() {
  $(this).addClass('active');
  $(this).prevAll('li').addClass('active');
  $(this).nextAll('li').removeClass('active');
});

$('.pop-up-order__reviews li').hover(function() {
  $(this).addClass('hover');
  $(this).prevAll('li').addClass('hover');
  $(this).nextAll('li').removeClass('hover');
}, function() {
  $('.pop-up-order__reviews li').removeClass('hover');
});
