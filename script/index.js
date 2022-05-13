'use strict';
const section1 = document.querySelector('#section--1');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnsTab = document.querySelectorAll('.operations__tab');
const btnScrollTo = document.querySelector('.btn--scroll-to');

const containerTab = document.querySelector('.operations__tab-container');

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

btnsOpenModal.forEach((btnOpenModal) => btnOpenModal.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

btnScrollTo.addEventListener('click', () => section1.scrollIntoView({ behavior: 'smooth' }));

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

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
