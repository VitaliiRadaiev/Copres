{
    let slider = document.querySelectorAll('.slider');
    console.log('test')
	if(slider.length>0) {
		slider.forEach(item => {
			var mySwiper = new Swiper(item.querySelector('.swiper-container'), {
			slidesPerView:1,
			effect: 'fade',
			//loop: true,
			speed: 600,
			autoplay: {
			  delay: 4000,
			   disableOnInteraction: false,
			},
			spaceBetween: 15,
			pagination: {
			    el: item.querySelector('.swiper-pagination'),
			     clickable: true,
			     renderBullet: function(index, className) {
			     	return '<div class="' + className + '"> <span class="progress"></span> </div>'
			     }
			  },
			 on: {

			 	slideChangeTransitionStart: function(current) {
			 		let pagination = item.querySelector('.swiper-pagination');
			 		let lenght = pagination.children.length;
			 		
			 		for(let i = 0; i < lenght; i++) {
			 			if(i == current.activeIndex) break;
			 			pagination.children[i].classList.add('isShow');
			 		}

			 		for(let i = current.activeIndex; i < lenght; i++) {
			 			pagination.children[i].classList.remove('isShow');
			 			pagination.children[i].firstElementChild.style.transform = 'scaleX(0)';
			 		}
			 	}
			 }, 
				// scrollbar: {
				//   el: item.querySelector('.swiper-scrollbar'),
				// },
			})
		})
	}
}