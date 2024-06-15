import * as Atividade from "/js/models/atividadeModel.js"
import * as Projeto from "/js/models/projetoModel.js"
import { createSlider } from "/js/views/projetoSliderView.js"

const atividadesContainer = document.getElementById("atividadesContainer")
const projetosContainer = document.getElementById("projetosContainer")

function renderAtividades(){
  Atividade.init()
  let atividades = Atividade.getAtividades()

  for(let i=0;i<4;i++) {
    atividadesContainer.append(generateAtividadeCard(atividades[i]))
  }
}

function generateAtividadeCard(atividade){

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

  projetoCard.addEventListener("click", () =>{
    Projeto.setCurrentProjeto(projeto.title)
    location.href = "/html/projeto.html"
  })

  return projetoCard
}

renderProjetos()
renderAtividades()