import * as User from "../models/userModel.js"
import * as Atividade from "../models/atividadeModel.js"

User.init()
let loggedUser = User.getUserLogged()

//get conta navigation buttons
const perfilNavbutton = document.getElementById("perfilNavbutton")
const passwordNavbutton = document.getElementById("passwordNavbutton")
const atividadesGuardNavbutton = document.getElementById("atividadesGuardNavbutton")
const notifNavbutton = document.getElementById("notifNavbutton")
const eliminarContaNavbutton = document.getElementById("eliminarContaNavbutton")

//get sections
const perfilSection = document.getElementById("perfilSection")
const passwordSection = document.getElementById("passwordSection")
const atividadesGuardSection = document.getElementById("atividadesGuardSection")
const notifSection = document.getElementById("notifSection")
const eliminarContaSection = document.getElementById("eliminarContaSection")

//inputs and button perfil section
const avatarInputLabel = document.getElementById("avatarInputLabel")
const avatarInput = document.getElementById("avatarInput")
const changeNameInput = document.getElementById("changeNameInput")
const guardarPerfilButton = document.getElementById("guardarPerfilButton")

avatarInputLabel.style.backgroundImage = `url(${loggedUser.avatar})`
changeNameInput.value = loggedUser.name

//inputs and button password section
const currentPassInput = document.getElementById("currentPassInput")
const newPassInput = document.getElementById("newPassInput")
const guardarPassButton = document.getElementById("guardarPassButton")

//inputs and button password section
const passwordInput = document.getElementById("passwordInput")
const eliminarContaButton = document.getElementById("eliminarContaButton")

//saved activities container
const atividadesGuardContainer = document.getElementById("atividadesGuardContainer")

//functions

function reader(file, callback) {
  const fr = new FileReader()
  fr.onload = () => callback(null, fr.result)
  fr.onerror = (err) => callback(err)
  fr.readAsDataURL(file)
}


function resetSectionSelection(){
  perfilNavbutton.classList.remove("active")
  passwordNavbutton.classList.remove("active")
  atividadesGuardNavbutton.classList.remove("active")
  notifNavbutton.classList.remove("active")
  eliminarContaNavbutton.classList.remove("active")

  perfilSection.classList.add("d-none")
  passwordSection.classList.add("d-none")
  atividadesGuardSection.classList.add("d-none")
  notifSection.classList.add("d-none")
  eliminarContaSection.classList.add("d-none")
}

function activateSectionSelection(selection){
  resetSectionSelection()
  selection.classList.add("active")
}

function renderGuardAtividades(){
  Atividade.init()

  for (let atividade of loggedUser.savedActivities) {
    let savedActivity = Atividade.getSavedActivity(atividade)
    atividadesGuardContainer.append(generateCard(savedActivity))
  }
}

function generateCard(atividade){

  let cardContainer = document.createElement("div")
  cardContainer.className = "flex direction-column gap-16 atividade-card"

  let cardImg = document.createElement("img")
  cardImg.className = "atividade-img"
  cardImg.src = atividade.image

  let cardTitle = document.createElement("p")
  cardTitle.className = "text-16 text-medium atividade-title"
  cardTitle.innerText = atividade.title

  cardContainer.append(cardImg,cardTitle)
  cardContainer.addEventListener("click", ()=>{
    Atividade.setCurrentAtividade(atividade.title)
    location.href = "/html/atividade.html"
  })

  return cardContainer
}

renderGuardAtividades()

//event listeners

perfilNavbutton.addEventListener("click", ()=>{
  activateSectionSelection(perfilNavbutton)
  perfilSection.classList.remove("d-none")
})

passwordNavbutton.addEventListener("click", ()=>{
  activateSectionSelection(passwordNavbutton)
  passwordSection.classList.remove("d-none")
})

atividadesGuardNavbutton.addEventListener("click", ()=>{
  activateSectionSelection(atividadesGuardNavbutton)
  atividadesGuardSection.classList.remove("d-none")
})

notifNavbutton.addEventListener("click", ()=>{
  activateSectionSelection(notifNavbutton)
  notifSection.classList.remove("d-none")
})

eliminarContaNavbutton.addEventListener("click", ()=>{
  activateSectionSelection(eliminarContaNavbutton)
  eliminarContaSection.classList.remove("d-none")
})

guardarPerfilButton.addEventListener("click", ()=>{
  loggedUser = User.getUserLogged()
  reader(avatarInput.files[0], (err, res) => {
    User.changePerfil(loggedUser,res,changeNameInput.value)
    location.reload()
  })
})

guardarPassButton.addEventListener("click", ()=>{
  loggedUser = User.getUserLogged()
  try {
    User.changePassword(loggedUser,currentPassInput.value,newPassInput.value)
    location.reload()
  } catch (e) {
    console.log(e.message)
  }
})

eliminarContaButton.addEventListener("click", ()=>{
  loggedUser = User.getUserLogged()
  try {
    User.deleteAccount(loggedUser,passwordInput.value)
    location.href = "/index.html"
  } catch (e) {
    console.log(e.message)
  }
})