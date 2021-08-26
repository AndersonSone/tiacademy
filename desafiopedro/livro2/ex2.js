var horas= parseFloat(prompt('Digite o numero de horas trabalhada '));  
var salMin=parseFloat(prompt('Digite o salario minimo'));  
horasGanho=salMin/2;  
salBruto=horasGanho*horas;  
imposto=salBruto*0.03;   
salarioReal=salBruto-imposto;  
console.log('Salario a receber :  '+ salarioReal);  
