let salario=parseFloat(prompt('valor do salario'));
const impostoPagar = 0.07;
const gradificacao = 0.05;
salarionovo=salario + salario*gradificacao - salario*impostoPagar; 
console.log(salarionovo);