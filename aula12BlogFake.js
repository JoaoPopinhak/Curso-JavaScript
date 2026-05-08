
async function carregarPosts(){
    let postArea = document.querySelector('.posts');
    postArea.innerHTML = "Carregando...";


    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let json = await response.json();

    if(json.length > 0){
        postArea.innerHTML = "";
        for(let i in json){
            let postHtml = `<div>
                                <h1>${json[i].title}</h1>
                                ${json[i].body}</hr>
                            </div>`;
            postArea.innerHTML += postHtml; 
        }
    }else{
        postArea.innerHTML = "Nenhum post encontrado.";
    }
}

async function inserirPost(){
    let title = document.querySelector('#titleField').value;
    let body = document.querySelector('#bodyField').value;

    if(title && body){
            let response = await fetch('https://jsonplaceholder.typicode.com/posts',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    title,
                    body,
                    userId: 1
                }) 
            });
            
            title.value = "";
            body.value = "";

            carregarPosts();

            let json = await response.json();
            console.log(json);
    }else{
        console.log("Preencha os campos para inserir um post.");
    }
}


document.querySelector('#insertButton').addEventListener("click", inserirPost);
carregarPosts();