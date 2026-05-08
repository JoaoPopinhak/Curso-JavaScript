/**
 * Métodos de envio de requisição
 * 
 * GET, POST, PUT, DELETE
 * 
 * GET: Solicita dados de um recurso específico. Exemplo: Obter informações de um usuário.
 * POST: Envia dados para criar um novo recurso. Exemplo: Criar um novo post em um blog.
 * PUT: Envia dados para atualizar um recurso existente. Exemplo: Atualizar as informações de um usuário.
 * DELETE: Solicita a exclusão de um recurso específico. Exemplo: Excluir um post em um blog.
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

    alert("clicou");
}


function inserir(){
    fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: 'Título teste',
                body: 'Corpo teste',
                userId: 2
            })
        }
    ).then((response) =>{
        return response.json();
    }).then((json) =>{
        console.log(json);
    })
}

document.querySelector("#button").addEventListener("click",clicou); 
document.querySelector("#inserir").addEventListener("click", inserir); 

