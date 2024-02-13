import multiplicar from "./multiplicador";
import sumar from "./sumador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const formCalcu = document.querySelector("#calculadora-form");
const div = document.querySelector("#resultado-div");

formCalcu.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  if(event.submitter.id === "sumar-button")
  {
    div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
  }
  if(event.submitter.id === "multiplicar-button")
  {
    div.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
  }  
});