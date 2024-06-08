import * as Atividade from "../models/atividadeModel.js"

function renderAtividade(){
  Atividade.init()
  let atividade = Atividade.getAtividades()

}