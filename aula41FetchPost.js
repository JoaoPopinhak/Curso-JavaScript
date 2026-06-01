/**
 * AUla 41 - Fetch com POST
 */


async function inserirNovoUser(){
    let areaText = document.querySelector('.demo');
    areaText.innerHTML = 'Carregando...';

    let promise = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            nomeUsuario: 'João Marcos',
            sobrenome: 'Popinhak',
            age: 25,
            email: 'joaomr@hotmail.com',
            address: {
                street: 'Rua lages',
                city: 'Curitibanos'
            }
        })
    });
    let json = await promise.json();

    areaText.innerHTML = "";

    console.log(json);
}

document.querySelector('#parar').addEventListener('click',inserirNovoUser);