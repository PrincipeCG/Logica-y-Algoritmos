function factorial(n){
    if(n < 1){
        return 1;
    }
    return n * factorial(n - 1);
}

let totalFactorial = factorial(125);
console.log(totalFactorial);


//Usa un índice inicial (index = 0) para rastrear la posición en el arreglo.
//Si index === gifts.length, el regalo no está en la lista.
// Si gifts[index] === giftName, el regalo está en esa posición.
//Realiza una llamada recursiva aumentando el índice (index + 1).

const gifts = ["pelota", "muñeca", "carro"];
function encontrarRegalo(gifts, regalo, index = 0){
    if(index === gifts.length){
        return `No se encontró el regalo "${regalo}".`;
    }
    if(gifts[index] === regalo){
        return `El regalo "${regalo}" se encontró en la posición ${index}.`;
    }
    return encontrarRegalo(gifts, regalo, index + 1);
}
console.log(encontrarRegalo(gifts, "muñeca"));  // Aquí buscamos "muñeca"
console.log(encontrarRegalo(gifts, "peluche"));  // Aquí buscamos "peluche"
