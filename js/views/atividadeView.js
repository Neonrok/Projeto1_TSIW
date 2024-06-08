import * as Atividade from "../models/atividadeModel.js"

const atividadeTitle = document.getElementById("atividadeTitle")
const atividadeImg = document.getElementById("atividadeImg")
const atividadeDescp = document.getElementById("atividadeDescp")

function renderAtividade(){
  Atividade.init()
  let atividade = Atividade.getCurrentAtividade()

  atividadeTitle.innerText = atividade.title
  atividadeImg.src = atividade.image
  atividadeDescp.innerText = atividade.description
}

renderAtividade()