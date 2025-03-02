import { fetchTopMovies, fetchMovieInfo } from "./modules/api.js";
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

//Visar de sökta filmerna och de favoritmarkerade filmerna
export function displayMovies(movies) {
    console.log(movies)
    const cards = getElement('#cardContainer');

    if (movies.length === 0) {

        if (window.location.pathname === '/template/favorites.html') {
            cards.innerHTML = `
                <div class="error-message">
                    <p class="error-message">Inga favoriter sparade</p>
                </div>`;

        } else {

            //    const cardContainer = document.querySelector('.card-container');
            cards.innerHTML = `
                <div class="error-message">
                    <p class="error-message">Ojdå! Inga filmer hittades.</p>
                    <p class="error-message">Testa att söka igen.</p>
                </div>`;
        }
    }

    movies.forEach(movie => {
        const li = document.createElement('li'); //Skapa list-element som "tar emot" informationen från API:t
        li.classList.add('movie-item'); // Lägg till en CSS-klass
        li.setAttribute('data-imdbid', movie.imdbID);

        if (movie.Poster == "N/A") { movie.Poster = "res/icons/missing-poster.svg"; }

        li.innerHTML = `
        <h3 class='movie-title'>${movie.Title}</h3>
        <img class='favourite' src="res/icons/star-outline.svg" alt=""> 
        <img class='movie-poster' src="${movie.Poster}" alt="${movie.Title}"> 
    `;

        cards.appendChild(li);


    });

    const favouriteBtn = document.querySelectorAll('.favourite');
    handleFavoriteClick(favouriteBtn)
}

//Visar kortet med mer information om varje film
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
                <img class='favouriteBtn' src="res/icons/star-outline.svg" alt=""> 
                <img class='movie-information__poster' src="${movie4.Poster}" alt="${movie4.Title}"> 
                <h4 class="actors">${movie4.Actors}</h4>
                <h4 class="director">${movie4.Director}</h4>
                <p class="plot">${movie4.Plot}</p>
            
        `;

        const favouriteBtn = document.querySelectorAll('.favouriteBtn');
        handleFavoriteClick(favouriteBtn)

    } catch (error) {
        console.error("Fel vid hämtning av filmdata:", error);
    }
}