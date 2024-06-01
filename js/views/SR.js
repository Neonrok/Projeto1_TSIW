import * as data from "./SR_Back.js"
import * as Inve from "./SR_Item_use.js"
$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();
})

//variaveis necessarias
//para--funcionamento----------------------------------------------------------------------------------
let Back_ordem = [];
Back_ordem = data.init();
let Item_ordem = [];
Item_ordem = Inve.init();
let Use_Item = document.querySelectorAll(".inventário img");
let tela_atual = document.getElementById("T_Inicio");
let next_tela;

//para--Salas------------------------------------------------------------------------------------------
let P1_S1 = true;
let P2_S1 = true;
let P3_S1 = true;
let pc1_state = false;


//Inventário-------------------------------------------------------------------------------------------


//funções----------------------------------------------------------------------------------------------
const S_1 = function() {
    next_tela = document.getElementById("Sala_Entrada");
    tela_atual.style.display = "none";
    tela_atual = next_tela;
    tela_atual.style.display = "block";
    Butão_voltar.style.display = Back_ordem[0].estado;
    if (Item_ordem[0].var_item) {
        document.getElementById(Item_ordem[0].id).style.display = "none"
    }
    if (P1_S1) {
        document.getElementById("P1_S1").style.display = "none"
    } else {
        document.getElementById("P1_S1").style.display = "block"
    }
    if (P2_S1) {
        document.getElementById("P2_S1").style.display = "none"
    } else {
        document.getElementById("P2_S1").style.display = "block"
    }
    if (P3_S1) {
        document.getElementById("P3_S1").style.display = "none"
    } else {
        document.getElementById("P3_S1").style.display = "block"
    }
}

const Pc1_interior = function() {
    next_tela = document.getElementById("Pc1_interior_lock");
    tela_atual.style.display = "none";
    tela_atual = next_tela;
    tela_atual.style.display = "block";
    Butão_voltar.style.display = Back_ordem[2].estado;
}

const Inventario = function(n) {//ajuda-----vaso das variaveis e arranjar uma forma de evitar usar o ciclo for----------------------------------
    if (Item_ordem[n].var_item != true) {
        document.getElementById(Item_ordem[n].item).style.display = "none"
    } else {
        document.getElementById(Item_ordem[n].item).style.display = "block"
    }
}

//renderização---------------------------------------------------------------------------------------
let Butão_voltar = document.getElementById("voltar");
Butão_voltar.style.display = "none";
for (let i = 0 ; i<Back_ordem.length ; i++) {
    let Sala_secundaria = Back_ordem[i].sala;
    document.getElementById(Sala_secundaria).style.display = "none";
};
for (let i = 0 ; i<Item_ordem.length ; i++) {
    Inventario(i)
};


//ações----------------------------------------------------------------------------------------------------
const Iniciar = document.getElementById("LCA").addEventListener('click', function() {
    S_1();
});

const Usar_item_1 = document.getElementById(Item_ordem[0].id_1).addEventListener('click',function() {
    let element = document.getElementById(Item_ordem[0].id);
    element.style.display = "none";
    Item_ordem[0].var_item = true;
    Inventario(0)
});

Use_Item.forEach((option) => {
    option.addEventListener("click", function () {
        let pl = option.id;
        for (let i = 0; i<Item_ordem.length; i++){
            if (document.getElementById(Item_ordem[i].sala) === tela_atual && Item_ordem[i].item === pl){
                alert("Este é o fim da primeira alfa\nAlfa0.1\n\n^_^");
                //alterar-a-variavel-mesmo-problema.
            }
        }
        
    });
});
//1380, 1330
const Tampa_pa1 = document.getElementById("tampa_pc1").addEventListener('click',function() {
    Pc1_interior()
});

const Tela_pc1 = document.getElementById("tela_pc1").addEventListener('click', function() {
    
    if (pc1_state === true) {
        alert("implementar_depois");
        return;
    } else {
        let next_tela = document.getElementById("Pc1_off");
        tela_atual.style.display = "none";
        tela_atual = next_tela;
        tela_atual.style.display = "block";
        Butão_voltar.style.display = "block";
    }
});

const back = document.getElementById("voltar").addEventListener('click',function() {
    for (let i = 0; i<Back_ordem.length; i++) {
        let estado_ = document.getElementById(Back_ordem[i].sala);
        let efeito_ = document.getElementById(Back_ordem[i].efeito);
        if (estado_ === tela_atual) {
            estado_.style.display = "none";
            efeito_.style.display = Back_ordem[i].estado;
            document.getElementById("voltar").style.display = Back_ordem[i].N_estado;
            tela_atual = efeito_;
            break;
        }
    }
});