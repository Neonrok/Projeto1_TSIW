import * as data from "./SR_Back.js"

$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();
})
//variaveis necessarias
let Back_ordem = [];
Back_ordem = data.init();
let tela_atual = document.getElementById("T_Inicio");
let pc1_state = false;
let chave_entrada = false;

//renderização---------------------------------------------------------------------------------------
let Butão_voltar = document.getElementById("voltar");
Butão_voltar.style.display = "none";
for (let i = 0 ; i<Back_ordem.length ; i++) {
    let Sala_secundaria = Back_ordem[i].sala;
    document.getElementById(Sala_secundaria).style.display = "none";
};
//funções----------------------------------------------------------------------------------------------
const S_1 = function() {
    let next_tela = document.getElementById("Sala_Entrada");
    tela_atual.style.display = "none";
    tela_atual = next_tela;
    tela_atual.style.display = "block";
    Butão_voltar.style.display = Back_ordem[0].estado;
    if (chave_entrada) {
        document.getElementById("item_S1").style.display = "none"
    }
}
//ações----------------------------------------------------------------------------------------------------
const Iniciar = document.getElementById("LCA").addEventListener('click', function() {
    S_1();
});

const chave = document.getElementById("item_s1").addEventListener('click',function() {
    let element = document.getElementById("item_S1");
    alert("chave para interagir");
    element.style.display = "none";
    alert("desapareceu");
    chave_entrada = true;
});

const Tampa_pa1 = document.getElementById("tampa_pc1").addEventListener('click',function() {
    alert("teste");
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