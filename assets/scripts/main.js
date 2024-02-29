import{crearTarjeta,renderizar,seleccionado,filtrarNombrePelicula} from "../module/funciones.js"

const seccionPeliculas = document.getElementById("peliculas")

let init = {
    method : "GET",
    headers: {
        "x-api-key": "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
    }
}

fetch("https://moviestack.onrender.com/api/movies",init)
.then((algo) => algo.json())
.then((algo) => {
    let peliculas = algo.movies
    let cartasPeliculas = crearTarjeta(peliculas)
    if(seccionPeliculas){
        renderizar(cartasPeliculas,seccionPeliculas)
    }
    buscador.addEventListener("input",() => {
        let generoDeLaPelicula = seleccionado()
        let peliculasPorGenero = peliculas.filter((generos) => generos.genres.includes(generoDeLaPelicula))
        let peliculasPorNombre = filtrarNombrePelicula(peliculasPorGenero,buscador.value)
        let cartasPeliculasNombre = crearTarjeta(peliculasPorNombre)
        if(generoDeLaPelicula == "all" && buscador.value == ""){
            renderizar(cartasPeliculas,seccionPeliculas)
        } else if(generoDeLaPelicula == "all") {
            peliculasPorNombre = filtrarNombrePelicula(peliculas,buscador.value)
            cartasPeliculasNombre = crearTarjeta(peliculasPorNombre)
            renderizar(cartasPeliculasNombre,seccionPeliculas)
        } else {
            renderizar(cartasPeliculasNombre,seccionPeliculas)
        }
    
        if(seccionPeliculas.children.length == 0){
            seccionPeliculas.innerHTML = `<h3 class="text-2xl text-white">No Movie Review</h3>`
        }
        
    })
    seleccion.addEventListener("input",(e) => {
        let generoDeLaPelicula = seleccionado()
        let peliculasPorNombre = filtrarNombrePelicula(peliculas,buscador.value)
        let peliculasPorGenero = peliculasPorNombre.filter((generos) => generos.genres.includes(generoDeLaPelicula))
        let cartasPeliculasGenero = crearTarjeta(peliculasPorGenero)
        if(generoDeLaPelicula == "all" && buscador.value == ""){
            renderizar(cartasPeliculas,seccionPeliculas)
        } else{
            renderizar(cartasPeliculasGenero,seccionPeliculas)
        }
    
        if(seccionPeliculas.children.length == 0){
            seccionPeliculas.innerHTML = `<h3 class="text-2xl text-white">No Movie Review</h3>`
        }
        
    })
})

let buscador = document.querySelector("#buscador")
let seleccion = document.querySelector("#generos")
