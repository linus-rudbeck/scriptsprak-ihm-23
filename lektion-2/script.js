// Skapar våra funktioner

// Funktion 1: Generera ett slumpat heltal
function generateRandomNumber(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funktion 2: Enkel hälsning
function sayHello(){
    console.log("Hello friend!")
}

// Funktion 3: Avancerad hälsning
function sayHelloName(name){
    console.log("Hello " + name);
}

// Hälsningsfraser
console.log("Hej lektion 2!");
console.log("Idag ska vi lära oss mer Javascript");

// Skapar (definierar) en array
const fruits = ["banana", "bananas", "orange", "orangotango", "apple", "papaya"];

// Skriver ut vår array
console.log(fruits);

// Skriver ut olika meddelanden baserat på arrayens längd
if(fruits.length > 0){
    console.log("Det finns frukter");
}
else{
    console.log("Det finns inga frukter");
}

// Hämtar och skriver ut den första frukten
const firstFruit = fruits[0];
console.log(firstFruit);

// Hämtar och skriver ut den andra frukten
console.log(fruits[1]);

// Ändrar värdet på ett element i arrayen
// fruits[1] = "cherry";
console.log(fruits);


// En frukt --> "Det finns en frukt"
if(fruits.length == 1){
    console.log("Det finns en frukt");
}
// Fler än en frukt --> "Det finns fler än en frukt"
else if(fruits.length > 1){
    console.log("Det finns fler än en frukt");
}
// Annars --> "Det finns inga frukter"
else{
    console.log("Det finns inga frukter");
}

// Lägger till en frukt
fruits.push("orange");
console.log(fruits);

// Tar bort sista frukten
fruits.pop();
console.log(fruits);

// Skriver ut några frukter
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

console.log("---")

// Loopar igenom alla frukter
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

console.log("Slut på for-loop, dags för while-loop");

// While-loop för att gå igenom alla frukter
let i = 0;

while(i < fruits.length){
    console.log(fruits[i]);
    i++;
}


// Slumpa en siffra
const randomNumber = generateRandomNumber(0, 10);
console.log(randomNumber);


// Anropar vår funktion
sayHello();
sayHello();
sayHello();


// Anropar vår avancerade funktion
sayHelloName("Linus");
sayHelloName("Anders");
sayHelloName("Petter");

// En while-loop som körs om och om igen tills vi slumpar fram 5
let randomNumber2;

while(randomNumber2 != 5){
    randomNumber2 = generateRandomNumber(0, 10);
    console.log({randomNumber2})
}

console.log("End of loop")

// 15

let a = 1;
let res = ""

while(a<=5){
    res = res + a;

    if(a<5){
        res = res + ",";
    }

    a++;
}

console.log(res)