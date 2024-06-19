let desafios = []

export function init() {
  if(localStorage.desafios) {
    desafios = JSON.parse(localStorage.desafios)
  } else{}
}

export function addDesafio(title,image,questions,options,answers){
  if(desafios.some((desafio) => desafio.title === title)){
    throw Error(`Desafio com o nome ${title} já existe`)
  }
  else{
    desafios.push(new Desafio(title,image,questions,options,answers))
    localStorage.setItem("desafios", JSON.stringify(desafios))
  }
}

export function removeDesafio(title){
  desafios = desafios.filter((desafio) => desafio.title !== title)
  localStorage.setItem("desafios", JSON.stringify(desafios))
}

export function getDesafios(){
  return desafios
}

export function setCurrentDesafio(title){
  localStorage.setItem("desafio", title)
}

export function getCurrentDesafio(){
  return desafios.find((desafio) => desafio.title === localStorage.getItem("desafio"))
}

export class Desafio{
  constructor(title,image,questions,options,answers){
    this.title = title
    this.image = image
    this.questions = questions
    this.options = options
    this.answers = answers
  }
}