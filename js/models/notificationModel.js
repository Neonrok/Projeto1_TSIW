let notifications = []

export function init() {
  if (localStorage.notifications) {
    notifications = JSON.parse(localStorage.notifications)
  } else {
    addNotification("DRIVE - Design Related Investigation","Atividades")
    addNotification("TSIW Endpoints","Atividades")
    addNotification("Dia da ESMAD","Atividades")
    addNotification("Open Call - Hackathon InterMediArtes","Atividades")
    addNotification("ESMAD Open Days","Atividades")
    addNotification("Nimbus","Projetos")
    addNotification("Dutify","Projetos")
  }
}

export function addNotification(title,type){
  if(notifications.some((notification) => notification.title === title)){
    throw Error(`Notificação com o título ${title} já existe`)
  }
  else{
    notifications.push(new Notification(title,type))
    localStorage.setItem("notifications", JSON.stringify(notifications))
  }
}

export function removeAtividade(title){
  notifications = notifications.filter((notification) => notification.title !== title)
  localStorage.setItem("notifications", JSON.stringify(notifications))
}

export function getNotifications(){
  return notifications
}

export function getCurrentDate(){
  return new Date().toJSON().slice(0, 10);
}

export class Notification{

  addedDate = getCurrentDate()

  constructor(title,type){
    this.title = title
    this.type = type
  }
}