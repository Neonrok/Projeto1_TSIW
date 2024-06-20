let Use = []

export function init() {
//0
    let SPV = {
        up: "N/A",
        down: "N/A",
        right: 1,
        left: "N/A",
        get: "N/A",
        activate: "N/A"
    }
    Use.push(SPV)
//1
    SPV = {
        up: 2,
        down: "N/A",
        right: "N/A",
        left: 0,
        get: "N/A",
        activate: "N/A"
    }
    Use.push(SPV)
//2
    SPV = {
        up: 3,
        down: 1,
        right: 4,
        left: "N/A",
        get: "N/A",
        activate: "N/A"
    }
    Use.push(SPV)
//3
    SPV = {
        up: "N/A",
        down: 2,
        right: "N/A",
        left: "N/A",
        get: true,
        activate: "N/A"
    }
    Use.push(SPV)
//4
    SPV = {
        up: "N/A",
        down: "N/A",
        right: "N/A",
        left: 2,
        get: "N/A",
        activate: "N/A"
    }
    Use.push(SPV)

    return Use
}