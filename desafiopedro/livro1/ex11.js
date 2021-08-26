let segundos = parseInt(prompt(' valor em segundos do cronometro'));  
horas=parseInt(segundos/3600);
console.log(horas);
minutos=parseInt((segundos%3600)/60);  
console.log(minutos);
segundosrest= parseInt((segundos%3600)%60);
console.log(segundosrest);   
console.log('cronometro marcou'+horas+' hora(s) '+minutos+' minuto(s) '+segundosrest+' segundos');