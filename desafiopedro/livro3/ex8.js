let n1=parseFloat(prompt('digite o valor da nota 1'));
console.log(n1); 
let n2=parseFloat(prompt('digite o valor da nota 2'));
console.log(n2);
let n3=parseFloat(prompt('digite o valor da nota 3'));
console.log(n3);
med=(n1+n2+n3)/3;  
if(med<3){
	console.log('Reprovado');
}
if(med>=3 && med<7){
	console.log('Exame');
}
if(med>=7 && med<=10){
	console.log('Aprovado')
}