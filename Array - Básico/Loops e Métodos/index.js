/* 

Tudo que existe dentro da programação, tem um propósito. Como vimos no módulo anterior, um array nada mais é do que variedades dentro de uma lista.
que podem, por ventura, ter apenas um item da sua lista acessado, o último, todos os itens, uma infinidade
Para esse tipo de atividade, existem métodos que se relacionam diretamente com a utilidade desses arrays.
Pense, você não acha que para acessar todos os itens de um array, por exemplo, iria precisar contar TODOS os itens dentro dele e assim, 
fazer index por index, certo?
Para isso que existem os métodos, para que nós possamos facilitar o processo de construção da aplicação.

*/

// Explicando de forma literal:

let parceiros = ['MSBY', 'Andlers', 'Dateko', 'Vasco'] // Aqui, nós temos um array comum, de strings.

// E aqui, o primeiro conceito de loop que as linguagens abordam: o for.
for (let i = 0; i <= parceiros.length - 1; i++) { 
// aqui nós estamos falando o seguinte para a aplicação:
// nós vamos definir uma variável de loop, que irá ser i. i, será igual a 0, que é geralmente onde nosso index começa, essa é a primeira condição

// o segundo parâmetro é, a condição que esse loop vai acontecer e ATÉ QUANDO ele irá acontecer. 
// por exemplo, eu estou falando pra minha aplicação agora que, esse loop for só vai acontecer enquanto o valor de i for menor ou igual ao 
// tamanho do meu array. esta é a segunda condição.

// o terceiro parâmetro, trata-se do que o programa irá fazer enquanto o valor de i for menor ou igual ao que o tamanho do array.
// então, ele vai aumentar o valor da nossa variável i, chegando num número que queremos e assim, encerrando o loop.
// perceba que o valor de i sempre vai mudar enquanto a condição do meio estiver sendo cumprida. 
// por isso, nosso loop irá executar o que está sendo posto dentro dos bigodes
// que é um console.log(parceiros[i]), sendo [i], o index de todos os itens dentro do array.
  console.log(parceiros[i])
// parece complicado, mas na prática e seguindo a explicação, é um pouco fácil de entender.
}

let times = [' / Sport', 'Náutico', 'Salgueiro', 'Santa Cruz', 'Ceará'] 
// array normal com strings

for (let i = 0; i <= times.length - 1; i++) { 
  // enquanto i for menor ou igual do que a quantia de times do array, aumente seu valor até sair dessa condição
  console.log(times[i])
}

// exemplo com variáveis literais
let Arrays = [2,3,4]

for (let VariavelDeLoop = 0; VariavelDeLoop <= Arrays.length - 1; VariavelDeLoop++) {
  console.log(Arrays[VariavelDeLoop])
}


