// Variáveis principais
const nomeCantina = "Cantina Escolar";
let salgados = 20;
const precoSalgado = 5;
let totalVendido = 25;

// Atualiza os elementos HTML
function atualizarPainel() {
  document.getElementById("quantidadeSalgados").textContent = salgados;
  document.getElementById("precoSalgado").textContent = precoSalgado;
  document.getElementById("totalVendido").textContent = totalVendido;
}

// Função para vender um salgado
function venderSalgado() {
  if (salgados > 0) {
    salgados--;
    totalVendido += precoSalgado;
    atualizarPainel();
  } else {
    alert("⚠️ Salgados esgotados!");
  }
}

// Inicializa o painel ao carregar
atualizarPainel();
