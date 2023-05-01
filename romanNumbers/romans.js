function romanToDecimal(roman) {
    // Objeto de romanos
    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    // Para podermos fazer a subtração necessária em casos como "IV", "IX", "LC", etc
    let prev = 0;
    // Nosso resultado
    let converting = 0;
  
    //diminuir 1 da largura pra usar a string roman como array. Caso contrário, não pegará o primeiro valor de nossa array
    for (let i = roman.length - 1; i >= 0; i--) {
        // Usará roman[i] para pegar o caracter, então chamar a propriedade correspondente do objeto romanNumeraos
        const current = romanNumerals[roman[i]];

        // Sempre que current, atual, for maior ou igual que o anterior, ele adicionará ao nosso resultado. 
        // Caso contrário, subtrairá.
        // Exemplo: Se current = 10 e prev = 5, então ele adicionará + 10 ao valor atual do converting
        if (current >= prev) {
            converting += current;
        } else {
            converting -= current;
        }
        // Para armazenar o valor prévio, e assim podermos fazer a subtração quando necessário.

        prev = current;
      
    }

    return converting;
}

romanToDecimal("XXV")