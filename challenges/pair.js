//creating button w/ tag of html element
let button = document.getElementById("submit");
//creating event on click
button.onclick = function(event) {
    //bc form not doing submit request
    event.preventDefault();
    let userIdTag = document.getElementById('username');
    
    //get username
    //remove space to grab first thing user is giving
    let userName = userIdTag.value.trim();
//if else statement
    if()
}


//if string is empty return something