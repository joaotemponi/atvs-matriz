/*
8- Crie uma matriz 4x4 com números aleatórios entre 0 e 20.
Em seguida, exiba a matriz na tela e encontre o maior
elemento da matriz e a posição em que ele se encontra.
*/

console.clear();
let matrizAtv8 = new Array(4);
let maiorNumero: number = 0

for (let c = 0; c < 4; c++) {
    matrizAtv8[c] = new Array(4);
    for (let l = 0; l < 4; l++) {
        let n: number = 0
        n = Math.floor(Math.random()*21);
        
        if(n >= 0 && n <= 9) {
            matrizAtv8[c][l] = n
            if (n > maiorNumero){
                maiorNumero = n;
            }
        } else {
            l--;
        }
    }
}
for (let l = 0; l < 3; l++) {
    console.log(matrizAtv8[l]);
}
console.log(`O maior número dessa Matriz é ${maiorNumero}`);