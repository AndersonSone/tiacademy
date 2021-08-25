 var nome = prompt("Qual o seu nome");
 var numero = prompt(nome + " , escolha um numero agora ");
 numero = parseInt(numero);
 var n = 20;
 var comparacao = (numero == n);
 var soma = (n + numero);
 var subtracao = (numero - n);
 var resto = (numero % n);
 var exp = (numero * numero);
 document.write("1. Seja bem vindo ..; "+ nome + "<br>");
 document.write("3. Voce digitou o numero ..; ("+ numero +")" + "<br>");
 document.write("4. O retorno da comparacao booleana foi ..; "+ comparacao + "<br>");
 document.write("5. A soma dos valores é ..; "+ soma + "<br>");
 document.write("6. A subtracao dos valores é ..; "+ subtracao + "<br>");
 document.write("7. O resto da divisao é de ..; "+ resto + "<br>");
 document.write("8. O quadrado desse numero digitado foi ..; "+ exp + "<br>");
 
