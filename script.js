//1. Déclaration des variables :

const tauxInteret = 0.03;
let solde = 1000;
let depot = 200;
let retrait = 150;

let historiqueOperations = [];

//2. Dépot d'argetn :

solde += depot;
console.log(`Vous avez déposé ${depot} euros. Nouveau solde : ${solde} euros.`);
historiqueOperations.push(`Dépot de ${depot} euros.`);

//3. Retrait d'argent :

if (solde >= retrait) {
    solde -= retrait;
    console.log(`Vous avez retiré ${retrait} euros. Nouveau solde : ${solde} euros.`);
    historiqueOperations.push(`Retrait de ${retrait} euros.`);
} else {
    console.log(`Solde insuffisant pour effectuer ce retrait.`);
    historiqueOperations.push(`Tentative de retrait de ${retrait} euros.`);
}

//4. Calcul des intérêts :

solde += solde * tauxInteret;
console.log(`Intérêts annuels de 3% ajoutés. Nouveau solde : ${solde} euros.`);
historiqueOperations.push(`Intérêts annuels de 3% ajoutés.`);

//5. Simunlation de plusieurs opérations :

let nouveauDepot = 500;
solde += nouveauDepot;
console.log(`Vous avez déposé ${nouveauDepot} euros. Nouveau solde : ${solde} euros.`);
historiqueOperations.push(`Dépot de ${nouveauDepot} euros.`);

let nouveauRetrait = 800;
if (solde >= nouveauRetrait) {
    solde -= nouveauRetrait;
    console.log(`Vous avez retiré ${nouveauRetrait} euros. Nouveau solde : ${solde} euros.`);
    historiqueOperations.push(`Retrait de ${nouveauRetrait} euros.`);
} else {
    console.log(`Solde insuffisant pour effectuer ce retrait.`);
    historiqueOperations.push(`Tentative de retrait de ${nouveauRetrait} euros.`);
}

solde += solde * tauxInteret;
console.log(`Intérêts annuels de 3% ajoutés. Nouveau solde : ${solde} euros.`);
historiqueOperations.push(`Intérêts annuels de 3% ajoutés.`);

//6. Bonus :

console.log(`Historique des opérations :`);
historiqueOperations.forEach(operation => {
    console.log(operation);
});