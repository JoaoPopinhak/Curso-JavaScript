/**
 * Tipos de status HTTP
 * 
 * https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Status
 * 
 * Link onde descreve os erros HTTP
 * 
 */


function clicou(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            console.log(`Status: ${response.status}`);
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