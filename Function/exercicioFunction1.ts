const pessoa = {
    nome: "João",
    idade: 12,
    altura: 1.4,
    profissao: "estudante"
}

function dados(credencias: any){
    
    console.log(`olá! Meu nome é ${credencias.nome}, sou um jovem de ${credencias.idade}, ${credencias.altura}m de altura e sou ${credencias.profissao}`)
}


dados(pessoa)