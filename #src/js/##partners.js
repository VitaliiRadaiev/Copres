let partnersList = document.querySelector('.partners__list');
if(partnersList) {
    let partners = new Swiper('.partners__list', {
        slidesPerView: 5,
        spaceBetween: 0,
        speed: 800,
        watchSlidesVisibility: true,
        loop: true,
        pagination: {
		el: partnersList.querySelector('.swiper-pagination'),
            clickable: true,
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        on: {
            resize: function(swiper) {
                let visibleSlides = swiper.visibleSlides.length;
                let slides = swiper.slides.length;

               if(visibleSlides == slides) {
                    partnersList.querySelector('.swiper-pagination').style.display = "none";
               } else {
                partnersList.querySelector('.swiper-pagination').style.display = "block";
               }
            },
            init: function (swiper) {
                let visibleSlides = swiper.visibleSlides.length;
                let slides = swiper.slides.length;

               if(visibleSlides == slides) {
                    partnersList.querySelector('.swiper-pagination').style.display = "none";
               } else {
                partnersList.querySelector('.swiper-pagination').style.display = "block";
               }
              },
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            600: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1268: {
                slidesPerView: 5,
            },
        },
        
    });
}
