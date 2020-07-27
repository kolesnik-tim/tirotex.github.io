// import Swiper from 'swiper';


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
