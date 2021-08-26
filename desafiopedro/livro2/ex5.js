var salarioMin=parseFloat(prompt('Insira o valor do salario minimo'));  
var kw=parseFloat(prompt('Insira quantidade gastos'));  
valKw=salarioMin/1000;  
kwGastos=valKw*kw ;
valorTotal=kwGastos*0.85;  
console.log('o valor por kw é de RS '+valKw);  
console.log('Valor a ser pago em RS '+kwGastos);
console.log('Valor com 15% de desconto é : '+valorTotal);  