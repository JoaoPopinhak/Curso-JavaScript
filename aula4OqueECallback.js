/*
O que é Callback?
call back =  ligar de volta, ou seja, uma função que é passada como argumento para outra função e é executada depois que a função principal é concluída.
*/


function callBack(){
    alert("Botão clicado!");
}

document.querySelector("button").addEventListener("click", callBack);

/*
Exemplo de uma função que realiza uma requisição e depois executa a função callBack:
function clicarBotao(){
    realiza uma requisição a URL X
    depois que receber a resposta da requisição, executa a função callBack:
    callBack();
}
*/
