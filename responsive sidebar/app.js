const mainHeader = document.querySelector('.main-header')
const overlay  = document.querySelector('.overlay')
const toggleBtn = document.querySelector('.toggle-btn')

console.log(mainHeader,overlay,toggleBtn);

function toggleClick(domEL){
    domEL.classList.toggle('open')
}

toggleBtn.addEventListener('click',function(){
   toggleClick(mainHeader)
   toggleClick(overlay)
   toggleClick(toggleBtn)
 })