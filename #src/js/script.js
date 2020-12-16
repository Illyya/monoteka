//////////////////////////////
//slider
//////////////////////////////

var swiper = new Swiper('.slider1', {
  navigation: {
    nextEl: '.button-right',
    prevEl: '.button-left',
  },
});

var mySwiper = new Swiper('.slider2', {
  slidesPerView: 2,
  slidesPerGroup: 2,
  simulateTouch: false,
  loopFillGroupWithBlank: true,
  spaceBetween: 5,
  navigation: {
    nextEl: '.arrows__right',
    prevEl: '.arrows__left',
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },    
    1210: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  }
})

//////////////////////////////
//burger
//////////////////////////////

let menu = document.querySelector('.menu__list');
let burger = document.querySelector('.burger');

burger.onclick = function () {
  menu.classList.toggle('active');
  burger.classList.toggle('active');
  document.body.classList.toggle('active');
}