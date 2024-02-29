export function crearTarjeta(peliculas){
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

export function renderizar(cartas,elemento){
    elemento.innerHTML = cartas
}

export function seleccionado(){
    const selected = document.querySelector("#generos")
    let indexSeleccionado = selected.selectedIndex
    let generoDeLaPelicula = selected.options[indexSeleccionado].value
    return generoDeLaPelicula
}

export function filtrarNombrePelicula(peliculas, busqueda){
    return peliculas.filter((pelicula) => pelicula.title.toLowerCase().startsWith(busqueda.toLowerCase()))
}



