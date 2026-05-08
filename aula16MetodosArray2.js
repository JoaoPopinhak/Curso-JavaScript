/**
 * Aula 16 - Métodos de arrays (continuação)
 */

let lista = [45 ,4 ,9 ,16 ,25];
let lista2 = [];

lista2 = lista.map(function(index){ // O método map() cria um novo array com os resultados da chamada de uma função para cada elemento do array. Ele percorre cada elemento do array original e aplica a função fornecida, retornando um novo array com os valores resultantes.
    return index * 2; // Retorna um novo array com os valores multiplicados por 2
}); 

lista2 = lista.filter(function(index){ // O método filter() cria um novo array com todos os elementos que passam no teste implementado pela função fornecida. Ele percorre cada elemento do array original e aplica a função fornecida, retornando um novo array com os elementos que retornam true.
    if(index > 10){ // Retorna um novo array com os valores maiores que 10
        return true; // Retorna true para os valores maiores que 10, ou false caso contrário
    } else {
        return false; // Retorna false para os valores menores ou iguais a 10, ou true caso contrário
    }
});

lista2 = lista.every(function(index){ // O método every() testa se todos os elementos do array passam no teste implementado pela função fornecida. Ele percorre cada elemento do array original e aplica a função fornecida, retornando true se todos os elementos passarem no teste, ou false caso contrário.
    if(index > 10){ // Retorna true se todos os valores forem maiores que 10, ou false caso contrário
        return true; // Retorna true para os valores maiores que 10, ou false caso contrário
    } else {
        return false; // Retorna false para os valores menores ou iguais a 10, ou true caso contrário
    }
});

lista2 = lista.some(function(index){ // O método some() testa se pelo menos um elemento do array passa no teste implementado pela função fornecida. Ele percorre cada elemento do array original e aplica a função fornecida, retornando true se pelo menos um elemento passar no teste, ou false caso contrário.
    return (index > 10)?true:false; // Retorna true se pelo menos um valor for maior que 10, ou false caso contrário
});

let res = lista2;
console.log(res);