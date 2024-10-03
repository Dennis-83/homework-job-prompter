// console.log(`Hello World!`);
// console.log(departments);

//Opdracht 1a
console.log(`De afdeling Sales heeft ` + departments.sales.numberOfEmployees + ` medewerkers.`);

// Opdracht 1b
console.log(`Marketing is een leuke afdeling om te werken. ` + departments.marketing.description);

// Opdracht 1c
console.log(`De afdeling Customer Service heeft ` + departments[`customer-service`].numberOfEmployees + ` medewerkers.`);

// Opdracht 1d
console.log(`Sales is een uitdagende afdeling om te werken als Verkoopmanager. ` + departments.sales.jobs[1].description);

// ---------------------------------------------

// Opdracht 2a
const userInput = prompt(`Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]`);
console.log(userInput);

// Opdracht 2b,2c
if (userInput === `marketing`) {
    console.log(`Je koos ${userInput}. ${departments.marketing.description}`);
} else if (userInput === `sales`) {
    console.log(`Je koos ${userInput}. ${departments.sales.description}`);
} else if (userInput === `customer-service`) {
    console.log(`Je koos ${userInput}. ${departments[`customer-service`].description}`);
} else {
    console.error(`Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.`);
}














