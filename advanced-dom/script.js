'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btnOpenModal =>
  btnOpenModal.addEventListener('click', openModal)
);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//learn more scrolling
const btnLearnMore = document.querySelector('.btn--scroll-to');
btnLearnMore.addEventListener('click', function (e) {
  const section1 = document.getElementById('section--1');
  section1.scrollIntoView({ behavior: 'smooth' });
});

// nav links smooth
// document.querySelectorAll('.nav__link').forEach(function (ele) {
//   ele.addEventListener('click', function (e) {
//     e.preventDefault();
//     const sectionId = ele.getAttribute('href');
//     document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// more efficent bubbling
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
