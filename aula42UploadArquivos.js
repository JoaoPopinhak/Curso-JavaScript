/**
 * Aula 42 
 */

async function enviar(){
    let arquivo = document.getElementById('arquivo').files[0];

    // FormData é um recurso do JavaScript para enviar arquivos via POST
    let body = new FormData();
    body.append('title','bla bla');
    body.append('Arquivo', arquivo);

    let responseFetch = await fetch('https://meu-servidor-fake.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data' // O Fetch não suporta enviar arquivos via POST, por isso é necessário usar o FormData
        },
        body: body
    })
}
