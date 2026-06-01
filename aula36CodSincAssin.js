/**
 * Aula 36 - Código Assíncrono
 * 
 * Sincrono = O código é executado linha por linha, ou seja, uma linha de código só é executada depois que a linha anterior foi executada.
 * Assíncrono = O código é executado de forma independente, ou seja, uma linha de código pode ser executada antes da linha anterior ser executada.
 */

//Exemplo de código síncrono
let nome = 'João Marcos';
let sobrenome = 'Popinhak';
let completo = `${nome} ${sobrenome}`;
console.log(completo);

//Exemplo de código assíncrono
let nome = 'João Marcos';
let sobrenome = 'Popinhak';
let temperatura = Maquininha.pegarTemperatura(); //Ao realizar uma requisição pode demorar. O código Assíncrono não espera a linha ser executada e retornada para continuar com as próximas linhas.
let completo = `${nome} ${sobrenome}`;
console.log(completo);
