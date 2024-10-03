// console.log(`Hello World!`);
// console.log(departments);
/*

//Opdracht 1a
console.log(`De afdeling Sales heeft ` + departments.sales.numberOfEmployees + ` medewerkers.`);

// Opdracht 1b
console.log(`Marketing is een leuke afdeling om te werken. ` + departments.marketing.description);

// Opdracht 1c
console.log(`De afdeling Customer Service heeft ` + departments[`customer-service`].numberOfEmployees + ` medewerkers.`);

// Opdracht 1d
console.log(`Sales is een uitdagende afdeling om te werken als Verkoopmanager. ` + departments.sales.jobs[1].description);
*/
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


// ---------------------------------------------
/*

// Opdracht 3a
const userInput = prompt(`Je koos marketing. Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in.
  0: ${departments.marketing.jobs[0].title},
  1: ${departments.marketing.jobs[1].title},
  2: ${departments.marketing.jobs[2].title},
  3: ${departments.marketing.jobs[3].title}`);
console.log(userInput);

// Opdracht 3b,3c

switch (userInput) {
    case `0`:
        console.log(`Je koos ${departments.marketing.jobs[0].title}. Een uitdagende rol! ${departments.marketing.jobs[0].description}`);
        break;
    case `1`:
        console.log(`Je koos ${departments.marketing.jobs[1].title}. Een uitdagende rol! ${departments.marketing.jobs[1].description}`);
        break;
    case `2`:
        console.log(`Je koos ${departments.marketing.jobs[2].title}. Een uitdagende rol! ${departments.marketing.jobs[2].description}`);
        break;
    case `3`:
        console.log(`Je koos ${departments.marketing.jobs[3].title}. Een uitdagende rol! ${departments.marketing.jobs[3].description}`);
        break;
    default:
        console.error(`Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.`);
}
*/

// ---------------------------------------------

// Opdracht 4a
console.log(`${userInput} is een leuke afdeling om te werken. Er werken op dit moment ${departments[userInput].numberOfEmployees} medewerkers.`);

// Opdracht 4b
const userInput2 = prompt(`Je koos ${userInput}. Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in.
  0: ${departments[userInput].jobs[0].title},
  1: ${departments[userInput].jobs[1].title},
  2: ${departments[userInput].jobs[2].title},
  3: ${departments[userInput].jobs[3].title}`);

// Opdracht 4c

// switch (userInput2) {
//     case `0`:
//         console.log(`Je koos ${departments[userInput].jobs[0].title}. Een uitdagende rol! ${departments[userInput].jobs[0].description}`);
//         break;
//     case `1`:
//         console.log(`Je koos ${departments[userInput].jobs[1].title}. Een uitdagende rol! ${departments[userInput].jobs[1].description}`);
//         break;
//     case `2`:
//         console.log(`Je koos ${departments[userInput].jobs[2].title}. Een uitdagende rol! ${departments[userInput].jobs[2].description}`);
//         break;
//     case `3`:
//         console.log(`Je koos ${departments[userInput].jobs[3].title}. Een uitdagende rol! ${departments[userInput].jobs[3].description}`);
//         break;
//     default:
//         console.error(`Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.`);
// }


// Verkorte versie
if (0 <= userInput2 && userInput2 <= 3) {
    console.log(`Je koos ${departments[userInput].jobs[userInput2].title}. Een uitdagende rol! ${departments[userInput].jobs[userInput2].description}`);
} else {
    console.error(`Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.`);
}

















