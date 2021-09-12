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


///criar serviço
app.post('/servicos',async(req, res)=>{

    await sservico.create(
        req.body
    )
    res.send('Serviço foi inserido!');

    await aguardar(3000);

    function aguardar(ms){
        return new Promise((resolve)=>{
            setTimeout(resolve,ms);
        });
    };
});


/////////////////////////////////desafio dia 1///////////////////////

///criar cliente
app.post('/clientes', async(req,res)=>{
    let create=await cliente.create(
        req.body
    );
    res.send('cliente foi inserido!');
});
//criar um pedido
app.post('/pedidos', async(req,res)=>{
    let create=await pedido.create(
        req.body
    );
    res.send('pedido foi inserido!');
});

////////////fim desafio fia 1//////////////////////////////////////////////

//para mostra todos serviços 

//mostrar todos os serviços 
app.get('/listaservicos',async(req,res)=>{
    await sservico.findAll({
        raw:true
    }).then(function(servicos){
        res.json({servicos})
    });
});

/*lista em ordem nome decrescente
app.get('/listaservicos',async(req,res)=>{
    await sservico.findAll({
        order:[['nome','DESC']]
    }).then(function(servicos){
        res.json({servicos})
    });
});
*/
///quantidade de serviços que estao disponivel (contado pelo id)
app.get('/ofertas',async(req,res)=>{
    await sservico.count('id')
    .then(function(servicos){
        res.json(servicos);
    });
});


///retorna um valor especifico pelo id do parametro que digitou
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



//retorna o cliente pelo id que digitou no link

app.get ('/cliente/:id',async(req,res)=>{
    cliente.findByPk(req.params.id)
    .then(cliente =>{
        return res.json({
            error:false,
            cliente
        });
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            message:"codigo nao esta cadastrado"
        });
    });
});


///retorna o pedido pelo link que digitou
app.get ('/pedido/:id',async(req,res)=>{
    pedido.findByPk(req.params.id)
    .then(pedido =>{
        return res.json({
            error:false,
            pedido
        });
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            message:"codigo nao esta cadastrado"
        });
    });
});



/// ver todos os clientes ordem que digitou
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

//ordem de maior valor dos pedidos
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

////////////desafio do dia 3////////////

///soma valores

app.get('/valor/:id',async(req,res)=>{
    await pedido.sum('valor', { where:  { ClienteId: req.params.id  } })
    .then(function(pedidos){
        res.json(pedidos);});
});


///////////fim do desafio dia 3


//atualizar um servico 
app.get('/atualizaservico',async(req,res)=>{
    await sservico.findByPk(1)
    .then(sservico=>{
        sservico.nome='Html/css/js';
        sservico.descricao='paginas estaticas dinamica e estilizadas';
        sservico.save();
        return res.json({sservico});
    });
});

//editar algum servico
app.put('/editarservico',(req,res)=>{
    sservico.update(req.body,{
        where:{id: req.body.id}
    }).then(function(){
        return res.json({
            error :false,
            message:'servico alterado com sucesso'
        });
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            message:"erro na alteraçao de serviço"
        });
    });
});
///mostra quem pediu o servico com id 1
app.get('/servicospedidos',async(req,res)=>{
    await sservico.findByPk(1,{
        include:[{all:true}]
    }).then(sservico=>{
        return res.json({sservico})
    });
});

/* editar serviço pelo id servico
app.put('/editarpedidos',(req,res)=>{
    pedido.update(req.body,{
        where:{servicoId:req.body.servicoId}
    }).then(function(){
        return res.json({
            error:true,
            message:"pedido modificado com sucesso"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            message:"nao foi possivel modifificar"
        });
    });
});*/

///////////////exemplo de fazer em sala////////////////

////ex 1 
app.get('/servicosclientes', async (req,res)=>{
    await cliente.findByPk(req.body.id, {
        include: [{all: true}],
    }).then(cliente =>{
        return res.json({cliente});
    });
});


//ex.2
app.put('/editarcliente',(req,res)=>{
    cliente.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cliente foi alterado com sucesso."
        });
        }).catch(function(erro){
            return res.status(400).json({
            error: true, 
            message: "Erro na alteração do serviço."
        });
    });
});

//ex3
app.put('/editarpedido',(req,res)=>{
    pedido.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Serviço foi alterado com sucesso."
        });
        }).catch(function(erro){
            return res.status(400).json({
            error: true, 
            message: "Erro na alteração do serviço."
        });
    });
});

////////////fim dos exercicio em sala///////////



/*
app.get('/clienteexcluir',async(req,res)=>{
    cliente.destroy({
        where:{id:1}
    });
});*/


///para deletar cliente ,serviços e pedidos
app.delete('/apagarcliente/:id',(req,res)=>{
    cliente.destroy({
        where:{id: req.params.id}
    }).then(function(){
        return res.json({
            error:false,
            message:'foi deletada com sucesso'
        });
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            message:'nao foi possivel'
        });
    });
});

app.delete('/apagarservico/:id',(req,res)=>{
    sservico.destroy({
        where:{id: req.params.id}
    }).then(function(){
        return res.json({
            error:false,
            message:'foi deletada com sucesso'
        });
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            message:'nao foi possivel'
        });
    });
});

app.delete('/apagarpedido/:id',(req,res)=>{
    pedido.destroy({
        where:{id: req.params.id}
    }).then(function(){
        return res.json({
            error:false,
            message:'foi deletada com sucesso'
        });
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            message:'nao foi possivel'
        });
    });
});




///desafio slide 4
app.get('/clientepedidos/:id',async(req,res)=>{
    await cliente.findByPk(req.params.id,{
        include:[{all:true}]
    }).then(cliente=>{
        return res.json({cliente})
    });
});


app.put('/editarpedidosporcliente',(req,res)=>{
    pedido.update(req.body,{
        where:{ClienteId:req.body.ClienteId}
    }).then(function(){
        return res.json({
            error:true,
            message:"pedido modificado com sucesso"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            message:"nao foi possivel modifificar"
        });
    });
});





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


let port=process.env.PORT || 3001;

app.listen(port,(req,res)=>{
    console.log('servidor ativo');
});