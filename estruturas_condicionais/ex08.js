
//8 - Escreva um código que receba um número (1-7) e devolva o dia da semana correspondente.



function diaDaSemana(n){
  switch(n){
    case 1:
      return 'segunda feira'
      break
    case 2: 
    return 'terça feira'
    break
    case 3:
      return 'quarta feira'
    break
    case 4:
      return 'quinta feira'
    break
    case 5:
      return 'sexta feira'
    break
    case 6:
      return 'sabado'
    break
    case 7:
      return 'domingo'
    break
    default:
    return  'Não corresponde a nenhum dia'
  }
}

console.log(diaDaSemana(59))