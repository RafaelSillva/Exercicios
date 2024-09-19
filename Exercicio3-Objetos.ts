type TProduto = {
    nome: String,
    preco: number,
    quantidade: number
}

type TCliente = {
    nome: string,
    idade: number,
    produtos: TProduto[]
}

const cartaoRafael: TCliente = {
    nome: "Rafael",
    idade: 25,
    produtos: [
        {
            nome: "Carne de sol",
            preco: 150.00,
            quantidade: 2
        },
        {
            nome: "refrigerante tuchaua",
            preco: 8,
            quantidade: 1

        },
        {
            nome: "Sorvete",
            preco: 15,
            quantidade: 1


        }


    ]
}

let total = 0

for (let produto of cartaoRafael.produtos){
    total += produto.preco * produto.quantidade
}

console.log(`O total da compra do cliente ${cartaoRafael} foi de ${total/100}`)