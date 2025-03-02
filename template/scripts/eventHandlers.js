// Lägg till en event listener på varje kort
export function addMovieItemEventListeners() {
    const movieCards = document.querySelectorAll('.movie-item');

movieCards.forEach(card => {
    card.addEventListener('click', (event) => {
        windowLocation(event);
        getImdbID(event);
    });
});

}

export function addMovieInformationEventListeners() {
    const movieCards = document.querySelectorAll('.movie-information');

movieCards.forEach(card => {
    card.addEventListener('click', (event) => {
        
        getImdbID(event);
    });
});

}

function getImdbID(event) {
    const clickedCard = event.currentTarget; // Hämta det klickade elementet
        const imdbID = clickedCard.dataset.imdbid; // Hämta imdbID från dataset

        if (imdbID) {
            localStorage.setItem('imdbID', imdbID);
            console.log(`Sparade IMDb ID: ${imdbID}`);

           // window.location.href = "movie.html"; //Den här skulle behöva brytas ut så att den inte aktiveras när man klickar på stjärnan.
            return imdbID;

        } else {
            console.log('IMDb ID saknas!');
            return null;
        }
}

function windowLocation() {
    window.location.href = "movie.html";
}

export function handleFavoriteClick(stars) {
    console.log(stars);
    
    let favMovies = JSON.parse(localStorage.getItem('favMovies1')) || [];

    stars.forEach(star => {
        let imdbID = star.parentElement.dataset.imdbid;

        if (favMovies.includes(imdbID)) {
            star.src = 'res/icons/star.svg'; // Fylld stjärna om filmen finns i localStorage
        } else {
            star.src = 'res/icons/star-outline.svg'; // Tom stjärna annars
        }

        star.addEventListener('click', function (event) {
            event.stopPropagation(); // Stoppa event-bubbling

            if (favMovies.includes(imdbID)) {
                favMovies = favMovies.filter(id => id !== imdbID);
                this.src = 'res/icons/star-outline.svg';
                console.log('Star unclicked');

                if (window.location.pathname.includes("favorites.html")) {
                    location.reload();
                }
            } else {
                favMovies.push(imdbID);
                this.src = 'res/icons/star.svg';
                console.log('Star clicked');
            }

            // Uppdatera localStorage
            localStorage.setItem('favMovies1', JSON.stringify(favMovies));
        });
    });
}

