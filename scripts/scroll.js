const header = document.querySelector('header')
const footer = document.querySelector('footer');
window.addEventListener('scroll',()=>{
    if(window.scrollY > 10){
        header.style.transform = 'scaleY(0)'
    }else(
        header.style.transform = 'scaleY(1)'
    )
})


//section 전환 스크롤변수
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