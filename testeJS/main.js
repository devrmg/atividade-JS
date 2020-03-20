var nome    = 'Maria Julia';
var altura  = 189;

/* var concatenacao = nome + " " + altura;

var dados = document.getElementById("dados");
dados.innerHTML = `
    <h1>  Hello World </h1>
    <h2> Minha mulher: ${nome}</h2>
    <h3> Altura dela ${altura}</h3>
    `
;


/* If Else */
if(altura >= 190){
    dados.innerHTML += '<h1> E mais alta</h1>';
}else {
      dados.innerHTML += '<h1> E  menor</h1>';
}

/* For */
for(var i  = 200; i<= 204; i++)
//bloco de instruções
  dados.innerHTML += "<h2> Estamos no ano:" +i ; */

/* Funções*/
  function mostranome(nome, altura){
      var dados = document.getElementById("dados");
dados.innerHTML = `
    <h1>  Hello World </h1>
    <h2> Minha mulher: ${nome}</h2>
    <h3> Minha altura: ${altura}</h3>
    `
;
  }
mostranome("Renan Mendes ", 180);

/* Array */
var nome = ["Renan", "Victor","maria"]
alert(nome[1])