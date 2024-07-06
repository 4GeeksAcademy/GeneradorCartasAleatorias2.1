import "./style.css";

window.onload = function() {
  const numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const simbolos = ["❤️", "♣️", "♦️", "♠️"];

  const numeroRandom = numberR => Math.floor(Math.random() * numberR.length);
  const simboloRandom = simbolR => Math.floor(Math.random() * simbolR.length);
  let simbolo = simboloRandom(simbolos);
  let numero = numeroRandom(numeros);

  document.getElementById("numero").innerHTML = numeros[numero];
  document.getElementById("simbolo").innerHTML = simbolos[simbolo];
  document.getElementById("simboloDown").innerHTML = simbolos[simbolo];
};
