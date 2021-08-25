var nome= "anderson"; //uma variavel global
let sobreNome= "sone";

if(true){
	console.log("var nome= " + nome)
	var nm = nome;
	console.log("chamando o sobrenome " + sobreNome);
	let sn = "Da Silva"; //so pode usar aqui
	console.log(sobreNome);
}

console.log(" Meu nome é " + nm + " "+sobreNome + " " + sn);
console.log("var nome= "+ nm);


var Pessoa = {
	nome: "anderson", 
	rua: "Rua distrito federal 473",
	ncasa: "473",
	dados: function(){
		document.write(
			"Nome...:"+this.nome+"<br>"+
			"Rua...:"+this.rua+"<br>"+
			"N. casa...:"+this.ncasa+"<br>")}
}
/*
Pessoa.dados();

console.log("Nome " + Pessoa.nome +
			 " Endereço" + " " + Pessoa.rua + " N." + Pessoa.ncasa);
			 */
			 