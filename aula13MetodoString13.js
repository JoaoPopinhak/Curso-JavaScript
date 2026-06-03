let nome = 'João Marcos Rodrigues';

console.log(nome.length); // Quantidade de caracteres
console.log(nome.toUpperCase()); // Deixa tudo maiúsculo
console.log(nome.toLowerCase()); // Deixa tudo minúsculo
console.log(nome.concat(' - Curso de JavaScript')); // Concatena uma string com outra
console.log(nome.trim()); // Remove os espaços em branco do início e do fim da string
console.log(nome.charAt(0)); // Retorna o caractere na posição especificada
console.log(nome.split(' ')); // Divide a string em um array de strings usando o espaço como separador
console.log(nome.indexOf('Marcos')); // Retorna a posição do início da palavra
console.log(nome.slice(0, 4)); // Recorta a string (início, fim) somente uma pequena diferença do substring é que o slice aceita números negativos para contar de trás para frente
console.log(nome.substring(0, 4)); // Recorta a string (início, fim) - mesma função do slice
console.log(nome.substr(0, 4)); // Recorta a string (início, quantidade de caracteres) - mesma função do slice, mas o segundo parâmetro é a quantidade de caracteres a ser recortada a partir do início
console.log(nome.replace('Rodrigues', 'Silva')); // Substitui uma parte da string por outra  
