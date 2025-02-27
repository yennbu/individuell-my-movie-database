
if (window.location.pathname === '/' || window.location.pathname === '/template/index.html') {
    console.log('index.html');

} else if (window.location.pathname === '/template/favorites.html') {
    console.log('favorites.html');

} else if (window.location.pathname === '/template/movie.html') {
    console.log('movie.html');

} else if (window.location.pathname === '/template/search.html') {
    console.log('search.html');

}

import { fetchTopMovies } from "./modules/api.js";
import { fetchMovie } from "./modules/api.js";
//import { renderTrailers } from "./modules/caroussel.js";
import { displayMovies } from "./displayMovies.js";
//import { shuffleArray } from "./shuffle.js";
import { loadAndRenderTrailers } from "./modules/caroussel.js";
import { getElement } from "./utils/domUtils.js";

let topMovies = await fetchTopMovies();
//let searchedMovies = await fetchMovie();

const input = getElement('#searchInput');
const searchButton = getElement('#searchBtn');


if (window.location.pathname.includes("index.html")) {
    //let userInput = input.value
    loadAndRenderTrailers();
    displayMovies(topMovies);

// Sökningen är en funktion för att kunna triggas av en "eventListener"
function handleSearch(event) {
    event.preventDefault(); // Förhindrar att formuläret skickas
    
    //Spara ner userInput i localStorage

    //fetchMovie(input.value)
    localStorage.setItem("search", input.value)
    
    //let userInput = input.value
    //let movie2 = fetchMovie(input.value); //

    window.location.href = "search.html";

    //console.log(userInput); // Skriver ut användarens input
   
}

// Jag vill att sökrutan ska fungera både när användaren klickar på sökknappen och trycker på enter
searchButton.addEventListener('click', handleSearch);
input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleSearch(event);
    }
});
//Jag vill att det här leder till att användare 
//1. Förflyttas till söksidan (search.html) check!!
//2. Får upp resultat baserat på vad man har sökt på

}
    
    if (window.location.pathname.includes("search.html")) {
    
    //let movie2 = fetchMovie(input.value)
    //en fetchMovie som hämtar söksträngen ur localStorage här

    let searchedMovies = localStorage.getItem("search")

    let movies2 = await fetchMovie(searchedMovies)

    movies2.forEach(movie => {
        //console.log("Filmobjekt:", movie); 

        const cards = getElement('#cardContainerr');
        //movieList.innerHTML = ''; // Rensa listan, så a

        const li = document.createElement('li'); //Skapa list-element som "tar emot" informationen från API:t
        li.classList.add('movie-item'); // Lägg till en CSS-klass
        
        li.innerHTML = `
            <h3 class='movie-title'>${movie.Title}</h3>
            <img class='favourite' src="res/icons/white-medium-star.svg" alt=""> 
            <img class='movie-poster' src="${movie.Poster}" alt="${movie.Title}"> 
            <p><a class='trailer-link' href="${movie.Trailer_link}" target="_blank">Se trailer</a></p>
        `;

        cards.appendChild(li);
    });

    //fetchMovie(userInput) ska in i funktionen ovan och här ska jag använda displayMovie????????????????????
    //Hur får jag funktionerna att kommunicera med varandra fast att jag byter HTML-fil?
}
