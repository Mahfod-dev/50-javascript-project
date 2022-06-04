const containerImg = document.querySelectorAll('.gallery img');
const modal = document.querySelector('.modal');
const fullImg = document.querySelector('.full-img');

containerImg.forEach((img) => {
  img.addEventListener('click', () => {
    const originalImg = img.getAttribute('data-img');

    modal.classList.add('open');
    fullImg.classList.add('open');

    fullImg.src = `img/full/${originalImg}.jpg`;
  });
});
modal.addEventListener('click', () => {
  modal.classList.remove('open');
  fullImg.classList.remove('open');
});
