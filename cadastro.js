var anoevento = 2023
var anovigente = 2022
var anonasc = 2000
const cadastrosnome = "Fernando";
var cadastrosenha = "12345"  //minimo de 5 caracteres
var limparti = 100

let idade = anoevento - anonasc

if(idade > 17){
    console.log("Maior de idade");
}else{
    console.log("Menor de idade. Participação negada")
}

if(cadastrosenha.length > 4){
    console.log("senha valida")
}else{
    console.log("senha invalida")
} 

