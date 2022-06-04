const mouseCursor = document.querySelector('.cursor')
const navLinks = document.querySelectorAll('li')

console.log(mouseCursor,navLinks);

window.addEventListener('mousemove',cursor)

function cursor(e) {
   mouseCursor.style.top = e.pageY + "px"
   mouseCursor.style.left = e.pageX + "px"
}

navLinks.forEach((link)=>{
    link.addEventListener('mouseenter',function () {
        mouseCursor.classList.add('link-grow')
        link.classList.add('hovered-link')
    })
    link.addEventListener('mouseleave',function () {
        mouseCursor.classList.remove('link-grow')
         link.classList.remove('hovered-link')
    })
})