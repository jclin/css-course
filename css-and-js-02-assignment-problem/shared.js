const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan button');
const modalYesButton = document.querySelector('.modal .modal__actions .modal__action');
const modalNoButton = document.querySelector('.modal .modal__actions .modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

// console.dir(backdrop);
for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', function () {
    modal.classList.add('open');
    backdrop.classList.add('open');
  });
}

function closeModal() {
  modal?.classList.remove('open');
  backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', () => {
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
});

backdrop.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  closeModal();
});

modalNoButton?.addEventListener('click', closeModal);
