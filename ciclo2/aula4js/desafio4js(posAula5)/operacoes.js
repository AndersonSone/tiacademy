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
const mostraTotalCompra = document.querySelector("#mostraTotalCompra");
const armazenaItem=[];
var totalPedido =0;
itemProduto.forEach((item)=>{
    item.addEventListener("click",()=>{

        li = document.createElement("li");//  createElement = criou a lista!
        li.setAttribute("data-preco", item.dataset.preco);//ele puxa o valor para nos consegui tira dps
        //referencia para saber se tem um produto ja lançado = método indexOf()
        if(armazenaItem.indexOf(item.textContent) == -1){
            armazenaItem.push(item.textContent);
            cestaDoCliente.appendChild(li).textContent = item.textContent ;
            totalPedido += Number(item.dataset.preco);
            mostraTotalCompra.value = totalPedido.toLocaleString("pt-BR",
            {style:"currency", currency: "BRL"})
        }else{
            alert(`Este item ${item.textContent} já está na sua cesta!`);
        }
    });
});


//aqui ele remove as coisas com 2 click
 const cesta = document.querySelectorAll("#cestaDoCliente");//aqui que eu estava errando feio pq da para puxar usando classe do ul
    cesta.forEach((item) => {
        item.addEventListener('dblclick', (itemCesta) => {
            var idx = armazenaItem.indexOf(itemCesta.target.textContent);
            if (idx > -1) {
                totalPedido -= Number(itemCesta.target.dataset.preco);
                cestaDocliente.removeChild(cestaDoCliente.childNodes[idx]);
                armazenaItem.splice(idx, 1);
                mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });//aqui para mostra valores em R$
            }
        });
    });


}