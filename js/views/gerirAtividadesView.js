import * as Atividade from "../models/atividadeModel.js"

//get id's
const inputTitle = document.getElementById("inputTitle")
const inputDate = document.getElementById("inputDate")
const inputDescp = document.getElementById("inputDescp")
const inputFile = document.getElementById("inputFile")
const atividadeForm = document.getElementById("atividadeForm")

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
  })
}

//Event listeners
atividadeForm.addEventListener('submit', (event) => {
  event.preventDefault()
  addAtividade()
  atividadeForm.reset()
})