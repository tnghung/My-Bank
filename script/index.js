'use strict';
const section1 = document.querySelector('#section--1');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const sections = document.querySelectorAll('.section');

const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnsTab = document.querySelectorAll('.operations__tab');
const btnScrollTo = document.querySelector('.btn--scroll-to');

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

// Handle hover for navigation

btnsOpenModal.forEach((btnOpenModal) => btnOpenModal.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

btnScrollTo.addEventListener('click', () => section1.scrollIntoView({ behavior: 'smooth' }));

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

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

// Nav hover
const handleHover = (opacity) =>
  function (e) {
    if (e.target.classList.contains('nav__link')) {
      const linkHover = e.target;

      // Get all nav__link elements
      const siblings = linkHover.closest('.nav__links').querySelectorAll(`.nav__link`);

      // Get logo element
      const logo = linkHover.closest('.nav').querySelector('.nav__logo');

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

// Scroll smooth animation
containerNav.addEventListener('click', function (e) {
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    const linkClicked = e.target.closest('.nav__link');
    const id = linkClicked.getAttribute('href');
    if (id === '#') return;
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

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
  // Phần trăm này là phần trăm đối tượng được observe(ở đây là header) khi hiển thị trong thằng được chọn làm observer (ở đây là viewport do root = null)
  // Ở đây header được viewport observe và giá trị threshold là 0
  // nên khi header không hiển thị trong viewport (tức là viewport và header không intersecting) thì giá trị isIntersecting = true
  threshold: 0,
  // Giống như bên CSS, ở đây là dịch view port top: -90px
  rootMargin: `-${heightNav}px`,
});

headerObserver.observe(header);

// Revealling Section
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    const section = entry.target.classList.remove('section--hidden');
  }

  // Remove observe
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.12,
});

sections.forEach((section) => {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
});
