let parametroUrl = new URLSearchParams(location.search)

let id = parametroUrl.get("id")

let peliculaEncontrada = movies.find(pelicula => pelicula.id == id)

let zonaDetalle = document.querySelector("#detalles")

zonaDetalle.innerHTML = `
<div class="flex flex-col gap-5 w-[35vw] justify-evenly">
                    <div><img src="${peliculaEncontrada.image}" alt="Imagen de ${peliculaEncontrada.title}"></div>
                    <div>
                        <table>
                            <tr>
                                <td class="border w-[50vw] text-white text-2xl">Original language</td>
                                <td class="border w-[50vw] text-white text-2xl">${peliculaEncontrada.original_language}</td>
                            </tr>
                            <tr class="border">
                                <td class="border text-white text-2xl">Release date</td>
                                <td class="border text-white text-2xl">${peliculaEncontrada.release_date}</td>
                            </tr>
                            <tr class="border">
                                <td class="border text-white text-2xl">Runtime</td>
                                <td class="border text-white text-2xl">${peliculaEncontrada.runtime} mins</td>
                            </tr>
                            <tr class="border">
                                <td class="border text-white text-2xl">Status</td>
                                <td class="border text-white text-2xl">${peliculaEncontrada.status}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="flex flex-col gap-[10%] w-[35vw] justify-around">
                    <article class="flex flex-col gap-5">
                        <h2 class="text-white text-4xl">${peliculaEncontrada.title}</h2>
                        <p class="text-white text-xl">${peliculaEncontrada.tagline}</p>
                        <p class="text-white">${peliculaEncontrada.genres}</p>
                        <p class="w-[70ch] text-white">${peliculaEncontrada.overview}</p>
                    </article>
                    <div>
                        <table>
                            <tr>
                                <td class="border w-[50vw] text-white text-2xl">Vote average</td>
                                <td class="border w-[50vw] text-white text-2xl">${peliculaEncontrada.vote_average} %</td>
                            </tr>
                            <tr>
                                <td class="border text-white text-2xl">Budget</td>
                                <td class="border text-white text-2xl">USD ${peliculaEncontrada.budget.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td class="border text-white text-2xl">Revenue</td>
                                <td class="border text-white text-2xl">USD ${peliculaEncontrada.revenue.toLocaleString()}</td>
                            </tr>
                        </table>
                    </div>
                </div>`
