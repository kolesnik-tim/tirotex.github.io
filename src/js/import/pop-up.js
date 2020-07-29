$('a').on('click', function(event) {
  //open
  if($(this).attr('rel') === 'modal:open') {
    event.preventDefault();
    let href = $(this).attr('href');
    $(href).fadeIn();
    $('.pop-up-bg').fadeIn();
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
