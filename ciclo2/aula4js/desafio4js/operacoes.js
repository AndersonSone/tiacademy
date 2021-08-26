window.onload=function(){


   (()=>{
    let mostrarProdutosCliente = document.querySelector("#content-produtos > ul#produtos");

    for(let idx in produtos){
        mostrarProdutosCliente.innerHTML += `<li class="itemProduto" data-preco=${produtos[idx].prodPreco}>${produtos[idx].prodDesc}`        
    }
   })(produtos) 




var n=0;

///compra
const itemProduto= document.querySelectorAll("#produtos > li.itemProduto");  
const cestaDocliente =document.querySelector("ul#cestaDoCliente");
const motraTotalCompra = document.querySelector("#mostraTotalCompra");
const armazenaItem=[];
var valores=[];   

var totalPedido =0;

itemProduto.forEach((item)=>{
    item.addEventListener("click",()=>{

        li = document.createElement("li");//  createElement = criou a lista!
        //referencia para saber se tem um produto ja lançado = método indexOf()
        if(armazenaItem.indexOf(item.textContent) == -1){
            armazenaItem.push(item.textContent);
            cestaDoCliente.appendChild(li).textContent = item.textContent ;
            totalPedido += Number(item.dataset.preco);
            valores.push(Number(item.dataset.preco))
            mostraTotalCompra.value = totalPedido.toLocaleString("pt-BR",
            {style:"currency", currency: "BRL"})
        }else{
            alert(`Este item ${item.textContent} já está na sua cesta!`);
        }
    });
});
///fiz para exclui o de cima e retirando
const merda= cestaDocliente.getElementsByTagName('li');
const excluir=document.querySelector('.excluir');  
excluir.addEventListener('click',()=>{
    cestaDoCliente.removeChild(merda[0]);
    armazenaItem.shift();
    n=valores.length;
    totalPedido=totalPedido-Number(valores[0]);
    valores.shift();
    mostraTotalCompra.value = totalPedido.toLocaleString("pt-BR",
            {style:"currency", currency: "BRL"});   
    console.log(armazenaItem)
    console.log(n);
    console.log(valores)
    

    
})


}

