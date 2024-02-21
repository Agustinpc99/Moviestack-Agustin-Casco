/* 
<article class="flex flex-col h-[40vh] w-[17vw] border-slate-400 rounded bg-slate-400">
    <img class="rounded-t" src="${}" alt="Portada de la pelicula ${}">
    <h3 class="self-center text-xl font-semibold">${}</h3>
    <p class="self-center py-2">${}</p>
    <p class="p-2">${}</p>
</article> */


const seccionPeliculas = document.getElementById("peliculas")

function crearTarjeta(peliculas){
    let cartas = ""
    for(let pelicula of peliculas){
        cartas += `<article class="flex flex-col h-[55vh] w-[20vw] border-slate-400 rounded bg-slate-400">
        <img class="rounded-t" src="${pelicula.image}" alt="Portada de la pelicula ${pelicula.title}">
        <h3 class="self-center text-2xl font-semibold underline underline-offset-3 font-serif">${pelicula.title}</h3>
        <p class="self-center text-xl">${pelicula.tagline}</p>
        <p class="p-2 line-clamp-6" >${pelicula.overview}</p>
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





