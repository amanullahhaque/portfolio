

// Testimonial swiper slider script
var swiper = new Swiper(".testimonial_slider", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    
  },
});

var swiper = new Swiper(".popupSlide", {
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper(".clientSlider", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
  },
  breakpoints: {
      40: {
          slidesPerView: 1,
          spaceBetween: 20,
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 32,
      },
      1200: {
          slidesPerView: 3,
          spaceBetween: 32,
      },
  },
});


