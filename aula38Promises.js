/**
 * Aula 38 - Promises
 */

function pegarTemperatura(){
    return new Promise(function(resolve, reject){
        console.log('Pegando temperatura...');

        setTimeout(() => {resolve('40° na sombra')}, 2000);
    })
}

//Usando PROMISE
let temp = pegarTemperatura();
temp.then((resultado) =>{
    console.log('Temperatura recebida: ' + resultado);
});

temp.catch((erro) => {
    console.log('Ocorreu um erro: ' + erro);
});