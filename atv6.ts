/*
6-Crie uma matriz 3x3 com entrada manual de números
aceitando somente números de 0 a 9. Em seguida,exiba a matriz na tela.
*/

console.clear();
const teclado = require(`prompt-sync`)();
let matrizAtv6 = new Array(3);

for (let c = 0; c < 3; c++) {
    matrizAtv6[c] = new Array(3);
    for (let l = 0; l < 3; l++) {
        let n: number = 0
        n = teclado(`Digite um número de 0 a 9 para o endereço [${c}, ${l}]: `);
        if(n >= 0 && n < 10) {
            matrizAtv6[c][l] = n
        } else {
            console.log(`Digite um número entre 0 e 9`);
            l--;
        }
    }
}
for (let l = 0; l < 3; l++) {
    console.log(matrizAtv6[l]);
}