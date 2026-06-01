/**
 * Aula 35 - Aula 36 - JSON.parse() e JSON.stringify()
 * 
 * JSON.parse() = converte uma string JSON em um objeto JavaScript.
 * JSON.stringify() = converte um objeto JavaScript em uma string JSON.
 */

//JSON.parse() é um método que converte uma string JSON em um objeto JavaScript. Ele recebe uma string JSON como argumento e retorna o objeto JavaScript correspondente.
let pessoa = JSON.parse('{"nome": "João","idade":25}');

//JSON.stringify() é um método que converte um objeto JavaScript em uma string JSON. Ele recebe um objeto JavaScript como argumento e retorna a string JSON correspondente.
let stringJSON = JSON.stringify({nome: 'João Marcos', idade: 25, sobrenome: 'Popinhak'});
