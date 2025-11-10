function calculadora() {
  const numero1 = document.getElementById("numero1");
  const numero2 = document.getElementById("numero2");
  const resposta = document.getElementById("resposta");
  document.querySelectorAll("#operacoes li").forEach((li) => {
    li.addEventListener("click", () => {
      const operacao = li.getAttribute("id");

      // Obter valores atuais dos inputs
      const num1 = parseFloat(numero1.value);
      const num2 = parseFloat(numero2.value);

      // Verificar se os valores são números válidos
      if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números válidos.");
        return;
      }

      let resultado;

      switch (operacao) {
        case "somar":
          resultado = num1 + num2;
          break;
        case "subtrair":
          resultado = num1 - num2;
          break;
        case "multiplicar":
          resultado = num1 * num2;
          break;
        case "dividir":
          if (num2 === 0 || num1 === 0) {
            alert("Não é possível dividir por zero.");
            return;
          }
          resultado = num1 / num2;
          break;
      }
      resposta.value = resultado;
    });
  });
  let limpar = document.getElementById("limpar");
  limpar.onclick = function () {
    numero1.value = "";
    numero2.value = "";
    resposta.value = "";
  };
}
calculadora();
function mudarIdioma(event) {
  event.preventDefault();
  const idioma = document.getElementById("idiomas").value;
  const idiomasSuportados = ["portugues", "ingles", "espanhol"];
  if (!idiomasSuportados.includes(idioma)) {
    alert("Este idioma ainda não está disponível! Mó preguiça kk.");
    location.reload();
    return;
  }

  const textos = {
    portugues: {
      titulo: "Calculadora",
      descricao: "Esta é uma calculadora simples com diferentes idiomas.",
      num1: "Diga o 1º número",
      num2: "Diga o 2º número",
      soma: "Soma",
      subtracao: "Subtração",
      multiplicacao: "Multiplicação",
      divisao: "Divisão",
      resposta: "Resposta",
      limpar: "Limpar",
    },
    ingles: {
      titulo: "Calculator",
      descricao: "This is a simple calculator with different languages.",
      num1: "Enter the 1st number",
      num2: "Enter the 2nd number",
      soma: "Add",
      subtracao: "Subtract",
      multiplicacao: "Multiply",
      divisao: "Divide",
      resposta: "Answer",
      limpar: "Clear",
    },
    espanhol: {
      titulo: "Calculadora",
      descricao: "Esta es una calculadora simple con diferentes idiomas.",
      num1: "Ingrese el primer número",
      num2: "Ingrese el segundo número",
      soma: "Suma",
      subtracao: "Resta",
      multiplicacao: "Multiplicación",
      divisao: "División",
      resposta: "Respuesta",
      limpar: "Limpiar",
    },
  };

  const t = textos[idioma];

  document.querySelector("h1").textContent = t.titulo;
  document.querySelector("p").textContent = t.descricao;
  document.getElementById("numero1").placeholder = t.num1;
  document.getElementById("numero2").placeholder = t.num2;
  document.getElementById("somar").textContent = t.soma;
  document.getElementById("subtrair").textContent = t.subtracao;
  document.getElementById("multiplicar").textContent = t.multiplicacao;
  document.getElementById("dividir").textContent = t.divisao;
  document.querySelector("label[for='resposta']").textContent = t.resposta;
  document.getElementById("limpar").textContent = t.limpar;
}

document.getElementById("idiomas").addEventListener("change", mudarIdioma);
