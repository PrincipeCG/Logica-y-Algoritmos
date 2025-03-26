const suma = (a, b) => a + b;

const generarMensajeSaludo = (nombre) => "Hola, " + nombre;

console.log(suma(5,8));

console.log(generarMensajeSaludo("Carlos"));

const array = [1,2,3,4,5,6,7,8,9];

const newArray = array.map((item, index) => {
    return item**item;
})

console.log(newArray);

const forEachResult = newArray.forEach((item) => {
    console.log(item);
})

console.log(forEachResult);

let nombre = "Carlos";

const pElements = array.map((item) => `<h1>${item}</h1>`);

console.log(pElements);


const miDiv = document.querySelector(".mi-div");

pElements.forEach((element) => {
    miDiv.insertAdjacentHTML("beforeend", element);
})

const options = {
    isEnabled: true,
    time: 15,
    code: "Aproved"
}

const { isEnabled, time, code } = options;

console.log(isEnabled, time, code);


const contactos =[{
    nombre: "Carlos",
    puesto: "Desarrollador",
    empresa: "Microsoft",
    correoelectronico: 'carlos@hotmail.com',
    Number: 5530000000,
}];

const generarTarjeta = (contactos) =>`
<div class="Tarjeta">
    <h1>${contactos.nombre}</h1>
    <p>${contactos.puesto}</p>
    <p>${contactos.empresa}</p>
    <p>${contactos.correoelectronico}</p>
    <p>${contactos.Number}</p>
</div>
`;

const tarjeta = document.querySelector(".Tarjeta");

contactos.forEach((contactos)=>{
    tarjeta.insertAdjacentHTML("beforeend", generarTarjeta(contactos));
})
