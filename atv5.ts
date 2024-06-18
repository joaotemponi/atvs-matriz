/*
5- Crie uma matriz 3x3 com entrada manual de números. Em seguida, exiba a matriz na tela.
*/

console.clear();
const teclado = require(`prompt-sync`)();
let matrizAtv5: number[][] = new Array(3);

for (let i = 0; i < 3; i++) {
    matrizAtv5[i] = new Array(3);
    for (let l = 0; l < 3; l++) {
        let numero: number = teclado(`Digite o numero que vai estar no endereço [${i}, ${l}]: `);
        matrizAtv5[i][l] = numero;
    }
}

for (let i = 0; i < 3; i++) {
    console.log(matrizAtv5[i]);
}