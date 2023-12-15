console.log("Nu ska vi lära oss funktioner!");

// Funktion 1: Säg hej
function sayHello() {
    console.log("Hej hej");
}

// Funktion 2: Hälsa med namn
function greet(name) {
    console.log("Hej " + name);
}

// Funktion 3: Skicka tillbaka (returnera) ett tal gånger 10
function timesTen(x) {
    return x * 10;
}

// Funktion 4: Addera två tal och returnera summan
function addTwoNumbers(a, b){
    const result = a + b;
    // Vi kan göra massor av grejer här...
    return result;
}

// Spara resultatet av timesTen-funktionen i variabeln age
const product = timesTen(5);

console.log("Låtsas att massa viktiga grejer händer");

// Skriv ut variabeln age som vi sparade tidigare
console.log({ product })
console.log(product)