// header variables
const menuBtn = document.querySelector('.menu_btn'),
  body = document.querySelector('body'),
  wrapper1 = document.querySelector('[data-name="wrapper"]'),
  btnsBack = document.querySelectorAll('.btn_back'),
  menuBtns1Lvl = document.querySelectorAll('.header__nav-list__item-link'),
  wrappers2 = document.querySelectorAll('[data-name="wrapper2"]');

  const estimateBtnSubmit = document.querySelector('.estimate_form button');

// modal variables

const modalApplication = document.querySelector('.application_modal'),
  modalConsult = document.querySelector('.consultation_modal'),
  modalFeedback = document.querySelector('.feedback_modal'),
  modalCloseBtns = document.querySelectorAll('.modal__close'),
  consultBtn = document.querySelector('.intro-banner__button button'),
  feedbackBtn = document.querySelector('.btn_feedback'),
  OrderСallBtns = document.querySelectorAll('.call_desktop');

// show menu 1 lvl
const addActive = function () {
  wrapper1.classList.toggle('active');
  menuBtn.classList.toggle('menu_btn--close');
  wrappers2.forEach((el) => {
    if (el.classList.contains('active')) {
      el.classList.remove('active');
    }
  });
  body.classList.toggle('body--hidden');
};
menuBtn.addEventListener('click', addActive);

// // show menu 2 lvl

const showWrapperTwo = function () {
  const wrapper2 = this.parentNode.children[2];
  if (!wrapper2) return;
  wrapper2.classList.add('active');
};

menuBtns1Lvl.forEach((btn) => {
  btn.addEventListener('click', showWrapperTwo);
});

const hideWrapperTwo = function () {
  const parent = this.parentNode;
  parent.classList.remove('active');
};

btnsBack.forEach((btn) => {
  btn.addEventListener('click', hideWrapperTwo);
});

//  accordeon
document.querySelectorAll('.accordion_item-trigger').forEach((item) =>
  item.addEventListener('click', () => {
    const parent = item.parentNode;

    if (parent.classList.contains('.accordion_item--active')) {
      parent.classList.remove('.accordion_item--active');
    } else {
      document
        .querySelectorAll('.accordion_item')
        .forEach((child) => child.classList.remove('accordion_item--active'));

      parent.classList.add('accordion_item--active');
    }
  }),
);
// particlesJS
particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#000000',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 6,
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#000000',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 4,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: false,
        mode: 'repulse',
      },
      onclick: {
        enable: false,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

// estimateBtn
estimateBtnSubmit.addEventListener('click', (e)=> {
  e.preventDefault();
})

// modal

const addModal = (modal) => {
  modal.classList.add('modal--active');
  body.classList.add('body--hidden');
};

const closeModal = function (e) {
  const modal = this.closest('.modal');
  modal.classList.remove('modal--active');

  body.classList.remove('body--hidden');
};

OrderСallBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    addModal(modalApplication);
  });
});

consultBtn.addEventListener('click', () => {
  addModal(modalConsult);
});
feedbackBtn.addEventListener('click', () => {
  addModal(modalFeedback);
});

modalCloseBtns.forEach((btn) => {
  btn.addEventListener('click', closeModal);
});
