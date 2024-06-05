import * as Atividade from "../models/atividadeModel.js"

const atividadesContainer = document.getElementById("atividadesContainer")

function renderAtividades(){
  Atividade.init()
  let atividades = Atividade.getAtividades()
  let result = "";

  for (let atividade of atividades) {
    result += generateCard(atividade);
  }

  atividadesContainer.innerHTML = result;
}

function generateCard(testemunho){
  let result = ``

  return result
}

renderAtividades()