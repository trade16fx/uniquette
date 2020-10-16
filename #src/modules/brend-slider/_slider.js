var swiper = new Swiper('.js-brend-slider', {  
  // If we need pagination
  slidesPerView: 'auto',
  loop: true,
  centeredSlides: true,
      spaceBetween: 0,
  pagination: {
    el: '.brend-slider__pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.brend-slider__arrow_next',
    prevEl: '.brend-slider__arrow_prev',
  },
  breakpoints: {
    
    991: {
      slidesPerView: 4,
      spaceBetween: 0,
  		centeredSlides: false,
  		loop: false
    },
    1024: {
      slidesPerView: 5,
      
    },
  }
});
 
