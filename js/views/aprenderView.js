import * as Desafio from "../models/desafioModel.js"

Desafio.init()

const desafiosContainer = document.getElementById("desafiosContainer")

function renderDesafios(){
  let desafios = Desafio.getDesafios()

  for(let desafio of desafios){
    desafiosContainer.append(generateCard(desafio))
  }
}

function generateCard(desafio){
  let desafioCard = document.createElement("div")
  desafioCard.className = "flex direction-column gap-16 desafio-card"

  let desafioImg = document.createElement("img")
  desafioImg.className = "desafio-img"
  desafioImg.src = desafio.image

  let desafioTitle = document.createElement("p")
  desafioTitle.className = "desafio-title"
  desafioTitle.innerText = desafio.title

  desafioCard.append(desafioImg,desafioTitle)
  desafioCard.addEventListener("click",()=>{
    Desafio.setCurrentDesafio(desafio.title)
    location.href = "/html/desafio.html"
  })

  return desafioCard
}

renderDesafios()