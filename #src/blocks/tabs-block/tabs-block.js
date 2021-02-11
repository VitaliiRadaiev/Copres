{
    let tabsBlock = document.querySelector('.tabs-block__body');
    if(tabsBlock) {
        let dataSlider = new Swiper(tabsBlock, {
            slidesPerView: 'auto',
            spaceBetween: 14,
            speed: 600,
            freeMode: true,
            //touchRatio: 0,
            //simulateTouch: false,
            //loop: true,
            //preloadImages: false,
            //lazy: true,
            // Dotts
            //pagination: {
            //	el: '.slider-quality__pagging',
            //	clickable: true,
            //},
            // Arrows
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
            on: {
                lazyImageReady: function () {
                    ibg();
                },
            }
            // And if we need scrollbar
            //scrollbar: {
            //	el: '.swiper-scrollbar',
            //},
        });
    }
}