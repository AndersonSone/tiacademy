function Pessoa(nome, sobrenome, idade){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
}
var ps1 = new Pessoa("sone", "anderson", 40); // chama pessoa com dados
console.log("Pessoa 1 - Nome: " + ps1.nome + " "+ps1.sobrenome+ " idade: " + ps1.idade);//ps1.algo chama os da funçao
var ps2 = new Pessoa("vanderlei");
console.log("Peossoa 2 - Nome: " + ps2.nome+" "+ ps2.sobrenome);
var objPessoa = { rg: "7767", cpf: "01565"};
//console.log(typeof(objPessoa));
console.log ("RG: "+ objPessoa.rg);
function Pessoa2(nome, sobrenome, idade){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
	this.doc = {
		rg:'1010',
		cpf:'30484737229'
		}
	}

	var pessoa2 = new Pessoa2("sone2");
	console.log("nome: "+pessoa2.nome+" "+"rg: "+pessoa2.doc.rg+'cpf'  +pessoa2.doc.cpf);
	console.log(`nome: ${pessoa2.nome} - Rg: ${pessoa2.doc.rg}`);//usar o negocio do lado do p para $ pode usar