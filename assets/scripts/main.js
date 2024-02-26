const seccionPeliculas = document.getElementById("peliculas")

function crearTarjeta(peliculas){
    let cartas = ""
    for(let pelicula of peliculas){
        cartas += `<article class="flex flex-col h-[55vh] w-[20vw] border-slate-400 rounded bg-slate-400">
        <img class="rounded-t" src="${pelicula.image}" alt="Portada de la pelicula ${pelicula.title}">
        <h3 class="self-center text-2xl font-semibold underline underline-offset-3 font-serif">${pelicula.title}</h3>
        <p class="self-center text-xl">${pelicula.tagline}</p>
        <p class="p-2 line-clamp-6" >${pelicula.overview}</p>
        <div class="flex-grow"></div>
        <a class="p-2 text-white bg-black self-center mb-2" href="./details.html?id=${pelicula.id}"><button>Details</button></a>
    </article>`
    }
    return cartas
}


function renderizar(cartas,elemento){
    elemento.innerHTML = cartas
}

let cartasPeliculas = crearTarjeta(movies)
if(seccionPeliculas){
    renderizar(cartasPeliculas,seccionPeliculas)
}

let buscador = document.querySelector("#buscador")
let seleccion = document.querySelector("#generos")

function seleccionado(){
    const selected = document.querySelector("#generos")
    let indexSeleccionado = selected.selectedIndex
    let generoDeLaPelicula = selected.options[indexSeleccionado].value
    return generoDeLaPelicula
}

seleccion.addEventListener("click",(e) => {
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

function filtrarNombrePelicula(peliculas, busqueda){
    return peliculas.filter((pelicula) => pelicula.title.toLowerCase().startsWith(busqueda.toLowerCase()))
}

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
