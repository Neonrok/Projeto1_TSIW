import * as Projeto from "../models/projetoModel.js"
import { createSlider } from "./projetoSliderView.js"

const projetosContainer = document.getElementById("projetosContainer")

function renderProjetos(){
  Projeto.init()
  let projetos = Projeto.getProjetos()
  let result = "";

  for (let projeto of projetos) {
    result += generateCard(projeto);
  }

  projetosContainer.innerHTML = result;
}

function generateCard(projeto){
  let slider = createSlider(projeto)
  let result = `
    <div class="projeto-card flex gap-16 direction-column">
      ${slider.outerHTML}
      <div class="flex direction-column gap-4">
        <p class="text-16 text-semibold">${projeto.title}</p>
        <p class="text-16 text-medium text-mainGrey">${projeto.author}</p>
      </div>
    </div>`

  return result
}

renderProjetos()