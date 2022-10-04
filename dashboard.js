//change avatar based on user
let demoLoggin = sessionStorage.getItem("loggedAsDemo");

window.addEventListener('load', (event) => { 
    changeAvatar();
 });  

function changeAvatar()
{
    console.log(demoLoggin);
    if (demoLoggin == "true")
    {
        document.getElementById("avatar").src = "images/demo.png";
    }
    else
     {
        document.getElementById("avatar").src = "images/pfp.png";
     }
}

//log out
function backToLogin()
{
    location.assign("./index.html");
}