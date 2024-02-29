import{crearTarjetaFav,renderizar,seleccionado,filtrarNombrePelicula} from "../module/funciones.js"

let seccionFavoritos = document.querySelector("#seccionfavoritos")

let peliculasFavoritas = JSON.parse(localStorage.getItem("favoritos"))

let favTwo = document.getElementById("fav2")
let favOne = document.getElementById("fav1")

if(peliculasFavoritas){
    let cartas = crearTarjetaFav(peliculasFavoritas)

    renderizar(cartas,seccionFavoritos)
}

if(seccionFavoritos.children.length == 0){
    seccionFavoritos.innerHTML = `<h3 class="text-2xl text-white">No Movie Fav</h3>`
}

seccionFavoritos.addEventListener("click",(e) => {
    let favId = e.target.dataset
    let esFav
    if(e.target.src == favTwo.src && favId.id != undefined){
        e.target.src = favOne.src
        esFav = false
    } else if(favId.id != undefined) {
        e.target.src = favTwo.src
        esFav = true
    }
    if(esFav  && favId.id != undefined){
        peliculasFavoritas.push(peliculas.filter(e => e.id == favId.id))
    } else if (!esFav  && favId.id != undefined){
        let eliminarObjeto = peliculasFavoritas.flat().filter(e => e.id == favId.id)
        let eliminarIndex = peliculasFavoritas.flat().findIndex(e => e.id == eliminarObjeto[0].id)
        peliculasFavoritas.splice(eliminarIndex,1)
    }
    localStorage.setItem("favoritos", JSON.stringify(peliculasFavoritas))
    let cartasNuevas = crearTarjetaFav(peliculasFavoritas)
    renderizar(cartasNuevas,seccionFavoritos)
    if(seccionFavoritos.children.length == 0){
        seccionFavoritos.innerHTML = `<h3 class="text-2xl text-white">No Movie Fav</h3>`
    }

} )






