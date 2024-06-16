import * as Atividade from "../models/atividadeModel.js"
import * as User from "../models/userModel.js"

Atividade.init()
User.init()
let atividade = Atividade.getCurrentAtividade()

const atividadeTitle = document.getElementById("atividadeTitle")
const atividadeImg = document.getElementById("atividadeImg")
const atividadeDescp = document.getElementById("atividadeDescp")
const saveAtividadeBtn = document.getElementById("saveAtividadeBtn")

function renderAtividade(){

  atividadeTitle.innerText = atividade.title
  atividadeImg.src = atividade.image
  atividadeDescp.innerText = atividade.description
}

renderAtividade()

if(User.isLogged()){
  let loggedUser = User.getUserLogged()
  let saveAtividadeBtnState = User.checkIfActivityIsSaved(loggedUser,atividade.title)

  function changeSaveActivityBtn(){
    if(saveAtividadeBtnState === false){
      saveAtividadeBtn.src = "/img/Save atividade Icon.svg"
    }
    else{
      saveAtividadeBtn.src = "/img/saveAtividadeActiveIcon.svg"
    }
  }

  changeSaveActivityBtn()

  saveAtividadeBtn.addEventListener("click",()=>{
    if(saveAtividadeBtnState === false){
      User.saveActivity(loggedUser,atividade.title)
      saveAtividadeBtnState = true
      changeSaveActivityBtn()
    }
    else{
      User.removeSavedActivity(loggedUser,atividade.title)
      saveAtividadeBtnState = false
      changeSaveActivityBtn()
    }
  })

  saveAtividadeBtn.style.display = "inline"
}