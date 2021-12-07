const form = document.getElementbyId("form");
const username = document.getElementbyId("username");
const email = document.getElementbyId("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Event listeners
form.addEventListener("submit", function(e)  {
    e.preventDefault();
// console.log(username.value);   <-- checking if wokring properly
    if (username.value  === "") 
    {
        showError(username, "Username must be filled out");
    } else 
    {
        showSuccess(username);
    }

    if (email.value === "") 
    {
        showError(email, "Email must be filled out");
    } else if (!isValidEmail(email.value)) 
    {
        showError(email, "Email is not a valid email");
    } else
    {
        showSuccess(email);
    }

    if(password.value === "")    
    {
        showError(password, "Password is required");
    } else
    {
        showSuccess(password);
    }
    if (password2.value === password || password2.value === "")
    {
        showError(password2, "Passwords do not match") ;
    } else 
    {
        showSuccess(password2);
    }
})

//Show outline for error input
function showError(input, message) 
{
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

// Showw outline for success input
const showSuccess = (input) => 
{
const formControl = input.parentElement;
formControl.className = "form-control success";
}

// Check if valid email
const isValidEmail = (email) =>
{
    //Search google for regualr expression in javascript
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(String(email).toLowerCase())
}
