// Fetch API  - Async Await

const url = "https://jsonplaceholder.typicode.com/comments"


const url2="https://zelda.fanapis.com/api/dungeons?limit=100"

const consultarAPI = async () => {
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    console.log(resultado)

}
consultarAPI();



const consultarAPI2 = async () => {
    const respuesta = await fetch(url2)
    const res = await respuesta.json()
    console.log(res)
}
consultarAPI2();
