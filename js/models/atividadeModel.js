let atividades = []

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

class Atividade{
  constructor(title,image,date,description){
    this.title = title
    this.image = image
    this.date = date
    this.description = description
  }
}