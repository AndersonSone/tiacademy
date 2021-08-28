window.onload=function(){
	const btnbusca=document.querySelector("#btnCep");  
	const botao=document.querySelector(".buscador");  
	



	const dadocep=async function(cepurl){

		var url=`https://viacep.com.br/ws/${cepurl}/json/`;  
		var consultacep=await fetch(url);  
		var dadoscep=await consultacep.json();  
		for (var dados in dadoscep){
			console.log(dados);
			if(document.querySelector("#"+dados)){
				document.querySelector("#"+dados).value=dadoscep[dados]
			}
		}
	}

	botao.addEventListener('click',()=>{
		let cep=btnbusca.value;  
		dadocep(cep);
	})






}