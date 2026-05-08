/*
Gerenciando erros

Ao lidar com operações assíncronas usando Promises, é importante gerenciar erros de forma adequada para garantir que seu aplicativo seja robusto e confiável. O método catch() é usado para capturar e lidar com erros que ocorrem durante a execução de uma Promise.

Exemplo de uso do catch():

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json[0].title))
    .catch(error => console.error('Erro:', error));     

Neste exemplo, se ocorrer algum erro durante a requisição ou processamento da resposta, o método catch() irá capturar o erro e exibi-lo no console. Isso é especialmente útil para lidar com erros de rede, erros de sintaxe ou qualquer outro tipo de falha que possa ocorrer durante a execução de uma operação assíncrona.

Exemplo de uso do finally():

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json[0].title))
    .catch(error => console.error('Erro:', error))
    .finally(() => {
        console.log('Operação concluída, seja com sucesso ou com erro.');
    });

O método finally() é usado para executar um bloco de código independentemente do resultado da Promise, ou seja, ele será executado tanto em casos de sucesso quanto em casos de erro. Isso é útil para realizar ações de limpeza ou exibir mensagens de status, garantindo que certas operações sejam sempre executadas, independentemente do resultado da Promise. 
*/ 

function clicou(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            return response.json();
    })
        .then((json) => {
            alert(json[0].title);
    })  
        .catch((erro) => {
            alert("Deu erro: "+erro);
    })
        .finally(() => {
            alert("Sempre executa");
    })
}

document.querySelector("button").addEventListener("click",clicou); 