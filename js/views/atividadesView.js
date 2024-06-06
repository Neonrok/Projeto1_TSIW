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

function generateCard(atividade){
  let result = `
        <div class="flex direction-column gap-16 atividade-card">
          <img src="${atividade.image}" alt="" class="atividade-img">
          <p class="text-16 text-medium atividade-title">${atividade.title}</p>
        </div>`

  return result
}

renderAtividades()