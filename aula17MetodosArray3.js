/**
 * Aula 17 - Métodos de arrays (continuação)
 */

let lista = [45 ,4 ,9 ,16 ,25];
let lista2 = [];

lista2 = lista.find(function(index){ // O método find() retorna o valor do primeiro elemento do array que satisfaz a função de teste fornecida. Ele percorre cada elemento do array original e aplica a função fornecida, retornando o primeiro elemento que retornar true, ou undefined caso contrário.
    return (index == 16)?true:false; // Retorna o primeiro valor que for igual a 16, ou undefined caso contrário
});

lista2 = lista.findIndex(function(index){ // O método findIndex() retorna o índice do primeiro elemento do array que satisfaz a função de teste fornecida. Ele percorre cada elemento do array original e aplica a função fornecida, retornando o índice do primeiro elemento que retornar true, ou -1 caso contrário.
    return (index == 16) ? true:false; // Retorna o índice do primeiro valor que for igual a 16, ou -1 caso contrário
});

let res = lista2;   
console.log(res);