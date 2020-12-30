{
    let reviewBlock = document.querySelector('.review-block');
    if(reviewBlock) {
        
        let reviewSlider = new Swiper(document.querySelector('.review-block__slider .swiper-container'), {
            slidesPerView: 1,
            spaceBetween: 30,
            autoHeight: true,
            speed: 600,
            navigation: {
                nextEl: document.querySelector('.review-block__slider .review-block__btn_next'),
                prevEl: document.querySelector('.review-block__slider .review-block__btn_prev'),
            },
            /*
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    autoHeight: true,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1268: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },
            */
        });
    }
}