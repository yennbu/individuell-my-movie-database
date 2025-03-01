import { fetchMovie, fetchTopMovies, fetchMovieInfo } from "./modules/api.js";
import { shuffleArray } from "./shuffle.js";
import { movieCard } from "./components/movieCard.js";
import { getElement } from "./utils/domUtils.js";
import { handleFavoriteClick } from "./eventHandlers.js";

export async function fetchAndDisplayTopMovies() {
        let movies = await fetchTopMovies();
        shuffleArray(movies); // Blanda filmerna här
        movies.splice(20)
        movieCard(movies); // Skicka de blandade filmerna till displayMovies
    }

export function dispMovies(movies2) {
    console.log('tja!')
    console.log(movies2)
movies2.forEach(movie => {
    console.log('tjabba!'); 

    const cards = getElement('#cardContainerr');

    const li = document.createElement('li'); //Skapa list-element som "tar emot" informationen från API:t
    li.classList.add('movie-item'); // Lägg till en CSS-klass
    li.setAttribute('data-imdbid', movie.imdbID);
    
    li.innerHTML = `
        <h3 class='movie-title'>${movie.Title}</h3>
        <img class='favourite' src="res/icons/star-outline.svg" alt=""> 
        <img class='movie-poster' src="${movie.Poster}" alt="${movie.Title}"> 
        <p><a class='trailer-link' href="${movie.Trailer_link}" target="_blank">Se trailer</a></p>
    `;

    //if (movie.poster == saknas){lägg till bilden ur mappen}

    cards.appendChild(li);

    
});


console.log('tjabba3!'); 

        const starss = document.querySelectorAll('.favourite');
        console.log(starss)
        handleFavoriteClick(starss)
    

}

export async function displayMovieInfo() {
    let imdb = localStorage.getItem('imdbID'); // Hämta IMDb-ID

    if (!imdb) {
        console.error("Inget IMDb-ID hittades i localStorage.");
        return;
    }

    try {
        let movie4 = await fetchMovieInfo(imdb); // Vänta på fetchMovieInfo
        console.log(movie4);

        const movieInfo = getElement('.movie-information');

        movieInfo.setAttribute('data-imdbid', movie4.imdbID);

        movieInfo.innerHTML = `
            
                <h3 class='movie-title'>${movie4.Title}</h3>
                <img class='favourite' src="res/icons/star-outline.svg" alt=""> 
                <img class='movie-info-poster' src="${movie4.Poster}" alt="${movie4.Title}"> 
                <h4 class="actors">${movie4.Actors}</h4>
                <h4 class="director">${movie4.Director}</h4>
                <p class="plot">${movie4.Plot}</p>
            
        `;

        const stars = getElement('.favourite')
        console.log (stars)

        const starss = document.querySelectorAll('.favourite');
        console.log(starss)
        handleFavoriteClick(starss)

    } catch (error) {
        console.error("Fel vid hämtning av filmdata:", error);
    }
}