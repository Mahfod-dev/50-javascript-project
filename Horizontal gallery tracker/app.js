const wrapperImg = document.querySelector('.container');
let isDown = false;
let startx;
let scrollToLeft;

wrapperImg.addEventListener('mousedown', (e) => {
  isDown = true;
  wrapperImg.classList.add('active');
  startx = e.pageX - wrapperImg.offsetLeft;

  scrollToLeft = wrapperImg.scrollLeft;
});
wrapperImg.addEventListener('mouseup', (e) => {
  isDown = false;
  wrapperImg.classList.remove('active');
});
wrapperImg.addEventListener('mouseleave', (e) => {
  isDown = false;
  wrapperImg.classList.remove('active');
});

wrapperImg.addEventListener('mousemove', (e) => {
  e.preventDefault()
  if (!isDown) return;
  const distanceX = e.pageX - wrapperImg.offsetLeft;
  const walk = distanceX - startx;
  console.log(walk);

  wrapperImg.scrollLeft = scrollToLeft - walk;
});
