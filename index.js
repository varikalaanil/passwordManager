     
     //** DOCUMENTATION PROCESS FOR PASSWORD MANAGER*/
      
     /*
        JS CODE FOR PASSWORD MANAGER...
     */

   // Accessing the input fields wrt their ids
 let websitName = document.getElementById("websitename")
 let userName = document.getElementById("username")
 let password = document.getElementById("password")
 let tableBody = document.querySelector("tbody")
 let buttonClick = document.getElementById("create")
 let copy  = document.getElementById("copy")
  
 // Adding event listener to the create button
 buttonClick.onclick = () => {
   if(websitName.value != '' && userName.value != '' && password.value != '')
   {
     // Adding into the table body..
       tableBody.innerHTML += `
        <tr>
         <td>${websitName.value}</td>
         <td>${userName.value}</td>
         <td>${password.value}</td>
         <td><button>Delete</button></td>
        </tr>`

      // Clearing the input fields
        websitName.value = ''
        userName.value = ''
        password.value = ''
        saveData();
       
   }
   else
   alert(('PLEASE ENTER ALL INPUT FIELDS!'))  //Not giving proper input
        
 }


  // Save data in local storage
  const saveData = () => {
      localStorage.setItem("data" , tableBody.innerHTML)  
      
  }
   
 
  // Retrieve Data from local storage
  const getData = () => {
    tableBody.innerHTML = localStorage.getItem("data")
  }

  getData();

 // Remove the item according to the user call
 tableBody.addEventListener("click", function(e){
    if(e.target.innerHTML == 'Delete'){
    e.target.parentElement.parentElement.remove();
    saveData();}
    else if(e.target.innerHTML == 'Copy'){

      // Copy the passoword
      // copyPassword();
      const copyPassword = () => {
        password.value("copy");
      }
     
    }

    });
      
 

    // <th><i class="fa-regular fa-copy" onclick = "copyPassword();";></i></td>