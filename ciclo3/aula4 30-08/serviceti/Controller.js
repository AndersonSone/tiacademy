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



app.post('/servicos', async(req,res)=>{
    let create=await sservico.create(
        req.body
    );
    res.send('serviço foi inserido!');
});
app.post('/clientes', async(req,res)=>{
    let create=await cliente.create(
        req.body
    );
    res.send('cliente foi inserido!');
});
app.post('/pedidos', async(req,res)=>{
    let create=await pedido.create(
        req.body
    );
    res.send('pedido foi inserido!');
});

//para mostra todos serviços 
/*
app.get('/listaservicos',async(req,res)=>{
    await sservico.findAll({
        raw:true
    }).then(function(servicos){
        res.json({servicos})
    });
});
*/
//lista em ordem nome decrescente  
app.get('/listaservicos',async(req,res)=>{
    await sservico.findAll({
        order:[['nome','DESC']]
    }).then(function(servicos){
        res.json({servicos})
    });
});

///quantidade de serviços que estao disponivel
app.get('/ofertas',async(req,res)=>{
    await sservico.count('id')
    .then(function(servicos){
        res.json(servicos);
    });
});
///retorna um valor especifico
app.get ('/servico/:id',async(req,res)=>{
    sservico.findByPk(req.params.id)
    .then(sservico =>{
        return res.json({
            error:false,
            sservico
        });
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            message:"codigo nao esta cadastrado"
        });
    });
});

/// ver todos os clientes
app.get('/listaclientes',async(req,res)=>{
    await cliente.findAll({
        raw:true
    }).then(function(clientes){
        res.json({clientes})
    });
});
///clientes em ordem antiguidade (ja qjue nao mudo nada com o mostra tudo vou deixa
// trocado para mostra os mais novos)
app.get('/listaordemclientes',async(req,res)=>{
    await cliente.findAll({
        order:[['id','DESC']]
    }).then(function(clientes){
        res.json({clientes})
    });
});
//mostrar todos pedidos
app.get('/listapedidos',async(req,res)=>{
    await pedido.findAll({
        raw:true
    }).then(function(pedidos){
        res.json({pedidos})
    });
});

//ordem de maior valor
app.get('/listaordempedidovalor',async(req,res)=>{
    await pedido.findAll({
        order:[['valor','DESC']]
    }).then(function(pedidos){
        res.json({pedidos})
    });
});
///mostar quantos clientes tem
///quantidade de clientes que estao disponivel
app.get('/ofertasclientes',async(req,res)=>{
    await cliente.count('id')
    .then(function(clientes){
        res.json(clientes);
    });
});
///quantidade de pedidos que estao disponivel
app.get('/ofertaspedidos',async(req,res)=>{
    await pedido.count('id')
    .then(function(pedidos){
        res.json(pedidos);
    });
});
/*
app.get('/valor/:id',async(req,res)=>{
    await pedido.sum(valor, { ClienteId: { clientes: { [req.params.id]: req.params.id } } })
    .then(function(pedidos){
        res.json(pedidos);});
});
*/
/*
app.get('/clientes', async(req,res)=>{
    let create=await cliente.create({
        nome:"neia sone",
        endereco:"rua dis federal",
        cidade:"maringa",
        uf:"PR",
        nascimento:"1997-11-01",
    });
    res.send('cliente novo foi inserido!');
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
*/
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