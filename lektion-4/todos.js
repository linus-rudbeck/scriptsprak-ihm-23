console.log("todos");

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

// --> Hämta från local storage
// const myObject = getObjectFromLocalStorage("linus")
// console.log(myObject)

// --> Spara i local storage
// const myObject = { name: "Linus", isHappy: true }
// saveObjectToLocalStorage("linus", myObject);    

const todos = [
    "Göra klart inlämningen",
    "Lära oss JS",
    "Fira Lucia"
]

const clickButton = document.getElementById("click-button");
clickButton.addEventListener("click", function(){
    const myTextInput = document.getElementById("my-text");
    const myText = myTextInput.value;

    console.log(myText)

    // 1. lägg till texten i todos-arrayen (använd push)
    todos.push(myText);

    // 2. spara todos-arrayen i local storage
    saveObjectToLocalStorage("todos", todos)

    console.log(todos)
})