const inputCheck = document.querySelector('input[name="theme"]')
let HTMLELEMENT = document.documentElement
console.log(HTMLELEMENT);

inputCheck.addEventListener('click',()=>{
if(inputCheck.checked){
    HTMLELEMENT.setAttribute('data-theme',"dark")
    HTMLELEMENT.classList.add('transition')
}else{
    HTMLELEMENT.classList.remove('transition')
    HTMLELEMENT.setAttribute('data-theme',"light")
}
})
