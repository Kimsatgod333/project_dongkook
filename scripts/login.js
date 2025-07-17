const userId = document.querySelector('#user_id');
const userPw = document.querySelector('#user_pw');
const loginBtn = document.querySelector('#login_btn');
loginBtn.addEventListener('click', ()=>{
    if(userId.value == ''){
        alert('아이디를 입력하세요')
    }else if(userId.value && userPw.value == ''){
        alert('비밀번호를 입력하세요')
    }else {
        alert('아이디 또는 비밀번호가 일치하지 않습니다.')
    }
})