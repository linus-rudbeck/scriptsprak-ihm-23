console.log("Hej på er!")

// #first-paragraph{  }

// Hämta elementet med id="hello-paragraph"
const helloParagraph = document.getElementById("hello-paragraph");
console.log(helloParagraph); // Skriv ut elementet i konsollen

// Ändra innehållet / texten i helloParagraph 
helloParagraph.innerText = "New hello content!!";

// Ändra bakgrundsfärgen på helloParagraph 
helloParagraph.style.backgroundColor = "pink"

// Hämta alla element med class="name-paragraph"
const nameParagraphsArray = document.getElementsByClassName("name-paragraph");
console.log(nameParagraphsArray); // Skriv ut elementen i konsollen
nameParagraphsArray[0].style.backgroundColor = "#ABC123"
nameParagraphsArray[1].style.backgroundColor = "#e45823"
nameParagraphsArray[2].style.backgroundColor = "#c56345"

// Ändra HTML-koden i första namnet
nameParagraphsArray[0].innerHTML = "<b>Olof</b>";
nameParagraphsArray[1].innerText = "<b>Olof</b>"; // Samma med andra ... ?

// Hämta alla element med <p ...> (<p>, <p class="123">)
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs); // Skriv ut elementen i konsollen

const fixMeHeading = document.getElementById("fix-me");
fixMeHeading.innerText = "Skön";
fixMeHeading.style.color = "green"

// Skapa ett nytt element
const myNewParagraph = document.createElement("p");
myNewParagraph.innerText = "This is my new paragraph"; // Sätt texten
myNewParagraph.style.color = "red"; // Sätt färgen till röd
document.body.appendChild(myNewParagraph); // Lägg till nya elementet på sidan (bodyn)

// Skapa en bold-tagg
const myNewBoldTag = document.createElement("b"); 
myNewBoldTag.innerText = " I am bold"; // Sätt texten
helloParagraph.appendChild(myNewBoldTag); // Lägg till i hello paragraph-elementet

// Hämta knappen från vår html
const myButton = document.querySelector("button") // Hämta första <button>-elementet

// Lägg till en event-hanterare
myButton.addEventListener("click", function(){
    alert("Knappen klickades") // Visa en ruta på skärmen
});

// Hämta vår color-div
const colorDiv = document.getElementById("color-div")

// Kör funktionen vid klick på eventet
colorDiv.addEventListener("click", function(){

    // Om bakgrundsfärgen är "cyan"...
    if(colorDiv.style.backgroundColor == "cyan"){
        colorDiv.style.backgroundColor = "blue"; // Ändra bakgrunden till "blue"
    }
    else{ // Annars...
        colorDiv.style.backgroundColor = "cyan"; // Ändra till "cyan"
    }
})


const myTextBox =  document.getElementById("my-text-box");

const saveTextButton = document.getElementById("save-text")
saveTextButton.addEventListener("click", function(){
    localStorage.setItem("my-text", myTextBox.value);
});