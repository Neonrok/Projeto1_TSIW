let Qse = []

export function init() {

    let SPV = {
        Qest: "Qual destes não é um tipo de variável em programação?",
        Opt1: "Int",
        Opt2: "Float",
        Opt3: "Substantive",
        Opt4: "Boolean"
    }
    Qse.push(SPV)

    SPV = {
        Qest: "o que irá aparecer na consola?\n(console.log(3*4+4))",
        Opt1: "10",
        Opt2: "14",
        Opt3: "16",
        Opt4: "24"
    }
    Qse.push(SPV)

    SPV = {
        Qest: "Qual dos seguintes não é um tipo de dados em JavaScript?",
        Opt1: "String",
        Opt2: "Number",
        Opt3: "Character",
        Opt4: "Boolean"
    }
    Qse.push(SPV)

    SPV = {
        Qest: "Qual das variaveis é usada para defenir true/false?",
        Opt1: "String",
        Opt2: "Float",
        Opt3: "Boolean",
        Opt4: "Int"
    }
    Qse.push(SPV)

    return Qse
}