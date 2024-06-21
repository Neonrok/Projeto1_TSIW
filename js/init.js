import * as User from "./models/userModel.js"
import * as Atividade from "./models/atividadeModel.js"
import * as Projeto from "./models/projetoModel.js"
import * as Testemunho from "./models/testemunhoModel.js"
import * as Notification from "./models/notificationModel.js"


function initialization(){
  User.init()
  Atividade.init()
  Projeto.init()
  Testemunho.init()
  Notification.init()
}

initialization()