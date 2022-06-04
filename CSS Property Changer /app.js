const blockEL = document.querySelector('#block')
const verticalPosition = document.querySelector("#position-y")
const horizontalPosition = document.querySelector("#position-x")
const blockSize = document.querySelector("#size")
const shapeSelector = document.querySelector("#shape-select")
const btn = document.querySelector("#ok-btn")
const color = document.querySelectorAll('.rgba-container input')
const rgbR = document.querySelector('#rgba-r')
const rgbB = document.querySelector('#rgba-b')
const rgbG = document.querySelector('#rgba-g')
const rgbA = document.querySelector('#rgba-a')


verticalPosition.addEventListener('change',function () {
    blockEL.style.top = verticalPosition.value + "px"
})
horizontalPosition.addEventListener('change',function () {
    blockEL.style.left = horizontalPosition.value + "px"
})
blockSize.addEventListener('change',function () {
    blockEL.style.transform = "scale("+ blockSize.value +")"
})

btn.addEventListener('click',function () {
  let shapeOption = shapeSelector.value
  console.log(shapeOption);
if(shapeOption === "circle"){
blockEL.style.borderRadius = "50%"
}
})

color.forEach(val =>{
    val.addEventListener('change',function(){
        const newValue = Number(val.value)
        console.log(newValue);
       
  
    })
})

for (const input of color) {
   input.addEventListener("change",function () {
       blockEL.style.background = `rgba(${rgbR.value},${rgbB.value},${rgbR.value},${rgbA.value})`
    
   })
 
}
 