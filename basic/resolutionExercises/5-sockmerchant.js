function orderBySock(array) {
    array.sort((a, b) => a - b);
    let cont = 0;
    let i = 0;
    while(i<array.length) {
        if (array[i] === array[i+1]){
            array.shift();
            array.shift();
            cont++;
        } else {
            i++;
        }     
    }    
    console.log("Cantidad de pares de medias ", cont);
}
let array = [10, 20, 20, 20, 20, 30, 50, 10, 20];
orderBySock(array);
