//change avatar based on user
let demoLoggin = sessionStorage.getItem("loggedAsDemo");

//logout
function backToLogin()
{
    location.assign("./index.html");
}

//get ticket ID
let ticketId = localStorage.getItem("ticketId");
let storageTicketArray = JSON.parse(localStorage.getItem("storageTicketArray"));
let storageProjectArray = JSON.parse(localStorage.getItem("storageProjectArray"));
let storageTeamArray = JSON.parse(localStorage.getItem("storageTeamArray"));

let ticketIndex = 0;

//load data
window.addEventListener('load', (event) => { 
  
    changeAvatar();
    LoadEditTicketModal(); 
    LoadAddMemberModal();
    

for (let index = 0; index < storageTicketArray.length; index++) 
{ 
  if(storageTicketArray[index].id == ticketId)
{
    ticketIndex = index;
    document.getElementById("ticketName").innerHTML = storageTicketArray[index].summary;
    document.getElementById("bugDetailsDisplay").innerHTML = storageTicketArray[index].description;
    document.getElementById("bugIdentifierDisplay").innerHTML = storageTicketArray[index].identifier;
    document.getElementById("bugDateIdentifiedDisplay").innerHTML = storageTicketArray[index].dateOfIdentification;
    document.getElementById("bugProjectDisplay").innerHTML = storageTicketArray[index].projectRelated;
    document.getElementById("bugMemberDisplay").innerHTML = storageTicketArray[index].membersAssigned;
    document.getElementById("bugStatusDisplay").innerHTML = storageTicketArray[index].status;
    document.getElementById("bugPriorityDisplay").innerHTML = storageTicketArray[index].priority;
    document.getElementById("bugTargetResDateDisplay").innerHTML = storageTicketArray[index].targetDate;
    document.getElementById("bugActualResDateDisplay").innerHTML = storageTicketArray[index].actualDate;
    document.getElementById("bugResSummaryDisplay").innerHTML = storageTicketArray[index].resolutionSummary;
    break;
  }
}
displayAssignTeamTicketDetails();
  }); 

//load ticket edit modal
function LoadEditTicketModal()
{
let modal = document.getElementById("editModal");

let btn = document.getElementById("edit");

let span = document.getElementsByClassName("Editclose")[0];

let cancel= document.getElementById("editCancel");

let save = document.getElementById("saveChanges");

btn.onclick = function() 
{
  modal.style.display = "block";
  editTicket();
  
}

save.onclick = function() 
{
  modal.style.display = "none";
  
storageTicketArray[ticketIndex].summary = document.getElementById("bugSummary").value;
storageTicketArray[ticketIndex].description  = document.getElementById("theBugDetails").value;
storageTicketArray[ticketIndex].identifier  = document.getElementById("identifier").value;
storageTicketArray[ticketIndex].dateOfIdentification = document.getElementById("identificationDate").value;
storageTicketArray[ticketIndex].projectRelated  = document.getElementById("relatedProject").value;
storageTicketArray[ticketIndex].membersAssigned  = document.getElementById("assignedMemberEdit").value;
storageTicketArray[ticketIndex].status  = document.getElementById("status").value;
storageTicketArray[ticketIndex].priority = document.getElementById("priority").value;
storageTicketArray[ticketIndex].targetDate = document.getElementById("targetDate").value;
storageTicketArray[ticketIndex].actualDate = document.getElementById("actualDate").value;
storageTicketArray[ticketIndex].resolutionSummary  = document.getElementById("resolutionSummary").value;

localStorage.setItem("storageTicketArray", JSON.stringify(storageTicketArray));

document.getElementById("ticketName").innerHTML = storageTicketArray[ticketIndex].summary +":";
document.getElementById("bugDetailsDisplay").innerHTML = storageTicketArray[ticketIndex].description;
document.getElementById("bugIdentifierDisplay").innerHTML = storageTicketArray[ticketIndex].identifier;
document.getElementById("bugDateIdentifiedDisplay").innerHTML = storageTicketArray[ticketIndex].dateOfIdentification;
document.getElementById("bugProjectDisplay").innerHTML = storageTicketArray[ticketIndex].projectRelated;
document.getElementById("bugMemberDisplay").innerHTML = storageTicketArray[ticketIndex].membersAssigned;
document.getElementById("bugStatusDisplay").innerHTML = storageTicketArray[ticketIndex].status;
document.getElementById("bugPriorityDisplay").innerHTML = storageTicketArray[ticketIndex].priority;
document.getElementById("bugTargetResDateDisplay").innerHTML = storageTicketArray[ticketIndex].targetDate;
document.getElementById("bugActualResDateDisplay").innerHTML = storageTicketArray[ticketIndex].actualDate;
document.getElementById("bugResSummaryDisplay").innerHTML = storageTicketArray[ticketIndex].resolutionSummary;

}

span.onclick = function() 
{
  modal.style.display = "none";
}

cancel.onclick = function() 
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

//display team members to assign
function LoadAddMemberModal()
{
let modal = document.getElementById("memberModal");

let btn = document.getElementById("assign");

let span = document.getElementsByClassName("MemberClose")[0];

let cancel= document.getElementById("MemberCancel");

let save = document.getElementById("MemberSaveChanges");

save.onclick = function() 
{
  storageTicketArray[ticketIndex].membersAssigned = document.getElementById("assignedMember").value;
  localStorage.setItem("storageTicketArray", JSON.stringify(storageTicketArray));
  document.getElementById("bugMemberDisplay").innerHTML = storageTicketArray[ticketIndex].membersAssigned;
  modal.style.display = "none";
}

btn.onclick = function() 
{
  modal.style.display = "block";
}

span.onclick = function() 
{
  modal.style.display = "none";
}

cancel.onclick = function() 
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

//ticket edit menu display
function editTicket()
{
  document.getElementById("bugSummary").value = storageTicketArray[ticketIndex].summary;
  document.getElementById("theBugDetails").value = storageTicketArray[ticketIndex].description;
  document.getElementById("identifier").value = storageTicketArray[ticketIndex].identifier;
  document.getElementById("identificationDate").value = storageTicketArray[ticketIndex].dateOfIdentification;
  document.getElementById("assignedMemberEdit").value = storageTicketArray[ticketIndex].membersAssigned; 
  document.getElementById("status").value = storageTicketArray[ticketIndex].status;
  document.getElementById("priority").value = storageTicketArray[ticketIndex].priority;
  document.getElementById("targetDate").value = storageTicketArray[ticketIndex].targetDate;
  document.getElementById("actualDate").value = storageTicketArray[ticketIndex].actualDate;  
  document.getElementById("resolutionSummary").value = storageTicketArray[ticketIndex].resolutionSummary; 

  displayProjects();
  displayTeam();
  displayAssignTeamEdit();

}

//display project related to ticket
function displayProjects()
{
   for(let i = 0; i < storageProjectArray.length; i++)
  { 
  let x = document.getElementById("relatedProject");
  let option = document.createElement("option");
  option.value = storageProjectArray[i].title;
  console.log(option.value);
  option.text = storageProjectArray[i].title;
  x.add(option);
  }  
}

//display team member name
function displayTeam()
{
   for(let i = 0; i < storageTeamArray.length; i++)
  { 
  let x = document.getElementById("identifier");
  let option = document.createElement("option");
  option.value = storageTeamArray[i].name;
  console.log(option.value);
  option.text = storageTeamArray[i].name;
  x.add(option);
  }  
}

//display team member name
function displayAssignTeamEdit()
{
   for(let i = 0; i < storageTeamArray.length; i++)
  { 
  let x = document.getElementById("assignedMemberEdit");
  let option = document.createElement("option");
  option.value = storageTeamArray[i].name;
  console.log(option.value);
  option.text = storageTeamArray[i].name;
  x.add(option);
  }  
}

function displayAssignTeamTicketDetails()
{
   for(let i = 0; i < storageTeamArray.length; i++)
  { 
  let x = document.getElementById("assignedMember");
  let option = document.createElement("option");
  option.value = storageTeamArray[i].name;
  console.log(option.value);
  option.text = storageTeamArray[i].name;
  x.add(option);
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