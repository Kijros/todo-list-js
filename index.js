let userInput = document.getElementById('task-input');
let taskList = document.getElementById('task-list');


// Taking user input 
userInput.addEventListener('keypress', function(event){
    if(event.key === "Enter"){
        // creating h3 element in DOC
       let currentTasks = document.createElement("h3")
       currentTasks.innerHTML = userInput.value;
       // appending the h3 to the DOC
       taskList.appendChild(currentTasks);
       // deleting the text on the input area
       userInput.value = ""
    } 
})

// next is adding array to store the tasks.