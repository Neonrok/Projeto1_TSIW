import * as Testemunho from "../models/testemunhoModel.js"

Testemunho.init()

//get id's
const inputName = document.getElementById("inputName")
const inputOcupation = document.getElementById("inputOcupation")
const inputTestimony = document.getElementById("inputTestimony")
const inputFile = document.getElementById("inputFile")
const testimonyForm = document.getElementById("testimonyForm")
const testemunhosContainer = document.getElementById("testemunhosContainer")

//functions
function reader(file, callback) {
  const fr = new FileReader()
  fr.onload = () => callback(null, fr.result)
  fr.onerror = (err) => callback(err)
  fr.readAsDataURL(file)
}

function addTestimony(){
  let name = inputName.value
  let ocupation = inputOcupation.value
  let testimony = inputTestimony.value
  reader(inputFile.files[0], (err, res) => {
    Testemunho.addTestemunho(name,res,testimony,ocupation)
    location.reload()
  })
}

function renderTestemunhos(){
  let testemunhos = Testemunho.getTestemunhos()

  for (let testemunho of testemunhos) {
    testemunhosContainer.append(generateCard(testemunho))
  }

}

function generateCard(testemunho){
  let result = `
    <div class="flex items-center gap-16">
      <img src="${testemunho.image}" alt="" class="testemunho-img">
      <div>
        <p class="text-18 text-semibold">${testemunho.name}</p>
        <p class="text-18 text-medium text-mainGrey">${testemunho.ocupation}</p>
      </div>
    </div>
    <p class="text-18 text-regular lineH-30">${testemunho.testimony}</p>`

  let cardContainer = document.createElement("div")
  cardContainer.className = "flex direction-column gap-24 testemunho-card"
  cardContainer.innerHTML = result

  let removeButton = document.createElement("button")
  removeButton.innerText = "Eliminar"
  removeButton.className = "button"
  removeButton.addEventListener("click",()=>{
    Testemunho.removeTestemunho(testemunho.name)
    location.reload()
  })

  cardContainer.append(removeButton)
  return cardContainer
}

renderTestemunhos()

//Event listeners
testimonyForm.addEventListener('submit', (event) => {
  event.preventDefault()
  addTestimony()
  testimonyForm.reset()
})