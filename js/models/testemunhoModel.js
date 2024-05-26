let testemunhos = []

export function addTestemunho(name,image,testimony,ocupation){
  if(testemunhos.some((testemunho) => testemunho.name === name)){
    throw Error(`Testemunho com o nome ${name} já existe`)
  }
  else{
    testemunhos.push(new Testemunho(name,image,testimony,ocupation))
    localStorage.setItem("testemunhos", JSON.stringify(testemunhos))
  }
}

class Testemunho{
  constructor(name,image,testimony,ocupation){
    this.name = name
    this.image = image
    this.testimony = testimony
    this.ocupation = ocupation
  }
}