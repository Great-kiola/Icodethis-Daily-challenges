let currentDate = document.querySelector('.currDay');
let currentDate2 = document.querySelector('.currDay2'),
currentDay = document.querySelector('.currentDay');
let daysTag = document.querySelector('.days');
let iconLeftRight = document.querySelectorAll('.nav');

let date = new Date(), 
currYear = date.getFullYear(),
currMonth = date.getMonth();

let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function renderCal() {
    
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // to get first date of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // to get last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // to get last date of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // to get last date of month
    let liTag = ""; 

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inActive">${lastDateofLastMonth - i + 1}</li>`;   
    }
    
    
    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
        && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class = "${isToday}">${i}</li>`;   
    }
    
    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inActive">${i - lastDayofMonth + 1}</li>`;   
        
    }
    
    currentDate.innerText = `${months[currMonth]} ${currYear}`
    daysTag.innerHTML = liTag;
    
    currentDate2.innerText = `${months[currMonth]}`

}

renderCal();


iconLeftRight.forEach(icon => {
    icon.addEventListener('click', () => {
        currMonth = icon.id === "prev" ? currMonth - 1  : currMonth + 1;
        
        if (currMonth < 0 || currMonth > 11){
            
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        }
        renderCal();
    });
});



// Add Event button
let inputTask = document.querySelector('.inputTask');
let overlay = document.querySelector('.overlay');
let AddEvent = document.getElementById('addEvent');

AddEvent.onclick = function(){
    overlay.style.visibility = 'visible';
    inputTask.style.visibility = 'visible';
}


overlay.addEventListener('click', function(){
    inputTask.style.visibility = 'hidden';
    overlay.style.visibility = 'hidden';
});

