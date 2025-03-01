
if (window.location.pathname === '/' || window.location.pathname === '/template/index.html') {
    console.log('index.html');

} else if (window.location.pathname === '/template/favorites.html') {
    console.log('favorites.html');

} else if (window.location.pathname === '/template/movie.html') {
    console.log('movie.html');

} else if (window.location.pathname === '/template/search.html') {
    console.log('search.html');

}

//Importerade funktioner
import { fetchMovieInfo, fetchTopMovies, fetchMovie } from "./modules/api.js";
import { fetchAndDisplayTopMovies } from "./displayMovies.js";
import { loadAndRenderTrailers } from "./modules/caroussel.js";
import { getElement } from "./utils/domUtils.js";
import { movieCard } from "./components/movieCard.js";
import { setupSearchListeners } from "./search.js";
import { dispMovies } from "./displayMovies.js";
import { addMovieItemEventListeners } from "./eventHandlers.js";
import { displayMovieInfo } from "./displayMovies.js";
import { addMovieInformationEventListeners } from "./eventHandlers.js";
//import { handleFavoriteClick } from "./displayMovies.js";

//Variabler

const searchButton = getElement("#searchBtn");
const inputField = getElement("#searchInput");

setupSearchListeners(searchButton, inputField);


if (window.location.pathname.includes("index.html")) {
    loadAndRenderTrailers();
    fetchAndDisplayTopMovies()

}

if (window.location.pathname.includes("search.html")) {
    let searchedMovies = localStorage.getItem("search");
    let movies2 = await fetchMovie(searchedMovies);

    dispMovies(movies2);

    if (movies2.length === 0) {
    
        const cardContainer = document.querySelector('.card-container');
        
        if (cardContainer) {
            cardContainer.innerHTML = `
                <p class="error-message">Ojdå! Inga filmer hittades.</p>
                <p class="error-message">Testa att söka igen.</p>`;
        }
    }

    // Hämta alla movie-items
    const movieCards = getElement('.movie-item');

    addMovieItemEventListeners()

}

if (window.location.pathname.includes("movie.html")) {
    displayMovieInfo() 
    const stars1 = document.querySelectorAll('.favourite');
    console.log(stars1 + "scipt.js")
    //handleFavoriteClick(stars1)

    addMovieInformationEventListeners()
}


if (window.location.pathname.includes("favorites.html")) {

    let favouriteMarkedMovies = localStorage.getItem('favMovies1');
    let favMoviesArray = JSON.parse(favouriteMarkedMovies);

    console.log(favouriteMarkedMovies)
    console.log(favMoviesArray)

    let fullMovieInfo = []

    let showMovie = null//await fetchMovieInfo(fullMovieInfo)


    let promises = favMoviesArray.map(async imdbID => {
        let showMovie = await fetchMovieInfo(imdbID);
        return showMovie;
    });
    
    Promise.all(promises).then(results => {
        fullMovieInfo = results;
        dispMovies(fullMovieInfo);
    });


    /*
    favMoviesArray.forEach(async imdbID => {
        showMovie = await fetchMovieInfo(imdbID)
        fullMovieInfo.push(showMovie)

    });
    
    console.log('Här kommer:')
    console.log(fullMovieInfo)
    //console.log('hallå' + showMovie)

    dispMovies(fullMovieInfo)
*/
    }
    
    
  //  fetchMovieInfo(dispArray)

// Lägg till event listener
//let favMovies = []

/*
stars.forEach(star => {
    star.addEventListener('click', function () {
       
       let imdbID = this.parentElement.dataset.imdbid

       if (this.src.includes('star-outline.svg')) {
            this.src = 'res/icons/star.svg';
            console.log('Star clicked');
           
            let test1 = localStorage.getItem('favMovies1');
            let favMovieArr1 = JSON.parse(test1)

            if (favMovieArr1 == null) {
                favMovieArr1 = []
            }
    
            favMovieArr1.push(imdbID)

            console.log(this.parentElement.dataset.imdbid)
            const favMovieJSON = JSON.stringify(favMovieArr1)
            localStorage.setItem('favMovies1', favMovieJSON);  // Spara film i localStorage
        } else {
            this.src = 'res/icons/star-outline.svg';
            console.log('Star unclicked');

            let test = localStorage.getItem('favMovies1');
            let favMovieArr = JSON.parse(test)
            console.log(favMovieArr)

            const index = favMovieArr.indexOf(imdbID);
            if (index > -1){
                favMovieArr.splice(index, 1)
            }

            console.log(favMovieArr)
            
            localStorage.removeItem('favMovies1'); // Ta bort objekt från localStorage
            
            const removedMovieJSON = JSON.stringify(favMovieArr)
            localStorage.setItem('favMovies1', removedMovieJSON)

            
        }
    });
}); */


/*

        const clickedCard = event.currentTarget; // Hämta det klickade elementet
        const imdbID = clickedCard.dataset.imdbid; // Hämta imdbID från dataset

const clickedCard = event.currentTarget; // Hämta det klickade elementet
            const imdbID = clickedCard.dataset.imdbid; // Hämta imdbID från dataset

            if (imdbID) {
                localStorage.setItem('imdbID', imdbID);
                console.log(`Sparade IMDb ID: ${imdbID}`);


            } else {
                console.log('IMDb ID saknas!');
            }  */