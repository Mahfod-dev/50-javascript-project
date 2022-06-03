const btnOpen =document.querySelector('.open')
const closeOpen =document.querySelector('.modal-btn')
const modal = document.querySelector('.modal')
const modalContainer = document.querySelector('.modal-container')


btnOpen.addEventListener('click',()=>{
modalContainer.classList.add('show')
})
closeOpen.addEventListener('click',()=>{
modalContainer.classList.remove('show')
})