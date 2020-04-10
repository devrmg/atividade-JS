/*7. Escreva um código que receba dois números e determine qual o maior entre eles.*/

function maiorValor(num1, num2){
  if(num1 >= num2){
    return num1 + ' e maior que ' + num2
  }else {
     return num2 + ' e maior que ' + num1
  }
}

console.log(maiorValor(213,321))