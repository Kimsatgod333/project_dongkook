const header = document.querySelector('header')
const footer = document.querySelector('footer');
window.addEventListener('scroll',()=>{
    if(window.scrollY > 10){
        header.style.transform = 'scaleY(0)'
    }else(
        header.style.transform = 'scaleY(1)'
    )
})
//section 전환 스크롤변수 및 함수
document.addEventListener("DOMContentLoaded", () => {
    const sectionScroll = document.querySelectorAll("main section, footer");
    let currentSectionIndex = 0;
    let isScrolling = false;
    function scrollToSection(ind) {
        if (ind < 0 || ind >= sectionScroll.length) return;
        isScrolling = true;
        sectionScroll[ind].scrollIntoView({ behavior: "smooth" });
    
        setTimeout(() => {
            isScrolling = false;
        }, 400); // 부드러운 스크롤 시간
    }
    window.addEventListener("wheel", (e) => {
        if (isScrolling) return;
    
        if (e.deltaY > 0) {
            currentSectionIndex++;
        } else {
            currentSectionIndex--;
        }
    
        // 범위 제한
        currentSectionIndex = Math.max(0, Math.min(currentSectionIndex, sectionScroll.length - 1));
    
        scrollToSection(currentSectionIndex);
    });
})
//스크롤 애니메이션
const introduceContent = document.querySelectorAll('#intro .content');
console.log(introduceContent)
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    //intro 스크롤 트리거
    gsap.fromTo('#intro h2',{
        //from
        opacity:0,
        y:90
    },{
        //to
        scrollTrigger:{
            trigger:'#intro',
            start:'top 50%',
            end:'bottom 50%',
        },
        duration:1,
        opacity:1,
        y:0,
    })
    gsap.fromTo('#intro p',{
        //from
        opacity:0,
        y:90
    },{
        //to
        scrollTrigger:{
            trigger:'#intro',
            start:'top 50%',
            end:'bottom 50%',
        },
        duration:1,
        delay:1,
        opacity:1,
        y:0,
    })
    gsap.fromTo(introduceContent[0],{
        //from
        opacity:0,
        y:90
    },{
        //to
        scrollTrigger:{
            trigger:'#intro',
            start:'top 50%',
            end:'bottom 50%',
        },
        duration:1,
        delay:1.5,
        opacity:1,
        y:0,
    })
    gsap.fromTo(introduceContent[1],{
        //from
        opacity:0,
        y:90
    },{
        //to
        scrollTrigger:{
            trigger:'#intro',
            start:'top 50%',
            end:'bottom 50%',
        },
        duration:1,
        delay:2,
        opacity:1,
        y:0,
    })
    gsap.fromTo(introduceContent[2],{
        //from
        opacity:0,
        y:90
    },{
        //to
        scrollTrigger:{
            trigger:'#intro',
            start:'top 50%',
            end:'bottom 50%',
        },
        duration:1,
        delay:2.5,
        opacity:1,
        y:0,
    })
    gsap.fromTo(introduceContent[3],{
        //from
        opacity:0,
        y:90
    },{
        //to
        scrollTrigger:{
            trigger:'#intro',
            start:'top 50%',
            end:'bottom 50%',
        },
        duration:1,
        delay:3,
        opacity:1,
        y:0,
    })
    //contact 트리거
    gsap.fromTo('#contact .text_wrap',{
        //from
        opacity:0,
    },{
        //to
        scrollTrigger:{
            trigger:'#contact',
            start:'top 50%',
            end:'bottom 50%',
        },
        duration:1,
        delay:1,
        opacity:1,
    })
    gsap.fromTo('#contact form',{
        //from
        opacity:0,
    },{
        //to
        scrollTrigger:{
            trigger:'#contact',
            start:'top 80%',
            end:'bottom 10%',
        },
        duration:1,
        opacity:1,
    })
});