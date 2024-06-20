let Use = []

export function init() {

    let SPV = {
        up: 2,
        down: "N/A",
        right: 1,
        left: "N/A",
        get: "N/A",
        activate: "N/A"
    }
    Use.push(SPV)
    
    SPV = {
        up: 3,
        down: "N/A",
        right: 4,
        left: 0,
        get: "N/A",
        activate: "N/A"
    }
    Use.push(SPV)
    
    SPV = {
        up: "N/A",
        down: 0,
        right: 3,
        left: "N/A",
        get: "N/A",
        activate: "N/A"
    }
    Use.push(SPV)
    
    SPV = {
        up: "N/A",
        down: 4,
        right: "N/A",
        left: 2,
        get: "N/A",
        activate: "N/A"
    }
    Use.push(SPV)
    
    SPV = {
        up: "N/A",
        down: "N/A",
        right: "N/A",
        left: 3,
        get: true,
        activate: "N/A"
    }
    Use.push(SPV)

    return Use
}