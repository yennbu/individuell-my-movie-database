

/*
if (window.location.pathname.includes("movie.html")) {
    (async () => {
        let imdb = localStorage.getItem('imdbID'); // Hämta IMDb-ID

        try {
            let movie4 = await fetchMovieInfo(imdb); // Vänta på fetchMovieInfo
            console.log(movie4);

            const movieInfo = getElement('.movie-information');
            movieInfo.innerHTML = `
                <div>
                    <h3 class='movie-title'>${movie4.Title}</h3>
                    <img class='favourite' src="res/icons/star-outline.svg" alt=""> 
                    <img class='movie-poster' src="${movie4.Poster}" alt="${movie4.Title}"> 
                    <p class="actors">${movie4.Actors}</p>
                    <p class="director">${movie4.Director}</p>
                    <p class="plot">${movie4.Plot}</p>
                    <p><a class='trailer-link' href="${movie4.Trailer_link}" target="_blank">Se trailer</a></p>
                    <button class='button'>Spara som favorit</button>
                </div>
            `;
        } catch (error) {
            console.error("Fel vid hämtning av filmdata:", error);
        }
    })();

document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.button');
    console.log(button); // Kontrollera att elementet hittas

    if (button) {
        button.addEventListener('click', function() {
            console.log('Button clicked!');
        });
    } else {
        console.log('Button element not found');
    }
});

console.log('test')

}; */


/*

if (window.location.pathname.includes("movie.html")) {
   let movie4= (async () => {
        let imdb = localStorage.getItem('imdbID'); // Hämta IMDb-ID

        try {
            let movie3 = await fetchMovieInfo(imdb);
            console.log(movie3);
        } catch (error) {
            console.error("Fel vid hämtning av filmdata:", error);
        }
    })();

    const movieInfo = getElement('.movie-information')
    movieInfo.innerHTML=`
            <h3 class='movie-title'>${movie4.Title}</h3>
            <img class='favourite' src="res/icons/white-medium-star.svg" alt=""> 
            <img class='movie-poster' src="${movie4.Poster}" alt="${movie4.Title}"> 
            <p><a class='trailer-link' href="${movie4.Trailer_link}" target="_blank">Se trailer</a></p>
            <p class='hide'>${movie4.imdbID}</p>
        `

}*/

/* if (imdb) {
        console.log("Hämtat IMDb ID:", imdb);
    } else {
        console.log("Inget IMDb-ID hittades i localStorage.");
    }*/

/*

   const movieCard = getElement('.movie-item')
    movieCard.addEventListener('click', getImdbID)

    function getImdbID(){

        let ID = event.target.movieCard
        
        localStorage.setItem('imdbID', ID)
        
    } */


    //event.target - spara imdbID:t i localStorage - byt sida och hämta informationen igen

if (window.location.pathname.includes("movie.html")) {
    let imdb = localStorage.getItem('imdbID'); // Hämta IMDb-ID
    
    let movie3 = fetchMovieInfo(imdb)

    console.log(movie3)
    
}


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