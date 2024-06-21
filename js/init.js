import * as User from "./models/userModel.js"
import * as Atividade from "./models/atividadeModel.js"
import * as Projeto from "./models/projetoModel.js"
import * as Testemunho from "./models/testemunhoModel.js"

function initialization(){
  User.init()
  Atividade.init()
  Projeto.init()
  Testemunho.init()
}

initialization()