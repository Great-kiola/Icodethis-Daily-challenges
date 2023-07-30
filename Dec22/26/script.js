let myLists = document.querySelectorAll('.lists');

myLists.forEach( list => {
    list.addEventListener("click", () => {
        
        myLists.forEach(list => {
            list.classList.remove('active');
        });

        list.classList.add('active');
    });

});
