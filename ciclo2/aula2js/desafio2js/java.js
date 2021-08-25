var nome = prompt("Qual o seu nome");
alert("uma string foi enviada");
var numero = prompt(nome + " , escolha um numero agora ");
alert("sera convertido em numero"); 
if (numero % 1 == 0){
    alert("numero digitado é um inteiro");
}else{
    alert("o numero nao é um inteiro");
}
numero = parseFloat(numero);
var n = 20;
var comparacao = (numero == n);
var soma = (numero + n);
var subtracao = (numero - n);
var resto = (numero % n);
var exp = (numero * numero);
document.write(typeof(nome)+"<br>")
document.write("1. Seja bem vindo ..; "+ nome + "<br>");
document.write("3. Voce digitou o numero ..; ("+ numero +")" + "<br>");
document.write("4. O retorno da comparacao booleana foi ..; "+ comparacao + "<br>");
document.write("5. A soma dos valores é ..; "+ soma + "<br>");
document.write("6. A subtracao dos valores é ..; "+ subtracao + "<br>");
document.write("7. O resto da divisao é de ..; "+ resto + "<br>");
document.write("8. O quadrado desse numero digitado foi ..; "+ exp + "<br>");
var fruta = prompt("escolha entre essas 4 frutas [Laranja , Manga , Pera ou Uva colocando a primeira letra em maiusculo")
switch(fruta){
    case  "Manga":
        document.write("voce digitou Manga pelas opcao");
    break;
    case "Laranja":
        document.write("voce digitou Laranja pelas opcao");
    break;
    case "Uva":
        document.write("voce digitou Uva pelas opcao");
    break;
    case "Pera":
        document.write("voce digitou Pera pelas opcao");
    break;
    default:
        document.write(nome+" voce digitou algo que nao esta na lista");
    break;  }      