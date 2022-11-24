// Operaciones en los arreglos
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

// Añadir elementos al array
// tecnologias.push('GraphQL') // Añade al final del array
// tecnologias.unshift('GraphQL') // Añade al final del array

// const nuevoArreglo = [...tecnologias, 'GraphQL'] ... se uso para cerar la copia del arreglo y luego gragos graphql
// const nuevoArreglo = ['NATIVE', ...tecnologias] po pone en la posicion 0 

// Eliminar elementos del array
// tecnologias.pop() // Elimina del final
// tecnologias.shift() // Elimina del inicio
// tecnologias.splice(2, 3) // Elimina de una posición en especifica

// const nuevoArray = tecnologias.filter( function(tech) {
//     return tech === 'React'
// })

// Reemplazar del array
// tecnologias[0] = 'GraphQL'

const nuevoArray = tecnologias.map( function(arreglo) {
    if(arreglo === 'HTML') {
        return 'GraphQL'
    } else {
        return arreglo
    }
})

console.table(tecnologias)
console.table(nuevoArray)