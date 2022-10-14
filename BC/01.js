var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var linhas = input.split("\n");

var [codigo1, peca1, valorUnitario1] = linhas.shift().split(" ");
var [codigo2, peca2, valorUnitario2]= linhas.shift().split(" ");

var valorTotal1  = peca1 * valorUnitario1;
var valorTotal2 = peca2 * valorUnitario2;

var valorTotal = valorTotal1 + valorTotal2;

console.log("VALOR A PAGAR: R$ " + valorTotal.toFixed(2));

/*
let A = parseInt(lines[0]);
let B = parseInt(lines[1]);

let X = A + B;
console.log("X = " + X)

let n = parseFloat(3.14159);
let r = parseFloat(lines[0]);


let area = n * (r * r)

console.log("A = " + area.toFixed(4))

soma simples
var A = parseInt(lines[0]);
var B = parseInt(lines[1]);

let soma = (A + B);

console.log("SOMA = " + soma);
*/

/*
produto simples
var produto1 = parseInt(lines[0]);
var produto2 = parseInt(lines[1]);

let calculoProduto = (produto1 * produto2);

console.log("PROD = " + calculoProduto);
*/

/*
media1
var A = parseFloat(lines[0]);
var B = parseFloat(lines[1]);

let media = ((3.5 * A) + (7.5 * B)) / 11;
console.log("MEDIA = " + media.toFixed(5));
*/
/*
media2
var A = parseFloat(lines[0]);
var B = parseFloat(lines[1]);
var C = parseFloat(lines[2]);


let media = ((A * 2) + (B * 3) + (C * 5)) / 10;
console.log("MEDIA = " + media.toFixed(1));
*/
/*
diferenca
var A = parseInt(lines[0]);
var B = parseInt(lines[1]);
var C = parseInt(lines[2]);
var D = parseInt(lines[3]);

let diferenca = (A*B - C*D)
console.log("DIFERENCA = " + diferenca);
*/


/*
var funcionarios = parseInt(lines[0]);
var horas = parseInt(lines[1]);
var salario = parseFloat(lines[2]);

let cauculo = horas * salario;

console.log(`NUMBER = ${funcionarios}`);
console.log(`SALARY = U$ ${cauculo.toFixed(2)}`);

var nome = lines[0];
var salarioFixo = parseFloat(lines[1]);
var totalVendas = parseFloat(lines[2]);

let bonus = totalVendas * (15/100);

let total = salarioFixo + bonus;

console.log("TOTAL = R$ " + total.toFixed(2));

calculo simples
*/
