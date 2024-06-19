import * as Desafio from "../models/desafioModel.js"

Desafio.init()
let currentDesafio = Desafio.getCurrentDesafio()

const desafioPerguntasContainer = document.getElementById("desafioPerguntasContainer")
const desafioTitle = document.getElementById("desafioTitle")

function renderDesafio(){
  desafioTitle.innerText = currentDesafio.title
  let questions = currentDesafio.questions

  for(let i=0;i<questions.length;i++){
    desafioPerguntasContainer.append(generateQuestionCard(i))
  }

}

function generateQuestionCard(index){

  let options = currentDesafio.options[index]

  let perguntaCard = document.createElement("div")
  perguntaCard.className = "pergunta-card"

  let perguntaNum = document.createElement("p")
  perguntaNum.className = "text-24 text-medium pergunta-num"
  perguntaNum.innerText = `Pergunta ${index+1}`

  let perguntaOpcoes = document.createElement("div")
  perguntaOpcoes.className = "flex direction-column gap-24 pergunta-opcoes"

  let pergunta = document.createElement("p")
  pergunta.innerText = currentDesafio.questions[index]
  pergunta.className = "text-24 text-regular"

  let optionsContainer = document.createElement("div")
  optionsContainer.className = "flex direction-column gap-8"

  for(let option of options){
    optionsContainer.append(generateOption(option,index))
  }

  perguntaOpcoes.append(pergunta,optionsContainer)
  perguntaCard.append(perguntaNum,perguntaOpcoes)

  return perguntaCard
}

function generateOption(option,index){
  let optionContainer = document.createElement("div")
  optionContainer.className = "flex items-center gap-16 opcao"

  let optionSquare = document.createElement("div")
  optionSquare.className = "opcao-square"

  let optionText = document.createElement("p")
  optionText.className = "text-20 text-regular"
  optionText.innerText = option

  optionContainer.append(optionSquare,optionText)
  optionContainer.addEventListener("click",()=>{
    if(option == currentDesafio.answers[index]){
      optionContainer.classList.add("correct","disable")
    }
    else{
      optionContainer.classList.add("wrong","disable")
    }
  }, { once: true })

  return optionContainer
}

renderDesafio()