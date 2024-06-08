import * as Atividade from "../models/atividadeModel.js"

const atividadesContainer = document.getElementById("atividadesContainer")

function renderAtividades(){
  Atividade.init()
  let atividades = Atividade.getAtividades()

  for (let atividade of atividades) {
    atividadesContainer.append(generateCard(atividade))
  }
}

function generateCard(atividade){

  let cardContainer = document.createElement("div")
  cardContainer.className = "flex direction-column gap-16 atividade-card"

  let cardImg = document.createElement("img")
  cardImg.className = "atividade-img"
  cardImg.src = atividade.image

  let cardTitle = document.createElement("p")
  cardTitle.className = "text-16 text-medium atividade-title"
  cardTitle.innerText = atividade.title

  cardContainer.append(cardImg,cardTitle)
  cardContainer.addEventListener("click", ()=>{
    Atividade.setCurrentAtividade(atividade.title)
    location.href = "/html/atividade.html"
  })

  return cardContainer
}

renderAtividades()