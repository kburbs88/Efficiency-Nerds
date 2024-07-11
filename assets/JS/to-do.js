const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-text");
const todoList = document.getElementById("todo-list");

const todos = [];

function renderTodos() {
  todoList.innerHTML = "";
  const storeTodos = JSON.parse(localStorage.getItem("todos"));
  for (let i = 0; i < storeTodos.length; i++) {
    const todo = storeTodos[i];

    const list = document.createElement("li");
    list.textContent = todo;
    list.setAttribute("data-index", i);

    const button = document.createElement("button");
    button.textContent = "Done";

    list.appendChild(button);
    todoList.append(list);
  }
}

function storeTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// function init() {
//   const storeTodos = JSON.parse(localStorage.getItem("todos-added"));
// }
renderTodos();

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  console.log("hello");
  const todoText = todoInput.value.trim();
  if (todoText === "") {
    return;
  }
  console.log(todoText);

  todos.push(todoText);
  todoInput.value = "";

  storeTodos();
  renderTodos();
});

todoList.addEventListener("click", function (event) {
  const element = event.target;

  if (element.matches("button") === true) {
    const index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);

    storeTodos();
    renderTodos();
  }
});

const getRandomToDO = function (todos)) {
  let i = Math.floor(Math.random() * todos.length)+1;
  let randomToDo = todos[i-1];
  window.alert("Your Task is: "+randomtodo);
  };

// init();

// const timerElement = document.getElementsByClassName("time");
// const mainElement = document.getElementById("main");

// let minutesLeft = function setTime() {
//   const timeInterval = setInterval();
// };
