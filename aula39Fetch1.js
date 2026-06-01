/**
 * Aula 39 - Fecth 1 e Fetch 2
 *
 * API FAKE: https://jsonplaceholder.typicode.com/users
 */

function lerAPI() {
  let postArea = document.querySelector(".demo");
  postArea.innerHTML = "Carregando...";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((promise) => {
      postArea.innerHTML = "";
      return promise.json();
    })
    .then((json) => {
        montarTela(json);
    })
    .catch((erro) => {
      console.log("Deu pau " + erro);
    });
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


