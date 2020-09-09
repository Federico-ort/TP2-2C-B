// Complete the isBalanced function below.
function isBalanced(s) {
    //creo dos arrays (apertura) para guardar { [ ( y cierre para guardar )]}
    let apertura = [];
    let cierre = [];
 //ciclo FOR para recorrer la cadena de texto que recibo por parametro
    for (let index = 0; index < s.length; index++) {
        //Verifico a que array corresponde
        switch (s[index]) {
            case '(':
                apertura.push(s[index]);
                break;
            case '{':
                apertura.push(s[index]);
                break;
            case '[':
                apertura.push(s[index]);
                break;
            default:
                cierre.push(s[index]);
                break;
        }
    }
    // antes de retornar verifico si estan equilibradas las dos cadenas. 
    return apertura.length === cierre.length ? 'YES' : 'NO';
}

// TESTS
console.log(isBalanced('{[()]}') == 'YES');
console.log(isBalanced('{[(])}') == 'NO');
console.log(isBalanced('{{[[(())]]}}') == 'YES');
console.log(isBalanced('{{[[(())]]}}{}()') == 'YES');
