let Back = []

export function init() {
    let SPV = {
        sala: "Sala_Entrada",
        efeito: "Sala_Entrada",
        estado: "none",
        N_estado: "none"
    }
    Back.push(SPV)
//1
    SPV = {
        sala: "Pc1_off",
        efeito: "Sala_Entrada",
        estado: "block",
        N_estado: "none"
    }
    Back.push(SPV)
//2
    SPV = {
        sala: "Pc1_interior_lock",
        efeito: "Sala_Entrada",
        estado: "block",
        N_estado: "none"
    }
    Back.push(SPV)
//3
    SPV = {
        sala: "Pc1_interior_unlock",
        efeito: "Sala_Entrada",
        estado: "block",
        N_estado: "none"
    }
    Back.push(SPV)
//
    SPV = {
        sala: "Pc1_on_lock",
        efeito: "Sala_Entrada",
        estado: "block",
        N_estado: "none"
    }
    Back.push(SPV)
//5
    SPV = {
        sala: "Pc1_on_unlock",
        efeito: "Sala_Entrada",
        estado: "block",
        N_estado: "none"
    }
    Back.push(SPV)
//6
    SPV = {
        sala: "Pc1_on_Console",
        efeito: "Sala_Entrada",
        estado: "block",
        N_estado: "none"
    }
    Back.push(SPV)
//7
    SPV = {
        sala: "SR_S2",
        efeito: "Sala_Entrada",
        estado: "block",
        N_estado: "none"
    }
    Back.push(SPV)
//8
    SPV = {
        sala: "SR_S3",
        efeito: "Sala_Entrada",
        estado: "block",
        N_estado: "none"
    }
    Back.push(SPV)
//9
    SPV = {
        sala: "Pc2_on_lock",
        efeito: "SR_S2",
        estado: "block",
        N_estado: "block"
    }
    Back.push(SPV)

//10
    SPV = {
        sala: "Pc2_unlock",
        efeito: "SR_S2",
        estado: "block",
        N_estado: "block"
    }
    Back.push(SPV)

//11
    SPV = {
        sala: "Pc2_on_Console",
        efeito: "SR_S2",
        estado: "block",
        N_estado: "block"
    }
    Back.push(SPV)

//12
    SPV = {
        sala: "Pc3_on_Console",
        efeito: "SR_S3",
        estado: "block",
        N_estado: "block"
    }
    Back.push(SPV)

//13
    SPV = {
        sala: "Pc3_off",
        efeito: "SR_S3",
        estado: "block",
        N_estado: "block"
    }
    Back.push(SPV)
//14
    SPV = {
        sala: "Portao_All",
        efeito: "Sala_Entrada",
        estado: "block",
        N_estado: "none"
    }
    Back.push(SPV)
//15
    SPV = {
        sala: "Corredor",
        efeito: "Sala_Entrada",
        estado: "block",
        N_estado: "none"
    }
    Back.push(SPV)
//16
    SPV = {
        sala: "Porta_Bloqueada",
        efeito: "Corredor",
        estado: "block",
        N_estado: "block"
    }
    Back.push(SPV)
//17
    SPV = {
        sala: "Porta_Desbloquada",
        efeito: "Corredor",
        estado: "block",
        N_estado: "block"
    }
    Back.push(SPV)
//18
    SPV = {
        sala: "Pc4_acesse",
        efeito: "Corredor",
        estado: "block",
        N_estado: "block"
    }
    Back.push(SPV)
//19
    SPV = {
        sala: "Pc4_on_Console",
        efeito: "Corredor",
        estado: "block",
        N_estado: "block"
    }
    Back.push(SPV)
//20
    SPV = {
        sala: "Corredor_p2_",
        efeito: "Corredor",
        estado: "block",
        N_estado: "block"
    }
    Back.push(SPV)
//21
    SPV = {
        sala: "Corredor_p2_Pc_",
        efeito: "Corredor_p2_",
        estado: "block",
        N_estado: "block"
    }
    Back.push(SPV)
//22
    SPV = {
        sala: "Corredor_p2_Pc_Button",
        efeito: "Corredor_p2_Pc_",
        estado: "block",
        N_estado: "block"
    }
    Back.push(SPV)
//23
    SPV = {
        sala: "Pc4_acesse_Blocked",
        efeito: "Corredor",
        estado: "block",
        N_estado: "block"
    }
    Back.push(SPV)

//24
    SPV = {
        sala: "Corredor_p2_Exit",
        efeito: "Corredor_p2_",
        estado: "none",
        N_estado: "none"
    }
    Back.push(SPV)

    return Back
}