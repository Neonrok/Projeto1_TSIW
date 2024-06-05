import * as Testemunho from "../models/testemunhoModel.js"

const testemunhosContainer = document.getElementById("testemunhosContainer")

function renderTestemunhos(){
  Testemunho.init()
  let testemunhos = Testemunho.getTestemunhos()
  let result = "";

  for (let testemunho of testemunhos) {
    result += generateCard(testemunho);
  }

  testemunhosContainer.innerHTML = result;
}

function generateCard(testemunho){
  let result = ``

  return result
}

renderAtividades()