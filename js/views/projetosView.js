import * as Projeto from "../models/projetoModel.js"
import { createSlider } from "./projetoSliderView.js"

const projetosContainer = document.getElementById("projetosContainer")

function renderProjetos(){
  Projeto.init()
  let projetos = Projeto.getProjetos()

  for (let projeto of projetos) {
    projetosContainer.appendChild(generateCard(projeto))
  }

}

function generateCard(projeto){
  let projetoCard = document.createElement("div")
  projetoCard.className = "projeto-card flex gap-16 direction-column"

  let textContainer = document.createElement("div")
  textContainer.className = "flex direction-column gap-4"

  let projetoTitle = document.createElement("p")
  let projetoAuthor = document.createElement("p")

  projetoTitle.className = "text-16 text-semibold"
  projetoAuthor.className = "text-16 text-medium text-mainGrey"

  projetoTitle.innerText = projeto.title
  projetoAuthor.innerText = projeto.author

  let slider = createSlider(projeto)

  textContainer.append(projetoTitle,projetoAuthor)
  projetoCard.append(slider,textContainer)

  return projetoCard
}

renderProjetos()