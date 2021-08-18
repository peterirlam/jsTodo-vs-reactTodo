const addTodo = () => {
  let todoItem = document.querySelector("#todo").value;
  let todoDiv = document.querySelector("#addTodo"); /* todo list parent element */

  let newTodoItem = document.createElement("div"); /* empty todo div */
  let todoLi = document.createElement("li"); /* create li element and add the input text content  */
  todoLi.innerHTML = todoItem;

  let deleteBtn = document.createElement("i"); /* create i element and add the font awesome classes far & fa-trash-alt */
  deleteBtn.classList.add("far")
  deleteBtn.classList.add("fa-trash-alt");

  newTodoItem.appendChild(todoLi); /* add li element to todo div */
  newTodoItem.appendChild(deleteBtn); /* add i element to todo div */

  todoDiv.appendChild(newTodoItem);
}

const deleteItem = (event) => { 
  let element = event.target; 
  if(element.classList[0] === "far") { 
    element.parentElement.remove();
  } 
}
let todoDiv = document.querySelector("#addTodo"); 
todoDiv.addEventListener('click', deleteItem); 
