/**
 * aula 24 - Template String
 */

let nome = 'João';
let idade = 25;

// Antes do template string, era necessário concatenar as variáveis com o texto usando o operador +, o que tornava o código mais difícil de ler e escrever.
let mensagem = 'Olá, meu nome é ' + nome + ' e tenho ' + idade + ' anos.';
console.log(mensagem);

// Com o template string, é possível incluir as variáveis diretamente dentro da string usando a sintaxe ${variável}, o que torna o código mais legível e fácil de escrever.
let mensagem2 = `Olá, meu nome é ${nome} e tenho ${idade} anos.`;
console.log(mensagem2);

// O template string também permite criar strings multilinha, o que facilita a formatação de textos mais longos.
let mensagem3 = `Olá, meu nome é ${nome} e tenho ${idade} anos.
Eu gosto de programar em JavaScript.`;
console.log(mensagem3);

// Além disso, é possível realizar operações dentro do template string, como por exemplo, calcular a idade do próximo ano.
let mensagem4 = `Olá, meu nome é ${nome} e tenho ${idade} anos e ano que vem eu farei ${idade + 1} anos.`;
console.log(mensagem4);