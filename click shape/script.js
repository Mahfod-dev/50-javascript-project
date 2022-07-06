const message = document.querySelector('.message')
const btn = document.querySelector('button')
const gameArea = document.querySelector('.gameArea')



let inPlay =false
let playArea = {}
let startTime;
playArea.inPlay = false

btn.addEventListener('click',function(){

 if(!inPlay){
    playArea.inPlay = true
    this.style.display ='none'
    displayMessage('Click the circles as quickly as you see them')
    showBox()
}   
})

function showBox() {
   startTime = Date.now()
   console.log(startTime);
   const start = new Date().getTime()
   console.log(start);

    playArea.timer = setTimeout(myBox,2000)

   myBox()
}

function myBox(){
    const el = document.createElement('div')
    el.style.cssText=`
    position:relative;
    background:${getColor()};
    border-radius:${randomNumber(50)}%;
    top:${randomNumber(150)}px;
    left:${randomNumber(50)}px;
    width:${randomNumber(70) + 70}px;
    height:${randomNumber(50) + 70}px;
    `
    gameArea.appendChild(el)

    el.addEventListener('click',hit)

}

function hit() {
   let endTime = Date.now()
   let duration = (endTime - startTime) / 1000
    displayMessage(`It took ${duration} seconds to click`)
    clearTimeout(playArea.timer)
    gameArea.children[0].remove()
    playArea.timer = setTimeout(myBox,3000)
}

function randomNumber(num){
    let tempVal = Math.floor(Math.random() * num)
    return tempVal
}

function getColor(){
    function col() {
        let hex = randomNumber(255).toString(16)
        return `0${String(hex).substring(-2)}`  
    }
    return `#${col()}${col()}`

}

function displayMessage(msg){
    message.innerHTML =msg
}