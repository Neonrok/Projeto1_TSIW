const perfilNavbutton = document.getElementById("perfilNavbutton")
const passwordNavbutton = document.getElementById("passwordNavbutton")
const atividadesGuardNavbutton = document.getElementById("atividadesGuardNavbutton")
const notifNavbutton = document.getElementById("notifNavbutton")
const eliminarContaNavbutton = document.getElementById("eliminarContaNavbutton")

function resetSectionSelection(){
  perfilNavbutton.classList.remove("active")
  passwordNavbutton.classList.remove("active")
  atividadesGuardNavbutton.classList.remove("active")
  notifNavbutton.classList.remove("active")
  eliminarContaNavbutton.classList.remove("active")
}

function activateSectionSelection(selection){
  resetSectionSelection()
  selection.classList.add("active")
}

perfilNavbutton.addEventListener("click", ()=>{
  activateSectionSelection(perfilNavbutton)
})

passwordNavbutton.addEventListener("click", ()=>{
  activateSectionSelection(passwordNavbutton)
})

atividadesGuardNavbutton.addEventListener("click", ()=>{
  activateSectionSelection(atividadesGuardNavbutton)
})

notifNavbutton.addEventListener("click", ()=>{
  activateSectionSelection(notifNavbutton)
})

eliminarContaNavbutton.addEventListener("click", ()=>{
  activateSectionSelection(eliminarContaNavbutton)
})

