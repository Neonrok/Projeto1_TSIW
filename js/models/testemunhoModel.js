let testemunhos = []

export function init() {
  if(localStorage.testemunhos) {
    const tempTestemunhos = JSON.parse(localStorage.testemunhos)
    for(let testemunho of tempTestemunhos) {
      testemunhos.push(new Testemunho(testemunho.name, testemunho.image, testemunho.testimony, testemunho.ocupation))
    }
  } else {
    addTestemunho("Nuno Sousa","data:image/png;base64,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",'"Não posso deixar de referir que até ingressar na ESMAD não sabia nada de programação, nem de design. Pelo que, não retirando mérito ao meu esforço, tenho que referir que o excelente acompanhamento dos professores e a sua experiência, tanto ao nível do ensino, como ao nível profissional, foi sem dúvida o impulsionador disto tudo. Não poderia estar mais grato a todos os professores, colegas e à ESMAD"',"Front-end developer na Carbmee")
  }
}

export function addTestemunho(name,image,testimony,ocupation){
  if(testemunhos.some((testemunho) => testemunho.name === name)){
    throw Error(`Testemunho com o nome ${name} já existe`)
  }
  else{
    testemunhos.push(new Testemunho(name,image,testimony,ocupation))
    localStorage.setItem("testemunhos", JSON.stringify(testemunhos))
  }
}

export function removeTestemunho(name){
  testemunhos = testemunhos.filter((testemunho) => testemunho.name !== name)
  localStorage.setItem("testemunhos", JSON.stringify(testemunhos))
}

export function getTestemunhos(){
  return testemunhos
}

export class Testemunho{
  constructor(name,image,testimony,ocupation){
    this.name = name
    this.image = image
    this.testimony = testimony
    this.ocupation = ocupation
  }
}