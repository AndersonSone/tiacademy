console.log('Digite 1 para somar; '); 
console.log('Digite 2 para subtrair ;'); 
console.log('Digite 3 para multiplicar ;'); 
console.log('Digite 4 para dividir ;');
let op = parseInt(prompt('escolha entre 1 a 4 :'))
let n1=parseFloat(prompt('digite o numero 1'));
console.log(n1); 
let n2=parseFloat(prompt('digite o numero 2'));
console.log(n2);
switch(op){
	case 1 :
	console.log('soma : '+ (n1+n2));
	break;  
	case 2 :
	console.log('subtracao : '+ (n1-n2));  
	break;  
	case 3 :
	console.log('produto : '(n1*n2));  
	break;  
	case 4 :
	console.log('divisao : '+(n1/n2));  
	break;  
	default:

}