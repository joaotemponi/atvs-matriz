/*
9- Crie uma matriz 6x6 com entrada manual. Em seguida,
calcule e exiba a soma dos elementos das colunas pares da
matriz.
*/

console.clear();
const teclado = require('prompt-sync')();
let matrizAtv9: number[][] = new Array(6);

for (let c = 0; c < 6; c++) {
    let linha: number[] = new Array(6);
    for (let l = 0; l < 6; l++) {
        let numero = parseFloat(teclado(`Digite um número para o endereço [${c}, ${l}]: `));
        matrizAtv9[c][l] = numero;
    }
}

console.log(matrizAtv9);
let soma = 0;

for (let c = 0; c < 6; c++) {
    if (c % 2 === 0) {
        for (let l = 0; l < 6; l++) {
            soma += matrizAtv9[l][c];
        }
    }
}

console.log('Soma dos elementos das colunas pares:', soma);
