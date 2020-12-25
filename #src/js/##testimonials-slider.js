{
    let testimonials = document.querySelector('.testimonials');
    if (testimonials) {
        let testimonialsThumbs;
        testimonialsThumbs = new Swiper(testimonials.querySelector('.testimonials__customers-slider > .swiper-container'), { 
           // freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: testimonials.querySelector('.testimonials__customers-slider > .customers-slider__btn-next'),
                prevEl: testimonials.querySelector('.testimonials__customers-slider > .customers-slider__btn-prev'),
            },
            breakpoints: {
                320: {
                    spaceBetween: 20,
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },

                1024: {
                    spaceBetween: 38,
                    slidesPerView: 4,
                },
            },  

        });

        let testimonialsText;
        testimonialsText = new Swiper(testimonials.querySelector('.testimonials__text-slider > .swiper-container'), {
            spaceBetween: 0,
            effect: 'fade',
            thumbs: {
                swiper: testimonialsThumbs,
            },
            pagination: {
                el: testimonials.querySelector('.testimonials__text-slider .swiper-pagination'),
                clickable: true,
            },
            preloadImages: false,
            autoplay: {
                delay: 5000,
            },
        });

        if(document.documentElement.clientWidth < 576) {
            testimonialsThumbs.controller.control = testimonialsText;
            testimonialsText.thumbs.swiper = null;
        } 
        testimonialsText.controller.control = testimonialsThumbs;
    }

}
