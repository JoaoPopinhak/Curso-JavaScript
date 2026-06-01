/**
 * Aula 40 - Asyn/Await
 *
 * API FAKE: https://jsonplaceholder.typicode.com/users
 */

async function lerAPI() {
  let postArea = document.querySelector(".demo");
  postArea.innerHTML = "Carregando...";

  let promise = await fetch("https://jsonplaceholder.typicode.com/users");
  let json = await promise.json();
  montarTela(json);
}

function montarTela(json) {
let postArea = document.querySelector(".demo");
  postArea.innerHTML = json.length + "Usuários";
  
  for (let i in json) {
    postArea.innerHTML += 
        `<div>
            <h1>Name: ${json[i].name}</h1>
            <p>Sobrenome: ${json[i].username}</p>
            <p>Email: ${json[i].email}</p><br>
            <p>Endereço</p>
            <p>Rua: ${json[i].address.street}</p>
            <p>Complemento: ${json[i].address.suite}</p>
            <p>Cidade: ${json[i].address.city}</p>
            <p>CEP: ${json[i].address.zipcode}</p>
        </div>`;
  }
}


document.querySelector("#comecar").addEventListener("click", lerAPI);


