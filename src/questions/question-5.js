// Escreva um programa que inverta os caracteres de um string.
// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

const prompt = require("prompt-sync")();

function reverseString(str) {
    let result = '';
    
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]; 
    }
    
    return result;
}

const originalString = String(prompt("Digite uma palavra: "));

const invertedString = reverseString(originalString);

console.log(`Palavra original: ${originalString}`);
console.log(`Palavra invertida: ${invertedString}`);