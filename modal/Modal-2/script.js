'use strict';
const btnsModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
console.log(btnsModal, modal, closeModal);

function openCloseModal(msg) {
  if (msg === 'open') {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  } else if (msg === 'close') {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
}

btnsModal.forEach(btn => {
  btn.addEventListener('click', () => {
    openCloseModal('open');
  });
});
closeModal.addEventListener('click', () => {
  openCloseModal('close');
});
