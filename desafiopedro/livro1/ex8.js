let deposito=parseFloat(prompt('valor do deposito'));
let juro = parseFloat(prompt('taxa de juro em porcentagem'));
rendimento=deposito*(juro/100);
valorTotal=deposito*(1+(juro/100));  
console.log('rendimento foi de  :'+ rendimento);
console.log('valor total  :'+ valorTotal);