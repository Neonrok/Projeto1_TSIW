import * as Projeto from "../models/projetoModel.js"
import { createSlider } from "./projetoSliderView.js"

const projetoTitle = document.getElementById("projetoTitle")
const projetoAuthor = document.getElementById("projetoAuthor")
const projetoDescp = document.getElementById("projetoDescp")
const sliderDescpContainer = document.getElementById("sliderDescpContainer")

function renderProjeto(){
  Projeto.init()
  let projeto = Projeto.getCurrentProjeto()

  projetoTitle.innerText = projeto.title
  projetoAuthor.innerText = projeto.author
  projetoDescp.innerText = projeto.description

  let slider = createSlider(projeto)
  sliderDescpContainer.prepend(slider)
}

renderProjeto()