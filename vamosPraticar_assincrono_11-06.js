// criando e exibindo o array
produtosParaCompra = ['banana', 'maçã', 'uva', 'morango', 'melancia', 'melão'];
console.log(produtosParaCompra + "\n");

// join
console.log("O método join transforma os elementos de um array " +
"em uma única string, usando entre os elementos o separador passado " +
"como argumento");
console.log(produtosParaCompra.join('-'));
console.log(produtosParaCompra + "\n");

// pop
console.log("O método pop exclui e retorna o último elemento do array");
console.log(produtosParaCompra.pop());
console.log(produtosParaCompra + "\n");

// push
console.log("O método push adiciona elementos no final do array");
console.log(produtosParaCompra.push("Abacate"));
console.log(produtosParaCompra + "\n");

// shift
console.log("O método shift exclui e retorna o primeiro elemento de um array");
console.log(produtosParaCompra.shift());
console.log(produtosParaCompra + "\n")

// unshift
console.log("O método unshift adiciona elementos ao começo de um array");
console.log(produtosParaCompra.unshift("laranja"));
console.log(produtosParaCompra + "\n")
