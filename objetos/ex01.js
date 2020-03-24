  // imprimir lista de cores por gato, no formato
  // nome do gato
  //cor
  //-------------
const satanas = {
    nome: 'Satanás',
    idade: 6, 
    castrado: true,
    cores: ['preto', 'branco']
  };
  
  const churrumina = {
    nome: 'Churrumina',
    idade: 1,
    castrado: true,
    cores: ['branca', 'creme', 'cinza']
  };
  
  const odo = {
    nome: 'Odo',
    idade: 2,
    castrado: true,
    cores: ['branco', 'marrom', 'preto']
  };
  
  const ford = {
    nome: 'Ford Prefect',
    idade: 'Tres'  + ' ' +  3 + ' ' + 'anos',
    castrado: true,
    cores: ['rajado']
  };

  const fiat = {
    nome: 'Palio',
    idade: 'Tres'  + ' ' +  7 + ' ' + 'anos',
    cadastro: false,
    cores: ['blue', 'azul','grey', 'yellow']
  };
  
  const gatos = [satanas, churrumina, odo, ford, fiat]

  // exibindo a lista de gatos via console 
  for (let gato of gatos) {
      console.log(`${gato.nome}`);
      console.log(`${gato.idade}`);
       console.log(`${gato.cadastro}`);
      for (let cor of gato.cores) {
        console.log(`${cor}`)
    };
      console.log('-------------')
  }
 

  
  

