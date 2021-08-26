let n1=parseFloat(prompt('digite a nota 1 '));
let p1=parseFloat(prompt('digite o peso da 1 '));
let n2=parseFloat(prompt('digite a nota 2 '));
let p2=parseFloat(prompt('digite o peso da 2 '));
let n3=parseFloat(prompt('digite a nota 3 '));
let p3=parseFloat(prompt('digite o peso da 3 '));
mediapeso=((n1*p1)+(n2*p2)+(n3*p3))/(n1+n2+n3);
console.log('a media com peso deu :'+ mediapeso)