let inStock = document.querySelector('.inStock');
let CartBtn = document.getElementById('CartBtn');


CartBtn.addEventListener('click', () => {
    let val = inStock.innerHTML;
    val--;
    inStock.textContent = val;

    if (val <= 0){

        CartBtn.value = 'not available';
        // console.log('not available');
    }
    // inStock = val;
});
