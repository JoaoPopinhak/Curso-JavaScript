/**
 * Intervalos
 */
let timer;

function rodar(){
    timer = setTimeout(function(){ //O set timeout é uma função que recebe outra função como parâmetro e um tempo em milissegundos, e executa a função após o tempo determinado.
        document.querySelector('.demo').innerHTML = 'Rodou';
    }, 2000);
}

function parar(){
    clearTimeout(timer);// O clearTimeout é uma função que recebe um timer como parâmetro e cancela a execução do timer, ou seja, impede que a função seja executada após o tempo determinado.
}

document.querySelector('#parar').addEventListener('click', parar);
document.querySelector('#comecar').addEventListener('click', rodar);