let salario=parseFloat(prompt('valor do salario'));
let aumento = parseFloat(prompt('quantos porcentos aumento o salario'));
valorAumento=salario*(aumento/100);
novoSalario=salario*(1+(aumento/100));  
console.log('aumento foi de :'+ valorAumento);
console.log('o novo salario foi de :'+ novoSalario);