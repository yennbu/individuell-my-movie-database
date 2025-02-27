

/*
async function shuffleTrailers() {
    let trailers = await fetchTopMovies();
    if (trailers.length === 0) return;

    shuffleArray(trailers);
    trailers.splice(5); 

    //const trailerList = getElement('.trailer-list')
    //trailerList.innerHTML = ''; //Rensa listan
    
    trailers.forEach(movie => {
        console.log("Filmobjekt:", movie); 
        
        const li = document.createElement('li'); //Skapa list-element som "tar emot" informationen från API:t
        //li.classList.add('trailer-item'); // Lägg till en CSS-klass
        
        li.innerHTML = `
            <iframe class="movie-trailer" src="${movie.Trailer_link}" allowfullscreen></iframe>
        `; 

        movieList.appendChild(li);


})

}

shuffleTrailers() */


//fetchTopMovies()
/*
async function displayMovies() {
    let movies = await fetchTopMovies();
    if (movies.length === 0) return;

    shuffleArray(movies);
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

/*import { fetchMovie } from "./modules/api.js";
import { getElement } from "./utils/domUtils.js";

const input = getElement('#searchInput');
const searchButton = getElement('#searchBtn');

// Funktion som hanterar sökning
function handleSearch(event) {
    event.preventDefault(); // Förhindrar att formuläret skickas
    console.log(input.value); // Skriver ut användarens input
    fetchMovie(input.value); 
}

// Event listeners för både knapptryck och Enter
searchButton.addEventListener('click', handleSearch);
input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleSearch(event);
    }
}); */

//fetchMovie("Interstellar"); // Exempel på anrop - kolla så att API:t fungerar.

//Lägg detta i domUtils:
//const userInput = document.querySelector('#searchInput')

//Ändra så att anropet blir detsamma som användarens input i sökfältet

//API-nyckel: be8612e6

/*
export async function fetchTopMovies() {
    const response = await fetch('https://santosnr6.github.io/Data/favoritemovies.json');
    let movies = await response.json();
    oData.topMovieList = movies;
    console.log(movies)
}
    
//Stoppa in en try-catch
*/

/*async function displayMovies() {
    fetchTopMovies()//Hämta information från API (är det en array??)
    movieList.document.createElement('li')//Lägg till list-element i .card-container ol, som innehåller informationen från API:t
    }

displayMovies(); // Anropa funktionen vid sidladdning
//fetchMovie('Titanic') */

/*
async function fetchMovies() {
    try {
        const response = await fetch('https://santosnr6.github.io/Data/favoritemovies.json');
        const movies = await response.json();

        console.log("Hämtade filmdata:", movies); // Logga API-svar
        return movies;
    } catch (error) {
        console.error('Fel vid hämtning av filmer:', error);
        return [];
    }
}*/