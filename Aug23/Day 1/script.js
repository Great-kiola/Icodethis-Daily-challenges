let body = document.querySelector('body');
let toggle = document.querySelector('.icon');
let i = document.querySelector('i');


toggle.addEventListener('click', function(e) {
    e.preventDefault();

    body.classList.toggle('darkMode');

    if (body.classList.contains('darkMode')) {
        return i.classList.replace('fa-moon', 'fa-sun');
    }
    i.classList.replace('fa-sun', 'fa-moon');
});