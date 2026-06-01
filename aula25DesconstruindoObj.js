/**
 * Aula 26 - Desconstruindo objetos
 */

let pessoa = {
    nome: 'João',
    sobrenome: 'Popinhak',
    idade: 25,
    social: {
        facebook: 'joao.popinhak',
        twitter: '@joaopopinhak',
        instagram:{
            url: 'teste',
            seguidores: 1000
        }
    },
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`;
    }
};

// let nome = pessoa.nome;
// let sobrenome = pessoa.sobrenome;
// let idade = pessoa.idade;
// let facebook = pessoa.social.facebook;
// let twitter = pessoa.social.twitter;

// Desconstrução de objetos - Para pegar as propriedades de um objeto e criar variáveis com o mesmo nome, basta usar a sintaxe abaixo:
let {nome:pessoaNome, sobrenome, idade:old = 25} = pessoa;

// Para pegar as propriedades de um objeto e criar variáveis com o mesmo nome, basta usar a sintaxe abaixo:
let {facebook:face, twitter} = pessoa.social;

// Uma outra forma de pegar as propriedades de um objeto e criar variáveis com o mesmo nome, é usando a sintaxe abaixo:
let {nome, idade:ida, social: {facebook}} = pessoa;

// Para pegar as propriedades de um objeto e criar variáveis com o mesmo nome, basta usar a sintaxe abaixo:
let{nome:n, idade:idas, social:{instagram:{url}}} = pessoa;

// Para pegar as propriedades de um objeto e criar variáveis com o mesmo nome, basta usar a sintaxe abaixo:
function pegarNomeCompleto(obj){//É possível desconstruir o objeto diretamente na assinatura da função, basta usar a sintaxe acima.
    return `${obj.nome} ${obj.sobrenome}`;
}

// Para pegar as propriedades de um objeto e criar variáveis com o mesmo nome, basta usar a sintaxe abaixo:
function pegarNomeCompleto({nome, sobrenome}){//É possível desconstruir o objeto diretamente na assinatura da função, basta usar a sintaxe acima.
    return `${nome} ${sobrenome}`;
}

console.log(pegarNomeCompleto(pessoa));