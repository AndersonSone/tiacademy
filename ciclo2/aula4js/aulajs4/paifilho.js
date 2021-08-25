window.onload=function(){
/*
	const pai = document.querySelectorAll("#pai");
	pai.forEach((pegarFilhos)=>{
		pegarFilhos.addEventListener('click',(filha)=>{
			alert(filha.target.textComtent)

		})



	})  
*/

	const btn = document.querySelector("#btn");
	const outropai = document.querySelector('#outropai')  
	btn.addEventListener('click',()=>{
		li=document.createElement("li");  
		outropai.appendChild(li).textContent="elemento filho"

	})
}