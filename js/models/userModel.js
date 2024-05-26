let users = []

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
  const user = users.find((user) => user.name === name && user.password === password);
  if(user){
      sessionStorage.setItem("loggedUser", JSON.stringify(user));
      return true;
  } 
  else{
    throw Error("Login Inválido");
  }
}

export function logout(){
  sessionStorage.removeItem("loggedUser");
}

export function isLogged() {
  return sessionStorage.getItem("loggedUser") ? true : false;
}

class User{

  avatar = ""
  savedActivities = []
  activeNotifications = []
  solvedChallenges = []

  constructor(name,password){
    this.name = name
    this.password = password
  }
}