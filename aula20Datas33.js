/**
 * Aula 20 - Datas (3/3)
 */

let d = new Date();

d.setFullYear(2020); //Altera o ano da data.
d.setMonth(1); //Altera o mês da data. O mês é contado a partir de 0, ou seja, 0 = janeiro, 1 = fevereiro, 2 = março, etc.
d.setDate(15); //Altera o dia do mês da data.
//d.setDay(3); //Altera o dia da semana da data. O dia da semana é contado a partir de 0, ou seja, 0 = domingo, 1 = segunda-feira, 2 = terça-feira, etc.
d.setHours(10); //Altera a hora da data.
d.setMinutes(30); //Altera os minutos da data.
d.setSeconds(45); //Altera os segundos da data.
d.setMilliseconds(500); //Altera os milissegundos da data.
d.setTime(1584104400000); //Altera a quantidade de milissegundos desde 1 de janeiro de 1970 00:00:00 UTC.

d.setDate(d.getDate() + 5); //Altera o dia do mês da data, adicionando 5 dias à data atual. O método getDate() retorna o dia do mês da data, e o método setDate() altera o dia do mês da data.
d.setHours(d.getHours() - 3); //Altera a hora da data, subtraindo 3 horas da data atual. O método getHours() retorna a hora da data, e o método setHours() altera a hora da data.