const header = document.querySelector('header')
window.addEventListener('scroll',()=>{
    console.log(window.scrollY)
    if(window.scrollY > 10){
        header.style.transform = 'scaleY(0)'
    }else(
        header.style.transform = 'scaleY(1)'
    )
})