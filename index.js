/*Exercicio escrita 1

Escreva as funções explicadas abaixo:
 
 a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:

 `Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante.`

Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.

b) Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

 `Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].`

Dica: na hora de criar a frase, você pode utilizar as template strings que vimos na aula anterior! As variáveis da frase, nesse caso, serão os próprios parâmetros recebidos na função.

function info1 () {
    console.log('Eu sou Giovane, tenho 16 anos, moro em São Leopoldo e sou estudante')
}
info1()

function info2 (nome, idade, endereço, profissão) {
    nome = 'Giovane'
    idade = 16
    endereço = 'São Leopoldo'
    profissão = 'estudante'
    let frase = console.log('Eu sou ' + nome + ' tenho '+ idade + ' anos, moro em ' + endereço + ' e sou ' + profissão)
}
info2()

/*Exercicio escrita 2

Escreva as funções explicadas abaixo:

a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.

c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não.

d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

function numero (n1, n2) {
    n1 = Number(n1)
    n2 = Number(n2)
    console.log(n1 + n2)
}

numero(6, 6)

function booleano (n1, n2) {
    console.log(n1 >= n2)
}

booleano(6, 6)

function par (n1) {
    let verificação = Number(n1) % 2 === 0
    console.log(verificação)
}

par(6)

function tamanho (mensagem) {
    let maiúsculas = mensagem.toUpperCase()
    console.log(maiúsculas)
    let tamanho = maiúsculas.length
    console.log(tamanho)
    return
}

tamanho ('Eu sou o Giovane')
*/

/*Exercicio escrita 3

Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão).

Peça para o usuário inserir dois números e chame essas 4 funções com esses valores inseridos pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

Exemplo:

Números inseridos: 30 e 3
Soma: 33
Diferença: 27
Multiplicação: 90
Divisão: 10

Dica: lembre-se de converter a entrada do usuário para número antes de fazer os cálculos.

function numeros (soma, subtração, multiplicação, divisão) {
    let n1 = prompt ('Inserir o primeiro número?')
    let n2 = prompt ('Inserir o segundo número?')
    n1 = Number(n1)
    n2 = Number(n2)
    console.log('Número um igual a ' + n1 + '.')
    console.log('Número dois igual a ' + n2 + '.')
    soma = n1 + n2
    subtração = n1 - n2
    multiplicação = n1 * n2
    divisão = n1 / n2
    console.log('Soma: ' + soma)
    console.log('Subtração: ' + subtração)
    console.log('Multiplicação: ' + multiplicação)
    console.log('Divisão: ' + divisão)
}

numeros()

/*Exercicio interpretação 1

Leia o código

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

a) O que vai ser impresso no console?

b) O que aconteceria se retirasse os dois "console.log" e simplesmente invocasse a função "minhaFuncao(2)" e "minhaFuncao(10)"? O que apareceria no console?

a)10
  50

//b)Não apareceria nada no console.
*/

/*Exercicio interpretação 2

Leia o c�digo

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

a) Explique o que essa fun��o faz e qual � sua utilidade.

b) Determine qual ser� a sa�da no console para cada uma das 3 entradas do usu�rio:
- Eu gosto de cenoura.
- CENOURA � bom pra vista.
- Cenouras crescem na terra.

a)A função coloca todas as letras da frase em minúsculo e procura a palavra cenoura.

b)true
  true
  true
*/

/*function analisarMensagem (frase) {
    let tamanhoFrase = frase.length
    let fraseMaiúsculas = frase.toUpperCase()
    let dadosFrase = [ tamanhoFrase, fraseMaiúsculas]
    return dadosFrase
}

let mensagem = prompt('Escreva uma mensagem')
let resultado = analisarMensagem(mensagem)

console.log(resultado[1])
console.log(resultado[0])
*/