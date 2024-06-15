import * as User from "../models/userModel.js"

User.init()

const registoName = document.getElementById("registoName")
const registoPassword = document.getElementById("registoPassword")
const registoForm = document.getElementById("registoForm")

registoForm.addEventListener("submit", (event)=>{
  event.preventDefault()

  try {
    User.addUser(registoName.value,registoPassword.value)
    User.login(registoName.value,registoPassword.value)
    location.href = "/html/conta.html"
  } catch (e) {
    registoForm.reset()
  }
})


