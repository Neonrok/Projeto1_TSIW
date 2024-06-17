import * as Projeto from "../models/projetoModel.js"
import { createSlider } from "./projetoSliderView.js"

Projeto.init()

//get id's
const inputTitle = document.getElementById("inputTitle")
const inputAuthor = document.getElementById("inputAuthor")
const inputDescp = document.getElementById("inputDescp")
const inputFile = document.getElementById("inputFile")
const projetoForm = document.getElementById("projetoForm")
const projetosContainer = document.getElementById("projetosContainer")

//functions

function reader(file, callback) {
  const fr = new FileReader()
  fr.onload = () => callback(null, fr.result)
  fr.onerror = (err) => callback(err)
  fr.readAsDataURL(file)
}

function addProjeto(){
  let title = inputTitle.value
  let author = inputAuthor.value
  let descp = inputDescp.value
  let inputFiles = [...inputFile.files]
  let fileResults = []

  for(let i=0;i<inputFiles.length;i++){
    reader(inputFiles[i], (err, res) => {
      console.log(res)
      fileResults.push(res)
      if(fileResults.length == inputFiles.length){
        Projeto.addProjeto(title,fileResults,author,descp)
        location.reload()
      }
    })
  }
}

function renderProjetos(){
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

  let removeButton = document.createElement("button")
  removeButton.innerText = "Eliminar"
  removeButton.className = "button"
  removeButton.addEventListener("click",()=>{
    Projeto.removeProjeto(projeto.title)
    location.reload()
  })

  let slider = createSlider(projeto)

  textContainer.append(projetoTitle,projetoAuthor)
  projetoCard.append(slider,textContainer,removeButton)

  return projetoCard
}

renderProjetos()

//Event listeners
projetoForm.addEventListener('submit', (event) => {
  event.preventDefault()
  addProjeto()
  projetoForm.reset()
})