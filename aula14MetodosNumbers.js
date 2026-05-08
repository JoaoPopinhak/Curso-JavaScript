/**
 * Aula 14 - Métodos de Numbers
 * 
 * No caso dos números, existem vários métodos disponíveis para realizar operações matemáticas, arredondar valores, converter tipos de dados e muito mais. Alguns exemplos de métodos de números incluem:
 * 
 * - `toFixed()`: Arredonda um número para um número específico de casas decimais.
 * - `toString()`: Converte um número em uma string.
 * - `parseInt()`: Converte uma string em um número inteiro.
 * - `parseFloat()`: Converte uma string em um número de ponto flutuante.
 * - `isNaN()`: Verifica se um valor é NaN (Not a Number).
 * 
 * Esses métodos são úteis para realizar operações comuns em números, como arredondar valores, converter tipos de dados e validar entradas. Eles ajudam a simplificar o código e a tornar as operações com números mais eficientes.
 * 
 */

let num = 3.14159
console.log(num.toFixed(2)); // Arredonda para 2 casas decimais 
console.log(num.toString()); // Converte o número em uma string
console.log(num = parseInt("42")); // Converte a string "42" em um número inteiro
console.log(num = parseFloat("3.14")); // Converte a string "3.14" em um número de ponto flutuante
console.log(isNaN("abc")); // Verifica se "abc" é NaN (Not a Number) - retorna true
console.log(isNaN(123)); // Verifica se 123 é NaN - retorna false   