{
    let dropDown = document.querySelectorAll('._drop-down');
    if(dropDown.length>0) {
        dropDown.forEach(item => {
            item.addEventListener('click', (e) => {
                if(document.documentElement.clientWidth < 1023) {
                    e.preventDefault();
                    item.classList.toggle('_active');
                    _slideToggle(item.nextElementSibling);
                }
            })
        })
    }
}

{
    let header = document.querySelector('.header');
    let topLine = document.querySelector('.header__top-line');
        if(header) {
            window.addEventListener('scroll', () => {
                if(window.pageYOffset > 300) {
                    header.style.top = -topLine.clientHeight + 'px';
                    header.classList.add('_scroll');
                } else {
                    header.style.top = '0px';
                    header.classList.remove('_scroll');
                }
                
            })
        }
    
}