import * as Testemunho from "../models/testemunhoModel.js"

const testemunhosContainer = document.getElementById("testemunhosContainer")

function renderTestemunhos(){
  Testemunho.init()
  let testemunhos = Testemunho.getTestemunhos()
  let result = ""

  for (let testemunho of testemunhos) {
    result += generateCard(testemunho)
  }

  testemunhosContainer.innerHTML = result
}

function generateCard(testemunho){
  let result = `
  <div class="flex direction-column gap-24 testemunho-card">
    <div class="flex items-center gap-16">
      <img src="${testemunho.image}" alt="" class="testemunho-img">
      <div>
        <p class="text-18 text-semibold">${testemunho.name}</p>
        <p class="text-18 text-medium text-mainGrey">${testemunho.ocupation}</p>
      </div>
    </div>
    <p class="text-18 text-regular lineH-30">${testemunho.testimony}</p>
  </div>`

  return result
}

renderTestemunhos()