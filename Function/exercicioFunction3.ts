type TCalculo = {
    soma:(number1: number, number2: number) => number,
    divisao:(number1: number, number2: number) => number,
    subtracao:(number1: number, number2: number) => number,
    multiplicacao:(number1: number, number2: number) => number
}


const Calculadora: TCalculo = {
    soma: function (number1:number , number2: number): number{
        return number1 + number2
    },
    divisao: function (number1:number , number2: number): number{
        return number1 / number2
    },
    subtracao: function (number1:number , number2: number): number{
        return number1 - number2
    },
    multiplicacao: function (number1:number , number2: number): number{
        return number1 * number2
    },

}


console.log(Calculadora.soma(7,8))
console.log(Calculadora.divisao(4,8))
console.log(Calculadora.subtracao(7,8))
console.log(Calculadora.multiplicacao(7,8))