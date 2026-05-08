/**
 * Aula 21 - Matemática
 */

let novoValor;

novoValor = Math.PI; //Exibe o valor de PI (3.141592653589793).
novoValor = Math.round(4.7); //Arredonda o número para o inteiro mais próximo. Se o número for 4.5 ou maior, arredonda para cima, caso contrário, arredonda para baixo.
novoValor = Math.floor(4.7); //Arredonda o número para baixo, ou seja, para o inteiro mais próximo que seja menor ou igual ao número.
novoValor = Math.ceil(4.7); //Arredonda o número para cima, ou seja, para o inteiro mais próximo que seja maior ou igual ao número.
novoValor = Math.abs(-4.7); //Exibe o valor absoluto do número, ou seja, o número sem o sinal de negativo.
novoValor = Math.min(4, 7, 1, 3); //Exibe o menor número entre os números fornecidos como argumentos. Ele aceita uma lista de números como argumentos e retorna o menor número entre eles.
novoValor = Math.max(4, 7, 1, 3); //Exibe o maior número entre os números fornecidos como argumentos. Ele aceita uma lista de números como argumentos e retorna o maior número entre eles.
novoValor = Math.random(); //Exibe um número aleatório entre 0 (inclusive) e 1 (exclusive). Ele gera um número decimal aleatório entre 0 e 1, onde 0 é incluído e 1 é excluído.
novoValor = Math.floor(Math.random() * 100); //Exibe um número aleatório entre 0 (inclusive) e 100 (exclusive). Ele gera um número decimal aleatório entre 0 e 1, onde 0 é incluído e 1 é excluído, e depois multiplica o resultado por 100 para obter um número entre 0 e 100.

console.log(novoValor);

