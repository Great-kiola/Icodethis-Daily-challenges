let add = document.getElementById('add'),
 remove = document.getElementById('remove');

let quantity = document.querySelector(".quantity");
let orderDiv = document.getElementById('order1');
let cancel = document.getElementById('cancel');

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

function callFunctions(){
    increment();
    decrement();
    removeDiv();
}