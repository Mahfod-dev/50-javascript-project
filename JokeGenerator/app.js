const API_URL = "https://icanhazdadjoke.com/"

const btn = document.querySelector('button')
const jokePara = document.querySelector(".joke")


const fetchData = async ()=>{

    const response = await fetch(API_URL,{
headers:{
    Accept:'application/json'
}
})
const data = await response.json()
display(data)
}

btn.addEventListener('click',()=>{
fetchData()
jokePara.textContent 
})

const display = (data)=>{
   jokePara.textContent =  data.joke
}




