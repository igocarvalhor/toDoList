const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const editForm = document.querySelector("#edit-form")
const editInput = document.querySelector("#edit-input")
const cancelEditBtn = document.querySelector("#cancel-edit-btn")

const saveTodo = (text) => {
const todo = document.createElement("div");
todo.classList.add("todo");

const todoTitle = document.createElement("h3");
todoTitle.innerText = text; 
todo.appendChild(todoTitle);

const editBtn = document.createElement("button")
doneBtn.classList.add("finish-todo")
doneBtn.innerHTML = '<i class="fa-solid fa-check"></>'
todo.appendChild(editBtn)

const editTodo = document.createElement("button")
editTodo.classList.add("edit-todo")
editTodo.innerHTML = '<i class="fa-solid fa-pen"></>'
todo.appendChild(deleteBtn)

const deleteBtn = document.createElement("button")
deleteBtn.classList.add("remove-todo")
deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></>'
todo.appendChild(deleteBtn)

todoList.appendChild(todo)

todoInput.value = "";
todoInput.focus();
}
//Events
todoForm.addEventListener("submit", (e) => {

    e.preventDefault();

   const inputvalue = todoInput.value 

   if(inputvalue){
    saveTodo(inputvalue)
   }
});