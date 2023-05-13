// 2. Procedimento Recursivo I
// A equipe de manutenção da nave Highwind solicitou a sua ajuda para analisar o desempenho do computador portátil utilizado pela equipe de reconhecimento.
// Para isso, em um determinado momento, você precisou simular a criação de blocos de informação em formato de texto recursivamente, então decidiu criar uma função para imitar esse comportamento.

// Desafio 2: Procedimento ReCUfSiVO I
// Escreva uma função que recebe um número e retorna uma quantidade equivalente de "chunks" separados por um traço sem utilizar nenhuma estrutura de repetição (while, dowhile, for, etc).

function separarChunks(numero) {
    // converter o número para uma string
    const numeroString = numero.toString();

    // dividir a string em um array de caracteres
    const numeroArray = numeroString.split('');

    // usar o método reduce para criar um novo array com os "chunks" separados por um traço
    const chunksArray = numeroArray.reduce((chunks, numero, index) => {
        // adicionar o número atual ao chunk atual
        chunks[chunks.length - 1] += numero;

        // adicionar um novo chunk se o índice atual não for divisível por 3
        if ((index + 1) % 3 === 0 && index !== numeroArray.length - 1) {
            chunks.push('');
        }

        return chunks;
    }, ['']);

    // juntar os "chunks" usando o método join
    const chunksString = chunksArray.join('-');

    // retornar a string final com os "chunks" separados por traço
    return chunksString;
}

console.log(separarChunks(123456789)); // Output: "123-456-789"
