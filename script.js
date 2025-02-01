document.addEventListener('DOMContentLoaded',()=>{

const userInput = document.getElementById("user-inpt");
const addButton = document.getElementById("btn");
const todoList = document.getElementById("Todo");
const nowDate = document.getElementById("date");


//Create localStorage function//
function saveToLocalStorage(){
    const Todos = [];
    document.querySelectorAll("#Todo li").forEach((li)=>{
     Todos.push(li.querySelector(".todo-text").textContent);
    });
    localStorage.setItem("todos", JSON.stringify(Todos));
};

 
//Create a function for the add todo in list//
function createTodoItem(text){

    const newListItem = document.createElement("li");
    const textSpan = document.createElement("span");
     
    textSpan.textContent = text;
    textSpan.classList.add("todo-text");
    textSpan.style.display ="1";

    //Create another span for the Add the dlete or edit button//
    const butttonSpan = document.createElement("span");

//Create edit button //
const updateButton = document.createElement("button");
updateButton.innerHTML = `<i class= "ri-pencil-fill"></i>`;
updateButton.style.border = "none";
updateButton.style.background = "none";

//now addEventListner on updateButtton//
updateButton.addEventListener('click', ()=>{

    const newText = prompt("Edit Your Task:", textSpan.textContent);
    if(newText !== null && newText.trim() !== ""){
        
        textSpan.textContent = newText.trim();
        saveToLocalStorage();
    }
});


//Create delete button//
const clearButton = document.createElement("button");
clearButton.innerHTML = `<i class="ri-delete-bin-2-fill"></i>`;
clearButton.style.background = "none";
clearButton.style.border = "none";

//addEventListner on clearButton//
clearButton.addEventListener('click',()=>{
todoList.removeChild(newListItem);
saveToLocalStorage();
});

   //now add the buttons in buttonSpan//
   butttonSpan.appendChild(updateButton);
   butttonSpan.appendChild(clearButton);

    newListItem.appendChild(textSpan);
    newListItem.appendChild(butttonSpan);
    todoList.appendChild(newListItem);
    saveToLocalStorage();
}


//Create function Load Todos//

function loadFromLocalStorage(){
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.forEach((todoText)=>{
        createTodoItem(todoText);
    });
}


//addEventListner On the button//
addButton.addEventListener('click', ()=>{
 const newInpt = userInput.value.trim();
   if(newInpt.length === 0)
    {
        alert("You Must Write Smoething in Input field");
        return false;
    }

    //call function for adding a input text in listitem//
   createTodoItem(newInpt);
    userInput.value =""; 
});

loadFromLocalStorage();

function displayDate() {
    const toady = new Date();
    const dataString = toady.toDateString();
    nowDate.textContent = dataString;
}
displayDate();

});