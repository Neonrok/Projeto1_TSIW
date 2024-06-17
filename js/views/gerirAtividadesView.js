import * as Atividade from "../models/atividadeModel.js"

Atividade.init()

//get id's
const inputTitle = document.getElementById("inputTitle")
const inputDate = document.getElementById("inputDate")
const inputDescp = document.getElementById("inputDescp")
const inputFile = document.getElementById("inputFile")
const atividadeForm = document.getElementById("atividadeForm")
const atividadesContainer = document.getElementById("atividadesContainer")

//functions
function reader(file, callback) {
  const fr = new FileReader()
  fr.onload = () => callback(null, fr.result)
  fr.onerror = (err) => callback(err)
  fr.readAsDataURL(file)
}

function addAtividade(){
  let title = inputTitle.value
  let date = inputDate.value
  let descp = inputDescp.value
  reader(inputFile.files[0], (err, res) => {
    Atividade.addAtividade(title,res,date,descp)
    location.reload()
  })
}

function renderAtividades(){
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

  let removeButton = document.createElement("button")
  removeButton.innerText = "Eliminar"
  removeButton.className = "button"
  removeButton.addEventListener("click",()=>{
    Atividade.removeAtividade(atividade.title)
    location.reload()
  })

  cardContainer.append(cardImg,cardTitle,removeButton)
  return cardContainer
}

//Event listeners
atividadeForm.addEventListener('submit', (event) => {
  event.preventDefault()
  addAtividade()
  atividadeForm.reset()
})

renderAtividades()