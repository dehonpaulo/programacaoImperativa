/* 
    O nome deste arquivo deveria ser arrays.js mas
    foi alterado para vamosPraticar_sincrono_11-06.js
    para fins de organização
*/

// 1.
let filmes = ["star wars", "clube da luta",  "o poderoso chefão", "top gun",  "interestelar"];
console.log(filmes + '\n');

// 2.
for(let i = 0; i < filmes.length; i++){
    filmes[i] = filmes[i].toUpperCase();
}
console.log(filmes + '\n');

// 3.
let cartoons = ["toy story", "Procurando Nemo", "kung-fu panda", "wally", "fortnite"];
console.log(cartoons + '\n');

// 5.
cartoons.pop();
console.log(cartoons + '\n');

// 4.
let transfereElementos = function(arr1, arr2){
    for(let i=0; i < arr2.length; i++){
        arr1.push(arr2[i]);
    }
}
transfereElementos(filmes, cartoons);
console.log(filmes + '\n');

// 6.
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9];
let ehIgualOuDiferente = function(n1, n2){
    if(n1 == n2){
        return 'Iguais';
    }
    return 'Diferentes';
}
for(let i=0; i<euroScores.length; i++){
    console.log((i+1) + 'ª posição: ' + ehIgualOuDiferente(asiaScores[i], euroScores[i]));
}