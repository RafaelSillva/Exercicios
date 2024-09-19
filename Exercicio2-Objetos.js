const Nomes = ["Rafael", "Leticia", "Maria", "Pedro","Joana"]


const listaDeEspera = []

for (let i = 0; i < Nomes.length; i++){
    listaDeEspera[i] = {
        nome: Nomes[i],
        senha: i + 1
    }
    console.log(listaDeEspera)
}