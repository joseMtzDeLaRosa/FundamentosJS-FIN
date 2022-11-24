// Scope

const precio = 350

function unaFuncion() {
    const precio = 600
    console.log(precio)
}

if(true) {
    console.log(precio)
}

// la explicacion es la siguiente es por que dentro de la function es un const disitna
//y el otro lado neel 
//por eso es que se llama a la funcion y imprime diferete
unaFuncion()