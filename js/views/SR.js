import * as data from "./SR_Back.js"
import * as Inve from "./SR_Item_use.js"
import * as Q1_Pc1_data from "./SR_Q_Pc1.js"
import * as Q1_Pc2_data from "./SR_Q_Pc2.js"
import * as Q1_Pc4_data from "./SR_Q_Pc4.js"
import * as Consola_pc1 from "./Console_map_pc1.js"
import * as Consola_pc2 from "./Console_map_pc2.js"
import * as Consola_pc3 from "./Console_map_pc3.js"
import * as Consola_pc4 from "./Console_map_pc4.js"





$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();
})

//para--funcionamento----------------------------------------------------------------------------------
let Back_ordem = [];
Back_ordem = data.init();
let Item_ordem = [];

Item_ordem = Inve.init();
let Q1_Pc1 = [];
Q1_Pc1 = Q1_Pc1_data.init();
let Com_Pc1 = [];
Com_Pc1 = Consola_pc1.init();

let Q1_Pc2 = [];
Q1_Pc2 = Q1_Pc2_data.init();
let Com_Pc2 = [];
Com_Pc2 = Consola_pc2.init();

let Com_Pc3 = [];
Com_Pc3 = Consola_pc3.init();

let Q1_Pc4 = [];
Q1_Pc4 = Q1_Pc4_data.init();

let Com_Pc4 = [];
Com_Pc4 = Consola_pc4.init();

let stop=false
let Use_Item = document.querySelectorAll(".inventário img");
let tela_atual = document.getElementById("T_Inicio");
let next_tela;

let QCom1 = document.getElementById("Pc1_on_Console")
let QCom2 = document.getElementById("Pc2_on_Console")
let QCom3 = document.getElementById("Pc3_on_Console")
let QCom4 = document.getElementById("Pc4_on_Console")

//para--Salas------------------------------------------------------------------------------------------
let P1_S1 = true;
let P2_S1 = false;
let P3_S1 = true;

let pc1_state = false;
let Console_p1_get = false;
let Console_p2_get = false;
let pc3_state = false;
let Console_p3_Activate = false
let Console_p4_get = false

const gameState = [
    {pc_game: false},
    {pc_game: true},
    {pc_game: false}
];



let local = 0;
let ST = 0;
//funções----------------------------------------------------------------------------------------------
const S_1 = function() {
    alterar_sala("Sala_Entrada",0) 
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

const alterar_sala = function(n,y){
    next_tela = document.getElementById(n);
    tela_atual.style.display = "none";
    tela_atual = next_tela;
    tela_atual.style.display = "block";
    Butão_voltar.style.display = Back_ordem[y].estado;
};
let focar = document.getElementById("input_consola_Pc1")

document.addEventListener('keydown', function(event){
    if (tela_atual === document.getElementById("Pc1_on_Console")){
        focar= document.getElementById("input_consola_Pc1")
        if(event.key === 'Enter'){
            event.preventDefault();
            Console_p1_get = Consola(focar.value);
            focar.value = '';
            if(Console_p1_get){Execut_Back();}
        }
    } else if (tela_atual === document.getElementById("Pc2_on_Console")){
        focar= document.getElementById("input_consola_Pc2")
        if(event.key === 'Enter'){
            event.preventDefault();
            Console_p2_get = Consola(focar.value);
            focar.value = '';
            if(Console_p2_get){Execut_Back();}
        }
    } else if (tela_atual === document.getElementById("Pc3_on_Console")){
        focar= document.getElementById("input_consola_Pc3")
        if(event.key === 'Enter'){
            event.preventDefault();
            Console_p3_Activate = Consola(focar.value);
            focar.value = '';
            if(Console_p3_Activate){Execut_Back();}
        }
    } else if (tela_atual === document.getElementById("Pc4_on_Console")){
        focar= document.getElementById("input_consola_Pc4")
        if(event.key === 'Enter'){
            event.preventDefault();
            Console_p4_get = Consola(focar.value);
            focar.value = '';
            if(Console_p4_get){Execut_Back();}
        }
    } 
});

const Consola = function(n){
    let mapa;
    
    let pup = true;
    let pdown = true;
    let pleft = true;
    let pright = true;
    let pget = true;
    let pactivate = true;
    let bloco1_consola_p1 = "bloco1_consola_p1"
    let bloco1_consola_p2 = "bloco1_consola_p2"
    let bloco1_consola_p3 = "bloco1_consola_p3"
    let bloco1_consola_p4 = "bloco1_consola_p4"
    let bloco1_consola_p5 = "bloco1_consola_p5"
    let bloco1_consola_p6 = "bloco1_consola_p6"
    

    if( tela_atual === QCom1){
        mapa = Com_Pc1;
        bloco1_consola_p1 = "bloco1_consola_p1" + "_Pc1";
        bloco1_consola_p2 = "bloco1_consola_p2" + "_Pc1";
        bloco1_consola_p3 = "bloco1_consola_p3" + "_Pc1";
        bloco1_consola_p4 = "bloco1_consola_p4" + "_Pc1";
        bloco1_consola_p5 = "bloco1_consola_p5" + "_Pc1";
        bloco1_consola_p6 = "bloco1_consola_p6" + "_Pc1";
        reloc();
    } else if( tela_atual === QCom2){
        mapa = Com_Pc2;
        bloco1_consola_p1 = "bloco1_consola_p1" + "_Pc2";
        bloco1_consola_p2 = "bloco1_consola_p2" + "_Pc2";
        bloco1_consola_p3 = "bloco1_consola_p3" + "_Pc2";
        bloco1_consola_p4 = "bloco1_consola_p4" + "_Pc2";
        bloco1_consola_p5 = "bloco1_consola_p5" + "_Pc2";
        bloco1_consola_p6 = "bloco1_consola_p6" + "_Pc2";
        reloc();
    } else if( tela_atual === QCom3){
        mapa = Com_Pc3;
        bloco1_consola_p1 = "bloco1_consola_p1" + "_Pc3";
        bloco1_consola_p2 = "bloco1_consola_p2" + "_Pc3";
        bloco1_consola_p3 = "bloco1_consola_p3" + "_Pc3";
        bloco1_consola_p4 = "bloco1_consola_p4" + "_Pc3";
        bloco1_consola_p5 = "bloco1_consola_p5" + "_Pc3";
        bloco1_consola_p6 = "bloco1_consola_p6" + "_Pc3";
        reloc();
    } else if( tela_atual === QCom4){
        mapa = Com_Pc4;
        bloco1_consola_p1 = "bloco1_consola_p1" + "_Pc4";
        bloco1_consola_p2 = "bloco1_consola_p2" + "_Pc4";
        bloco1_consola_p3 = "bloco1_consola_p3" + "_Pc4";
        bloco1_consola_p4 = "bloco1_consola_p4" + "_Pc4";
        bloco1_consola_p5 = "bloco1_consola_p5" + "_Pc4";
        bloco1_consola_p6 = "bloco1_consola_p6" + "_Pc4";
        reloc();
    };

    function reloc(){
        if(mapa[local].up !== "N/A"){
            
            document.getElementById(bloco1_consola_p4).style.display = "none"
            pup = true;
        }else{
            
            document.getElementById(bloco1_consola_p4).style.display = "block"
            pup = false;
        };

        if(mapa[local].down !== "N/A"){
            
            document.getElementById(bloco1_consola_p3).style.display = "none"
            pdown = true;
        }else{
            
            document.getElementById(bloco1_consola_p3).style.display = "block"
            pdown = false;
        };

        if(mapa[local].left !== "N/A"){
            
            document.getElementById(bloco1_consola_p2).style.display = "none"
            pleft = true;
        }else{
            
            document.getElementById(bloco1_consola_p2).style.display = "block"
            pleft = false;
        };

        if(mapa[local].right !== "N/A"){
            
            document.getElementById(bloco1_consola_p1).style.display = "none"
            pright = true;
        }else{
            document.getElementById(bloco1_consola_p1).style.display = "block"
            pright = false;
        };

        if(mapa[local].get !== "N/A"){
            document.getElementById(bloco1_consola_p5).style.display = "none"
            pget = true;
        }else{
            document.getElementById(bloco1_consola_p5).style.display = "block"
            pget = false;
        };

        if(mapa[local].activate !== "N/A"){
            document.getElementById(bloco1_consola_p6).style.display = "none"
            pactivate = true;
        }else{
            document.getElementById(bloco1_consola_p6).style.display = "block"
            pactivate = false;
        };
    }
    if (n === "up" && pup){
        local=mapa[local].up
        reloc()
    } else if (n === "down" && pdown){
        local=mapa[local].down
        reloc()
    } else if (n === "left" && pleft){
        local=mapa[local].left
        reloc()
    } else if (n === "right" && pright){
        local=mapa[local].right
        reloc()
    } else if (n === "get" && pget){
        return true
    } else if (n === "activate" && pactivate){
        return true
    };
};

const quise_pcs = function(n, s) {
    let ST = 0;
    document.getElementById('overlayQWP').style.display = "block";
    const generateQuestion = () => {
        let CQ = Math.floor(Math.random() * n.length);
        document.getElementById('question').textContent = n[CQ].Qest;

        const opti = [
            { id: 'opt1', text: n[CQ].Opt1 },
            { id: 'opt2', text: n[CQ].Opt2 },
            { id: 'opt3', text: n[CQ].Opt3 },
            { id: 'opt4', text: n[CQ].Opt4 }
        ];

        for (let i = opti.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [opti[i], opti[j]] = [opti[j], opti[i]];
        }

        opti.forEach((opt) => {
            const button = document.getElementById(opt.id);
            button.textContent = opt.text;
            button.onclick = () => {
                const selectedOption = button.textContent;
                const currentQuestion = n[CQ];
                if (selectedOption === currentQuestion.Opt3) {
                    ST++;
                    if (ST === 3) {
                        document.getElementById('overlayQWP').style.display = "none";
                        Execut_Back();
                        gameState[s].pc_game = true;
                    } else {
                        generateQuestion();
                    }
                } else {
                    ST = 0;
                    generateQuestion();
                }
            };
        });
    };
    generateQuestion();
}

const Pc1_interior = function() {
    if (Item_ordem[0].var_local){
        alterar_sala("Pc1_interior_unlock",2)
    } else {
        alterar_sala("Pc1_interior_lock",2)
    }
}

const Inventario = function(n) {
    if (Item_ordem[n].var_item != true) {
        document.getElementById(Item_ordem[n].item).style.display = "none"
    } else {
        document.getElementById(Item_ordem[n].item).style.display = "block"
    }
}

const Execut_Back = function() {
    document.getElementById('overlayQWP').style.display = "none";
    for (let i = 0; i<Back_ordem.length; i++) {
        let estado_ = document.getElementById(Back_ordem[i].sala);
        let efeito_ = document.getElementById(Back_ordem[i].efeito);
        if (estado_ === tela_atual) {
            if (efeito_ === document.getElementById("Sala_Entrada")) {
                estado_.style.display = "none";
                S_1();
            }
            estado_.style.display = "none";
            efeito_.style.display = Back_ordem[i].estado;
            document.getElementById("voltar").style.display = Back_ordem[i].N_estado;
            tela_atual = efeito_;
            stop=false
            break;
        }
    }
}

//renderização---------------------------------------------------------------------------------------
document.getElementById('overlayQWP').style.display = "none";
let Butão_voltar = document.getElementById("voltar");
Butão_voltar.style.display = "none";
for (let i = 0 ; i<Back_ordem.length ; i++) { 
    let Sala_secundaria = Back_ordem[i].sala;
    document.getElementById(Sala_secundaria).style.display = "none";
};
for (let i = 0 ; i<Item_ordem.length ; i++) {
    Inventario(i);
};

//ações----------------------------------------------------------------------------------------------------
const Iniciar = document.getElementById("LCA").addEventListener('click', function() {
    S_1();
});

const Usar_item_1 = document.getElementById(Item_ordem[0].id_1).addEventListener('click',function() {
    let element = document.getElementById(Item_ordem[0].id);
    element.style.display = "none";
    Item_ordem[0].var_item = true;
    Inventario(0);
});

Use_Item.forEach((option) => {
    option.addEventListener("click", function () {
        let pl = option.id;
        for (let i = 0; i<Item_ordem.length; i++){
            if (document.getElementById(Item_ordem[i].sala) === tela_atual && Item_ordem[i].item === pl){
                Item_ordem[i].var_local = true;
                Item_ordem[i].var_item = false;
                Inventario(i);
                Execut_Back();
                return;
            }
        }
        
    });
});
//1380, 1330
const Tampa_pa1 = document.getElementById("tampa_pc1").addEventListener('click',function() {
    Pc1_interior()
});

const Tela_pc1 = document.getElementById("tela_pc1").addEventListener('click', function() {
    if (pc1_state) {
        if (gameState[0].pc_game){
            alterar_sala("Pc1_on_unlock",3);
        }else{
            alterar_sala("Pc1_on_lock",4);
            quise_pcs(Q1_Pc1, 0);
        }
    } else {
        alterar_sala("Pc1_off",2);
    }
});

const Pc1_On_But = document.getElementById("SR_Pc1_Int_button").addEventListener('click',function() {
    pc1_state = true
    document.getElementById("SR_Pc1_Int_Lock_button").style.display = "none"
    Execut_Back();
})

const Pc1_active_But = document.getElementById("Pc1_Usar").addEventListener('click', function(){
    P1_S1=false;
    document.getElementById("Pc1_Act_block").style.display="none"
    Execut_Back();
})

const Pc1_Console_Acess = document.getElementById("Pc1_Distrair").addEventListener('click', function(){
    if(!Console_p1_get){
        alterar_sala("Pc1_on_Console",6);
        Consola("");
        focar.focus();
    }
})

const Asses_S2 = document.getElementById("Porta_s1").addEventListener('click', function(){
    alterar_sala("SR_S2",7);
})

const Asses_S3 = document.getElementById("Porta2_s1").addEventListener('click', function(){
    alterar_sala("SR_S3",8);
})

const Asses_Corredor = document.getElementById("Porta3_s1").addEventListener('click', function(){
    alterar_sala("SR_Corredor",);
})

const Pega_Item2 = document.getElementById("Item2_Usar").addEventListener('click', function(){
    let element = document.getElementById(Item_ordem[1].id);
    element.style.display = "none";
    Item_ordem[1].var_item = true;
    Inventario(1);
})

const Pega_Item3 = document.getElementById("Item3_Usar").addEventListener('click', function(){
    let element = document.getElementById(Item_ordem[2].id);
    console.log(element)
    element.style.display = "none";
    Item_ordem[2].var_item = true;
    Inventario(2);
})

const Tela_pc2 = document.getElementById("Pc2_entrar").addEventListener('click', function() {
    if (gameState[1].pc_game){
        alterar_sala("Pc2_unlock",3);
    }else{
        alterar_sala("Pc2_on_lock",4);
        quise_pcs(Q1_Pc2,1);
    }
    
});

const Pc2_active_But = document.getElementById("Pc2_Usar").addEventListener('click', function(){
    if(P1_S1){
        P1_S1=false;
        document.getElementById("Pc1_Act_block").style.display="none"
        Execut_Back();
    }
})

const Pc2_Console_Acess = document.getElementById("Pc2_Distrair").addEventListener('click', function(){
    if(!Console_p2_get){
        alterar_sala("Pc2_on_Console",11);
        Consola("");
        focar.focus();
    }
})

const Pc3_Console_Acess = document.getElementById("Pc3_entrar").addEventListener('click', function(){
    if(Console_p1_get && Console_p2_get && Console_p4_get && !Console_p3_Activate){
        alterar_sala("Pc3_on_Console",12);
        Consola("");
        focar.focus();
    } else {
        alterar_sala("Pc3_off",13)
    }
})










const back = document.getElementById("voltar").addEventListener('click',function() {
    Execut_Back();
});