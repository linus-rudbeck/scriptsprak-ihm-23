// Variabler är lådor för att spara värden
let myName = "Linus";
let myAge = 29;
const isHappy = true;

// För att skriva ut variabler i konsollen använder vi console.log()
console.log(myName);
console.log(myAge);
console.log(isHappy);

myName = "Per Andersson";
myAge++;

console.log(myName, myAge, isHappy)
console.log({ myName, myAge, isHappy }) // Per Andersson

// Hämta knappen med id="my-button" och spara i variabeln myButton
const myButton = document.getElementById("my-button"); // (1)

// Lägg till en event-hanterare för klick
// När nån klickar på knappen ska koden här nere köras
myButton.addEventListener("click", function () { // (2)

    // Hämta texten (input med id="my-text") och lägg i en variabel
    const myTextInput = document.getElementById("my-text");
    const myText = myTextInput.value; // (3)

    // Kolla om myText är samma sak som myName
    if (myText == myName) {
        console.log("Vi har samma namn")
    }
    else {
        console.log("Vi har inte samma namn")
    }
})

// Skapa en funktion, alltså ett stycke kod som vi kan anropa 
// från andra ställen i koden. En funktion tar emot värden (argument)
// och skickar tillbaka värden
function repeatString(inputString, times){
    let repeatedString = ""; // Skapa en tom text (som ett blankt papper)

    // Loopar lika många gånger som times
    for(let i = 0; i < times; i++){
        // Lägger till (adderar) inputString till result
        // (skriver på vårt blanka papper)
        repeatedString += inputString;
    }

    // Returnerar (skickar tillbaka) vårt värde (vårt papper)
    return repeatedString;
}

// const result = repeatString("Rast", 315); // (4)
// console.log(result); // (5)


// 1. Hämta knappen id="repeat-button"
const repeatButton = document.getElementById("repeat-button");

// 2. Lägg till en event-hanterare
repeatButton.addEventListener("click", function () {
    // 3. Hämta texten i vår input id="string-to-repeat"
    const stringToRepeatInput = document.getElementById("string-to-repeat");
    const stringToRepeat = stringToRepeatInput.value; // (3)

    // 4. Anropa funktionen repeatString
    const repeatedString = repeatString(stringToRepeat, 5);

    // 5. Skriv ut med console.log
    console.log(repeatedString)
})
