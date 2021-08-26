let salario=parseFloat(prompt('insira o salario base'));
const impostoPagar = 0.1;
const gradificacao = 600;
salarioNovo=salario+gradificacao-(salario*impostoPagar);
console.log('o salario total a recebr sera ' + salarioNovo)