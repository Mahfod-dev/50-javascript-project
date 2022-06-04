const sections = document.querySelectorAll('section')
const trans = document.querySelector('.trans')

const colors =["coral","chartreuse","chocalate","cadetblue"]

const options={
    threshold:0.7
}

let observer = new IntersectionObserver(navScroll,options)

function navScroll(entries) {
  
  entries.forEach(element => {
      //get data-page
    const className =  element.target.className
    const activeLink = document.querySelector(`[data-page=${className}]`)
    const elementIndex = element.target.getAttribute('data-index')
    const coordinates = activeLink.getBoundingClientRect()

    console.log(activeLink,coordinates);

    const directions ={
        height : coordinates.height,
        width :coordinates.width,
        top:coordinates.top,
        left:coordinates.left,
    }

    if(element.isIntersecting){
        trans.style.setProperty('height',`${directions.height}px`)
        trans.style.setProperty('width',`${directions.width}px`)
        trans.style.setProperty('top',`${directions.top}px`)
        trans.style.setProperty('left',`${directions.left}px`)
        trans.style.backgroundColor = colors[elementIndex]
    }

  });
 }

 sections.forEach(element =>{
     observer.observe(element)
 })