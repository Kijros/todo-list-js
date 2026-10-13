const taskListArray = [];
let userInput = document.getElementById('task-input');
let taskList = document.getElementById('task-view');
let taskOne = document.getElementById('taskOne');


// Taking user input 
userInput.addEventListener('keypress', function(event){
    if(event.key === "Enter" && userInput.value != "" ){

        // creating checkbox and the area were the tasks should appear
       let currentTasks = document.createElement("input")
       let checkMark = document.createElement('input');
       let space = document.createElement('br');

       checkMark.type = 'checkbox';
       currentTasks.id = 'task-list'

       currentTasks.value = userInput.value;
       // appending elements to the DOM
       taskList.appendChild(space);
       taskList.appendChild(currentTasks);
       taskList.appendChild(checkMark);


       // storing element inside array
       taskListArray.push(currentTasks);

       // deleting the text on the input area
       userInput.value = ""

       console.log(taskListArray.length);
       
    } 
})

function CheckArrayElement(arrayLength){
    for(let i = 0; i < arrayLength; i++ ){
        console.log(taskListArray[i])
    }
}
