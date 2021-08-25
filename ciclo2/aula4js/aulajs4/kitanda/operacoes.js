window.onload=function(){


   (()=>{
    let mostrarProdutosCliente = document.querySelector("#content-produtos > ul#produtos");

    for(let idx in produtos){
        mostrarProdutosCliente.innerHTML += `<li class="itemProduto" data-preco=${produtos[idx].prodPreco}>${produtos[idx].prodDesc}`        
    }
   })(produtos) 


///compra
const itemProduto= document.querySelectorAll("#produtos > li.itemProduto");  
const cestaDocliente =document.querySelector("ul#cestaDoCliente");
const motraTotalCompra = document.querySelector("#mostraTotalCompra");
const armazenaItem=[];

var totalPedido =0;

itemProduto.forEach((item)=>{
    item.addEventListener("click",()=>{

        li = document.createElement("li");//  createElement = criou a lista!
        //referencia para saber se tem um produto ja lançado = método indexOf()
        if(armazenaItem.indexOf(item.textContent) == -1){
            armazenaItem.push(item.textContent);
            cestaDoCliente.appendChild(li).textContent = item.textContent = item.textContent;
            totalPedido += Number(item.dataset.preco);
            mostraTotalCompra.value = totalPedido.toLocaleString("pt-BR",
            {style:"currency", currency: "BRL"})
        }else{
            alert(`Este item ${item.textContent} já está na sua cesta!`);
        }
    });
});


}