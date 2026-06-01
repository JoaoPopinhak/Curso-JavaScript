/**
 *  Aula 28 OPerador Spread
 */

let array = [1,2,3,4,5];
// O operador Spread você pode criar um novo array ou objeto apartir de outro já existente.(...nomeArray, novasInformacoes)
let array2 = [...array, 6,7,8,9,10];


//O mais utilizado é com objetos em funções onde você recria um novo objeto apartir de outro já exisistente.

let info = {
    nome: 'João',
    sobrenome: 'Marcos',
    idade: 25
}

let infoComplemento = {
    ...info,
    cidade: 'Criciúma',
    pais: 'Brasil'
}

//Utilizando Spread dentro de uma função

function adicionarInfo(Info){
    let novasInfo = {
        ...Info,
        status: 0,
        token: 'abcd'
    }
    return novasInfo
}

console.log(adicionarInfo(infoComplemento));