
if(window.location.pathname === '/' || window.location.pathname === '/template/index.html') {
    console.log('index.html');

} else if(window.location.pathname === '/template/favorites.html') {
    console.log('favorites.html');

} else if(window.location.pathname === '/template/movie.html') {
    console.log('movie.html');

} else if(window.location.pathname === '/template/search.html') {
    console.log('search.html');

}

import { fetchMovie } from "./modules/api.js";
import { fetchTopMovies } from "./modules/api.js";
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
});

fetchTopMovies()

//fetchMovie('Interstellar'); // Exempel på anrop - kolla så att API:t fungerar.
