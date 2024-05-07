const inputList = document.getElementById("enterList");
const addBtn = document.getElementById("addTodoBtn");
const newList = document.getElementById("toDoList");

addBtn.addEventListener("click", ()=>{
    
    const newTodoText =  newList.value;
    
    if (newList !== ""){
        const newTodoItem = document.createElement("li");
        newList.innerText = newTodoText;
        
    }

})