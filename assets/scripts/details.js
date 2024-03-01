let parametroUrl = new URLSearchParams(location.search)

let id = parametroUrl.get("id")

let zonaDetalle = document.querySelector("#detalles")

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
    let peliculaEncontrada = peliculas.find(pelicula => pelicula.id == id)
    zonaDetalle.innerHTML = `
<div class="flex flex-col gap-5 w-[55vw] md:w-[35vw] md:justify-evenly justify-between my-2 md:my-0">
                    <div><img src="https://moviestack.onrender.com/static/${peliculaEncontrada.image}" alt="Imagen de ${peliculaEncontrada.title}"></div>
                    <div>
                        <table>
                            <tr>
                                <td class="border md:w-[50vw] text-white text-sm md:text-2xl">Original language</td>
                                <td class="border md:w-[50vw] text-white text-sm md:text-2xl">${peliculaEncontrada.original_language}</td>
                            </tr>
                            <tr class="border">
                                <td class="border text-white text-sm md:text-2xl">Release date</td>
                                <td class="border text-white text-sm md:text-2xl">${peliculaEncontrada.release_date}</td>
                            </tr>
                            <tr class="border">
                                <td class="border text-white text-sm md:text-2xl">Runtime</td>
                                <td class="border text-white text-sm md:text-2xl">${peliculaEncontrada.runtime} mins</td>
                            </tr>
                            <tr class="border">
                                <td class="border text-white text-sm md:text-2xl">Status</td>
                                <td class="border text-white text-sm md:text-2xl">${peliculaEncontrada.status}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="flex flex-col gap-[10%] w-[35vw] justify-around">
                    <article class="flex flex-col gap-5">
                        <h2 class="text-white text-xl md:text-4xl">${peliculaEncontrada.title}</h2>
                        <p class="text-white md:text-xl">${peliculaEncontrada.tagline}</p>
                        <p class="text-sm text-white">${peliculaEncontrada.genres}</p>
                        <p class="text-sm xl:w-[70ch] text-white">${peliculaEncontrada.overview}</p>
                    </article>
                    <div>
                        <table>
                            <tr>
                                <td class="border md:w-[50vw] text-xs text-white md:text-2xl">Vote average</td>
                                <td class="border md:w-[50vw] text-xs text-white md:text-2xl">${peliculaEncontrada.vote_average} %</td>
                            </tr>
                            <tr>
                                <td class="border text-white text-xs md:text-2xl">Budget</td>
                                <td class="border text-white text-xs md:text-2xl">USD ${peliculaEncontrada.budget.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td class="border text-white text-xs md:text-2xl">Revenue</td>
                                <td class="border text-white text-xs md:text-2xl">USD ${peliculaEncontrada.revenue.toLocaleString()}</td>
                            </tr>
                        </table>
                    </div>
                </div>`
})


