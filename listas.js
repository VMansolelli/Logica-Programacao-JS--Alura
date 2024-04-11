/*1. Crie uma lista chamada pessoa, coloque valores dentro dela como: 
nome (string), idade (inteiro), CPF (string), altura (decimal), se é maior de idade ou não (valor booleano true ou false).*/
let nome = "Victor";
let idade = 28;
let cpf = "123.456.789-00";
let altura = 1.73;
let maiorIdade = true;
let pessoa = [nome,idade,cpf,altura,maiorIdade];

console.log(pessoa);


/*
2. Crie um programa que recebe uma quantidade máxima de 10 de letras e ao final exibe todas elas no console.
Crie uma função chamada recebeLetra para pegar a letra e colocar na lista de letras.*/
let letras = [];

function recebeLetra(letra) {
    letras.push(letra);
}

for (let i = 0;i<10;i++) {
    let letra;
    letra = prompt("Digite uma letra:")
    recebeLetra(letra);
}

console.log(letras.join('-'));

/*3. Considerando o exercício anterior, refaça ele criando uma lista que irá armazenar as letras e em seguida mostre no console:*/
//a) A primeira letra digitada
console.log(letras[0]);

//b) A quarta letra digitada
console.log(letras[3]);

//c) A quinta letra digitada
console.log(letras[5]);

//d) A última letra digitada
console.log(letras[9]);

//e) O tamanho da lista criada*/
console.log(letras.length);

