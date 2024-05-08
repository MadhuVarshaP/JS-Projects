const inputList = document.getElementById("enterList");
const addBtn = document.getElementById("addTodoBtn");
const newList = document.getElementById("toDoList");


addBtn.addEventListener("click", () => {

    const newTodoText = inputList.value;

    if (newTodoText !== "") {
        const newTodoItem = document.createElement("li");
        newTodoItem.innerText = newTodoText;

        const deleteTodoBtn = document.createElement("button");
        deleteTodoBtn.innerText = "X";
        deleteTodoBtn.classList.add("delete-todo-btn");

        deleteTodoBtn.addEventListener("click", function () {
            newTodoItem.remove();
        })

        const editTodoBtn = document.createElement("button");
        editTodoBtn.innerText = "Edit";
        editTodoBtn.classList.add("edit-todo-btn");

        editTodoBtn.addEventListener("click", function () {
            inputList.value = newTodoText;
            newTodoItem.remove();
        })

        newTodoItem.appendChild(deleteTodoBtn);
        newTodoItem.appendChild(editTodoBtn)
        newList.appendChild(newTodoItem);

        inputList.value = "";
    }
})