//default admin details
function AdminDetails(email, password)
{
    this.email = email;
    this.password = password;
}

let admin1 = new AdminDetails("admin@example.com","admin");
let demoUser = new AdminDetails("","");
document.getElementById("demoHeading").onclick = setDemoUser();  

//Login validation 
function Login()
{
    let userEmail = document.getElementById("email").value; 
    let userPassword = document.getElementById("password").value; 

    if (userEmail == admin1.email && userPassword == admin1.password)
    {
        location.assign("./dashboard.html")   
    }
    else if (userEmail ==null || userEmail == "" )
    {
        document.getElementById("loginMessage").innerHTML = "Please enter a valid email address and password."; 
    }
    else if (userPassword ==null || userPassword == "" )
    {
        document.getElementById("loginMessage").innerHTML = "Please enter a valid email address and password."; 
    }
    else if (userEmail !== admin1.email || userPassword !== admin1.password)
    {
        document.getElementById("loginMessage").innerHTML = "Incorrect login details. Please try again."; 
    }
    sessionStorage.setItem("loggedAsDemo", "false");

}

function setDemoUser()
{  
     sessionStorage.setItem("loggedAsDemo", "true");
} 
