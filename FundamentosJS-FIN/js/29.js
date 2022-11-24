// Fetch API

const url = "https://jsonplaceholder.typicode.com/comments";

const url2="https://zelda.fanapis.com/api/dungeons?limit=100"


//nativo del fecth () y toma la consulta en este caso la url jaja

//fetch(url).then((respuesta) => {
//return respuesta.json()
//})
//.then((resultado) => {
//  resultado.forEach( comentarios => {
//    console.log(comentarios)
//})
// console.log(resultado)
//})

// ya le digo en el fech la respuesta en json
const consultarAPI = () => {
  fetch(url)
  .then( respuesta => respuesta.json())
  .then(resultado => { 
        console.log(resultado); // ya tengo las tuplas del api
            resultado.forEach((comentarios) => {
                // console.log(comentarios); // imprimir las tuplas del API
      })
    });
}

consultarAPI();

const consultarAPI2 = () =>{
    fetch(url2)
    .then( respuesta => respuesta.json())
    .then( resultado =>{
        console.log(resultado); // ya tengo la data
       // resultado.forEach((name) => {
          //  console.log(name);
       // })
      
    });
   
}




consultarAPI2();