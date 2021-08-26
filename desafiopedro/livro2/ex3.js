let pesoSaco=parseFloat(prompt('Qual o peso do saco'));  
let nGatos=parseFloat(prompt('Qual o numero de gatos'));   
let pesoRacao=parseFloat(prompt('quantas gramas de racao por dia'));   
let dia=parseFloat(prompt('quantos dias'));   
///retornar quantos quilos sobra em 5 dias 
resto=pesoSaco-(nGatos*dia*(pesoRacao/1000));
console.log('apos '+dia+' dias sobrara : '+resto+' kg');