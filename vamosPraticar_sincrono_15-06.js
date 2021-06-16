// 1.
const pontos = [12, 34, 56, 34, 5, 8, 76, 4, 1, 90];
for(let i = 0; i < pontos.length; i++){
    console.log(pontos[i]);
}
console.log()

// 2.
let vetor = ['Paulo', 24, 'Rio Grande do Norte', 1.76, true];
for(let i = 0; i < vetor.length; i++){
    console.log(vetor[i]);
}
console.log();

vetor.shift();
vetor.unshift('Dehon');
vetor.pop();
vetor.push(false);
vetor[3] = 1.80;

for(let i = 0; i < vetor.length; i++){
    console.log(vetor[i]);
}
console.log();

// ...