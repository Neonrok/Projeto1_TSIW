let users = []

export function init() {
  if (localStorage.users) {
    const tempUsers = JSON.parse(localStorage.users)
    for(let user of tempUsers) {
      users.push(new User(user.name, user.password))
    }
  } else {
    users = []
  }
}

export function addUser(name, password){
  if(users.some((user) => user.name === name)){
    throw Error(`Utilizador com o nome "${user.name}" já existe`)
  } 
  else{
    users.push(new User(name, password))
    localStorage.setItem("users", JSON.stringify(users))
  }
}

export function removeUser(name){
  users = users.filter((user) => user.name !== name)
  localStorage.setItem("users", JSON.stringify(users))
}

export function login(name,password){
  const user = users.find((user) => user.name === name && user.password === password)
  if(user){
      sessionStorage.setItem("loggedUser", JSON.stringify(user))
      return true;
  } 
  else{
    throw Error("Login Inválido")
  }
}

export function logout(){
  sessionStorage.removeItem("loggedUser")
}

export function isLogged() {
  return sessionStorage.getItem("loggedUser") ? true : false
}

export function getUserLogged() {
  return JSON.parse(sessionStorage.getItem("loggedUser"))
}

class User{

  avatar = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swXzEzNDJfMTAzNTgiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjAiIHk9IjAiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+CjxjaXJjbGUgY3g9IjMyIiBjeT0iMzIiIHI9IjMyIiBmaWxsPSIjRURFREVEIi8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMF8xMzQyXzEwMzU4KSI+CjxjaXJjbGUgY3g9IjMyIiBjeT0iMzIiIHI9IjMyIiBmaWxsPSIjRURFREVEIi8+CjxlbGxpcHNlIGN4PSIzMi4wMDAxIiBjeT0iNjIuMjIyMyIgcng9IjMwLjIyMjIiIHJ5PSIyNi42NjY3IiBmaWxsPSIjQTBBMEEyIi8+CjxjaXJjbGUgY3g9IjMyLjAwMDIiIGN5PSIyMS4zMzMyIiByPSIxMC42NjY3IiBmaWxsPSIjQTBBMEEyIi8+CjwvZz4KPC9zdmc+Cg=="
  savedActivities = []
  activeNotifications = ["Atividades","Projetos","Próximas atividades","Desafios"]
  solvedChallenges = []

  constructor(name,password){
    this.name = name
    this.password = password
  }
}