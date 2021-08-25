var frutas = ["Uva", "Banana", "Amora", "Melão"]; // declara vetor
console.log(`Qtd do array: ${frutas.length} fruta: ${frutas[0]}`);//length conta os valoress
var frutas2 = ["maça", "pera", "laranja"];
var todasasfrutas = frutas.concat(frutas2);
console.log(frutas);
console.log(todasasfrutas);
//IndexOf procura um elemento e mostra onde ta
var retornoIndexOf= todasasfrutas.indexOf("Amora");
console.log(retornoIndexOf);
//join - array vira string
var stringArray = todasasfrutas.join();
console.log(stringArray)
//push insere um novo elemento no final da lista
var outraLista = ["Bola", "Peteca"];
var novaLista = outraLista.push("Boneca","New Brinquedo");
console.log(novaLista);
console.log(outraLista);
console.log(outraLista[3]);
//pop  remove o ultimo item 
console.log(outraLista.pop());
console.log(outraLista);
//reverse - inverte a lista
console.log(outraLista.reverse());
//shift remove o primeiro elemento 
var remover = ["fusca","variante"];
remover.shift();
console.log(remover);

//sort - ordena elementos 
var alfa = [4,6,9,2];//apartir de 10 deu bug segundo os colegas
alfa.sort();
console.log(alfa);
//unshift insere novo elemento no inicio
alfa.unshift(10);
console.log(alfa);

//splice corta o array em um ponto

var f = ["Uva", "Banana", "Amora", "Melão"]; 
//console.log(f.splice(2, 1));
//indexOf retorna o indice de um array
var idx= f.indexOf("Banana");
console.log(idx);
console.log(f.splice(idx, 2));
console.log(f);
//var r= f.splice();
//console.log(r);
//arrays de objetos

var dados = [
			{nome:"Anderson"}, 
			{nome: "Sone"} 
			]

//console.log(dados[0].nome)
//onsole.log(dados[1].nome)

function Pessoa2(nome, sobrenome, idade, doc=[]){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
	this.doc = {
		rg:doc[0],
		cpf:doc[1]
		}
	}

	var pessoa2= new Pessoa2("sonao","","",['30','10101']);
	console.log(`Nome ${pessoa2.nome} - cpf: ${pessoa2.doc.cpf}`);