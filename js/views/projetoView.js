import * as Projeto from "../models/projetoModel.js"
import { createSlider } from "./projetoSliderView.js"

const projetoTitle = document.getElementById("projetoTitle")
const projetoAuthor = document.getElementById("projetoAuthor")
const projetoDescp = document.getElementById("projetoDescp")
const sliderDescpContainer = document.getElementById("sliderDescpContainer")

function renderProjeto(){
  Projeto.init()
  let projetos = Projeto.getProjetos()

  projetoTitle.innerText = projeto.title
  projetoAuthor.innerText = projeto.author

  let slider = createSlider(projeto)

}

renderProjeto()