const usuario = {
    nome: "Rafael",
    idade: 25,
    altura: 1.78,
    temCNH: false,
    habilidades: ["javascript", "NodeJs", "Typescript", "Html", "Css"]

}

const possuiCNH = usuario.temCNH ? "Possui" : "Não possui CNH"

console.log(`${usuario.nome} tem ${usuario.idade} anos, ${usuario.altura} de altura, ${possuiCNH} e as seguintes habilidades:`)
for (let item of usuario.habilidades) {
        console.log(`${item}`)
    }
