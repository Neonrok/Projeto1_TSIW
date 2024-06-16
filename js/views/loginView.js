import * as User from "../models/userModel.js"

User.init()

const loginName = document.getElementById("loginName")
const loginPassword = document.getElementById("loginPassword")
const loginForm = document.getElementById("loginForm")

loginForm.addEventListener("submit", (event)=>{
  event.preventDefault()

  try {
    User.login(loginName.value,loginPassword.value)
    location.href = "/html/conta.html"
  } catch (e) {
    loginForm.reset()
  }
})
