/*
7-Crie uma matriz 3x3 com números aleatórios de 0 a 9.
Em seguida, exiba a matriz na tela.
*/

console.clear();
let matrizAtv7 = new Array(3);

for (let c = 0; c < 3; c++) {
    matrizAtv7[c] = new Array(3);
    for (let l = 0; l < 3; l++) {
        let n: number = 0
        n = Math.floor(Math.random()*10)

        if(n >= 0 && n < 10) {
            matrizAtv7[c][l] = n
        } else {
            l--;
        }
    }
}
for (let l = 0; l < 3; l++) {
    console.log(matrizAtv7[l]);
}