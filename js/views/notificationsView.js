import * as User from "../models/userModel.js"
import * as Atividade from "../models/atividadeModel.js"
import * as Projeto from "../models/projetoModel.js"
import * as Desafio from "../models/desafioModel.js"

User.init()
Atividade.init()
Projeto.init()
Desafio.init()

let loggedUser = User.getUserLogged()
let activeNotifications = loggedUser.activeNotifications

const notificationsContainer = document.getElementById("notificationsContainer")

function renderNotifications(){
  for(let notificationType of activeNotifications){
    if(notificationType == "Atividades" || notificationType == "Próximas atividades"){
      renderAtividadesNotifications(notificationType)
    }
  }
}

function renderAtividadesNotifications(type){
  let atividades = Atividade.getAtividades()

  for(let atividade of atividades){

    let dateDiffDays = datediff(atividade.date)
    console.log(dateDiffDays)

    if(type == "Próximas atividades" && dateDiffDays <=3){
      let description = `Atividade a realizar-se em ${dateDiffDays} dias`
      generateCard(atividade.title,description,atividade.image,"atividade",type)
    }

    dateDiffDays = datediff(atividade.addedDate)

    if(type == "Atividades" && dateDiffDays >=-3){
      let description = "Nova atividade adicionada"
      generateCard(atividade.title,description,atividade.image,type)
    }
  }
}

function generateCard(title,description,image,type){
  `        <div class="flex items-center notification">
          <img class="notification-img" src="/img/DESAFIO IMG.svg" alt="">
          <div class="flex direction-column gap-4">
            <p class="text-20 text-medium">Desafio de HTML</p>
            <p class="text-18 text-regular text-mainGrey">Novo desafio adicionado</p>
          </div>
        </div>`

  const notificationContainer = document.createElement("div")
  notificationContainer.className = "flex items-center notification"

  const notificationImg = document.createElement("img")
  notificationImg.className = "notification-img"
  notificationImg.src = image

  const notificationTextContainer = document.createElement("div")
  notificationTextContainer.className = "flex direction-column gap-4"

  const notificationTitle = document.createElement("p")
  notificationTitle.className = "text-20 text-medium"
  notificationTitle.innerText = title

  const notificationDescription = document.createElement("p")
  notificationDescription.className = "text-18 text-regular text-mainGrey"
  notificationDescription.innerText = description

  notificationTextContainer.append(notificationTitle,notificationDescription)
  notificationContainer.append(notificationImg,notificationTextContainer)

  notificationContainer.addEventListener("click",()=>{
    if(type == "Próximas atividades" || type == "Atividades"){
      Atividade.setCurrentAtividade(title)
      location.href = "/html/atividade.html"
    }
    else if(type == "Projetos"){
      Projeto.setCurrentAtividade(title)
      location.href = "/html/projeto.html"
    }
    else{
      Desafio.setCurrentAtividade(title)
      location.href = "/html/desafio.html"
    }
  })
  
  notificationsContainer.append(notificationContainer)
}

function checkIfNotificationHasBeenSeen(){
}

function datediff(date) { 
  let currentDate = new Date()
  let convertedDate = new Date(date)            
  return Math.round((convertedDate - currentDate) / (1000 * 60 * 60 * 24))
}

renderNotifications()
