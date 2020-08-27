
function stairCaseDesc(x) {
    
    let signo = "#";
    let cadena = "";
    while (cadena.length < x) {
        cadena = cadena + signo;
        console.log(cadena);
       
    }
}

function stairCaseAsc (escalones) {
    
    for (let index = 1; index <= escalones; index++) {
        let a = printChar(" ", escalones-index);
        let b = printChar("#", index);
        console.log(a+b);
    }
}

function printChar (caracter, cant) {
    let i = 0;
    let result = "";
    while (i < cant) {
        result = result + caracter;
        i++;
    }
    return result;
}

console.log("Escalera Ascendente:");
stairCaseAsc(6);
console.log("Escalera Descendiente:");
stairCaseDesc(6);