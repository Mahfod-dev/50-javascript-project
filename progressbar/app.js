const progressBar = document.querySelector('.progress-done');

setTimeout(() => {
  progressBar.style.width = progressBar.getAttribute('data-done') + '%';
  progressBar.style.opacity = 1;
}, 500);
