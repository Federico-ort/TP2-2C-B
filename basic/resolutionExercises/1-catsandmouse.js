

function catAndMouse(x, y, z) {
    let catAPos = Math.abs(z - x); // Fucion Math.abs 'Devuelve el valor absoluto de un número.'
    let catBPos = Math.abs(z - y);

    if (catAPos < catBPos) {
        return "Cat A";
    } else if (catBPos < catAPos) {
        return "Cat B";
    } else {
        return "Mouse C";
    }
}

console.log(catAndMouse(2, 34, 5));
console.log(catAndMouse(-33, 34, 5));
console.log(catAndMouse(2, 34, 1000));
console.log(catAndMouse(2, 2, 5));