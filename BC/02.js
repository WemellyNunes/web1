var input = require('fs').readFileSync( 'stdin','utf8');
var lines = input.split('\n');

/* Questao 1 -------------------------------------------------

var line = lines.shift().split(' ');

var A = parseInt(line[0]);

var B = parseInt(line[1]);

var C = parseInt(line[2]);

var D = parseInt(line[3]);

if((B > C) && (D > A) && (C + D) > (A + B) && (C > 0) && (D > 0) && (A%2===0)) { console.log("Valores aceitos"); 


else{ console.log("Valores nao aceitos"); }
/*



/*QUESTAO 2 -----------------------------------------------------

var line = lines.shift().split(' ');

var codigoItem = parseInt(line[0]);

var qtdItem = parseInt(line[1]);

const cod1 = 4.00
const cod2 = 4.50
const cod3 = 5.00
const cod4 = 2.00
const cod5 = 1.50

if (codigoItem === 1) {
    let valorAPagar = qtdItem * cod1
    console.log('Total: R$ ' + valorAPagar.toFixed(2))
} if (codigoItem === 2) {
    let valorAPagar2 = qtdItem * cod2
    console.log('Total: R$ ' + valorAPagar2.toFixed(2))
} if (codigoItem === 3) {
    let valorAPagar3 = qtdItem * cod3
    console.log('Total: R$ ' + valorAPagar3.toFixed(2))
} if (codigoItem === 4) {
    let valorAPagar4 = qtdItem * cod4
    console.log('Total: R$ ' + valorAPagar4.toFixed(2))
} if (codigoItem === 5) {
    let valorAPagar5 = qtdItem * cod5
    console.log('Total: R$ ' + valorAPagar5.toFixed(2))
}
*/

/* QUESTAO 3 ---------------------------------------------------

var salario = parseFloat(lines[0])

if (salario <= 400.00){
    let novoSalario = (salario * 0.15) + salario

    let reajuste = novoSalario - salario

    const percentual = 15

    console.log('Novo Salario: ' + novoSalario.toFixed(2))
    console.log('Reajuste ganho: ' + reajuste.toFixed(2))
    console.log('Em percentual: ' + percentual + ' %')
} 
if (salario >= 400.01 && salario <= 800.00) {
    let novoSalario = (salario * 0.12) + salario

    let reajuste = novoSalario - salario

    const percentual = 12

    console.log('Novo Salario: ' + novoSalario.toFixed(2))
    console.log('Reajuste ganho: ' + reajuste.toFixed(2))
    console.log('Em percentual: ' + percentual + ' %')
} 
if (salario >= 800.01 && salario <= 1200.00){
    let novoSalario = (salario * 0.10) + salario

    let reajuste = novoSalario - salario

    const percentual = 10

    console.log('Novo Salario: ' + novoSalario.toFixed(2))
    console.log('Reajuste ganho: ' + reajuste.toFixed(2))
    console.log('Em percentual: ' + percentual + ' %')
} 
if (salario >= 1200.01 && salario <= 2000.00){
    let novoSalario = (salario * 0.07) + salario

    let reajuste = novoSalario - salario

    const percentual = 7 

    console.log('Novo Salario: ' + novoSalario.toFixed(2))
    console.log('Reajuste ganho: ' + reajuste.toFixed(2))
    console.log('Em percentual: ' + percentual + ' %')
} 
if (salario > 2000.00){
    let novoSalario = (salario * 0.04) + salario

    let reajuste = novoSalario - salario
    
    const percentual = 4

    console.log('Novo Salario: ' + novoSalario.toFixed(2))
    console.log('Reajuste ganho: ' + reajuste.toFixed(2))
    console.log('Em percentual: ' + percentual + ' %')
} 
*/



/* QUESTAO 4 ---------------------------------------------------
var nome1 = (lines[0])
var nome2 = (lines[1]) 
var nome3 = (lines[2]) 

if ((nome1 == "vertebrado") && (nome2 == "ave") && (nome3 == "carnivoro")) {
    console.log("aguia")
  }
  
  if ((nome1 == "vertebrado") && (nome2 == "ave") && (nome3 == "onivoro")) {
    console.log("pomba")
  }
  
  if ((nome1 == "vertebrado") && (nome2 == "mamifero") && (nome3 == "onivoro")) {
    console.log("homem")
  }
  
  if ((nome1 == "vertebrado") && (nome2 == "mamifero") && (nome3 == "herbivoro")) {
    console.log("vaca")
  }
  
  if ((nome1 == "invertebrado") && (nome2 == "inseto") && (nome3 == "hematofago")) {
    console.log("pulga")
  }
  
  if ((nome1 ==  "invertebrado") && (nome2 == "inseto") && (nome3 == "herbivoro")) {
    console.log("lagarta")
  }
  
  if ((nome1  == "invertebrado") && (nome2 == "anelideo") && (nome3 == "hematofago")) {
    console.log("sanguessuga")
  }
  
  if ((nome1  == "invertebrado") && (nome2 == "anelideo") && (nome3 == "onivoro")) {
    console.log("minhoca")
  }
*/


/* QUESTAO 5 ---------------------------------------------------
var DDD = parseInt(lines[0])

switch(DDD){
    case 11:
        console.log('Sao Paulo')
        break;
    case 61:
        console.log('Brasilia')
        break;
    case 71: 
        console.log('Salvador')
        break;
    case 21:
        console.log('Rio de Janeiro')
        break;
    case 32:
        console.log('Juiz de Fora')
        break;
    case 19:
        console.log('Campinas')
        break;
    case 27:
        console.log('Vitoria')
        break;
    case 31:
        console.log('Belo Horizonte')
        break;
    default: 
        console.log('DDD nao cadastrado')
}
*/

/* QUESTAO 6 ---------------------------------------------------
let renda = parseFloat(lines[0])

if (renda <= 2000) {
  console.log('Isento');

} else if (renda <= 3000) {

  calculo1 = (renda - 2000) * 0.08;

  resultado = parseFloat(calculo1);
  resultado = result.toFixed(2);

  console.log('R$ ' + resultado);

} else if (renda <= 4500) {
  
  aux1 = renda - 2000;
  aux2 = renda - 3000;
  aux2 = aux2 >= 0 ? aux2 : 0;
    
  calculo1 = ((renda - 2000) - aux2) * 0.08;
  calculo2 = (renda - 3000) * 0.18;
    
  resultado = parseFloat(calculo1 + calculo2);
  resultado = resultado.toFixed(2);
    
  console.log('R$ ' + resultado);

} else {
  
  aux1 = renda - 2000;
  aux2 = renda - 3000;
  aux3 = renda - 4500;
  aux2 = aux2 >= 0 ? aux2 : 0;
  aux3 = aux3 >= 0 ? aux3 : 0;
    
  calculo1 = ((renda - 2000) - aux2) * 0.08;
  calculo2 = ((renda - 3000) - aux3) * 0.18;
  calculo3 = (renda - 4500) * 0.28;
    
  resultado = parseFloat(calculo1+calculo2+calculo3);
  resultado = resultado.toFixed(2);
   
  console.log('R$ ' + resultado);
}
*/

/*QUESTAO 7  ---------------------------------------------------
var n1 = parseFloat(lines[0])
var n2 = parseFloat(lines[1])
var n3 = parseFloat(lines[2])
var n4 = parseFloat(lines[3])
var n5 = parseFloat(lines[4])
var n6 = parseFloat(lines[5])
var media = 0
var A = 0
var B = 0

function posicao (){
  if (n1 > 0){
    A += 1
    B += n1
  } if(n2 > 0){
    A += 1
    B += n2
  } if(n3 > 0){
    A += 1
    B += n3
  } if(n4 > 0){
    A += 1
    B += n4
  } if(n5> 0){
    A += 1
    B += n5
  } if(n6 > 0){
    A += 1
    B += n6
  }
  media = B / A

  console.log(A + ' Valores positivos\n' + media.toFixed(1))
}
posicao()
*/

//QUESTAO 8 -------------------------------------------------
var X = parseInt(lines[0])
function Y(){
  if (X % 2 === 0){
    a = X + 1
    b = X + 3
    c = X + 5
    d = X + 7
    e = X + 9
    f = X + 11
    console.log(a + '\n' + b + '\n' + c + '\n' + d + '\n' + e + '\n' + f)
  } else {
    a = X + 2
    b = X + 4
    c = X + 6
    d = X + 8
    e = X + 10
    f = X + 12
    console.log(X + '\n' + a + '\n' + b + '\n' + c + '\n' + d + '\n' + e)
  }
}
Y()
