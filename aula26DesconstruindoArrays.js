/**
 * Aula 26 - Desconstruindo arrays
 */

let nomes = ['João', 'Maria', 'Pedro'];

// Desconstrução de arrays - Para pegar os elementos de um array e criar variáveis com o mesmo nome, basta usar a sintaxe abaixo:
let [nome1, nome2, nome3] = nomes;

console.log(nome1); // João
console.log(nome2); // Maria
console.log(nome3); // Pedro

// Desconstrução de arrays - Para pegar os elementos de um array e criar variáveis com o mesmo nome, basta usar a sintaxe abaixo:
let [n1, n2, n3] = nomes;

console.log(n1); // João
console.log(n2); // Maria
console.log(n3); // Pedro

// Desconstrução de arrays - Para pegar os elementos de um array e criar variáveis com o mesmo nome, basta usar a sintaxe abaixo:
let [primeiro, segundo] = nomes;

console.log(primeiro); // João
console.log(segundo); // Maria

// Desconstrução de arrays - Para pegar os elementos de um array e criar variáveis com o mesmo nome, basta usar a sintaxe abaixo:
let [primeiroNome, , terceiroNome] = nomes;

console.log(primeiroNome); // João
console.log(terceiroNome); // Pedro

// Desconstrução de arrays - Para pegar os elementos de um array e criar variáveis com o mesmo nome, basta usar a sintaxe abaixo:
let [primeiroN, ...resto] = nomes;

console.log(primeiroN); // João
console.log(resto); // ['Maria', 'Pedro']

// Desconstrução de arrays - Para pegar os elementos de um array e criar variáveis com o mesmo nome, basta usar a sintaxe abaixo:
let [p1, p2, p3, p4 = 'Sem nome'] = nomes;

console.log(p1); // João
console.log(p2); // Maria
console.log(p3); // Pedro
console.log(p4); // Sem nome

// Desconstrução de arrays - Para pegar os elementos de um array e criar variáveis com o mesmo nome, basta usar a sintaxe abaixo:
let [numero1, numero2, numero3] = [1, 2, 3];

console.log(numero1); // 1
console.log(numero2); // 2
console.log(numero3); // 3

// Desconstrução de arrays - Para pegar os elementos de um array e criar variáveis com o mesmo nome, basta usar a sintaxe abaixo:
function pegarNomes([n1, n2, n3]){
    return `${n1}, ${n2} e ${n3}`;
}

console.log(pegarNomes(nomes)); // João, Maria e Pedro      


