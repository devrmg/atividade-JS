/*2. Crie uma função que recebe uma palavra e ordena suas letras em ordem alfabética.*/






function ordenarPalavra(palavra){
  return palavra.split('').sort().join('')
}

console.log(ordenarPalavra('zyuwtrqpoabcdefgh'))