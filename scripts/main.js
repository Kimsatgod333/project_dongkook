/* 3행 버튼 함수 */
const nextBtn = document.querySelector('#medi_kit .kit_swiper .swiper-button-next')
const prevBtn = document.querySelector('#medi_kit .kit_swiper .swiper-button-prev')
nextBtn.addEventListener('click', ()=>{
    prevBtn.style.display = 'block'
    nextBtn.style.display = 'none'
})
prevBtn.addEventListener('click', ()=>{
    nextBtn.style.display = 'block'
    prevBtn.style.display = 'none'
})