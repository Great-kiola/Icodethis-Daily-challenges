let add = document.getElementById('add'),
 remove = document.getElementById('remove');

let quantity = document.querySelector(".quantity");
let orderDiv = document.getElementById('order1');
let cancel = document.getElementById('cancel');

callFunctions();

function increment (){
    add.addEventListener('click', function(){
        quantity.innerHTML++
    })

}

function decrement(){
    remove.addEventListener('click', function(){
        quantity.innerHTML--
    })
}

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