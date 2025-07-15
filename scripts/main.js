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
/* 의약품 목록 */
const medicine = document.querySelectorAll('.medicine_swiper .swiper-slide');
for(i = 0 ; i < 9 ; i++){
    medicine[i].innerHTML = `<img src=${medicineList[i].src}>`
    medicine[i].innerHTML += `<span>${medicineList[i].name}</span>`
    medicine[i].addEventListener('click',()=>{
        window.location.href = './medicine.html'
    })
}