/**
 * Aula 29
 */

//Dessa forma utilizamos o operador Rest. utilizamos ele quando não sabemos quais parametros a função irá receber.
//Onde se ele receber mais de um parametro ele irá transformar em um Array.

function add(...numeros){
    console.log(numeros);
}

add(5,6,7,8,9,10);


let nomes = ['Joao','Maria','Jose','Antonio'];

function add2(nomes, ...novosNomes){
    let novoConjunto = [...nomes, ...novosNomes]

    console.log(novoConjunto);
}

add2(nomes, 'Popinhak', 'Rosa');

