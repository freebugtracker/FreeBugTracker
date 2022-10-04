//logout
function backToLogin()
{
    location.assign("./index.html");
}

//change avatar based on user
let demoLoggin = sessionStorage.getItem("loggedAsDemo");

let storageTicketArray = [];
let pageCounter = 5;
let pageIndicator = 1;
let ticketsPerPage = 10;
let storageTicketArraySlice = [];
let storageProjectArray = [];
let storageTeamArray = [];

//load data
window.addEventListener('load', (event) => { 
  
  
   let storageProjectArrayTemp = JSON.parse(localStorage.getItem("storageProjectArray"));
   let storageTeamArrayTemp = JSON.parse(localStorage.getItem("storageTeamArray"));
   let storageTicketArrayTemp = JSON.parse(localStorage.getItem("storageTicketArray"));

  if (storageTicketArrayTemp !== null)
  {
    storageTicketArray = storageTicketArrayTemp;
  }

  //populate with ticket
if (storageTicketArray.length == 0)
{
  let ticket1 ={summary: "Button not working", description: "The close button doesn't work when clicked on.",identifier: "Fred Scott",dateOfIdentification: "2022-06-12",projectRelated: "Tax app", membersAssigned:  "Mark Zuckerberg",status: "resolved",priority: "medium",targetDate: "2022-09-02",actualDate: "2022-09-08",resolutionSummary:"Button works now.", id: storageTicketArray.length+1};
  storageTicketArray.push(ticket1);
  let ticket2 ={summary: "Page not loading", description: "The page broke.",identifier: "Fred Scott",dateOfIdentification: "2022-06-15",projectRelated: "Calender app", membersAssigned: "George Bush",status: "overdue",priority: "high",targetDate: "2022-10-02",actualDate: "2022-12-08",resolutionSummary:"I got rich from crypto yay.", id: storageTicketArray.length+1};
  storageTicketArray.push(ticket2); 
  let ticket3 ={summary: "Command Error", description: "The error commanded.",identifier: "Steven Burger",dateOfIdentification: "2022-06-11",projectRelated: "Car sale app", membersAssigned: "Mark Zuckerberg",status: "open",priority: "medium",targetDate: "2022-09-02",actualDate: "2022-09-06",resolutionSummary:"It is fixed.", id: storageTicketArray.length+1};
  storageTicketArray.push(ticket3); 
  let ticket4 ={summary: "Functional Error", description: "It wont function.",identifier: "Mark Zuckerberg",dateOfIdentification: "2021-05-14",projectRelated: "iPhone software", membersAssigned: "Harry Styles",status: "overdue",priority: "low",targetDate: "2021-04-22",actualDate: "2021-04-25",resolutionSummary:"Software is no longer broken.", id: storageTicketArray.length+1};
  storageTicketArray.push(ticket4); 
  let ticket5 ={summary: "Someone stole my mangos", description: "They are gone.",identifier: "Fred Scott",dateOfIdentification: "2022-05-14",projectRelated: "Facial recognition", membersAssigned: "Steven Burger",status: "resolved",priority: "high",targetDate: "2022-04-22",actualDate: "2022-04-25",resolutionSummary:"I found my mangos.", id: storageTicketArray.length+1};
  storageTicketArray.push(ticket5); 
  let ticket6 ={summary: "Data type mismatch", description: "Data doesn't match.",identifier: "Steven Burger",dateOfIdentification: "2022-07-17",projectRelated: "Tax app", membersAssigned: "George Bush",status: "overdue",priority: "low",targetDate: "2022-08-09",actualDate: "2022-08-06",resolutionSummary:"It matches now.", id: storageTicketArray.length+1};
  storageTicketArray.push(ticket6); 
  let ticket7 ={summary: "Data duplication", description: "Data duplicated.",identifier: "Mark Zuckerberg",dateOfIdentification: "2022-07-09",projectRelated: "Car sale app", membersAssigned: "Fred Scott",status: "resolved",priority: "high",targetDate: "2022-08-08",actualDate: "2022-08-07",resolutionSummary:"Data has been deleted.", id: storageTicketArray.length+1};
  storageTicketArray.push(ticket7); 
  let ticket8 ={summary: "Boundary value error", description: "Data outside boundary.",identifier: "Harry Styles",dateOfIdentification: "2022-07-05",projectRelated: "Facial recognition", membersAssigned: "Steven Burger",status: "overdue",priority: "medium",targetDate: "2022-08-21",actualDate: "2022-08-25",resolutionSummary:"Data is in bounds now.", id: storageTicketArray.length+1};
  storageTicketArray.push(ticket8); 
  let ticket9 ={summary: "Security error", description: "My mangos got stolen again.",identifier: "George Bush",dateOfIdentification: "2020-03-11",projectRelated: "Tax app", membersAssigned: "Fred Scott",status: "open",priority: "high",targetDate: "2020-08-02",actualDate: "2020-08-17",resolutionSummary:"I got my mangos back again.", id: storageTicketArray.length+1};
  storageTicketArray.push(ticket9); 
  let ticket10 ={summary: "Communication error", description: "I forgot how to speak.",identifier: "Mark Zuckerberg",dateOfIdentification: "2021-03-11",projectRelated: "iPhone software", membersAssigned: "Steven Burger",status: "overdue",priority: "medium",targetDate: "2021-08-02",actualDate: "2021-08-17",resolutionSummary:"I remembered how to speak again.", id: storageTicketArray.length+1};
  storageTicketArray.push(ticket10); 
  let ticket11 ={summary: "App crashes", description: "The app randomly crashes.",identifier: "Steven Burger",dateOfIdentification: "2022-03-11",projectRelated: "Car sale app", membersAssigned: "George Bush",status: "open",priority: "high",targetDate: "2022-08-02",actualDate: "2022-08-17",resolutionSummary:"App stopped crashing.", id: storageTicketArray.length+1};
  storageTicketArray.push(ticket11); 
  let ticket12 ={summary: "Blank screen", description: "Blank screen is shown when opened.",identifier: "Harry Styles",dateOfIdentification: "2020-01-09",projectRelated: "Tax app", membersAssigned: "Steven Burger",status: "open",priority: "high",targetDate: "2020-02-02",actualDate: "2020-02-19",resolutionSummary:"The screen is fixed.", id: storageTicketArray.length+1};
  storageTicketArray.push(ticket12); 
  let ticket13 ={summary: "Image missing", description: "My profile picture doesn't display.",identifier: "Mark Zuckerberg",dateOfIdentification: "2021-01-09",projectRelated: "Calender app", membersAssigned: "Fred Scott",status: "open",priority: "low",targetDate: "2021-02-02",actualDate: "2021-02-19",resolutionSummary:"Image shows now.", id: storageTicketArray.length+1};
  storageTicketArray.push(ticket13); 
  let ticket14 ={summary: "Text missing", description: "Text doesn't display.",identifier: "Fred Scott",dateOfIdentification: "2022-01-09",projectRelated: "iPhone software", membersAssigned: "Harry Styles",status: "resolved",priority: "medium",targetDate: "2022-02-02",actualDate: "2022-02-19",resolutionSummary:"Text shows now.", id: storageTicketArray.length+1};
  storageTicketArray.push(ticket14); 
  let ticket15 ={summary: "Poor performance", description: "App keeps freezing.",identifier: "Mark Zuckerberg",dateOfIdentification: "2020-10-15",projectRelated: "Calender app", membersAssigned: "George Bush",status: "overdue",priority: "low",targetDate: "2020-10-17",actualDate: "2020-10-23",resolutionSummary:"App no longer freezes.", id: storageTicketArray.length+1};
  storageTicketArray.push(ticket15); 
  let ticket16 ={summary: "Notifications don't show", description: "Notifications don't work.",identifier: "Steven Burger",dateOfIdentification: "2021-10-15",projectRelated: "Car sale app", membersAssigned: "George Bush",status: "open",priority: "high",targetDate: "2021-10-17",actualDate: "2021-10-23",resolutionSummary:"Notifications show now.", id: storageTicketArray.length+1};
  storageTicketArray.push(ticket16); 
  let ticket17 ={summary: "Button disapeared", description: "Button doesn't show.",identifier: "Fred Scott",dateOfIdentification: "2022-10-15",projectRelated: "Tax app", membersAssigned: "Harry Styles",status: "overdue",priority: "medium",targetDate: "2022-10-17",actualDate: "2022-10-23",resolutionSummary:"Button was added.", id: storageTicketArray.length+1};
  storageTicketArray.push(ticket17); 
  let ticket18 ={summary: "Link broken", description: "Link doesn't work.",identifier: "Steven Burger",dateOfIdentification: "2020-06-09",projectRelated: "iPhone software", membersAssigned: "Harry Styles",status: "open",priority: "high",targetDate: "2020-06-13",actualDate: "2020-06-22",resolutionSummary:"Link works now.", id: storageTicketArray.length+1};
  storageTicketArray.push(ticket18);
  let ticket19 ={summary: "App freezes", description: "The app freezes.",identifier: "Harry Styles",dateOfIdentification: "2021-06-09",projectRelated: "Facial recognition", membersAssigned: "Mark Zuckerberg",status: "open",priority: "low",targetDate: "2021-06-13",actualDate: "2021-06-22",resolutionSummary:"App no longer freezes.", id: storageTicketArray.length+1};
  storageTicketArray.push(ticket19);
  let ticket20 ={summary: "Login error", description: "Won't let anyone log in.",identifier: "George Bush",dateOfIdentification: "2022-06-09",projectRelated: "Car sale app", membersAssigned: "Fred Scott",status: "resolved",priority: "high",targetDate: "2022-06-13",actualDate: "2022-06-22",resolutionSummary:"People can log in again.", id: storageTicketArray.length+1};
  storageTicketArray.push(ticket20);
  
  localStorage.setItem("storageTicketArray", JSON.stringify(storageTicketArray));
}

//poplate projects and team members
if (storageProjectArrayTemp !== null)
{
  storageProjectArray = storageProjectArrayTemp;
}

if (storageProjectArray.length == 0)
{
let project1 ={title: "Tax app", description: "Calculates tax", id: storageProjectArray.length+1};
storageProjectArray.push(project1);
let project2 ={title: "Car sale app", description: "Sells cars", id: storageProjectArray.length+1};
  storageProjectArray.push(project2);
  let project3 ={title: "iPhone software", description: "Makes iPhones run", id: storageProjectArray.length+1};
  storageProjectArray.push(project3);
  let project4 ={title: "Facial recognition", description: "Scans faces", id: storageProjectArray.length+1};
  storageProjectArray.push(project4);
  let project5 ={title: "Calender app", description: "Shows interactive calender", id: storageProjectArray.length+1};
  storageProjectArray.push(project5);
localStorage.setItem("storageProjectArray", JSON.stringify(storageProjectArray));
}

if (storageTeamArrayTemp !== null)
  {
    storageTeamArray = storageTeamArrayTemp;
  }

if (storageTeamArray.length == 0)
{
  let team1 ={name: "George Bush", email: "george@gmail.com", username: "ididnotdo911" ,profilePic: "", id: storageTeamArray.length+1};
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

pageCounter = Math.ceil(storageTicketArray.length/ticketsPerPage);
document.getElementById("ticketContainer").innerHTML ="";
storageTicketArraySlice = storageTicketArray.slice((pageIndicator-1)*ticketsPerPage, pageIndicator*ticketsPerPage)

for (let ticketIndex in storageTicketArraySlice) 
{
  display(storageTicketArraySlice[ticketIndex]);
}
document.getElementById("pageNumber").innerHTML = pageIndicator +" of " + pageCounter;

   changeAvatar();
   displayTeam();
   displayProjects();
   displayAssignTeamNewTicket(); 
   displayAssignTeamOptions();
   LoadTicketModal(); 
}); 

//create new ticket
function LoadTicketModal()
{
let modal = document.getElementById("myModal");

let btn = document.getElementById("newTicket");

let span = document.getElementsByClassName("close")[0];

let cancel = document.getElementById("submitTicketCancel");

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

//ticket options button 
function loadOptionsModal(ticket)
{
 
let optionsModal = document.getElementById("optionsModal");

let optionsSpan = document.getElementsByClassName("optionsClose")[0];

let optionsAssign = document.getElementById("assignTicket");

let assignSection = document.getElementById("assignTicketSection");

let optionsOptions = document.getElementById("optionsOptions");

let optionsDelete = document.getElementById("deleteTicket");

let optionsCancel = document.getElementById("optionsCancel");

let assignCancel = document.getElementById("MemberCancel");

let assignSaveChanges = document.getElementById("MemberSaveChanges");

  optionsModal.style.display = "block";
  assignSection.style.display = "none";
  optionsOptions.style.display = "block";

optionsCancel.onclick = function() 
{
  optionsModal.style.display = "none";
  assignSection.style.display = "none";
  optionsOptions.style.display = "none";
} 

optionsDelete.onclick = function() 
{
  let ticketIndex = 0;

  for (let index = 0; index < storageTicketArray.length; index++) 
  { 
      if(storageTicketArray[index].id == ticket.id)
       {
         ticketIndex = index;
         break;
       }
  }

storageTicketArray.splice(ticketIndex, 1);
localStorage.setItem("storageTicketArray", JSON.stringify(storageTicketArray));
pageCounter = Math.ceil(storageTicketArray.length/ticketsPerPage);

if(pageIndicator > pageCounter)
{
  pageIndicator = pageCounter;
}

document.getElementById("ticketContainer").innerHTML ="";
storageTicketArraySlice = storageTicketArray.slice((pageIndicator-1)*ticketsPerPage, pageIndicator*ticketsPerPage)

for (let ticketIndex in storageTicketArraySlice) 
{
  display(storageTicketArraySlice[ticketIndex]);
}
document.getElementById("pageNumber").innerHTML = pageIndicator +" of " + pageCounter;
  
  optionsModal.style.display = "none";
  assignSection.style.display = "none";
  optionsOptions.style.display = "none";
} 

assignSaveChanges.onclick = function()
{
  let ticketIndex = 0;

  for (let index = 0; index < storageTicketArray.length; index++) 
  { 
      if(storageTicketArray[index].id == ticket.id)
       {
         ticketIndex = index;
         break;
       }
  }

  storageTicketArray[ticketIndex].membersAssigned  = document.getElementById("assignMemberOption").value;
  localStorage.setItem("storageTicketArray", JSON.stringify(storageTicketArray));
  
  optionsModal.style.display = "none";
  assignSection.style.display = "none";
  optionsOptions.style.display = "none";

}

optionsAssign.onclick = function() 
{
  optionsModal.style.display = "block";
  assignSection.style.display = "block";
  optionsOptions.style.display = "none";
} 

assignCancel.onclick = function() 
{
  optionsModal.style.display = "none";
  assignSection.style.display = "none";
  optionsOptions.style.display = "none";
} 

optionsSpan.onclick = function() 
{
  optionsModal.style.display = "none";
  assignSection.style.display = "none";
  optionsOptions.style.display = "none";
}

window.onclick = function(event) 
{
  if (event.target == optionsModal) 
  {
    optionsModal.style.display = "none";
    assignSection.style.display = "none";
    optionsOptions.style.display = "none";
  }
}
}

//display data
function display(ticket)
{
  document.getElementById("ticketContainer").innerHTML += "<span class=\"options\"><span id=\""+ticket.id+"\" class=\"bugDisplay\" onclick=\"ticketClickHandler(this)\"> <p class = \"bugSummaryDisplay\">"+ticket.summary+"</p><p class = \"StatusSummaryDisplay\">"+ticket.status +"</p><p class = \"PrioritySummaryDisplay\">"+ticket.priority+"</p><p class = \"ProjectDisplay\">"+ticket.projectRelated+"</p> </span> <input type=\"image\" class=\"showMore\" onclick= \"loadOptionsModal(this)\" id=\""+ticket.id+"\" src=\"images/more.png\" height=\"13\" width=\"4\"/> </span>"; 
}

//allow user to add ticket
function newTicketUserInput()
{
let summary_ = document.getElementById("bugSummary").value;
let description_  = document.getElementById("bugDetails").value;
let identifier_  = document.getElementById("identifier").value;
let dateOfIdentification_  = document.getElementById("identificationDate").value;
let projectRelated_ = document.getElementById("relatedProject").value;
let membersAssigned_  = document.getElementById("assignedMember").value;
let status_  = document.getElementById("status").value;
let priority_  = document.getElementById("priority").value;
let targetDate_  = document.getElementById("targetDate").value;
let actualDate_  = document.getElementById("actualDate").value;
let resolutionSummary_  = document.getElementById("resolutionSummary").value;

let ticket =
{
    summary: summary_,
    description: description_ ,
    identifier: identifier_,
    dateOfIdentification: dateOfIdentification_ ,
    projectRelated: projectRelated_ ,
    membersAssigned: membersAssigned_ ,
    status: status_,
    priority: priority_ ,
    targetDate: targetDate_ ,
    actualDate: actualDate_,
    resolutionSummary:resolutionSummary_,
    id: storageTicketArray.length+1
  };

    console.log(JSON.stringify(ticket));
    display(ticket);

storageTicketArray.push(ticket);
localStorage.setItem("storageTicketArray", JSON.stringify(storageTicketArray));

let modal = document.getElementById("myModal");
modal.style.display = "none";

pageCounter = Math.ceil(storageTicketArray.length/ticketsPerPage);
pageIndicator = pageCounter;

document.getElementById("ticketContainer").innerHTML ="";
storageTicketArraySlice = storageTicketArray.slice((pageIndicator-1)*ticketsPerPage, pageIndicator*ticketsPerPage)

for (let ticketIndex in storageTicketArraySlice) 
{
  display(storageTicketArraySlice[ticketIndex]);
}
document.getElementById("pageNumber").innerHTML = pageIndicator +" of " + pageCounter;
}

//view details of ticket
function ticketClickHandler(ticket)
{
  localStorage.setItem("ticketId", ticket.id);
  location.assign("./ticketdetails.html");
}

//page navigation
function pageNavNext()
{
if (pageIndicator < pageCounter)
{
pageIndicator++;
document.getElementById("pageNumber").innerHTML = pageIndicator +" of " + pageCounter;
document.getElementById("ticketContainer").innerHTML ="";

storageTicketArraySlice = storageTicketArray.slice((pageIndicator-1)*ticketsPerPage, pageIndicator*ticketsPerPage)

for (let ticketIndex in storageTicketArraySlice) 
{
  display(storageTicketArraySlice[ticketIndex]);
}
}
}

//page navigation
function pageNavBack()
{
  if (pageIndicator > 1)
  {
  pageIndicator--;
  document.getElementById("pageNumber").innerHTML = pageIndicator +" of " + pageCounter;
  document.getElementById("ticketContainer").innerHTML ="";

  storageTicketArraySlice = storageTicketArray.slice((pageIndicator-1)*ticketsPerPage, pageIndicator*ticketsPerPage)

  for (let ticketIndex in storageTicketArraySlice) 
  {
    display(storageTicketArraySlice[ticketIndex]);
  }
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

//display team members to assign in new ticket menu
function displayAssignTeamNewTicket()
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

//display team members to assign in options menu
function displayAssignTeamOptions()
{
   for(let i = 0; i < storageTeamArray.length; i++)
  { 
  let y = document.getElementById("assignMemberOption");
  let option = document.createElement("option");
  option.value = storageTeamArray[i].name;
  console.log(option.value);
  option.text = storageTeamArray[i].name;
  y.add(option);
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

function compare( a, b ) {
  if ( a.projectRelated.toLowerCase() < b.projectRelated.toLowerCase() ){
    return -1;
  }
  if ( a.projectRelated.toLowerCase() > b.projectRelated.toLowerCase()){
    return 1;
  }
  return 0;
}

function sortByProject()
{
storageTicketArray.sort(compare);
document.getElementById("ticketContainer").innerHTML ="";
storageTicketArraySlice = storageTicketArray.slice((pageIndicator-1)*ticketsPerPage, pageIndicator*ticketsPerPage)

for (let ticketIndex in storageTicketArraySlice) 
{
  display(storageTicketArraySlice[ticketIndex]);
}
document.getElementById("pageNumber").innerHTML = pageIndicator +" of " + pageCounter;

}