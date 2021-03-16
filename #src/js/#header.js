{
   
   
   
    let dropDown = document.querySelectorAll('._drop-down');
    if(dropDown.length>0) {
        if(document.documentElement.clientWidth < 1024) {
            dropDown.forEach(item => {
                let span = document.createElement('span');
                span.className = '_drop-down-mobile';

                span.addEventListener('click', (e) => {
                        e.preventDefault();
                        span.classList.toggle('_open');
                        _slideToggle(span.nextElementSibling);

                })

                item.after(span);
            })
        } 
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