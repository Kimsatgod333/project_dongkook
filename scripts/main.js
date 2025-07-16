/* 3행 버튼 함수 */
const nextBtn = document.querySelector('#medi_kit .kit_swiper .swiper-button-next')
const prevBtn = document.querySelector('#medi_kit .kit_swiper .swiper-button-prev')
nextBtn.addEventListener('click', ()=>{
    prevBtn.style.transform = 'translateX(0)'
    nextBtn.style.transform = 'translateX(-2000px)'
})
prevBtn.addEventListener('click', ()=>{
    nextBtn.style.transform = 'translateX(0)'
    prevBtn.style.transform = 'translateX(2000px)'
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
const nav = document.querySelectorAll('nav ul li a');
nav[5].addEventListener('click', ()=>{
    window.location.href = './login.html'
})
/* 문의 보내기 */
const send = document.querySelector('#send');
const userName = document.querySelector('#user_name');
const userMail = document.querySelector('#user_mail');
const userCorp = document.querySelector('#user_corp')
const checkBox = document.querySelectorAll('.check input');
const inquiries = document.querySelector('#inquiries')
send.addEventListener('click', ()=>{
    if(userName.value == '' && userMail.value == '' && !checkBox.value && inquiries.value == ''){
        alert('이름을 적어주세요')
    }else if(userMail.value == '' && !checkBox.value && inquiries.value == ''){
        alert('메일을 적어주세요')
    }else if(!checkBox.value && inquiries.value == ''){
        alert('문의 유형을 선택해주세요')
    }else if(inquiries.value == ''){
        alert('문의 내용을 적어주세요')
    }else {
    const answer = confirm('문의를 보내시겠습니까');
        if(answer){
            alert('성공적으로 보냈습니다.')
            userName.value = ''
            userMail.value = ''
            userCorp.value = ''
            checkBox.value = ''
            inquiries.value = ''
        }else{
            alert('문의를 취소하였습니다.')
            userName.value = ''
            userMail.value = ''
            userCorp.value = ''
            checkBox.value = ''
            inquiries.value = ''
        }
    }
})