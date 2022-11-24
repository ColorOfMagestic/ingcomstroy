const swiper = new Swiper('.partners_swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: `[data-role="next"]`,
        prevEl: `[data-role="prev"]`,
    },
    breakpoints: {
      320: {
      },
      768: {
      },
      1170: {
      }
    },
    autoplay: {
        delay: 3000,
    }
});