//sera testado varias logicas usando o if e operador logico como maior , menor e diferente , alem disso sera usado a tag switch

var v1=1;
var v2=1;
if (v1==v2) {
    console.log("Sim é verdade");
} else {
    console.log("Isto é falso")
}


var v3=1;
var v4;
if(v3 == v4){
    console.log("V3 é exatamente igual ao V4");
} else {
    console.log("V3 não é igual a V4");
    console.log(v4);
}

var v3=1;
var v4='1';
if(v3 === v4){
    console.log("V3 é exatamente igual a V4");
} else {
    console.log("V3 não é igual a V4");
    console.log(typeof(v3)) ;
}
var v5=1;
var v6=0;


console.log(v6);

if(v5 != v6){
    console.log("V5 é diferente de V6");
} else {
    console.log("São iguais");
}


var v7=1;
var v8='1';
if(v7 !== v8){
    console.log("Exatamente diferente")
} else {
    console.log("São iguais")
}



var va=400;
var vb=400;
if(va>vb){
    console.log("Sim va é maior que vb")
}

var va=200;
var vb=400;
if (va < vb){
    console.log ("Sim va é menor que vb");
}


var vc=399;
var vd=399;
if (vc <= vd){
    console.log("Vc=" +vc+ "é menor ou igual a vd="+vd);
}

var ve=400;
var vf=400;
if(ve >= vf){
    console.log("ve="+ve+"é maior ou igual a vf="+vf);
}

/*operador lógico, compara duas ou mais situações
And "E" lógico (&&) 
OR "OU" lógico (||) 
NOT "negação" lógico (!) */

var a=0;
var b=0;
if(a==0 && b==0){
    console.log("verdadeiro");
} else {
    console.log("falso");
}


var c=0;
var d=0;
if(c==1 || d==1){
    console.log("Ok");
} else{
    console.log("!Ok")
}



var s= 1;
if(!typeof(s)){
    console.log("Não é uma string");
} else{
    console.log("É uma string");
    console.log(typeof(s));
}

//Switch como se fosse um menu de opcao 

var op=10;
switch(op){
    case 1:
        alert("Estou sendo enviado pelo case 1");
    break;
    case 2:
        console.log("Cai dentro do case 2");
    break;
    case 3:
        console.log("Cai dentro do case 3");
    default:
        console.log("Nenhuma das opções");
    break;        
}