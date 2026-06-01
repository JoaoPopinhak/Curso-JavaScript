/**
 * Aula 37 - Callbacks
 * 
 * CallBack é uma função em que você cria e você utiliza essa função como 
 * argumento de outra função. A função que recebe a função de CallBack como 
 * argumento é chamada de função de ordem superior.
 * 
 */

//Exemplo de uso de callback SIMPLES

function alertar(){
    console.log('Alerta de callback');
}

let nome = 'João Marcos';
let sobrenome = 'Popinhak';
setTimeout(alertar, 2000);
console.log(`${nome} ${sobrenome}`);


