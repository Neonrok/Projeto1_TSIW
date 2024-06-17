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
        id: "item_S2",
        id_1: "item_s2",
        var_item: false,//chave_entrada
        var_local: false //pc1_int
    }
    Use.push(SPV)

    SPV = {
        sala: "Pc1_interior_lock",
        Nsala: "Pc1_interior_unlock",
        item: "item_3_use",
        id: "item_S3",
        id_1: "item_s3",
        var_item: false,//chave_entrada
        var_local: false //pc1_int
    }
    Use.push(SPV)

    return Use
}