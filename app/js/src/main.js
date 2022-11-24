const menuBtn = document.querySelector('.menu_btn'),
body = document.querySelector('body'),
wrapper1 = document.querySelector('[data-name="wrapper"]'),
btnsBack = document.querySelectorAll('.btn_back'),
menuBtns1Lvl = document.querySelectorAll('.header__nav-list__item-link'),
wrappers2 = document.querySelectorAll('[data-name="wrapper2"]');

// show menu 1 lvl
const addActive = function() {
    wrapper1.classList.toggle('active');
    menuBtn.classList.toggle('menu_btn--close');
    wrappers2.forEach(el=> {
        if(el.classList.contains('active')) {
            el.classList.remove('active');
        }
    });
    body.classList.toggle('body--hidden');
}
menuBtn.addEventListener('click', addActive);

// // show menu 2 lvl

const showWrapperTwo = function() {
    const wrapper2 = this.parentNode.children[2];
    if(!wrapper2)return;
    wrapper2.classList.add('active');
}

menuBtns1Lvl.forEach(btn => {
    btn.addEventListener('click', showWrapperTwo);

});


const hideWrapperTwo = function() {
    const parent = this.parentNode;
    parent.classList.remove('active');
}

btnsBack.forEach (btn=> {
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
