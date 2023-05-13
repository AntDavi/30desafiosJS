// 2. Procedimento Recursivo I
// A equipe de manutenção da nave Highwind solicitou a sua ajuda para analisar o desempenho do computador portátil utilizado pela equipe de reconhecimento.
// Para isso, em um determinado momento, você precisou simular a criação de blocos de informação em formato de texto recursivamente, então decidiu criar uma função para imitar esse comportamento.

// Desafio 2: Procedimento Recursivo I
// Escreva uma função que recebe um número e retorna uma quantidade equivalente de "chunks" separados por um traço sem utilizar nenhuma estrutura de repetição (while, dowhile, for, etc).

function createChunks(num) {
    return num <= 0 ? '' : createChunks(num - 1) + (num === 1 ? 'chunk' : '-chunk');
}

// Exemplo de uso da função: cria 5 chunks
const numChunks = 120;
const chunks = createChunks(numChunks);
console.log(chunks); // Output: "chunk-chunk-chunk-chunk-chunk"

