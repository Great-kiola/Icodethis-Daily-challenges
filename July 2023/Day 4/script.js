let add = document.getElementById('add'),
 remove = document.getElementById('remove');

let quantity = document.querySelector(".quantity");
let orderDiv = document.getElementById('order1');
let cancel = document.getElementById('cancel');

let addBev = document.querySelector(".addBev"),
modal = document.querySelector(".modal"),
overlay = document.querySelector(".close-modal");


let openModal = document.querySelector(".open");
let closeModal = document.querySelector(".close");


let checkOutModal = document.querySelector(".checkOutModal");
let bgBackground = document.querySelector(".overlay");
let checkoutBtn = document.querySelector(".btn");

checkoutBtn.addEventListener("click", () => {
    checkOutModal.classList.add("active");
    bgBackground.classList.add("active");
});


bgBackground.addEventListener("click", () => {
    checkOutModal.classList.remove("active");
    bgBackground.classList.remove("active");
});


callFunctions();

// Function for increasing quantity
function increment (){
    add.addEventListener('click', function(){
        quantity.innerHTML++
    })

}

// Function for Decreasing quantity
function decrement(){
    remove.addEventListener('click', function(){
        quantity.innerHTML--
    })
}

// Function for removing the orderDiv
function removeDiv(){
    cancel.addEventListener('click', function(){
        orderDiv.remove();
    });
    
}

addBev.addEventListener("click", function(e) {
    e.preventDefault();
    modal.showModal();
});

overlay.addEventListener("click", function(e) {
    e.preventDefault();
    modal.classList.remove("open");
    modal.classList.add("closeModal");
});

function callFunctions(){
    increment();
    decrement();
    removeDiv();
}

