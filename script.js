function calculadora() {
  var numero1 = parseInt(document.querySelector("#num1").value);
  var numero2 = parseInt(document.querySelector("#num2").value);
  var oper = document.querySelector("#operação").value;
  var calcular;

  if (oper == "add") {
    calcular = numero1 + numero2;
  } else if (oper == "sub") {
    calcular == numero1 - numero2;
  } else if (oper == "div") {
    calcular == numero1 / numero2;
  } else if (oper == "mult") {
    calcular == numero1 * numero2;
  }

  document.querySelector("#resultado").innerHTML = calcular;
}
