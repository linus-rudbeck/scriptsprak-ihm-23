// Pippi Långstrump och Herr Nilsson

// Detta skriver ut mitt namn i konsollen
console.log("Linus");

/*
Hej
På
Dej
Jag
Heter
Frej
*/

// Variabler: föredra const och använd let om vi måste ändra värdet
const myName = "Frippert";
let age = 99;
const isHappy = true;

// Mer om arrayer och objekt senare...
// Hakparanteser på mac: option+8 
// Hakparanteser på pc: ctrl+alt+8 
const favoriteColors = ["svart", "vit", "grå"]

// Frippert fyller år
age++;

// console.log med måsvingar skriver ut variablernas namn och värden
// Måsvingar på mac: option+shift+8 
// Måsvingar på pc: ctrl+alt+7
console.log({myName, age, isHappy, favoriteColors});

// Alert visar en dialogruta
// alert("Detta är en alert som kan vara rätt störande");

// Skapa (definierar) funktionen
// En funktion är en samling instruktioner med ett namn
function sayHello(){
    console.log("Hello hello!");
    console.log("Hello again!");
}

console.log("Innan funktions-anropet");

sayHello(); // <-- Funktions-aropet: vi kör instruktionerna med namnet "sayHello"

console.log("Efter funktions-anropet");