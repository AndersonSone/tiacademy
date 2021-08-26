let lab=parseFloat(prompt('digite a nota de trabalho'));
console.log(lab); 
let semestral=parseFloat(prompt('digite a nota de avaliaçao'));
console.log(semestral);
let exame=parseFloat(prompt('digite a nota de exame'));
console.log(exame);
nota = (lab*2+semestral*3+exame*5)/10;   
if (nota>=0 && nota<5){
	console.log('Conceito E');
}
if (nota>=5 && nota<6){
	console.log('Conceito D');
}
if (nota>=6 && nota<7){
	console.log('Conceito C');
}
if (nota>=7 && nota<8){
	console.log('Conceito B');
}
if (nota>=8 && nota<=10){
	console.log('Conceito A');
}