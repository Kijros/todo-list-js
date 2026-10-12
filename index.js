const taskListArray = [];
let userInput = document.getElementById('task-input');
let taskList = document.getElementById('task-list');


// Taking user input 
userInput.addEventListener('keypress', function(event){
    if(event.key === "Enter" && userInput.value != "" ){

        // creating h3 element in DOC
       let currentTasks = document.createElement("p")
       let checkMark = document.createElement('input');

       checkMark.type = 'checkbox';

       currentTasks.innerHTML = userInput.value;
       // appending the h3 to the DOC
       taskList.appendChild(currentTasks);
       taskList.appendChild(checkMark);
       taskListArray.push(currentTasks);

       // deleting the text on the input area
       userInput.value = ""

       console.log(taskListArray.length);
       
    } 
})
// TODO : add check mark for complete tasks by changing h3 to checkbox

function CheckArrayElement(arrayLength){
    for(let i = 0; i < arrayLength; i++ ){
        console.log(taskListArray[i])
    }
}