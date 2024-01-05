let add = document.getElementById('add'),
 remove = document.getElementById('remove');

let quantity = document.querySelector(".quantity");
let orderDiv = document.getElementById('order1');
let cancel = document.getElementById('cancel');

let addBev = document.querySelector(".addBev"),
modal = document.querySelector(".modal"),
overlay = document.querySelector(".close-modal");




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
    modal.style.display = "block";

});

overlay.addEventListener("click", function(e) {
    e.preventDefault();
    modal.style.display = "none";
    // modal.classList.add("removeModal");
});

function callFunctions(){
    increment();
    decrement();
    removeDiv();
}

