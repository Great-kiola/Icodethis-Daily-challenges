let add = document.getElementById('add'),
 remove = document.getElementById('remove');

let quantity = document.querySelector(".quantity");


function increment (){
    add.addEventListener('click', function(){
        let newVal = quantity.innerHTML++
    })
}

function decrement(){
    remove.addEventListener('click', function(){
        let newVal = quantity.innerHTML--

        // if (newVal > 0 ){
        //     alert("Can't go below");
        // }
    })
}


increment();
decrement();