let projetos = []

export function init() {
  if(localStorage.projetos) {
    const tempProjetos = JSON.parse(localStorage.projetos);
    for(let projeto of tempProjetos) {
      projetos.push(new Projeto(projeto.title, projeto.images, projeto.author, projeto.description));
    }
  } else {
    projetos = [];
  }
}

export function addProjeto(title,images,author,description){
  if(projetos.some((projeto) => projeto.title === title)){
    throw Error(`Projeto com o nome ${title} já existe`)
  }
  else{
    projetos.push(new Projeto(title,images,author,description))
    localStorage.setItem("projetos", JSON.stringify(projetos))
  }
}

export function removeProjeto(title){
  projetos = projetos.filter((projeto) => projeto.title !== title)
  localStorage.setItem("projetos", JSON.stringify(projetos))
}

export function getProjetos(){
  return projetos
}

export class Projeto{
  constructor(title,images,author,description){
    this.title = title
    this.images = images
    this.author = author
    this.description = description
  }
}