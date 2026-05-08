/**
 * Aula 27 - ArrowFunction
 */

//Formas de criar funções 


function somar(x,y){
    return x + y;
}

let soma = function(z,a){
    return  z + a;
}

//Formas de utilizar Arrow Function

let somar = (x,y) => {return x + y}

let somar2 = (x,y) => x+y

let letrasNoNome = (nome) => {return nome.length}

let letrasNome = (nome) => nome.length;

let letrasNome2 = nome => nome.length;
