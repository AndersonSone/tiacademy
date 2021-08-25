window.onload=function(){
const n1 = document.querySelector("#n1");
const n2 = document.querySelector("#n2");
const soma = document.querySelector("#soma");
const bot = document.querySelector("#bot");

bot.addEventListener('click',()=>{
	var v1= n1.value;
	var v2 = n2.value;
	var somas = soma.value;
	//tanto parseint e number funciona só para teste
	var resul = Number(v1)+Number(v2)
	console.log(v1);
	console.log(v2);
	console.log(resul);
	console.log(somas);
	if (somas==resul){
		alert('Sua soma esta CORRETA !!! ');

	}else{
		alert('Sua soma NAO esta CORRETA !!!');
	}


})



}