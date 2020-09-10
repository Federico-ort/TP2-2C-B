// Complete the isBalanced function below.
function isBalanced(s) {
    // 
    let aux = -1;

    while (s.length != 0) {
        aux = s.length;

        s = s.replace("()","");
        s = s.replace("[]","");
        s = s.replace("{}","");

        if(aux == s.length) return "NO";
    }

    return "YES";
}

// TESTS
console.log('hola mundo');
console.log(isBalanced('{[') == 'NO');
console.log(isBalanced('{[()]}') == 'YES');
console.log(isBalanced('{[(])}') == 'NO');
console.log(isBalanced('{{[[(())]]}}') == 'YES');
console.log(isBalanced('{{[[(())]]}}{}()') == 'YES');

// TIPS: Pilas
// TIPS: remplazo de cadenas