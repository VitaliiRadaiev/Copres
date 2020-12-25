{
    let actionItem = document.querySelectorAll('.form-action__item');
    if(actionItem.length) {
        actionItem.forEach(ietm => {
            let input = ietm.querySelector('.form-action__input');
            let textarea = ietm.querySelector('.form-action__textarea');
            if(input) {
                input.addEventListener('focus', () => {
                    input.parentElement.classList.add('_focus');
                })

                input.addEventListener('blur', () => {
                    input.parentElement.classList.remove('_focus');
                })
            }

            if(textarea) {
                textarea.addEventListener('focus', () => {
                    textarea.parentElement.classList.add('_focus');
                })

                textarea.addEventListener('blur', () => {
                    textarea.parentElement.classList.remove('_focus');
                })
            }
        })
    }
}