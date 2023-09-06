let currentDate = document.querySelector('.currDay');

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

console.log(date);

let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function renderCal() {
    currentDate.innerText = `${months[currMonth]} ${currYear}`
}

renderCal();