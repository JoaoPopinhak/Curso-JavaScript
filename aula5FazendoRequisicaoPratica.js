
/*
Fazendo uma requisição prática usando a API Fetch para obter dados de um servidor e exibir no console.

O método fetch() é uma função nativa do JavaScript que permite fazer requisições HTTP de forma simples e fácil. Ele retorna uma Promise que resolve para a resposta da requisição.

O método then() é usado para lidar com a resposta da requisição. Ele recebe uma função de callback que é executada quando a Promise é resolvida. A resposta da requisição é passada como argumento para essa função de callback.

Após obter a resposta da requsição ele retorna um objeto JSON, que é convertido usando o método json() da resposta. O resultado é uma nova Promise que resolve para o objeto JSON.

Em seguida é utilizado outro método then() para lidar com o objeto JSON. Ele recebe uma função de callback que é executada quando a Promise é resolvida. O objeto JSON é passado como argumento para essa função de callback.

*/

function clicou(){
    fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>{
        return response.json();
    }).then((json) => {
        console.log(json[0].title);
    });
}

document.querySelector("button").addEventListener("click",clicou);