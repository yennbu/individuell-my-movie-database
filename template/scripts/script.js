
if (window.location.pathname === '/' || window.location.pathname === '/template/index.html') {
    console.log('index.html');

} else if (window.location.pathname === '/template/favorites.html') {
    console.log('favorites.html');

} else if (window.location.pathname === '/template/movie.html') {
    console.log('movie.html');

} else if (window.location.pathname === '/template/search.html') {
    console.log('search.html');

}

import { fetchMovieInfo, fetchTopMovies, fetchMovie } from "./modules/api.js";
import { displayMovies } from "./displayMovies.js";
import { loadAndRenderTrailers } from "./modules/caroussel.js";
import { getElement } from "./utils/domUtils.js";

let topMovies = await fetchTopMovies();

const input = getElement('#searchInput');
const searchButton = getElement('#searchBtn');


if (window.location.pathname.includes("index.html")) {
    loadAndRenderTrailers();
    displayMovies(topMovies);

// Sökningen är en funktion för att kunna triggas av en "eventListener"
//Jag vill att det här leder till att användare 
//1. Förflyttas till söksidan (search.html) check!!
//2. Får upp resultat baserat på vad man har sökt på
function handleSearch(event) {
    event.preventDefault(); // Förhindrar att formuläret skickas
    
    localStorage.setItem("search", input.value)//Spara ner userInput i localStorage

    window.location.href = "search.html";

    //console.log(userInput); // Skriver ut användarens input i konsolen  
}

// Jag vill att sökrutan ska fungera både när användaren klickar på sökknappen och trycker på enter
searchButton.addEventListener('click', handleSearch);
input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleSearch(event);
    }
});


}
    
    if (window.location.pathname.includes("search.html")) {
    
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
            <p class='hide'>${movie.imdbID}</p>
        `;

        cards.appendChild(li);
    });


    // Hämta alla movie-items
const movieCards = document.querySelectorAll('.movie-item');

// Lägg till en event listener på varje kort
movieCards.forEach(card => {
    card.addEventListener('click', getImdbID);
});

// Hämta och spara imdbID i localStorage
function getImdbID(event) {
    const clickedCard = event.currentTarget; // Hämta det klickade elementet
    const imdbID = clickedCard.dataset.imdbid; // Hämta imdbID från dataset
    
    if (imdbID) {
        localStorage.setItem('imdbID', imdbID);
        console.log(`Sparade IMDb ID: ${imdbID}`);

        window.location.href = "movie.html";

    } else {
        console.log('IMDb ID saknas!');
    }
}
} 

if (window.location.pathname.includes("movie.html")) {
(async () => {
    let imdb = localStorage.getItem('imdbID'); // Hämta IMDb-ID

    try {
        let movie4 = await fetchMovieInfo(imdb); // Vänta på fetchMovieInfo
        console.log(movie4);

        const movieInfo = document.querySelector('.movie-information'); // Använd korrekt metod för att välja element
        movieInfo.innerHTML = `
            <div>
                <h3 class='movie-title'>${movie4.Title}</h3>
                <img class='favourite' src="res/icons/star-outline.svg" alt=""> 
                <img class='movie-poster' src="${movie4.Poster}" alt="${movie4.Title}"> 
                <p class="actors">${movie4.Actors}</p>
                <p class="director">${movie4.Director}</p>
                <p class="plot">${movie4.Plot}</p>
                <p><a class='trailer-link' href="${movie4.Trailer_link}" target="_blank">Se trailer</a></p>
            </div>
        `;

        // Lägg till event listener efter att knappen har skapats
        const star = document.querySelector('.favourite');
        if (star) {
            star.addEventListener('click', function(){
                console.log('Star clicked')
                
                if (this.src.includes('star-outline.svg')) {
                this.src='res/icons/star.svg'
            }

            else {
                this.src='res/icons/star-outline.svg'
            }
            
            } )
        }

    } catch (error) {
        console.error("Fel vid hämtning av filmdata:", error);
    }
})();

console.log('test');

}