import { getElement } from "../utils/domUtils.js";

export async function movieCard(movies) {
    if (movies.length === 0) return;

    const movieList = getElement('.movie-list');
    movieList.innerHTML = ''; // Rensa listan, så att den inte fylls på - Behövs den när .splice() används?

    movies.forEach(movie => {
        //console.log("Filmobjekt:", movie); 

        const li = document.createElement('li'); //Skapa list-element som "tar emot" informationen från API:t
        li.classList.add('movie-item'); // Lägg till en CSS-klass
        
        li.innerHTML = `
            
            <img class='movie-poster' src="${movie.Poster}" alt="${movie.Title}">
             <h3 class='movie-title'>${movie.Title}</h3>
            <p><a class='trailer-link' href="${movie.Trailer_link}" target="_blank">Se trailer</a></p>
        `;

        movieList.appendChild(li);
    });
}