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

    return Back
}