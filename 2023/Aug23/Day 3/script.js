
let sortBtn = document.querySelector('.sortBtn'),
    sortOption = document.querySelector('.sortOptions')
;

sortBtn.addEventListener('click', () => {
    sortOption.classList.toggle('show');
});