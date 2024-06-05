import * as Testemunho from "../models/testemunhoModel.js"

Testemunho.init()

//get id's
const inputName = document.getElementById("inputName")
const inputOcupation = document.getElementById("inputOcupation")
const inputTestimony = document.getElementById("inputTestimony")
const inputFile = document.getElementById("inputFile")
const testimonyForm = document.getElementById("testimonyForm")

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
  })
}

//Event listeners
testimonyForm.addEventListener('submit', (event) => {
  event.preventDefault()
  addTestimony()
  testimonyForm.reset()
})