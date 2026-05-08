/**
 * Aula 18 - Datas
 */

let d = new Date(); //Cria um objeto do tipo data com a data atual. A data é criada com base no horário do computador do usuário.

console.log(d.toDateString()); //Exibe a data no formato (dia da semana, mês, dia do mês, ano).
console.log(d.toUTCString()); //Exibe a data no formato (dia da semana, dia do mês, mês, ano, hora:minuto:segundo GMT).
console.log(d.toString()); //Exibe a data no formato (dia da semana, mês, dia do mês, ano, hora:minuto:segundo GMT-0300 (Horário Padrão de Brasília)).

d = new Date(2020, 2, 1, 12, 30, 0); //Cria um objeto do tipo data com a data especificada. O mês é contado a partir de 0, ou seja, 0 = janeiro, 1 = fevereiro, 2 = março, etc. Os parametros são: ano, mês, dia, hora, minuto, segundo.
d = new Date("2020-03-01 15:42:17"); //Cria um objeto do tipo data com a data especificada. O formato da string deve ser (ano-mês-diaThora:minuto:segundo).
d = new Date(99999999999); //Cria um objeto do tipo data com a data especificada. O parametro é a quantidade de milissegundos desde 1 de janeiro de 1970 00:00:00 UTC.

console.log(d); //Exibe a data no formato (dia da semana, mês, dia do mês, ano, hora:minuto:segundo GMT-0300 (Horário Padrão de Brasília)).





















