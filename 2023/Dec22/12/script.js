let emojiBx = document.querySelectorAll('.emojiBx');

emojiBx.forEach( option => {
    option.addEventListener('click', () => {
        emojiBx.forEach(option => {
            option.classList.remove('active');
            
        });

        option.classList.add('active');
    })
});