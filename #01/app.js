function media(notas) {
    let soma = 0

    notas.forEach(nota => {
        soma += nota
    });

    const media = soma / notas.length

    return media
}

console.log(media([8, 10, 5, 8]))