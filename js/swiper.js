new Swiper(".slider-top", {
  navigation: {
    nextEl: ".custom-button-next",
    prevEl: ".custom-button-prev",
  },
  slidesPerView: 2,
  loop: true,
});

new Swiper(".slider-bottom", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 2,
  centeredSlides: true,
  loop: true,
});
