/* Desenvolva sua lógica aqui */
import { insertedValues } from "./valuesData.js"
import { render, totalValue, handleForm } from "./render.js"

render(insertedValues)

const todosButton = document.querySelector("#todos");
todosButton.addEventListener("click", allValues);

function allValues() {
    render(insertedValues);
    totalValue(insertedValues)
  }  


const entradaButton = document.querySelector("#entrada");
entradaButton.addEventListener("click", filterEntrada);

function filterEntrada() {
    const filteredValues = insertedValues.filter((value) => value.categoryID === 0 || value.categoryID === "Entrada");
    render(filteredValues);
    totalValue(filteredValues)
  }
  
  
const saidaButton = document.querySelector("#saida");
  saidaButton.addEventListener("click", filterSaida);

  function filterSaida() {
    const filteredValues = insertedValues.filter((value) => value.categoryID === 1 || value.categoryID === "Saída");
    render(filteredValues);
    totalValue(filteredValues)
  }
  
totalValue(insertedValues)
handleForm(insertedValues)