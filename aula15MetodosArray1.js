/**
 * Aula 15 / 16 - Métodos de arrays
 */


let lista = ['Ovo','Farinha','Molho','Massa'];
let lista2 = ['Tomate','Cebola','Alho'];
let res = null;

lista[0] = 'Ovos'; // Modifica o valor do elemento no índice 0 do array

lista.sort(); // Ordena os elementos do array em ordem alfabética (ou numérica, dependendo do tipo de dados)   
lista.reverse(); // Inverte a ordem dos elementos do array

res = lista.concat(lista2); // Concatena dois arrays e retorna um novo array resultante da concatenação

delete lista[1]; // Remove o elemento no índice 1 do array, deixando um "buraco" (undefined) nesse índices

lista.splice(1, 1); // Remove o elemento no índice 1 do array e os elementos subsequentes são movidos para preencher o espaço vazio
lista.pop(); // Remove o último elemento do array e retorna esse elemento
lista.shift(); // Remove o primeiro elemento do array e retorna esse elemento

lista.push('Queijo'); // Adiciona um novo elemento ao final do array e retorna o novo comprimento do array
lista.unshift('Leite'); // Adiciona um novo elemento no início do array e retorna o novo comprimento do array

res = lista.toString(); // Converte o array em uma string, separando os elementos por vírgula
res = lista.join(' - '); // Converte o array em uma string, separando os elementos por um delimitador personalizado
res = lista.indexOf('Molho'); // Retorna o índice do primeiro elemento encontrado no array, ou -1 se não for encontrado

































