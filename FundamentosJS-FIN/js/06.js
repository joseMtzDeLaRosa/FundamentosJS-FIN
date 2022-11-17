// Objetos - Destructuring con 2 o más objetos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}


const cliente = {
    nombre: 'jess',
    premium : true
}

const { nombre, precio, disponible } = producto
const { nombre: nombreCliente, premium } = cliente

console.table(nombre)
console.table(nombreCliente)