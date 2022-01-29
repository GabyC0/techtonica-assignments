//grab class to add button
//create the button
//append the button to the div
//add attribute "onClick = function"
//add inner text to the button
//add an event listener
//have event listener to onclick
//declare a function to execute color change
//





//add a comment section
// const bod = document.querySelector("body");
const button = document.querySelector('button');

button.addEventListener("click", function() {
    const colors = document.body.style.backgroundColor;

   if (colors === 'teal') {
       document.body.style.backgroundColor = 'aqua';
   } else if (colors === 'aqua') {
       document.body.style.backgroundColor = 'green';
   } else {
       document.body.style.backgroundColor = 'teal';
   }
    
});

