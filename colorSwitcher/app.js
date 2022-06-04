const color = document.querySelector('.color')
const switchBtn = document.querySelector('.switch')



switchBtn.addEventListener('click',()=>{
    let color1 = randomColor()
    let color2 = randomColor()
    let color3 = randomColor()
   const colorChange = `rgb(${color1},${color2},${color3})`

   document.body.style.backgroundColor = color.textContent= colorChange

})
function randomColor(){
    return Math.floor(Math.random() * 256)
}

