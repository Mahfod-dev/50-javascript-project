const keys = document.querySelectorAll('.keys')
const textArea = document.querySelector('.display textarea')

console.log(keys,textArea);

keys.forEach(key=>{
   key.addEventListener('click',(e)=>{
  

    if(!e.path[0].value?.toLowerCase()) return

    let keyClicked = e.path[0].value?.toLowerCase()


    textArea.value += keyClicked
   })
})
