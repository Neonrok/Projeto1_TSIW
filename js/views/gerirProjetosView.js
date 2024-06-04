import * as Projeto from "../models/projetoModel.js"

//get id's
const inputTitle = document.getElementById("inputTitle")
const inputAuthor = document.getElementById("inputAuthor")
const inputDescp = document.getElementById("inputDescp")
const inputFile = document.getElementById("inputFile")
const projetoForm = document.getElementById("projetoForm")

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
      }
    })
  }
}

//Event listeners
projetoForm.addEventListener('submit', (event) => {
  event.preventDefault()
  addProjeto()
  projetoForm.reset()
})