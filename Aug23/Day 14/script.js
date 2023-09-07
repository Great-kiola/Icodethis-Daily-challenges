let currentDate = document.querySelector('.currDay');
let currentDate2 = document.querySelector('.currDay2');
let daysTag = document.querySelector('.days');
let iconLeftRight = document.querySelectorAll('.nav');
// iconRight = document.querySelector('.right');

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function renderCal() {
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); // to get last date of month
    let liTag = ""; 

    for (let i = 1; i <= lastDateofMonth; i++) {
        liTag += `<li>${i}</li>`;   
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`
    daysTag.innerHTML = liTag;

    currentDate2.innerText = `${months[currMonth]}`
}

renderCal();


iconLeftRight.forEach(icon => {
    icon.addEventListener('click', () => {
        currMonth = icon.id === "prev" ? currMonth -1  : currMonth + 1;
        renderCal();
    });
});
