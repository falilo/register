

let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", formRead);

function formRead(event){

    let lg = "";
    let first = document.getElementById("first").value;
    lg = "first";
    let email = document.getElementById("email").value;
    lg = "email";
    let age = document.getElementById("age").value;
    lg = "age";
    let password = document.getElementById("password").value;
    lg = "password";
    let last = document.getElementById("last").value;
    lg = "last";
    let phone = document.getElementById("phone").value;
    lg = "phone";
    let username = document.getElementById("username").value;
    lg = "username";
    let confirm = document.getElementById("confirm").value;
    lg = "confirm";

    if(password == confirm){
        lg = "Password matched";
    } else {
        lg = "Password not matched";
    }

    event.preventDefault();
    // update my webpage
    document.getElementById("demo1").innerHTML = first;
    document.getElementById("demo2").innerHTML = last;
    document.getElementById("demo3").innerHTML = email;
    document.getElementById("demo4").innerHTML = phone;
    document.getElementById("demo5").innerHTML = age;
    document.getElementById("demo6").innerHTML = lg;
    

}
