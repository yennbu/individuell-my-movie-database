//Importerade funktioner
import { fetchMovieSearch } from "./modules/api.js";
import { fetchAndDisplayTopMovies } from "./displayMovies.js";
import { loadAndRenderTrailers } from "./modules/caroussel.js";
import { getElement } from "./utils/domUtils.js";
import { setupSearchListeners } from "./search.js";
import { displayMovies } from "./displayMovies.js";
import { addMovieItemEventListeners } from "./eventHandlers.js";
import { displayMovieInfo } from "./displayMovies.js";
import { addMovieInformationEventListeners } from "./eventHandlers.js";
import { fetchFavoriteMovies } from "./favouriteMovies.js";

//Variabler
const searchButton = getElement("#searchBtn");
const inputField = getElement("#searchInput");

//Funktion för sökfältet
setupSearchListeners(searchButton, inputField);


if (window.location.pathname === '/' || window.location.pathname === '/template/index.html') {
    console.log('index.html');
    loadAndRenderTrailers();
    fetchAndDisplayTopMovies()

} else if (window.location.pathname === '/template/favorites.html') {
    console.log('favorites.html');
    fetchFavoriteMovies()

} else if (window.location.pathname === '/template/movie.html') {
    console.log('movie.html');
    displayMovieInfo() 
    const stars1 = document.querySelectorAll('.favourite');
    console.log(stars1 + "scipt.js")
    addMovieInformationEventListeners()

} else if (window.location.pathname === '/template/search.html') {
    console.log('search.html');
    let searchedMovies = localStorage.getItem("search");
    let movies2 = await fetchMovieSearch(searchedMovies);

    displayMovies(movies2);
    addMovieItemEventListeners()
}

    