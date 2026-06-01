/**
 * Aula 43 - Thumbnails
 */

function enviar(){
    let imagem = document.getElementById('arquivo').files[0];// O método getElementById() é usado para acessar o elemento HTML com o ID 'arquivo'. Em seguida, a propriedade files é usada para obter a lista de arquivos selecionados, e [0] é usado para acessar o primeiro arquivo da lista.

    let img = document.createElement('img'); // O método createElement() é usado para criar um novo elemento HTML. Neste caso, estamos criando um elemento de imagem (img).
    img.src = URL.createObjectURL(imagem); // O método createObjectURL() é usado para criar uma URL temporária que representa o arquivo selecionado. Essa URL pode ser usada como fonte (src) para exibir a imagem.
    img.width = 100; // Define a largura da imagem para 100 pixels. Isso é feito para criar uma miniatura (thumbnail) da imagem original.

    document.querySelector('.demo').appendChild(img); // O método appendChild() é usado para adicionar um novo nó (neste caso, a imagem criada) como filho de um elemento existente (neste caso, o elemento com a classe 'demo').
}