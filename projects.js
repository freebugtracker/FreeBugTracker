//change avatar based on user
let demoLoggin = sessionStorage.getItem("loggedAsDemo");

//logout
function backToLogin()
{
    location.assign("./index.html");
}

let storageProjectArray = [];
let pageCounter = 5;
let pageIndicator = 1;
let projectsPerPage = 10;
let storageProjectArraySlice = [];

//load data
window.addEventListener('load', (event) => { 
    changeAvatar();
    LoadProjectModal(); 
    
    let storageProjectArrayTemp = JSON.parse(localStorage.getItem("storageProjectArray"));

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

pageCounter = Math.ceil(storageProjectArray.length/projectsPerPage);
document.getElementById("projectContainer").innerHTML ="";
storageProjectArraySlice = storageProjectArray.slice((pageIndicator-1)*projectsPerPage, pageIndicator*projectsPerPage)

for (let projectIndex in storageProjectArraySlice) 
{
  display(storageProjectArraySlice[projectIndex]);
}
document.getElementById("pageNumber").innerHTML = pageIndicator +" of " + pageCounter;
  }); 

//add new project
function LoadProjectModal()
{
let modal = document.getElementById("myModal");

let btn = document.getElementById("newProject");

let span = document.getElementsByClassName("close")[0];

let cancel = document.getElementById("submitProjectCancel");

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

//display project data
function display(project)
{
  document.getElementById("projectContainer").innerHTML += "<span id=\""+project.id+"\" class=\"projectDisplay\"> <p class = \"projectTitleDisplay\">"+project.title+"</p> <p class = \"projectIDDisplay\">"+"#"+project.id+"</p> </span>"; 
}

//allow user to add new project
function newProjectUserInput()
{
let title_ = document.getElementById("projectTitle").value;
let description_  = document.getElementById("projectDescription").value;

let project =
{
    title: title_,
    description: description_ ,
    id: storageProjectArray.length+1
  };

    console.log(JSON.stringify(project));

    display(project);

storageProjectArray.push(project);
localStorage.setItem("storageProjectArray", JSON.stringify(storageProjectArray));

let modal = document.getElementById("myModal");
modal.style.display = "none";

pageCounter = Math.ceil(storageProjectArray.length/projectsPerPage);
pageIndicator = pageCounter;

document.getElementById("projectContainer").innerHTML ="";
storageProjectArraySlice = storageProjectArray.slice((pageIndicator-1)*projectsPerPage, pageIndicator*projectsPerPage)

for (let projectIndex in storageProjectArraySlice) 
{
  display(storageProjectArraySlice[projectIndex]);
}
document.getElementById("pageNumber").innerHTML = pageIndicator +" of " + pageCounter;
}

//next page button
function pageNavNext()
{
if (pageIndicator < pageCounter)
{
pageIndicator++;
document.getElementById("pageNumber").innerHTML = pageIndicator +" of " + pageCounter;
document.getElementById("projectContainer").innerHTML ="";

storageProjectArraySlice = storageProjectArray.slice((pageIndicator-1)*projectsPerPage, pageIndicator*projectsPerPage)

for (let projectIndex in storageProjectArraySlice) 
{
  display(storageProjectArraySlice[projectIndex]);
}
}
}

//previous page button
function pageNavBack()
{
  if (pageIndicator > 1)
  {
  pageIndicator--;
  document.getElementById("pageNumber").innerHTML = pageIndicator +" of " + pageCounter;
  document.getElementById("projectContainer").innerHTML ="";

  storageProjectArraySlice = storageProjectArray.slice((pageIndicator-1)*projectsPerPage, pageIndicator*projectsPerPage)

  for (let projectIndex in storageProjectArraySlice) 
  {
    display(storageProjectArraySlice[projectIndex]);
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
