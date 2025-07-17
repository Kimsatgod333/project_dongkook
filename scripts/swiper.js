const videoSwiper = new Swiper('.video_swiper',{
    slidesPerView:1,
    autoplay:{delay:4500},
    effect:'fade',
    loop:true,
})
const medicineSwiper = new Swiper('.medicine_swiper', {
    slidesPerView:4,
    spaceBetween:60,
    loop:true,
    autoplay:{delay:2000},
})
const medikitSwiper = new Swiper('.kit_swiper', {
    navigation:{
        prevEl:'.kit_swiper .swiper-button-prev',
        nextEl:'.kit_swiper .swiper-button-next'
    },
    pagination:{
        el:'.kit_swiper .swiper-pagination'
    }
})