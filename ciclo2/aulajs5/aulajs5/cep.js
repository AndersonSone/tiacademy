window.onload = function(){
	//alert("olá mundo")
const btnBuscaCep = document.querySelector("#btnBuscaCep");
const cxCep = document.querySelector(".cxCep");

const dadosCep = async function(cepUrl){	
	var url = `https://viacep.com.br/ws/${cepUrl}/json/`;
	var consultaCep =await fetch(url);
	var dadosCep = await consultaCep.json();
	//console.log(dadosCep)
	for(var campos in dadosCep){
		console.log(campos);
		
		if(document.querySelector("#"+campos)){
		document.querySelector("#"+campos).value = dadosCep[campos]
		}
	}
}

btnBuscaCep.addEventListener('click',()=>{
	let cep = cxCep.value;
	dadosCep(cep);
	
});

}
//alguma coisa tava dando errado professor quando abri ele pelo xampp deu todas errado mas quandso fui direto no navegador ele carrego 
//