// Skapa (definiera) ett objekt
const person = {
    firstName: "Linus",
    lastName: "Rudbeck",
    age: 29,
    "favorite hobbies": ["teaching", "swords fighting", "cycling"]
};

console.log(person["favorite hobbies"]);

// Skriv ut objektet
console.log(person);


// Skapa ett objekt för en bil med märke (make), 
// modell (model), år (year)...
const car = {
    make: "Volvo", 
    model: "s80",
    year: 2005
};

// Skriv ut det
console.log(car);



// Skriv ut lite egenskaper
console.log(person.firstName);
console.log(person.lastName);
console.log(car.make + " " + car.model)


// Skapa ett objekt för er favoritmat
const food = {
    protein: "chicken",
    carbs: "pasta",
    sauce: "cream"
}

// Skriv ut två egenskaper
console.log(food.protein, food.carbs)

// Ändra en egenskap
food.carbs = "potato";

// Lägg till en egenskap
food.dip = "wine";

// Skriv ut maträtten
console.log(food)