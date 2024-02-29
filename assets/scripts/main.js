import{crearTarjeta,renderizar,seleccionado,filtrarNombrePelicula} from "../module/funciones.js"

const seccionPeliculas = document.getElementById("peliculas")

let cartasPeliculas = crearTarjeta(movies)
if(seccionPeliculas){
    renderizar(cartasPeliculas,seccionPeliculas)
}

let buscador = document.querySelector("#buscador")
let seleccion = document.querySelector("#generos")


seleccion.addEventListener("input",(e) => {
    let generoDeLaPelicula = seleccionado()
    let peliculasPorNombre = filtrarNombrePelicula(movies,buscador.value)
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


buscador.addEventListener("input",() => {
    let generoDeLaPelicula = seleccionado()
    let peliculasPorGenero = movies.filter((generos) => generos.genres.includes(generoDeLaPelicula))
    let peliculasPorNombre = filtrarNombrePelicula(peliculasPorGenero,buscador.value)
    let cartasPeliculasNombre = crearTarjeta(peliculasPorNombre)
    if(generoDeLaPelicula == "all" && buscador.value == ""){
        renderizar(cartasPeliculas,seccionPeliculas)
    } else if(generoDeLaPelicula == "all") {
        peliculasPorNombre = filtrarNombrePelicula(movies,buscador.value)
        cartasPeliculasNombre = crearTarjeta(peliculasPorNombre)
        renderizar(cartasPeliculasNombre,seccionPeliculas)
    } else {
        renderizar(cartasPeliculasNombre,seccionPeliculas)
    }

    if(seccionPeliculas.children.length == 0){
        seccionPeliculas.innerHTML = `<h3 class="text-2xl text-white">No Movie Review</h3>`
    }
    
})
