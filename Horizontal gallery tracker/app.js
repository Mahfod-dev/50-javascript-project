const wrapperImg = document.querySelector('.container');
let isDown = false;
let startx;
let scrollToLeft;

wrapperImg.addEventListener('mousedown', (e) => {
  isDown = true;
  wrapperImg.classList.add('active');
  startx = e.pageX - wrapperImg.offsetLeft;

  console.log({distanceX:e.pageX,distanceContainer:wrapperImg.offsetLeft});

  scrollToLeft = wrapperImg.scrollLeft;
  console.log(wrapperImg.scrollLeft);
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
  console.log(distanceX);
  const walk = distanceX - startx;


  wrapperImg.scrollLeft = scrollToLeft - walk;
});
