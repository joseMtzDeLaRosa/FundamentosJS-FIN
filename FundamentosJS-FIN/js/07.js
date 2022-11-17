// Unir 2 objetos
const producto =
 {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}
const cliente = 
{
    nombre: 'Juan',
    premium : true
}


// const nuevoObjeto = Object.assign(producto, cliente) // No
//los ... toma una copia del objeto producto
const Union = 
{ 
    producto: {...producto},
    cliente: {...cliente}
}

console.log(Union)
console.log(cliente)
console.log(producto)