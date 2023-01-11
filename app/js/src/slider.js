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

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 4,
  slidesPerView: 9,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: `[data-role="mySwiper2_next"]`,
    prevEl: `[data-role="mySwiper2_prev"]`,
  },
  thumbs: {
    swiper: swiper,
  },
  autoplay: {
    delay: 3000,
}
});

var swiper = new Swiper(".mySwiper3", {
  spaceBetween: 4,
  slidesPerView: 9,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper4", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: `[data-role="mySwiper4_next"]`,
    prevEl: `[data-role="mySwiper4_prev"]`,
  },
  thumbs: {
    swiper: swiper,
  },
  autoplay: {
    delay: 3000,
}
});

var swiper = new Swiper(".mySwiper5", {
  spaceBetween: 4,
  slidesPerView: 9,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper6", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: `[data-role="mySwiper6_next"]`,
    prevEl: `[data-role="mySwiper6_prev"]`,
  },
  thumbs: {
    swiper: swiper,
  },
  autoplay: {
    delay: 3000,
}
});
