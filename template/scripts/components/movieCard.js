/*import { getElement } from "./utils/domUtils.js";
import { shuffleArray } from "./shuffle.js";

export async function movieCard(movies) {
   // let movies = await fetchTopMovies();
    if (movies.length === 0) return;

    shuffleArray(movies); //Jag vill bryta ut den här, så att den här funktionen kan användas även för OMDB-API:t
    movies.splice(20); 

    const movieList = getElement('.movie-list');
    movieList.innerHTML = ''; // Rensa listan, så att den inte fylls på - Behövs den när .splice() används?

    movies.forEach(movie => {
        //console.log("Filmobjekt:", movie); 

        const li = document.createElement('li'); //Skapa list-element som "tar emot" informationen från API:t
        li.classList.add('movie-item'); // Lägg till en CSS-klass
        
        li.innerHTML = `
            <h3 class='movie-title'>${movie.Title}</h3>
            <img class='movie-poster' src="${movie.Poster}" alt="${movie.Title}"> 
            <p><a class='trailer-link' href="${movie.Trailer_link}" target="_blank">Se trailer</a></p>
        `;

        movieList.appendChild(li);
    });
}*/