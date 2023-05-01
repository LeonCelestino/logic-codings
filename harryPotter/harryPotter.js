// Função aceita 3 argumentos: quantidade de sicle, quantidade de nuque e quantidade de galeão, respectivamente

function harryMoney(qntSicle, qntNuque, qntGal){
    const SICLE_PER_GAL = 29;
    const NUQUE_PER_GAL = 493;

    // Converterá os sicle e nuques para galeão, somando com o galeão, e arredonda para o inteiro mais próximo
    const totalGaleao = Math.round(qntSicle / SICLE_PER_GAL + qntNuque / NUQUE_PER_GAL + qntGal);
  
    return `${totalGaleao}`;
}

let harrySicles;
let harryNuques;
let harryGaleao;

console.log(harryMoney(harrySicles, harryNuques, harryGaleao))