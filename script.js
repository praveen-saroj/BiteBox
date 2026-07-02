function login() 
{
    let email = document.getElementById('email').value;//admin@1234
    let password= document.getElementById('password').value;//1234
    let error= document.getElementById('error');

    if(email==="admin@1234" && password==="1234")
    {
        localStorage.setItem("isLoggedIn",true);
        localStorage.setItem("user",email);

        window.location.href="home.html";
    } 
    else
    {
        
        error.innerHTML="Invalid email or password";
    }
}


function toggle_password(){
    let password_Input = document.getElementById("password");
    
    if(password_Input.type==="password")
    {
        password_Input.type="text";
    }
    else{
        password_Input.type="password"
    }

}



