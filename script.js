const user = document.getElementById("user-inpt");
const button = document.getElementById("btn");
const order = document.getElementById("Todo");
const alrt = document.getElementById("alrt");


const newBox = document.createElement("span");


document.getElementById("btn").addEventListener('click', ()=>{

    const inputText = user.value.trim();

    if(inputText.length === 0)
    {
     document.getElementById("alrt").innerText = "You Must Write Something!..";
     document.getElementById("alrt").style.color = "tomato";
     document.getElementById("alrt").style.fontSize = "1.3rem";
       
       setTimeout(()=>{
        document.getElementById("alrt").innerText = "";
       },2000)
       return
    }

  const newList = document.createElement("li");


   newList.textContent = inputText;
   order.appendChild(newList);
   document.getElementById("user-inpt").value = "";


   const updateList = document.createElement("button");
    updateList.innerHTML = '<i class="ri-pencil-fill"></i>';
    updateList.style.border = "none";
    updateList.style.background = "none";

updateList.addEventListener('click', ()=>{
 
  const newText = prompt("Edit Your ToDo Here:-", newList.textContent);

  if(newText !== null && newText.trim() !== "")

    {
      newList.firstChild.textContent = newText.trim();
      newList.appendChild(updateList);
      newList.appendChild(updateList)
    }

});


newList.appendChild(updateList)
    newBox.appendChild(updateList);
    newList.appendChild(newBox);
    order.appendChild(newList);


    const deleteList = document.createElement("button");
    deleteList.innerHTML = '<i class="ri-delete-bin-2-fill"></i>';
    deleteList.style.border = "none";


    deleteList.addEventListener('click',  ()=>{
      order.removeChild(newList);
    })

    newList.appendChild(deleteList);


});


const dateDisplay = document.getElementById("date");

function getCurrentDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
}
dateDisplay.innerText = `Date: ${getCurrentDate()}`;
dateDisplay.style.color = "azure";







