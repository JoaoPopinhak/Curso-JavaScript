/**
 * Intervalos
 */
let timer;

function showTime(){
    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundo = data.getSeconds();

    console.log(`${hora}:${minuto}:${segundo}`);

    let txt = hora + ':' + minuto + ':' + segundo;

    document.querySelector('.demo').innerHTML = txt;
}

function comecar(){
    timer = setInterval(showTime, 1000);// O setInterval() é uma função que recebe outra função e um tempo em milissegundos, e executa a função a cada intervalo de tempo especificado.
}

function parar(){
    timer = clearInterval(timer);// O clearInterval() é uma função que recebe o identificador do intervalo retornado pelo setInterval() e cancela a execução da função associada a esse intervalo.
}

document.querySelector('#comecar').addEventListener('click', comecar);
document.querySelector('#parar').addEventListener('click', parar);












