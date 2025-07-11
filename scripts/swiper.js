const videoSwiper = new Swiper('.video_swiper',{
    autoplay:{delay:5000},
    effect:'fade'
})
const medicineSwiper = new Swiper('.medicine_swiper', {
    slidesPerView:4,
    spaceBetween:60,
    autoplay:{delay:2000},
})
const medikitSwiper = new Swiper('.kit_swiper', {
    navigation:{
        prevEl:'.kit_swiper .swiper-button-prev',
        nextEl:'.kit_swiper .swiper-button-next'
    }
})