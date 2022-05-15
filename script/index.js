'use strict';
const section1 = document.querySelector('#section--1');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const sections = document.querySelectorAll('.section');
const targetImages = document.querySelectorAll('img[data-src]');
const logo = document.querySelector('.nav__logo');
const sliderContainer = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const dotContainer = document.querySelector('.dots');

const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnsTab = document.querySelectorAll('.operations__tab');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const btnSignUp = document.querySelector('.btn--sign-up');

const containerTab = document.querySelector('.operations__tab-container');
const containerNav = document.querySelector('.nav__links');

const labelsTab = document.querySelectorAll('.operations__content');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Handle Modal
btnsOpenModal.forEach((btnOpenModal) => btnOpenModal.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Scroll Smooth animation
btnScrollTo.addEventListener('click', () => section1.scrollIntoView({ behavior: 'smooth' }));
logo.addEventListener('click', () => header.scrollIntoView({ behavior: 'smooth' }));
containerNav.addEventListener('click', function (e) {
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    const linkClicked = e.target;
    const id = linkClicked.getAttribute('href');
    if (id === '#') return;
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// --------------------------
// Tabbed Components
containerTab.addEventListener('click', function (e) {
  // Defined tab's button target
  const tabClicked = e.target.closest('.operations__tab');
  if (!tabClicked) return;

  // Remove all active button tabs and content tabs
  btnsTab.forEach((btn) => btn.classList.remove('operations__tab--active'));
  labelsTab.forEach((label) => label.classList.remove('operations__content--active'));

  // Add active class for button clicked
  tabClicked.classList.add('operations__tab--active');

  // Add active class for label depend on dataset of button
  document.querySelector(`.operations__content--${tabClicked.dataset.tab}`).classList.add('operations__content--active');
});

// --------------------------------
// Nav hover animation
const handleHover = (opacity) =>
  function (e) {
    if (e.target.classList.contains('nav__link')) {
      const linkHover = e.target;

      // Get all nav__link elements
      const siblings = linkHover.closest('.nav__links').querySelectorAll(`.nav__link`);

      // Hover link will change opacity others
      siblings.forEach((link) => {
        if (link !== linkHover) {
          link.style.opacity = opacity;
        }
      });

      // Make logo change opacity
      logo.style.opacity = opacity;
    }
  };

// Hover in and out animation
nav.addEventListener('mouseover', handleHover(0.5));
nav.addEventListener('mouseout', handleHover(1));

// ----------------------
// Make sticky nav
// Cách 1: dùng window với event scroll
// window.addEventListener('scroll', function () {
//   const ysection1 = section1.getBoundingClientRect().y;
//   // console.log(ysection1);
//   if (ysection1 <= 0) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

// Cách 2: dùng IntersectionObserver
const heightNav = nav.getBoundingClientRect().height;
const stickyNav = function (entries, observe) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    nav.classList.remove('sticky');
  } else nav.classList.add('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  // Phần trăm này là phần trăm header được hiển thị trong viewport thì callback sẽ thực thi
  // Ở đây header được viewport observe và giá trị threshold là 0 (tức là viewport mà thấy header là gọi callback ngay)
  // nghĩa là header và viewport giao nhau thì isIntersecting = true
  threshold: 0,
  // Giống như bên CSS, ở đây là dịch view port top: -90px
  rootMargin: `-${heightNav}px`,
});

headerObserver.observe(header);

// -----------------------------------
// Revealling Section Animation
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  // Remove observe if you don't want keep observing
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

sections.forEach((section) => {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
});

// -----------------
// Lazy Loading image animation
const imageObserver = new IntersectionObserver(
  (entries, observe) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;

    // Change img src from lazy to digital
    entry.target.src = entry.target.dataset.src;

    // Đợi hình digital được tải lên hoàn tất mới remove blur
    entry.target.addEventListener('load', () => {
      entry.target.classList.remove('lazy-img');
    });
    observe.unobserve(entry.target);
  },
  {
    root: null,
    threshold: 0,
    // Make image loading before we reaching them
    rootMargin: '-200px',
  }
);

targetImages.forEach((img) => imageObserver.observe(img));

// Create slider component
const slider = function () {
  let curSlide = 0;
  let maxSlide = slides.length;

  // 0 100% 200% 300% ...
  const goToSlide = function (slide) {
    slides.forEach((s, i) => (s.style.transform = `translateX(${(i - slide) * 100}%)`));
    activeDot(slide);
  };

  const createDots = function () {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`);
    });
  };

  const activeDot = function (slide) {
    document.querySelectorAll('.dots__dot').forEach((dot) => dot.classList.remove('dots__dot--active'));

    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
  };

  createDots();
  goToSlide(0);

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') nextSlide();
    else if (e.key === 'ArrowLeft') prevSlide();
  });
};

slider();

// Reset input
btnSignUp.addEventListener('click', function (e) {
  console.log(document.querySelectorAll('input').forEach((ele) => (ele.value = '')));
});

window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
});
