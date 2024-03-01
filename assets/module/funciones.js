export function crearTarjeta(peliculas){
    let cartas = ""
    for(let pelicula of peliculas){
        cartas += `<article class="flex flex-col md:h-[55vh] md:w-[22vw] border-slate-400 rounded bg-slate-400 relative">
        <img class="rounded-t" src="https://moviestack.onrender.com/static/${pelicula.image}" alt="Portada de la pelicula ${pelicula.title}">
        <h3 class="self-center lg:text-2xl text-lg font-semibold underline underline-offset-3 font-serif">${pelicula.title}</h3>
        <p class="self-center lg:text-lg text-sm ">${pelicula.tagline}</p>
        <p class="p-2 lg:text-base text-xs line-clamp-6" >${pelicula.overview}</p>
        <div class="flex-grow"></div>
        <a class="lg:p-2 p-1 text-white bg-black self-center mb-2 rounded" href="./details.html?id=${pelicula.id}"><button>Details</button></a>
        <img data-id="${pelicula.id}" class="w-[50px] absolute bottom-0 end-0 p-1 hover:scale-110" src="./assets/images/fav.png" alt="Favoritos">
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

export function crearTarjetaFav(peliculas){
    let cartas = ""
    for(let pelicula of peliculas){
        cartas += `<article class="flex flex-col md:h-[55vh] md:w-[22vw] border-slate-400 rounded bg-slate-400 relative">
        <img class="rounded-t" src="https://moviestack.onrender.com/static/${pelicula.image}" alt="Portada de la pelicula ${pelicula.title}">
        <h3 class="self-center lg:text-2xl text-lg font-semibold underline underline-offset-3 font-serif">${pelicula.title}</h3>
        <p class="self-center lg:text-lg text-sm">${pelicula.tagline}</p>
        <p class="p-2 lg:text-base text-xs line-clamp-6" >${pelicula.overview}</p>
        <div class="flex-grow"></div>
        <a class="lg:p-2 p-1 text-white bg-black self-center mb-2 rounded" href="./details.html?id=${pelicula.id}"><button>Details</button></a>
        <img data-id="${pelicula.id}" class="w-[50px] absolute bottom-0 end-0 p-1 hover:scale-110" src="./assets/images/fav2.png" alt="Favoritos">
    </article>`
    }
    return cartas
}

