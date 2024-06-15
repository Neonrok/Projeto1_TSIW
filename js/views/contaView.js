const perfilNavbutton = document.getElementById("perfilNavbutton")
const passwordNavbutton = document.getElementById("passwordNavbutton")
const atividadesGuardNavbutton = document.getElementById("atividadesGuardNavbutton")
const notifNavbutton = document.getElementById("notifNavbutton")
const eliminarContaNavbutton = document.getElementById("eliminarContaNavbutton")

const perfilSection = document.getElementById("perfilSection")
const passwordSection = document.getElementById("passwordSection")
const atividadesGuardSection = document.getElementById("atividadesGuardSection")
const notifSection = document.getElementById("notifSection")
const eliminarContaSection = document.getElementById("eliminarContaSection")

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