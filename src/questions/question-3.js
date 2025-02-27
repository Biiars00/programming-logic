// Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const fs = require("fs");

const faturamento = JSON.parse(fs.readFileSync("src/data-json/revenue.json", "utf8"));

const diasComFaturamento = faturamento.filter(dia => dia.valor > 0);

if (diasComFaturamento.length === 0) {
    console.log("Não há dias com faturamento para análise.");
    process.exit();
}

const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.valor));
const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.valor));

const somaFaturamento = diasComFaturamento.reduce((total, dia) => total + dia.valor, 0);
const mediaMensal = somaFaturamento / diasComFaturamento.length;

const daysAboveAverage = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;

console.log(`Menor faturamento diário: R$ ${menorFaturamento.toFixed(2)}`);

console.log(`Maior faturamento diário: R$ ${maiorFaturamento.toFixed(2)}`);

console.log(`Quantidade de dias com faturamento acima da média mensal: ${daysAboveAverage} dias`);


