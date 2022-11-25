const partners = new Swiper('.partners_swiper', {
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
    autoplay: {
        delay: 3000,
    }
});

const feedback = new Swiper('.feedback_swiper ', {
    loop: true,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: `[data-role="feedback_next"]`,
        prevEl: `[data-role="feedback_prev"]`,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.5,

      },
      768: {
        slidesPerView: 3.4,

      },
      1170: {
        slidesPerView: 4.1,
      },
      1900: {
        slidesPerView: 4.0,
      }
    },
});