let n1=parseFloat(prompt('digite o valor da base'));
console.log(n1); 
let n2=parseFloat(prompt('digite o valor da altura'));
console.log(n2);
let op=parseInt(prompt('opçao sao '+'<br>'+'0 para calcular periemtro'+'<br>'+'1 para area'));
console.log(op);
switch (op){
	case 0: 
	console.log('perimetro é : '+ (2*n1+2*n2));  
	break;  
	case 1 :  
	console.log('A area é de : '+(n1*n2));  
	break;
} 
