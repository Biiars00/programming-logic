# Treinando Lógica de Programação em Javascript (Node.js)

> Este repositório contém scripts que resolvem questões envolvendo lógica de programação.

## 🛠️ Pré-requisitos
- Node.js instalado em seu sistema.

## 📊 Questões

1. Cálculo da Soma de uma Sequência:

    - Esta questão calcula a variável SOMA somando os números inteiros de 1 até o valor da variável INDICE. O código executa um laço while, onde o valor de SOMA é incrementado com cada valor de K até que K seja igual ao valor de INDICE.

    **Explicação:**
    1. Inicializa-se SOMA e K com 0.
    2. O laço while executa enquanto K for menor que INDICE (13).
    3. Em cada iteração:
        - K é incrementado.
        - SOMA é atualizado com o novo valor de K.
    4. Após a execução do laço, o programa imprime o valor final de SOMA.

    **Saída:**
    ```
        SOMA: 91
    ```

2. Esta questão verifica se um número informado pelo usuário pertence à sequência de Fibonacci:

    - O programa solicitará a entrada de um número e retornará se ele pertence ou não à sequência de Fibonacci.

    **Saída:**
    ```
        Digite um número: 13
        O número 13 pertence à sequência de Fibonacci.
    ```
    **OU**
    ```
        Digite um número: 11
        O número 11 NÃO pertence à sequência de Fibonacci.
    ```


3. Análise de Faturamento Diário de uma Distribuidora:
    - Esta questão analisa o faturamento diário de uma distribuidora, pegando os valores do arquivo `.json`, e realiza as seguintes operações:

        - Encontra o menor valor de faturamento diário.
        - Encontra o maior valor de faturamento diário.
        - Calcula o número de dias com faturamento superior à média mensal.

    **Saída:**
    ```    
        Menor faturamento diário: R$ 373.78
        Maior faturamento diário: R$ 48924.24
        Quantidade de dias com faturamento acima da média mensal: 10 dias
    ```

4. Cálculo de Faturamento Mensal (%), por Estado, de uma Distribuidora:

    - Esta questão calcula o percentual de representação de cada estado no faturamento mensal de uma distribuidora.

    **Saída:**
    ```
        Percentual de SP: 37.53%
        Percentual de RJ: 20.29%
        Percentual de MG: 16.17%
        Percentual de ES: 15.03%
        Percentual de Outros: 10.98%
    ```

5. Inversão de String:

    - Esta questão inverte os caracteres de uma string fornecida pelo usuário.

    > O programa solicitará a entrada de uma string e retornará a string invertida.
    > 
    > Digite uma palavra: `aprovada_`

    **Saída:**
    ```
        Palavra original: aprovada
        Palavra invertida: adavorpa
    ```

## ⚙️ Tecnologias Utilizadas

- **Node.js** para execução dos scripts.
- **fs** para leitura de arquivos JSON.
- **prompt-sync** para capturar a entrada do usuário.

## 🚀 Como Rodar o Projeto

1. Clone o repositório:

```
    git clone https://github.com/Biiars00/programming-logic
    cd <nome-do-seu-diretório>
```

2. Instale as dependências:

```
    npm install prompt-sync
```

3. Execute os scripts:

    - Por exemplo: 
```
    node src/questions/question-1.js
```


Desenvolvido por: [Biiars00](https://github.com/Biiars00) 🦋