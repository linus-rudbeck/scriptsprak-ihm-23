// Hämtar element från DOM
const addButton = document.getElementById('addTodoBtn');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');


/* --- Main --- */

// Hämtar todos från local storage
let todos = getObjectFromLocalStorage("todos");

if(todos == null){
    // Om todos inte finns i local storage
    // skapar vi en tom array
    todos = [];
    saveObjectToLocalStorage("todos", todos);
}

// Skriver ut alla todos i listan
for(let i = 0; i < todos.length; i++){
    const todo = todos[i];
    addTaskToList(todo);
}


/* --- Eventlyssnare --- */

// Lägger till en eventlyssnare till lägg till-knappen
addButton.addEventListener('click', function () {
    const task = todoInput.value; // Hämtar texten från input-fältet

    // Skapar ett nytt listelement
    addTaskToList(task);

    // Lägger till den nya todon i todos-arrayen
    todos.push(task);

    // Spara todos-arrayen i local storage
    saveObjectToLocalStorage("todos", todos)

    // Rensar textfältet
    todoInput.value = '';
});


/* --- Funktioner --- */

// Lägger till en todo i listan
function addTaskToList(task) {
    const listItem = document.createElement('li');
    listItem.textContent = task;

    // Lägger till det nya listelementet i listan
    todoList.appendChild(listItem);
}


/* --- Local storage-funktioner --- */

// Spara ett objekt/array i local storage
function saveObjectToLocalStorage(key, object){
    const objectAsString = JSON.stringify(object);
    localStorage.setItem(key, objectAsString);
}

// Hämta ett objekt/array från local storage
function getObjectFromLocalStorage(key){
    const objectAsString = localStorage.getItem(key);
    const object = JSON.parse(objectAsString)
    return object;
}