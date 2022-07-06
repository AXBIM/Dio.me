// calculadora

// função primordial
function Calculadora_Completa() {

   let resultado;

   const PRIMEIRA_MENSAGEM = Number(prompt('O que deseja: \n 1 - Somar \n 2 - Subtrair \n 3 - Multiplicar \n 4 - Dividir')); //primeira msg


function NumeroSoma () {
   n1 = Number(prompt ('Insira o primeiro valor')); //pega valores
   n2 = Number(prompt('Insira o segundo valor'));

}

   // let n1 = Number(prompt ('Insira o primeiro valor')); //pega valores
   // let n2 = Number(prompt('Insira o segundo valor'));




   function RepetirOperacao () { //para o término da calculadora
      const QUER_REPETIR = Number (prompt('Deseja reiniciar a calculadora? \n 1 - Sim \n 2 - Não'));
      if (QUER_REPETIR == 1) { Calculadora_Completa ();}
      if (QUER_REPETIR == 2) { alert ('Clique no "X" no canto superior direito do navegador para fechar esse site.\n \n \n Adeus!');}
      else (alert ('Opção inválida')); RepetirOperacao ();

   }

   function soma () {
      NumeroSoma ();
      resultado = n1 + n2;
      alert (`O resultado da soma é: ${resultado}`);
      RepetirOperacao ();
   }
   function subtrair () {
      NumeroSoma ();
      resultado = n1 - n2;
      alert (`O resultado da subtração é: ${resultado}`);
      RepetirOperacao ();
   }
   function multiplicar () {
      NumeroSoma ();
      resultado = n1 * n2;
      alert (`O resultado da multiplicação é ${resultado}`);
      RepetirOperacao ();

   }
   
   function dividir () {
      NumeroSoma ();
      resultado = n1 / n2;
      alert (`O resultado da divisão é: ${resultado}`);
      RepetirOperacao ();
   }
   switch (PRIMEIRA_MENSAGEM) {
      case 1:
         soma ();
         break;
         case 2:
            subtrair ();
            break;
   }
   if (PRIMEIRA_MENSAGEM == 3) {
      multiplicar ();
   }
         else if (PRIMEIRA_MENSAGEM == 4){
            dividir ();
         }
   
} //termina a função calculadora

Calculadora_Completa (); //chama a função Calculadora