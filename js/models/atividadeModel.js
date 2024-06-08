let atividades = []

export function init() {
  if(localStorage.atividades) {
    const tempAtividades = JSON.parse(localStorage.atividades);
    for(let atividade of tempAtividades) {
      atividades.push(new Atividade(atividade.title, atividade.image, atividade.date, atividade.description));
    }
  } else {
    atividades = [];
  }
}

export function addAtividade(title,image,date,description){
  if(atividades.some((atividade) => atividade.title === title)){
    throw Error(`Atividade com o título ${title} já existe`)
  }
  else{
    atividades.push(new Atividade(title,image,date,description))
    localStorage.setItem("atividades", JSON.stringify(atividades))
  }
}

export function removeAtividade(title){
  atividades = atividades.filter((atividade) => atividade.title !== title)
  localStorage.setItem("atividades", JSON.stringify(atividades))
}

export function getAtividades(){
  return atividades
}

export function setCurrentAtividade(title){
  localStorage.setItem("atividade", title)
}

export function getCurrentAtividade(){
  return atividades.find((atividade) => atividade.title === localStorage.getItem("atividade"))
}

export class Atividade{
  constructor(title,image,date,description){
    this.title = title
    this.image = image
    this.date = date
    this.description = description
  }
}