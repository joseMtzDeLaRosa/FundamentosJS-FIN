const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
const numeros = [10, 20, 30]

// Filter
nuevoArray = tecnologias.filter( tech => tech !== 'React')

// Comprobar si un elemento existe en el array
const resultado = tecnologias.includes('GraphQL')
console.log(resultado)

// Some - Devuelve si al menos uno cumple la condición
 const resultadonum = numeros.some( numero => numero > 15)
 console.log(resultadonum)

// Find - Devuelve el primer elemento que cumpla la condicion
 const resultadofind = numeros.find( numero => numero > 5)
 console.log(resultadofind)

// Every - Retorna true o false si todos cumplen la condición
const resultadoevery = numeros.every( numero => numero > 9)
console.log(resultadoevery)

// Reduce - Acumulando en el total
const resultadoreduce = numeros.reduce( (total, numero) => numero + total, 0)
console.log(resultadoreduce)

// Filter - Crea un nuevo array en base a una condición
 const resultadoarr = tecnologias.filter( tech => tech === 'Node.js')
 console.log(resultadoarr)
 const resultadonumararrays = numeros.filter( numero => numero !== 10)
 console.log(resultadonumararrays)
 
tecnologias.forEach( (tech, index) => console.log(index))

// Crear un nuevo array
const arrayMap = tecnologias.map( tech => tech)

console.log(arrayMap)