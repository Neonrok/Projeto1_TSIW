let Use = []

export function init() {

    let SPV = {
        sala: "Pc1_interior_lock",
        Nsala: "Pc1_interior_unlock",
        item: "item_1_use",
        id: "item_S1",
        id_1: "item_s1",
        var_item: false,//chave_entrada
        var_local: false //pc1_int
    }
    Use.push(SPV)

    SPV = { 
        sala: "Pc1_interior_lock",
        Nsala: "Pc1_interior_unlock",
        item: "item_2_use",
        id: "SR_S2_Item",
        id_1: "item_2_use",
        var_item: false,//pé de cabra
        var_local: false //assesso à dica
    }
    Use.push(SPV)

    SPV = {
        sala: "Portao_All",
        Nsala: "Corredor",
        item: "item_3_use",
        id: "SR_S3_Item",
        id_1: "item_3_use",
        var_item: false,//Cartão
        var_local: false //acesso ao corredor
    }
    Use.push(SPV)

    return Use
}