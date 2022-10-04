//change avatar based on user
let demoLoggin = sessionStorage.getItem("loggedAsDemo");

//logout
function backToLogin()
{
    location.assign("./index.html");
}

let storageTeamArray = [];
let pageCounter = 5;
let pageIndicator = 1;
let teamsPerPage = 10;
let storageTeamArraySlice = [];

//load data
window.addEventListener('load', (event) => { 

    changeAvatar();
    LoadTeamModal(); 
    
    let storageTeamArrayTemp = JSON.parse(localStorage.getItem("storageTeamArray"));

  if (storageTeamArrayTemp !== null)
  {
    storageTeamArray = storageTeamArrayTemp;
  }

if (storageTeamArray.length == 0)
{
  let team1 ={name: "George Bush", email: "george@gmail.com", username: "ididnotdo911", id: storageTeamArray.length+1};
  storageTeamArray.push(team1);
  let team2 ={name: "Fred Scott", email: "fred@gmail.com", username: "ilovedogs33", id: storageTeamArray.length+1};
  storageTeamArray.push(team2);
  let team3 ={name: "Steven Burger", email: "steven@gmail.com", username: "moomoo", id: storageTeamArray.length+1};
  storageTeamArray.push(team3);
  let team4 ={name: "Mark Zuckerberg", email: "mark@gmail.com", username: "imnotarobot", id: storageTeamArray.length+1};
  storageTeamArray.push(team4);
  let team5 ={name: "Harry Styles", email: "harry@gmail.com", username: "watermellons", id: storageTeamArray.length+1};
  storageTeamArray.push(team5);
  localStorage.setItem("storageTeamArray", JSON.stringify(storageTeamArray));
}

pageCounter = Math.ceil(storageTeamArray.length/teamsPerPage);
document.getElementById("teamContainer").innerHTML ="";
storageTeamArraySlice = storageTeamArray.slice((pageIndicator-1)*teamsPerPage, pageIndicator*teamsPerPage)

for (let teamIndex in storageTeamArraySlice) 
{
  display(storageTeamArraySlice[teamIndex]);
}
document.getElementById("pageNumber").innerHTML = pageIndicator +" of " + pageCounter;
  }); 

  //add new team member form
  function LoadTeamModal()
  {
  let modal = document.getElementById("myModal");
  
  let btn = document.getElementById("newTeam");
  
  let span = document.getElementsByClassName("close")[0];
  
  let cancel = document.getElementById("submitTeamCancel");
  
  btn.onclick = function() 
  {
    modal.style.display = "block";
  }
  
  cancel.onclick = function() 
  {
    modal.style.display = "none";
  }
  
  span.onclick = function() 
  {
    modal.style.display = "none";
  }
  
  window.onclick = function(event) 
  {
    if (event.target == modal) 
    {
      modal.style.display = "none";
    }
  }
  }
  
  //display team member data
  function display(team)
{
  document.getElementById("teamContainer").innerHTML += "<span id=\""+team.id+"\" class=\"teamDisplay\"> <p class = \"teamUsernameDisplay\">"+team.username+"</p> <p class = \"teamNameDisplay\">"+team.name+"</p><p class = \"teamEmailDisplay\">"+team.email+"</p><p class = \"teamIDDisplay\">"+"#"+team.id+"</p></span>"; 
}

//add new team member
function newTeamUserInput()
{
let name_ = document.getElementById("nameAndSurname").value;
let email_  = document.getElementById("email").value;
let username_  = document.getElementById("username").value;

let team =
{
    name: name_,
    email: email_,
    username: username_,

    id: storageTeamArray.length+1
  };

    console.log(JSON.stringify(team));

    display(team);

storageTeamArray.push(team);
localStorage.setItem("storageTeamArray", JSON.stringify(storageTeamArray));

let modal = document.getElementById("myModal");
modal.style.display = "none";

pageCounter = Math.ceil(storageTeamArray.length/teamsPerPage);
pageIndicator = pageCounter;

document.getElementById("teamContainer").innerHTML ="";
storageTeamArraySlice = storageTeamArray.slice((pageIndicator-1)*teamsPerPage, pageIndicator*teamsPerPage)

for (let teamIndex in storageTeamArraySlice) 
{
  display(storageTeamArraySlice[teamIndex]);
}
document.getElementById("pageNumber").innerHTML = pageIndicator +" of " + pageCounter;
}

//go to next page
function pageNavNext()
{
if (pageIndicator < pageCounter)
{
pageIndicator++;
document.getElementById("pageNumber").innerHTML = pageIndicator +" of " + pageCounter;
document.getElementById("teamContainer").innerHTML ="";

storageTeamArraySlice = storageTeamArray.slice((pageIndicator-1)*teamsPerPage, pageIndicator*teamsPerPage)

for (let teamIndex in storageTeamArraySlice) 
{
  display(storageTeamArraySlice[teamIndex]);
}
}
}

//go to previous page
function pageNavBack()
{
  if (pageIndicator > 1)
  {
  pageIndicator--;
  document.getElementById("pageNumber").innerHTML = pageIndicator +" of " + pageCounter;
  document.getElementById("teamContainer").innerHTML ="";

  storageTeamArraySlice = storageTeamArray.slice((pageIndicator-1)*teamsPerPage, pageIndicator*teamsPerPage)

  for (let teamIndex in storageTeamArraySlice) 
  {
    display(storageTeamArraySlice[teamIndex]);
  }
  }
}

//change avatar based on logged in user 
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
