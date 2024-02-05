let toggle = document.querySelector('label');

toggle.addEventListener('click', (e) => {
    e.preventDefault();
    

    if (toggle.classList.toggle('active')){
        mnthsPrice.textContent = 20.00;
    } else {
        mnthsPrice.textContent = 16.00;
    }
});