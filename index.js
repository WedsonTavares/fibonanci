// === Questão 1 ===
function questao1() {
  let INDICE = 13, SOMA = 0, K = 0;
  while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
  }
  console.log("[1] SOMA final:", SOMA);
}

// === Questão 2 ===
function isFibonacci(n) {
  let a = 0, b = 1;
  while (b < n) {
    [a, b] = [b, a + b];
  }
  return b === n || n === 0;
}

function questao2() {
  const numero = 21;
  const resultado = isFibonacci(numero)
    ? `${numero} pertence à sequência de Fibonacci.`
    : `${numero} NÃO pertence à sequência de Fibonacci.`;
  console.log("[2]", resultado);
}

// === Questão 3 ===
const fs = require('fs');

function questao3() {
  try {
    const dados = JSON.parse(fs.readFileSync('faturamento.json', 'utf-8'));
    const valores = dados.filter(d => d.valor > 0).map(d => d.valor);
    const media = valores.reduce((acc, v) => acc + v, 0) / valores.length;
    const menor = Math.min(...valores);
    const maior = Math.max(...valores);
    const diasAcimaMedia = valores.filter(v => v > media).length;

    console.log("[3] Menor:", menor.toFixed(2));
    console.log("[3] Maior:", maior.toFixed(2));
    console.log("[3] Dias acima da média:", diasAcimaMedia);
  } catch (err) {
    console.error("[3] Erro ao ler faturamento.json:", err.message);
  }
}

// === Questão 4 ===
function questao4() {
  const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };

  const total = Object.values(faturamento).reduce((acc, v) => acc + v, 0);

  console.log("[4] Percentuais por estado:");
  for (const estado in faturamento) {
    const perc = (faturamento[estado] / total) * 100;
    console.log(`   ${estado}: ${perc.toFixed(2)}%`);
  }
}

// === Questão 5 ===
function inverterString(str) {
  let invertida = "";
  for (let i = str.length - 1; i >= 0; i--) {
    invertida += str[i];
  }
  return invertida;
}

function questao5() {
  const texto = "Wedson";
  console.log("[5] Texto invertido:", inverterString(texto));
}

// === Executar todas ===
questao1();
questao2();
questao3();
questao4();
questao5();
