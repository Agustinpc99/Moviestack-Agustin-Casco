import{crearTarjeta,renderizar,seleccionado,filtrarNombrePelicula,crearTarjetaFav} from "../module/funciones.js"

const seccionPeliculas = document.getElementById("peliculas")

let favTwo = document.getElementById("fav2")
let favOne = document.getElementById("fav1")

let init = {
    method : "GET",
    headers: {
        "x-api-key": "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
    }
}

fetch("https://moviestack.onrender.com/api/movies",init)
.then((algo) => algo.json())
.then((algo) => {
    console.log(algo)
    let peliculas = algo.movies
    let cartasPeliculas = crearTarjeta(peliculas)
    if(seccionPeliculas){
        renderizar(cartasPeliculas,seccionPeliculas)
    }
    let listaFav = []
    let peliculasFavoritas = JSON.parse(localStorage.getItem("favoritos"))
    listaFav = peliculasFavoritas || []
    for(let i of listaFav){
        let iconoFav = document.querySelector(`[data-id="${i.id}"]`)
        iconoFav.src = favTwo.src
    }
    seccionPeliculas.addEventListener("click",(e) => {
        let favId = e.target.dataset
        let esFav
        if(e.target.src == favTwo.src && favId.id != undefined){
            e.target.src = favOne.src
            esFav = false
        } else if(favId.id != undefined) {
            e.target.src = favTwo.src
            esFav = true
        }
        if(esFav && favId.id != undefined){
            listaFav.push(peliculas.filter(e => e.id == favId.id))
        } else if (!esFav && favId.id != undefined){
            let eliminarObjeto = listaFav.flat().filter(e => e.id == favId.id)
            let eliminarIndex = listaFav.flat().findIndex(e => e.id == eliminarObjeto[0].id)
            listaFav.splice(eliminarIndex,1)
        }
        listaFav = listaFav.flat()
        localStorage.setItem("favoritos", JSON.stringify(listaFav))
    })

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
        for(let i of listaFav){
            let iconoFav = document.querySelector(`[data-id="${i.id}"]`)
            iconoFav.src = favTwo.src
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
        if(e.target.value != "Favorites"){
            for(let i of listaFav){
                let iconoFav = document.querySelector(`[data-id="${i.id}"]`)
                if(iconoFav){
                    iconoFav.src = favTwo.src
                }
            }
        }
        
        seccionPeliculas.addEventListener("click",() => {
            if(e.target.value == "Favorites"){
                let peliculasFavoritosCartas = crearTarjetaFav(listaFav)
                renderizar(peliculasFavoritosCartas,seccionPeliculas)
                if(seccionPeliculas.children.length == 0){
                    seccionPeliculas.innerHTML = `<h3 class="text-2xl text-white">No Movie Fav</h3>`
                }
            
            }
        })
        if(e.target.value == "Favorites"){
            let peliculasFavoritosCartas = crearTarjetaFav(listaFav)
            renderizar(peliculasFavoritosCartas,seccionPeliculas)
            if(seccionPeliculas.children.length == 0){
                seccionPeliculas.innerHTML = `<h3 class="text-2xl text-white">No Movie Fav</h3>`
            }
        
        }
        
    })
})

let buscador = document.querySelector("#buscador")
let seleccion = document.querySelector("#generos")
