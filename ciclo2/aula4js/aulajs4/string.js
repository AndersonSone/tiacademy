/*
var nome='sone'; 
console.log(nome.length);
console.log(nome[0]);
*/
///match() procura dentro da string 
var palavra = 'maça doce';  
/*

console.log(palavra.match(/d/gi));//usa gi para procura tanto maiscula como miniscula 

console.log(palavra.search(/d/gi));   
*/
//replace() substitui uma para outra
/*
var str ="lorem ipsum"+"elite prove";   
var muda = str.replace(/e/gi,'x');  
console.log(muda);
*/
//localcompare() 0 se for igual e 1 ou -1 se for diferente   .tolowercase() para deixa td minuscuolo e
/*
var comp1 ='comparar';
var comp2='comparar';
var c1=comp1.toLowerCase()
var c2=comp2.toLowerCase()


var compnumero=comp1.localeCompare(comp2);
console.log(compnumero);
*/

//trim() remove espaço no fim do inicio   replace(/procurando/gi,'troca por')
/*
var p = '  fpalavra+  ';
var r = p.trim(); 
var s =r.replace(/f/gi,'')
console.log(s)
var suba = s.replace(/"+"/gi,'');
console.log(suba);  
///console.log(p.trim());  //trim('oq coloca aqi coloca no inicioo e fim')  */


///tolocalestring
var valor= 1.35;  
var formatamoeda=valor.toLocaleString('pt-BR',{
	style:'currency', 
	currency:'BRL'
})
console.log(formatamoeda);