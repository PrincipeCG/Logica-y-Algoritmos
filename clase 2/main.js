const numbers = [9,3,5,6,7,2];

console.log(numbers);

const copyOfNumbers = [...numbers];

console.log(copyOfNumbers);

let nombres = ["Diego", "Ana", "Lalo"];

console.log(nombres);


for(let nombre of nombres){
    console.log(nombre);
}


const persona = {
    nombre: "Diego",
    edad: 21,
    saludar: () => {
        console.log("Hola");
    }
}

console.log(persona);

const clavesObjeto = Object.keys(persona);

const miObjeto = Object.create(persona);

console.log(miObjeto);

miObjeto.saludar();

persona.saludar();


const frutas = ["manzana", "pera", "mango"];

const miFrutaFavorita = frutas.find((element) => element === "mango");

console.log(miFrutaFavorita);


frutas.shift();

frutas.unshift("fresa");

frutas.pop();

frutas.push("sandia");

console.log(frutas, frutas.length);

const numbers2 = [1,3,6,8];

const doubles = numbers2.map((item, index) => {
    const doubledNumber = item * 2;
    console.log(`El numero ${item} en el indice: ${index} al multiplicarlo por 2 su resultado es: ${doubledNumber}`);
    return doubledNumber;
});

console.log(doubles);

const filteredNumbers = numbers2.filter((element) => element > 5);
console.log(filteredNumbers);

//Tarea
//crea un arreglo vacio llamado listaDeCompras 

const listaDeCompras = [];

listaDeCompras.push("manzana");
listaDeCompras.push("pera");    
listaDeCompras.push("mango");

listaDeCompras.shift();

console.log(listaDeCompras);

//Implementa una función mostrarLista() que imprima todos los productos de la lista.

function mostrarLista(){
    for(let producto of listaDeCompras){
        console.log(producto);
        
    }
}
mostrarLista();