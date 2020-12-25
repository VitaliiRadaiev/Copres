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