function calculadora() {
  var numero1 = parseInt(document.querySelector("#num1").value);
  var numero2 = parseInt(document.querySelector("#num2").value);
  var oper = document.querySelector("#operação").value;
  var calcular;

  if (oper == "add") {
    calcular = numero1 + numero2;
  } else if (oper == "sub") {
    calcular = numero1 - numero2;
  } else if (oper == "div") {
    calcular = numero1 / numero2;
  } else if (oper == "mult") {
    calcular = numero1 * numero2;
  }

  document.querySelector("#resultado").innerHTML = calcular;
}


function mudaLetra () {
  document.querySelector('.escreve-po').textContent = "doidodemais"
}

function mudaPalavra () {
  document.querySelector('.escreve-po').textContent = "manero"
}

function mudaMaisAinda () {
  document.querySelector('.escreve-po').textContent = "clica aqui só pra testar uma coisa"
}

addEventListener("transitionstart", function() { mudaLetra() })
addEventListener("transitionend", function() { mudaMaisAinda() })
addEventListener("click", function() { mudaPalavra() })
