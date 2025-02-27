// Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

const prompt = require("prompt-sync")();

function isFibonacci(num) {
    let a = 0, b = 1, temp;

    while (a <= num) {
        if (a === num) {
            return `O número ${num} pertence à sequência de Fibonacci.`;
        }

        temp = a + b;
        a = b;
        b = temp;
    }

    return `O número ${num} NÃO pertence à sequência de Fibonacci.`;
}

const numero = Number(prompt("Digite um número:"));

console.log(isFibonacci(numero));