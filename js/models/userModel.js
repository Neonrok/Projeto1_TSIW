let users = []

export function init() {
  if (localStorage.users) {
    users = JSON.parse(localStorage.users)
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

export function changePerfil(loggedUser,avatar,name){
  let user = users.find((user) => user.name === loggedUser.name)
  user.avatar = avatar
  user.name = name
  localStorage.setItem("users", JSON.stringify(users))
  sessionStorage.setItem("loggedUser", JSON.stringify(user))
}

export function changePassword(loggedUser,currentPassword,newPassword){
  let user = users.find((user) => user.name === loggedUser.name && user.password === currentPassword)
  console.log(user)
  if(user){
    user.password = newPassword
    localStorage.setItem("users", JSON.stringify(users))
    sessionStorage.setItem("loggedUser", JSON.stringify(user))
    return true
  } 
  else{
    throw Error("Não foi possível alterar a password")
  }
}

export function deleteAccount(loggedUser,currentPassword){
  let user = users.find((user) => user.name === loggedUser.name && user.password === currentPassword)
  if(user){
    removeUser(user.name)
    logout()
    return true
  } 
  else{
    throw Error("Não foi possível eliminar a conta")
  }
}

class User{

  avatar = "/img/DefaultAvatar.svg"
  savedActivities = []
  activeNotifications = ["Atividades","Projetos","Próximas atividades","Desafios"]
  solvedChallenges = []

  constructor(name,password,avatar){
    this.name = name
    this.password = password
  }
}