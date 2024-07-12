const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-text");
const todoList = document.getElementById("todo-list");
// const getRandomTask = function (tasksArray);

const themeSwitcher = document.querySelector("#toggle");
const body = document.querySelector("body");

let mode = 'light';

themeSwitcher.addEventListener('click', function (event) {
  event.preventDefault();
  console.log(event);
  if (mode === 'dark') {
    mode = 'light';
    body.setAttribute('class', 'container-fluid light');
    // document.documentElement.style.setProperty('background', '#fff')
    // themeSwitcher.checked = false
  }
  else {
    mode = 'dark';
    body.setAttribute('class', 'container-fluid dark');
// document.documentElement.style.setProperty('background', '#000');    
// themeSwitcher.checked = true
  }
  
// document.getElementById("themeToggleBtn").addEventListener("click", function() {
// document.body.classList.toggle("dark-mode");

});

const todos = [];

function renderTodos() {
  todoList.innerHTML = "";
  const storeTodos = JSON.parse(localStorage.getItem("todos"));
  if (storeTodos === null) {
    return;
  }
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

//Generate a Random Task
const getRandomTodo = function (todos) {
  let i = Math.floor(Math.random() * todos.length)+1;
  let randomToDo = todos[i-1];

  window.alert ("Your task is: "+randomToDo);
  };

// init();

let timeLeft = 1200;
let timerId;

function startTimer() {
  timerId = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerId);
      alert("Timer is up!");
    } else {
      const minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      document.getElementById("timer").innerText = `${minutes}:${seconds}`;
      timeLeft--;
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerId);
}
