var valorCarro=parseFloat(prompt('Insira o preço da fabrica'));
var lucro=parseFloat(prompt('Insira a porcentagem de lucro'));
var imposto=parseFloat(prompt('Insira a taxa de tributos'));

lucros=valorCarro*(lucro/100);
tributos=valorCarro*(imposto/100);
valorFinal=valorCarro+tributos+lucros;
console.log('lucro do distribuidor foi de : '+lucros);  
console.log('valor do tributos sao de : '+tributos);  
console.log('O valor final foi de : '+valorFinal);