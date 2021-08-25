window.onload = function(){
	

	//alert("alerta");
	// const btn = document.getElementById("btn1");
	//const btn = document.querySelector("#btn1"); 
	const btn = document.querySelector(".btn-click"); 
	const legP = document.querySelector(".legenda");
	const cxTexto = document.querySelector("#texto");

/*	function msg(){
		alert("ola");
	}
*/
	btn1.addEventListener('click', ()=>{
			legP.innerHTML += cxTexto.value; 
		} );

	legP.addEventListener('click', ()=>{
		legP.innerHTML = '';

	});

	/*legP.addEventListener('mouseout', ()=>{
		alert("Teste");
	});*/

//trocar tipo do elemento;

const trocaSenha = document.querySelector("#verSenha");
const cxSenha = document.querySelector("#senha");

trocaSenha.addEventListener('click', ()=>{
	//getAttribute()
	// setAttribute()
	if(cxSenha.getAttribute('type') == 'password'){
		cxSenha.setAttribute('type', 'text')
	}
	else{
		cxSenha.setAttribute('type', 'password');
	}

});

//alterar background

const cxTrocaBg = document.querySelector("#cxTbg");
	cxTrocaBg.addEventListener('blur', ()=>{
		cxTrocaBg.setAttribute('class', 'corBg');
	});

//somar valores
const valor1 = document.querySelector("#v1");
const valor2 = document.querySelector("#v2");
const btnSomar = document.querySelector("#soma");
const spResultado = document.querySelector("#resultado");

	btnSomar.addEventListener('click', ()=>{
		var cx1 = valor1.value;
		var cx2 = valor2.value;	
		var r = Number(cx1) + Number(cx2);
		spResultado.innerHTML = r;

});

	//evento modal
	const btnModal = document.querySelector("#chamarModal");
	const janelaModal = document.querySelector("#janModal");
	const closeModal = document.querySelector("#fechaModal");
	
	btnModal.addEventListener('click', ()=>{
		
		janelaModal.setAttribute('class', 'modal');

	});

		janelaModal.addEventListener('click', ()=>{
			janelaModal.classList.remove('modal');
	});
}