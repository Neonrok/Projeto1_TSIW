let Back = []

export function init() {
    let SPV = {
        sala: "Sala_Entrada",
        efeito: "Sala_Entrada",
        estado: "none",
        N_estado: "none"
    }
    Back.push(SPV)

    SPV = {
        sala: "Pc1_off",
        efeito: "Sala_Entrada",
        estado: "block",
        N_estado: "none"
    }
    Back.push(SPV)

    SPV = {
        sala: "Pc1_interior_lock",
        efeito: "Sala_Entrada",
        estado: "block",
        N_estado: "none"
    }
    Back.push(SPV)

    SPV = {
        sala: "Pc1_interior_unlock",
        efeito: "Sala_Entrada",
        estado: "block",
        N_estado: "none"
    }
    Back.push(SPV)

    return Back
}