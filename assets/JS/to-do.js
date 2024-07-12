const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-text");
const todoList = document.getElementById("todo-list");
const addImageBtn = document.querySelector("#add-image"); 
const imageUrlInput = document.querySelector('#image-url'); 
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
  }
  else {
    mode = 'dark';
    body.setAttribute('class', 'container-fluid dark');
  }
  

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

let button= document.getElementById("randomize");
button.addEventListener ("click", function(event) {
  let i = Math.floor(Math.random() * todos.length)+1;
  let randomToDo = todos[i-1];
  console.log(randomToDo);

  document.getElementById("randomTodo").textContent = randomToDo;

// alert ("Your task is: "+randomToDo);
});
  
    
  
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
let tempStorageObject = {
  images: [],
};
function updateLocalStorage() {
  localStorage.setItem('profileImg', JSON.stringify(tempStorageObject));
}

function loadFromLocalStorage() {
  const storedData = JSON.parse(localStorage.getItem('profileImg'));
  if (storedData) {
    tempStorageObject = storedData;
  }}

    tempStorageObject.images.forEach((image) => {
      const img = document.createElement('img');
      img.src = image.url;
      img.style.left = image.left;
      img.style.top = image.top;
      document.body.appendChild(img);
    });
    addImageBtn.addEventListener('click', function () {
      const imageUrl = imageUrlInput.value;
      if (imageUrl) {
        const img = document.createElement('img');
        img.src = imageUrl;
        document.body.appendChild(img);
      }
    });
    currentElement = img;
    
      body.appendChild(currentElement);

      // ? Save to the temp storage variable based on the type of element
      if (currentElement.tagName === 'img'
        
      ) {
        // ? Push the image object to the tempStorageObject images property/array
        tempStorageObject.images.push({
          url: currentElement.src,
          left: left,
          top: top,
        });
      } else {
        // ? Push the text object to the tempStorageObject text property/array
        tempStorageObject.text.push({
          text: currentElement.textContent,
          left: left,
          top: top,
        });
      }
  
      // Update local storage with the new tempStorageObject information
      updateLocalStorage();
