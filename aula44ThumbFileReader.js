/**
 * Aula 44 - File Reader
 */

function enviar(){
    let reader = new FileReader(); // O construtor FileReader() é usado para criar um novo objeto FileReader, que é uma API do JavaScript para ler arquivos localmente no navegador.
    let imagem = document.getElementById('arquivo').files[0];

    reader.onload = function(){// O evento onload é acionado quando a leitura do arquivo é concluída com sucesso. A função anônima atribuída a onload será execut
        let img = document.createElement('img'); // O método createElement() é usado para criar um novo elemento HTML. Neste caso, estamos criando um elemento de imagem (img)

        img.src = reader.result; // A propriedade result do objeto FileReader contém o conteúdo do arquivo lido. Neste caso, estamos definindo a fonte (src) da imagem para o resultado da leitura do arquivo, que é uma URL de dados (data URL) representando a imagem.
        img.width = 100; // Define a largura da imagem para 100 pixels. Isso é feito para criar uma miniatura (thumbnail) da imagem original.

        document.querySelector('.demo').appendChild(img); // O método appendChild() é usado para adicionar um novo nó (neste caso, a imagem criada) como filho de um elemento existente (neste caso, o elemento com a classe 'demo').
    }
    
    reader.readAsDataURL(imagem);// O método readAsDataURL() é usado para ler o conteúdo do arquivo selecionado (imagem) e convertê-lo em uma URL de dados (data URL). Isso permite que a imagem seja exibida diretamente no navegador sem a necessidade de um servidor.
}