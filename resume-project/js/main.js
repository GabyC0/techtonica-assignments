function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

    function thanksMsg() {
        console.log("Thanks for your message!");
    // document.getElementById("demo").innerHTML = "hello"
};
//thanksMsg();

function getFirst() {
    const first = document.querySelector('input').value;
    console.log(first);
  }

  function getLast() {
    const last = document.querySelector('input').value;
    console.log(last);
  }



// var textbox = document.getElementById("fname");

// var textboxname = textbox.name;