// Atividade
// Crie uma função que recebe dois números como parâmetros.
// Confira se os números são iguais.
// Confira se a soma dos números é maior que 10 ou menor que 20.
// Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".
// Exemplo:

// Input: 1, 2
// Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.

 console.log ('tudo certo');

function doisNumeros (n1, n2) {

        //Confere se os números são iguais e imprime resposta no console
let saoIguais =``; //vazio - para receber comparação
let resultadoIgualdade = ``; //vazio - para receber frase final após comparação
  function verificadorDeIgualdade (n1, n2) {
    saoIguais = n1 != n2 ? 'não são' : 'são'; //imprime frase de acordo com boolean: false = não são; true = são;
    return resultadoIgualdade =`Os números ${n1} e ${n2} ${saoIguais} iguais`; //imprime string relatando a comparação entre os números
  }
verificadorDeIgualdade (n1, n2); //chama função
console.log (resultadoIgualdade); //imprime resposta no console
//
// 
// Faz soma
let soma = n1 + n2;
let som10;
if (soma > 10) {
  som10 ="maior";
}
else som10 = "menor";

let som20;
if (soma > 20) {
  som20 = "maior";
}
else som20 = "menor";

let resultadoSoma = `Sua soma é ${soma}, que é ${som10} que 10 e ${som20} que 20.`;
//Sua soma é 3, que é menor que 10 e menor que 20.
console.log (resultadoSoma);
}
 doisNumeros(1, 2); //chama a função; entra com números de exemplo da atividade