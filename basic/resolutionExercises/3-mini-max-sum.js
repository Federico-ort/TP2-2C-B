
const arr = [1, 3, 5, 7, 9];
sumMinMax(arr);

function sumMinMax(array) {
    let arrayMinCopia = array.slice();
    let arrayMaxCopia = array.slice();
    let arrayMin = ordenadorMin(arrayMinCopia);
    let arrayMax = ordenadorMax(arrayMaxCopia);
    let min = [];
    let max = [];
    min = buscador(arrayMin, 4);
    max = buscador(arrayMax, 4);
    let num1 = suma(min);
    let num2 = suma(max);
    console.log("la suma minima es: " + num1);
    console.log("la suma maxima es: " + num2);

}
function ordenadorMin(array) {
    let arrayMin = array.sort(minimosFunc);
    return arrayMin;
}
function ordenadorMax(array) {
    let arrayMax = array.sort(maximosFunc);
    return arrayMax;
}
function buscador(array, x) {
    let aux = [];
    for (let index = 0; index < x; index++) {
        aux.push(array[index]);

    }
    return aux;
}
function suma(array) {
    let aux = 0;
    for (const numero of array) {
        aux += numero;
    }
    return aux;
}
function minimosFunc(elem1, elem2) {
    return elem1 - elem2;
}

function maximosFunc(elem1, elem2) {
    return elem2 - elem1;
}