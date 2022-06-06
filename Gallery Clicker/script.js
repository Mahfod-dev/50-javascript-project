
const allImg = document.querySelectorAll('.all-imgs img')
const previewImg = document.querySelector('.preview-img img')


allImg.forEach((img)=>{
    img.addEventListener('click',()=>{
      const imgAttribute =  img.getAttribute('src')
      previewImg.src = imgAttribute
      previewImg.classList.add("animate-imgs")
      setTimeout(()=>{
          previewImg.classList.remove("animate-imgs")
      },400)
    })
})