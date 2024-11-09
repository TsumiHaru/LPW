//1. Déclaration des variables :

const tauxInteret = 0.03;
let solde = 1000;
let depot = 200;
let retrait = 150;

let historiqueOperations = [];
let historiqueOperationsIndex = 0 + 1;

//2. Dépot d'argetn :

solde += depot;
console.log(`Vous avez déposé ${depot} euros. Nouveau solde : ${solde} euros.`);
historiqueOperations.push(`1.Dépot positif de ${depot} euros. "Date : ${new Date().toLocaleString()}"`);


//3. Retrait d'argent :

if (solde >= retrait) {
    solde -= retrait;
    console.log(`Vous avez retiré ${retrait} euros. Nouveau solde : ${solde} euros.`);
    historiqueOperations.push(`2.Retrait de ${retrait} euros. "Date : ${new Date().toLocaleString()}"`);
} else {
    console.log(`Solde insuffisant pour effectuer ce retrait.`);
    historiqueOperations.push(`3.Tentative de retrait de ${retrait} euros. "Date : ${new Date().toLocaleString()}"`);
}

//4. Calcul des intérêts :

solde += solde * tauxInteret;
console.log(`Intérêts annuels de 3% ajoutés. Nouveau solde : ${solde.toFixed(2)} euros.`);
historiqueOperations.push(`4.Intérêts annuels de 3% ajoutés. "Date : ${new Date().toLocaleString()}"`);

//5. Simunlation de plusieurs opérations :

let nouveauDepot = 500;
solde += nouveauDepot;
console.log(`Vous avez déposé ${nouveauDepot} euros. Nouveau solde : ${solde} euros.`);
historiqueOperations.push(`5.Dépot de ${nouveauDepot} euros. "Date : ${new Date().toLocaleString()}"`);

let nouveauRetrait = 800;
if (solde >= nouveauRetrait) {
    solde -= nouveauRetrait;
    console.log(`Vous avez retiré ${nouveauRetrait} euros. Nouveau solde : ${solde} euros.`);
    historiqueOperations.push(`6.Retrait de ${nouveauRetrait} euros. "Date : ${new Date().toLocaleString()}"`);
} else {
    console.log(`Solde insuffisant pour effectuer ce retrait.`);
    historiqueOperations.push(`7.Tentative de retrait de ${nouveauRetrait} euros. "Date : ${new Date().toLocaleString()}"`);
}

solde += solde * tauxInteret;
console.log(`Intérêts annuels de 3% ajoutés. Nouveau solde : ${solde.toFixed(2)} euros.`);
historiqueOperations.push(`8.Intérêts annuels de 3% ajoutés. "Date : ${new Date().toLocaleString()}"`);

//6. Bonus :

console.log(`Historique des opérations :`);
historiqueOperations.forEach(operation => {
    console.log(operation);
});
console.table(historiqueOperations);