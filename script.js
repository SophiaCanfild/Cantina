// Passo 1 – Declarando variáveis
var nomeCantina = "Cantina da Escola";
let salgados = 20;
const precoSalgado = 5;
let totalVendido = 25;

// Atualiza os elementos da página
function atualizarPainel() {
  document.getElementById("nomeCantina").textContent = nomeCantina;
  document.getElementById("quantidadeSalgados").textContent = salgados;
  document.getElementById("precoSalgado").textContent = precoSalgado;
  document.getElementById("totalVendido").textContent = totalVendido;
}

function logConsole(mensagem) {
  const consoleLog = document.getElementById("consoleLog");
  consoleLog.textContent += mensagem + "\n";
}

// Passo 2 – Atualizando valores
function venderSalgados() {
  if (salgados >= 5) {
    salgados -= 5;
    totalVendido += 5 * precoSalgado;
    atualizarPainel();
    logConsole("Vendeu 5 salgados.");
    logConsole("Agora restam " + salgados + " salgados.");
    logConsole("Total vendido: R$" + totalVendido);
  } else {
    logConsole("⚠️ Não há salgados suficientes para vender.");
  }
}

// Passo 3 – Teste rápido
function testarConst() {
  try {
    precoSalgado = 6;
  } catch (error) {
    logConsole("Erro ao tentar mudar precoSalgado: " + error.message);
  }
}

function testarEscopo() {
  if (true) {
    var testeVar = "Sou var";
    let testeLet = "Sou let";
    logConsole("Dentro do bloco:");
    logConsole(testeVar);
    logConsole(testeLet);
  }

  logConsole("Fora do bloco:");
  logConsole(testeVar);
  try {
    logConsole(testeLet);
  } catch (error) {
    logConsole("Erro ao acessar testeLet: " + error.message);
  }
}

// Inicializa a página
atualizarPainel();
logConsole("Bem-vindo à " + nomeCantina);
logConsole("Temos " + salgados + " salgados disponíveis.");
logConsole("Cada salgado custa R$" + precoSalgado);
