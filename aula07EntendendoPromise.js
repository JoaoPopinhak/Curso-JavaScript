/*
Entendendo Promise

Promise = Promessa
Uma Promise é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona. Ela pode estar em um dos seguintes estados:
- Pendente (Pending): O estado inicial da Promise, onde a operação assíncrona ainda não foi concluída.
- Resolvida (Fulfilled): A operação assíncrona foi concluída com sucesso e a Promise foi resolvida com um valor.
- Rejeitada (Rejected): A operação assíncrona falhou e a Promise foi rejeitada com um motivo.

As Promises são usadas para lidar com operações assíncronas de forma mais organizada e legível, evitando o chamado "callback hell" (inferno dos callbacks) que pode ocorrer quando se aninham muitos callbacks.

O método then() é usado para lidar com o resultado de uma Promise resolvida, enquanto o método catch() é usado para lidar com erros em uma Promise rejeitada. Ambos os métodos retornam uma nova Promise, permitindo encadeamento de operações assíncronas.

Exemplo de uso de Promise:

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json[0].title))
    .catch(error => console.error('Erro:', error));

Neste exemplo, a função fetch() retorna uma Promise que é resolvida quando a resposta da requisição é recebida. O método then() é usado para processar a resposta e extrair o JSON, e outro then() é usado para acessar o título do primeiro post. Se ocorrer algum erro durante a requisição ou processamento, o método catch() irá capturar e exibir o erro no console.
*/

function clicou(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            return response.json();
    })
        .then((json) => {
            alert(json[0].title);
    })

    alert("OPA, CLICOU");
}

document.querySelector("button").addEventListener("click",clicou); 