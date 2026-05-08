/**
 * Promises com Async/Await
 * 
 * Async/Await é uma sintaxe mais moderna e legível para lidar com Promises em JavaScript. Ele permite escrever código assíncrono de forma mais síncrona, facilitando a leitura e manutenção do código.
 * 
 * A palavra-chave "async" é usada para declarar uma função assíncrona, enquanto "await" é usada para esperar a resolução de uma Promise dentro dessa função. Isso torna o código mais fácil de entender e evita o uso excessivo de callbacks ou encadeamento de Promises.
 *
 */

async function clicou(){

    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json();
    alert(`Título: ${json[0].title}`);
    alert("clicou");
}


async function inserir(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: 'Título teste',
                body: 'Corpo teste',
                userId: 2
            })
        }
    )
    let json = await response.json();
    alert(json);  
    alert("CLicou");
}

document.querySelector("#button").addEventListener("click",clicou); 
document.querySelector("#inserir").addEventListener("click", inserir);  