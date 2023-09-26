'use strict';
let btns = document.querySelectorAll('.show-modal');
const modalWindow = document.querySelector('.modal');
const overlayModal = document.querySelector('.overlay');
const modalClose = document.querySelector('.close-modal');
function openModal() {
  modalWindow.classList.remove('hidden');
  overlayModal.classList.remove('hidden');
}
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function (e) {
    openModal();
  });
}
function hideModalAndOverlay() {
  modalWindow.classList.add('hidden');
  overlayModal.classList.add('hidden');
}
modalClose.addEventListener('click', hideModalAndOverlay);
overlayModal.addEventListener('click', hideModalAndOverlay);
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (
    e.key == 'Escape' &&
    !modal.classList.contains('hidden') &&
    !overlayModal.classList.contains('hidden')
  ) {
    hideModalAndOverlay();
  }
});
