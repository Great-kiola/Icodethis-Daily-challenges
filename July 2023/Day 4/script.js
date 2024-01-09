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

let closeBev = document.querySelector("#close");

// Function
function checkoutBtnClick() {
    checkoutBtn.addEventListener("click", () => {
        checkOutModal.classList.add("active");
        bgBackground.classList.add("active");
    });


    bgBackground.addEventListener("click", () => {
        checkOutModal.classList.remove("active");
        bgBackground.classList.remove("active");
    });
}
checkoutBtnClick();

// Function for increasing quantity
add.addEventListener('click', function () {
    quantity.innerHTML++
})

// Function for Decreasing quantity
remove.addEventListener('click', function () {
    quantity.innerHTML--
})

// Function for removing the orderDiv
cancel.addEventListener('click', function () {
    orderDiv.remove();
});

// AddBeverage Event
function addBevClick() {
    addBev.addEventListener("click", function (e) {
        e.preventDefault();
        modal.style.display = "block";
        modal.classList.remove("close");
    });


    closeBev.addEventListener("click", () => {
        modal.classList.add("close");
    })

}
addBevClick();


// Total section
let totalPrice = document.querySelector(".finalPrice");
let subtotal = document.querySelector(".subtotalPrice");
let shippingTotal = document.querySelector(".shippingPrice");

const allTotal = () => {
    let total = totalPrice.innerHTML;

    console.log(total);
    // totalPrice.innerHTML = 

    subtotal.innerText.toString();
    // console.log(subtotal.innerText.toString() + shippingTotal.innerText.toString());
}

allTotal();
// console.log(totalPrice.innerHTML + " " + subtotal.innerHTML + " " + shippingTotal.innerHTML);