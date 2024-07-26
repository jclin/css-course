const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const planButtons = document.querySelectorAll('.plan button');

for (const planButton of planButtons) {
  planButton.addEventListener('click', () => {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
  });
}