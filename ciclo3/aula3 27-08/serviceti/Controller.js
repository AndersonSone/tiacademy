const express =require('express');
const cors=require('cors');

const models=require('./models');

const app=express();
app.use(cors());
app.use(express.json());

let cliente=models.Cliente;
let sservico= models.servico;  
let pedido=models.Pedido;

app.get('/',function(req,res){
    res.send('ola mundo!');
});


app.get('/clientes', async(req,res)=>{
    let create=await cliente.create({
        nome:"Anderson Sone",
        endereco:"rualalala",
        cidade:"maringa",
        uf:"PR",
        nascimento:"1997-12-01",
    });
    res.send('cliente novo foi inserido!');
});
app.post('/servicos', async(req,res)=>{
    let create=await sservico.create(
        req.body
    );
    res.send('serviço foi inserido!');
});
app.get('/pedidos', async(req,res)=>{
    let create=await pedido.create({
        idCliente:"1",
        idservico:"1",
        valor:"88",  
        data:"1999-05-05",


    });
    res.send('pedidos enviado!');
});

app.get('/servicos',function(req,res){
    res.send('lista dos servicos');
});
app.get('/pedidos',function(req,res){
    res.send('lista dos pedidos');
});
app.get('/clientes',function(req,res){
    res.send('lista do cliente');
});


let port=process.env.PORT || 3000;

app.listen(port,(req,res)=>{
    console.log('servidor ativo');
});