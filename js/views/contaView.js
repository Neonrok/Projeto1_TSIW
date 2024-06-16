import * as User from "../models/userModel.js"
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
  reader(avatarInput.files[0], (err, res) => {
    User.changePerfil(loggedUser,res,changeNameInput.value)
    location.reload()
  })
})

guardarPassButton.addEventListener("click", ()=>{
  try {
    User.changePassword(loggedUser,currentPassInput.value,newPassInput.value)
    location.reload()
  } catch (e) {
  }
})

eliminarContaButton.addEventListener("click", ()=>{
  try {
    User.deleteAccount(loggedUser,passwordInput.value)
    location.href = "/index.html"
  } catch (e) {
  }
})