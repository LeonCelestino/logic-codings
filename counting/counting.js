function counting(firstNum, lastNum) {
    // Se os números forem iguais, retornará o primeiro número
    if (firstNum === lastNum) return [firstNum];
  
    // Retornará ou 1 ou -1 ou 0, dependendo do valor da diferença entre os números
    const step = Math.sign(lastNum - firstNum);

    // Retornará a sequencia do nosso código e o armazenará em um array.
    // Contagem será baseada no valor da constante step. Se 1, ira ser contagem crescente, se -1 irá ser decrescente
    const numberSequence = Array.from({ length: Math.abs(firstNum - lastNum) + 1 }, (_, i) => firstNum + i * step);
  

    // retorna nossa contagem em uma linha
    return `${numberSequence}\n\nContagem concluída!`;
  }
  

  // Devido às limitações do javascript, inputs possíveis apenas por prompt da web ou por mais complexidade em código com nodejs
  // então o input será manual. Possível substituir por variáveis de escopo global e assim dinamizar os valores para o teste

  /*
        let firstNum;
        let lastNum;
  */
  console.log(counting(9, 4));