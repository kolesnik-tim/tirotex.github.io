import Swiper from 'swiper/bundle';
import fencybox from '@fancyapps/fancybox';

//fencibox
var instance = $('[data-fancybox="gallery"]').fancybox({
  infobar: false,  
  toolbar: false,
  smallBtn: true,
  animationEffect: 'fade',
  clickContent: false,
  hideOnOverlayClick: true,
  clickOutside: 'close',
  btnTpl: {
    arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' + '<i class="icon-arrow-left"></i>' + '</button>',
    arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' + '<i class="icon-arrow-right"></i>' + '</button>',
  },
  // backFocus: false, 
  loop: true
});

setTimeout(function() {
  $('body').on('click', '.fancybox-content', function() {
    console.log('ve');
    instance.close();
  });
},500);


//home
var swiper = new Swiper('.swiper-news', {
  slidesPerView: 2,
  spaceBetween: 10,
  slidesPerGroup: 2,
  loop: true,
  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 4,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    575: {
      spaceBetween: 30,
    }
  },
  navigation: {
    nextEl: '.swiper-news-next',
    prevEl: '.swiper-news-prev',
  },
});

var swiper = new Swiper('.swiper-shares', {
  slidesPerView: 2,
  spaceBetween: 10,
  slidesPerGroup: 2,
  loop: true,
  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 4,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 30,
    }
  },
  navigation: {
    nextEl: '.swiper-shares-next',
    prevEl: '.swiper-shares-prev',
  },
});


var swiper = new Swiper('.swiper-review', {
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: false,
  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 2,
      loop: true,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 2,
      loop: true,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
      loop: true,
    }
  },
  navigation: {
    nextEl: '.swiper-review-next',
    prevEl: '.swiper-review-prev',
  },
});



//product
var galleryThumbs = new Swiper('.gallery-thumbs', {
  slidesPerView: 4,
  spaceBetween: 10,
  // loop: true,
  // freeMode: true,
  // loopedSlides: 5, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
    1200: {
      slidesPerView: 7,
    },
    575: {
      slidesPerView: 5,
    }
  },
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  loop: true,
  // loopedSlides: 5, //looped slides should be the same
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});
