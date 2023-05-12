// 1. Ajudando a Academia
// A Academia de Oficiais da Federação precisa da sua ajuda
// para criar um programa que automatize os cálculos das
// médias de alunos e turmas para melhor acompanhar os
// seus desempenhos.
// Este programa será incorporado em seu sistema principal,
// portanto você precisa apenas desenvolver a função que
// calcula a média.
// No entanto, a função deve ser capaz de funcionar com
// qualquer número de alunos ou turmas.

// Desafio 1: Ajudando a Academia
// Escreva uma função que recebe um número qualquer de
// números inteiros como argumentos e retorne a média
// aritmética entre eles.


function media(notas) {
    let soma = 0

    notas.forEach(nota => {
        soma += nota
    });

    const media = soma / notas.length

    return media
}

console.log(media([8, 10, 5, 8]))