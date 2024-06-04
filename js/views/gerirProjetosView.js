import * as Projeto from "../models/projetoModel.js"

//get id's
const inputTitle = document.getElementById("inputTitle")
const inputAuhor = document.getElementById("inputAuhor")
const inputDescp = document.getElementById("inputDescp")
const inputFile = document.getElementById("inputFile")
const projetoForm = document.getElementById("projetoForm")

//functions
const reader = (file) =>{
  new Promise((resolve, reject) => {
    const fr = new FileReader()
    fr.onload = () => resolve(fr)
    fr.onerror = (err) => reject(err)
    fr.readAsDataURL(file)
  })
}

async function SaveImagesData(fileList) {
  let fileResults = [];
  const frPromises = fileList.map(reader);

  try {
    fileResults = await Promise.all(frPromises);
  } catch (err) {
    console.error(err);
    return;
  }

  return fileResults
}

function addProjeto(){
  let title = inputTitle.value
  let auhor = inputAuhor.value
  let descp = inputDescp.value
  let images = SaveImagesData(inputFile)

  Projeto.addProjeto(title,images,auhor,descp)
}

//Event listeners
projetoForm.addEventListener('submit', (event) => {
  event.preventDefault()
  addProjeto()
  projetoForm.reset()
})