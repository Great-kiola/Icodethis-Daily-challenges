let body = document.querySelector('body');
let toggle = document.querySelector('.icon');


toggle.addEventListener('click', function(e) {
    e.preventDefault();

    body.classList.toggle('darkMode');
});