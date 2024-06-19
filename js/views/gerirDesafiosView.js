import * as Desafio from "../models/desafioModel.js"

Desafio.init()

//get id's
const inputTitle = document.getElementById("inputTitle")
const inputNumPerguntas = document.getElementById("inputNumPerguntas")
const inputFile = document.getElementById("inputFile")
const desafioForm = document.getElementById("desafioForm")
const perguntasContainer = document.getElementById("perguntasContainer")

//functions
function reader(file, callback) {
  const fr = new FileReader()
  fr.onload = () => callback(null, fr.result)
  fr.onerror = (err) => callback(err)
  fr.readAsDataURL(file)
}

function getQuestionsValues(){
  let questionsEle = document.getElementsByClassName("input-perguntas")
  let questions = []

  for(let ele of questionsEle){
    questions.push(ele.value)
  }

  return questions
}

function getTempOptionsValues(index){
  let tempOptions = []
  let optionsEle = document.getElementsByClassName(`input-opcoes${index}`)

  for(let ele of optionsEle){
    tempOptions.push(ele.value)
  }

  return tempOptions
}

function getOptionsValues(){
  let options = []

  for(let i=0;i<inputNumPerguntas.value;i++){
    let tempOptions = []
    tempOptions = getTempOptionsValues(i)
    options.push(tempOptions)
  }

  return options
}

function getAnswersValues(){
  let answersEle = document.getElementsByClassName("input-respostas")
  let answers = []

  for(let ele of answersEle){
    answers.push(ele.value)
  }

  return answers
}

function addDesafio(){
  let title = inputTitle.value
  let questions = getQuestionsValues()
  let options = getOptionsValues()
  let answers = getAnswersValues()
  reader(inputFile.files[0], (err, res) => {
    Desafio.addDesafio(title,res,questions,options,answers)
    location.reload()
  })
}

//Event listeners

inputNumPerguntas.addEventListener("change",()=>{
  let result = ""
  for(let i=0;i<inputNumPerguntas.value;i++){
    result += `
              <div class="flex direction-column gap-16">
            <h2>Pergunta ${i+1}</h2>
            <div class="flex direction-column gap-8">
              <label for="Pergunta" class="text-20">Pergunta</label>
              <input class="admin-input text-16 input-perguntas" type="text">
            </div>
            <div class="flex direction-column gap-8">
              <label for="Resposta" class="text-20">Resposta</label>
              <input class="admin-input text-16 input-respostas" type="text">
            </div>
            <div class="flex direction-column gap-8">
              <label for="Opção 1" class="text-20">Opção 1</label>
              <input class="admin-input text-16 input-opcoes${i}" type="text">
            </div>
            <div class="flex direction-column gap-8">
              <label for="Opção 2" class="text-20">Opção 2</label>
              <input class="admin-input text-16 input-opcoes${i}" type="text">
            </div>
            <div class="flex direction-column gap-8">
              <label for="Opção 3" class="text-20">Opção 3</label>
              <input class="admin-input text-16 input-opcoes${i}" type="text">
            </div>
            <div class="flex direction-column gap-8">
              <label for="Opção 4" class="text-20">Opção 4</label>
              <input class="admin-input text-16 input-opcoes${i}" type="text">
            </div>
          </div>`
  }

  perguntasContainer.innerHTML = result
})

desafioForm.addEventListener('submit', (event) => {
  event.preventDefault()
  addDesafio()
  desafioForm.reset()
})