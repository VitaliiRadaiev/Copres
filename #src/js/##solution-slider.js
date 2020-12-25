{
    let sliderProduct = document.querySelector('.solution-block');
    if (sliderProduct) {

        if(sliderProduct.querySelector('.solution-block__thumbs').firstElementChild.children.length <= 6) {
            if(document.documentElement.clientWidth > 1023) {
                sliderProduct.querySelector('.swiper-scrollbar').remove();
            }
        }

        let sliderProductThumbs;
        sliderProductThumbs = new Swiper(sliderProduct.querySelector('.solution-block__thumbs'), {
            
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            scrollbar: {
                el: sliderProduct.querySelector('.swiper-scrollbar'), 
                draggable: true,
              },
              breakpoints: {
                320: {
                    spaceBetween: 20,
                },
                1023: {
                    spaceBetween: 48,
                },
            },  

        });
        let sliderProductTop;
        sliderProductTop = new Swiper(sliderProduct.querySelector('.solution-block__content'), {
            spaceBetween: 0,
            effect: 'fade',
            thumbs: {
                swiper: sliderProductThumbs
            },
            preloadImages: false,
        });


    }

}
