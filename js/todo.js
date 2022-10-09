const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"; // not to make any mistakes
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function deleteToDo(event) {
  const deleteList = event.target.parentNode;
  deleteList.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(deleteList.id));
  saveToDos();
}
function paintToDo(newTodoObj) {
  const list = document.createElement("li");
  list.id = newTodoObj.id;
  const listSpan = document.createElement("span");
  listSpan.innerText = newTodoObj.text;
  const listButton = document.createElement("button");
  listButton.innerText = "❌";
  listButton.addEventListener("click", deleteToDo);
  list.appendChild(listSpan);
  list.appendChild(listButton);
  toDoList.appendChild(list);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
