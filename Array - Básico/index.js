/* 
A tradução literal de Array é variedade. O que tem dentro de um colchete é, na verdade uma variedade de itens.
Como a nomeclatura sugere, variedade é tudo aquilo que se tem de monte, de dois, de nove, de mil.
E são esses valores, essa variedade, que se porta dentro dos colchetes. Vários valores, várias utilidades, muitas possibilidades.
*/


// Esse é um exemplo mais comum de um array. Um array pode conter números, strings, booleans, objetos, tudo.
var array = [2, 3, 5, 8, 9]
// Neste caso, um array numérico. É muito comum falar que isso é um vetor ou matriz em outras linguagens.

var arrayDePessoas = ['Roberto', 'Juliano', 'Luiz', 'Guilherme']
// Nesse outro caso, é um array de strings. E quando você acessar esses dados, eles virão em forma de lista
console.log(arrayDePessoas)

// Podemos ter um array que mistura vários tipos de dados, sem problema algum, afinal, array é mais sobre variedade do que qualquer outra coisa.
var pessoaDoArray = 'Lai'
var arrayVariado = [12, 'Vinícius', pessoaDoArray, true ]
console.log(arrayVariado) // output esperado: [12, 'Vinícius', 'Lai', true ]
// Veja que até dá para passar variáveis, funções; embora não seja um ato tão comum ver funções dentro de arrays.

/*
  Agora que demos uma revisada nos arrays, eles por si, sozinhos, não fazem muita coisa. 
  Eles existem para podermos acessar dados dentro dele; vou chamar de dados, para ficar mais didático.
*/

var ArraySelecionado = [12, 'Noventa', 13, true]
console.log(ArraySelecionado[0]) // output esperado: 12
/***
Fazendo isso, eu consigo acessar o primeiro item de um array. 
Mas por quê zero? O primeiro item dentro de um array, sempre será zero, o index dele é 0.
Ele não segue as "regras normais" de ordem. Um array sempre começará pelo valor de 0, pois zero é sua posição INICIAL.
***/

// Para saber a quantia de um array

var ArrayQuantia = [12, 13, 15, 'GoH']
console.log(ArrayQuantia.length)

// Pegando o último elemento de um array

console.log(ArrayQuantia[ArrayQuantia.length - 1])

// .lenght serve também para checar qual é o tamanho de uma string, por exemplo

var ArrayNome = 'Francisco'
console.log(ArrayNome.length)

