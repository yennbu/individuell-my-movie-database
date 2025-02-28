import { fetchMovie, fetchTopMovies } from "./modules/api.js";
import { shuffleArray } from "./shuffle.js";
import { movieCard } from "./components/movieCard.js";
import { getElement } from "./utils/domUtils.js";


export async function fetchAndDisplayTopMovies() {
        let movies = await fetchTopMovies();
        shuffleArray(movies); // Blanda filmerna här
        movies.splice(20)
        movieCard(movies); // Skicka de blandade filmerna till displayMovies
    }

export async function fetchAndDisplaySearchedMovies() {
    let searchedMovies = localStorage.getItem("search")

    let movies2 = await fetchMovie(searchedMovies)

    movies2.forEach(movie => {
        //console.log("Filmobjekt:", movie); 

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
}

export function addMovieItemEventListeners() {
    const movieCards = document.querySelectorAll('.movie-item');
    movieCards.forEach(card => {
        card.addEventListener('click', testFunction);
    });
}

function testFunction() {
    console.log('klick!');
}



/*
import { getElement } from "./utils/domUtils.js";
export async function displayMovies(movies) {
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
} */