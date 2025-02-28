
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
import { fetchAndDisplayTopMovies } from "./displayMovies.js";
import { loadAndRenderTrailers } from "./modules/caroussel.js";
import { getElement } from "./utils/domUtils.js";
import { movieCard } from "./components/movieCard.js";

//Sökfunktion
const input = getElement('#searchInput');
const searchButton = getElement('#searchBtn');

function handleSearch(event) {
    event.preventDefault(); // Förhindrar att formuläret skickas
    localStorage.setItem("search", input.value)//Spara ner userInput i localStorage
    window.location.href = "search.html";
}

// Jag vill att sökrutan ska fungera både när användaren klickar på sökknappen och trycker på enter
searchButton.addEventListener('click', handleSearch);
input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleSearch(event);
    }
});

if (window.location.pathname.includes("index.html")) {
    loadAndRenderTrailers();
    fetchAndDisplayTopMovies()

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
            <img class='favourite' src="res/icons/star-outline.svg" alt=""> 
            <img class='movie-poster' src="${movie.Poster}" alt="${movie.Title}"> 
            <h3 class='movie-title'>${movie.Title}</h3>
            <p><a class='trailer-link' href="${movie.Trailer_link}" target="_blank">Se trailer</a></p>
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

            window.location.href = "movie.html"; //Den här skulle behöva brytas ut så att den inte aktiveras när man klickar på stjärnan.
            return imdbID;

        } else {
            console.log('IMDb ID saknas!');
            return null;
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
                <img class='favourite' src="res/icons/star-outline.svg" alt=""> 
                <div class='poster-title'>
                    <img class='movie-poster' src="${movie4.Poster}" alt="${movie4.Title}">
                    <div class='title-actor-director'>
                        <h3 class='movie-title'>${movie4.Title}</h3>
                        <h4 class="actors">Actors: ${movie4.Actors}</h4>
                        <h4 class="director">Director: ${movie4.Director}</h4>
                    </div>
                </div>
                
                <p class="plot">${movie4.Plot}</p>
            </div>
        `;


            const star = document.querySelector('.favourite');
            if (star) {
                star.addEventListener('click', function () {

                    if (this.src.includes('star-outline.svg')) {
                        this.src = 'res/icons/star.svg'
                        console.log('Star clicked')
                        // localStorage.getItem('favMovie', )
                    }

                    else {
                        this.src = 'res/icons/star-outline.svg'
                        console.log('Star unclicked')
                        //ta bort objekt från localStorage
                    }

                })
            }


        } catch (error) {
            console.error("Fel vid hämtning av filmdata:", error);
        }
    })();

    console.log('test');

}

import { dispMovies } from "./displayMovies.js";

if (window.location.pathname.includes("favorites.html")) {


    let displayFavMovies = localStorage.getItem('favMovies1');
    let dispArray = JSON.parse(displayFavMovies);

    console.log(dispArray)

    let movieInfoArr = []


    }
    
    
  //  fetchMovieInfo(dispArray)

// Lägg till event listener
const stars = document.querySelectorAll('.favourite');
//let favMovies = []

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
});

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
            }*/