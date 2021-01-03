{
    let vacaturesList = document.querySelector('.vacatures-list');
    if(vacaturesList) {
        let vacaturesListSlider;
            vacaturesListSlider =  new Swiper(vacaturesList.querySelector('.vacatures-list__slider'), {
           // loop: true,
            // watchSlidesProgress: true,
            // watchSlidesVisibility: true,
            pagination: {
                el: vacaturesList.querySelector('.vacatures-list__slider .swiper-pagination'),
                clickable: true,
            },
            preloadImages: false,
            autoplay: {
                delay: 5000,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    autoHeight: true,

                },
                575: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 39,
                },

            },
        });
       
    }
}