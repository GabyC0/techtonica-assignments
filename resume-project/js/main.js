function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

document.getElementById("fname").onsubmit = function thanksMsg() {
    console.log("Thanks for your message!");
    document.getElementById("demo").innerHTML = "hello"
};

thanksMsg();

function getVal() {
    const val = document.querySelector('input').value;
    console.log(val);
  }



// var textbox = document.getElementById("fname");

// var textboxname = textbox.name;