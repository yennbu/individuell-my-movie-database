import oData from '../data/data.js';
import { getElement } from '../utils/domUtils.js';

export async function fetchTopMovies() {
    try {
        const response = await fetch('https://santosnr6.github.io/Data/favoritemovies.json');
        let movies = await response.json();
        console.log(movies); // Kontrollera att filmer hämtas korrekt
        
       // oData.topMovieList = movies; // Sparar filmerna i oData
        return movies; // Returnera filmlistan så vi kan använda den

    } catch (error) {
        console.error('Fel vid hämtning', error);
        return []; // Returnera en tom lista vid fel
    }
}

//Eventuellt kan detta brytas ut till en ny modul - men jag gillar att ha alla API-anrop i samma modul, det gör det enklare att ha koll på dem

/*export async function fetchMovie(title) {
    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=be8612e6&s=${title}*`); //http://www.omdbapi.com/?apikey=be8612e6&t&s=sa* -- ${title}
        let movies = await response.json();
        console.log(movies);

        return movies.Search;

        //Det här ska brytas ut till en egen funktion eller ersättas av displayMovies()
        //return movie (för att det ska vara möjligt att hämta den i en annan funktion)
       /* const cardContainer = getElement('#cardContainer') 
        cardContainer.innerHTML = 
        `
            <h3 class='movie-title'>${movies.Title}</h3>
            <img class='movie-po' src="${movies.Poster}" alt="${movies.Title}"> 
            <p><a class='trailer-list' href="${movies.Trailer_link}" target="_blank">Se trailer</a></p>
            <p class ='award'>IMDB rating: ${movies.imdbRating}</p> 
        `   //Award behöver inte vara med, ville bara se om jag kunde hämta ut den 


    } catch (error) {
        console.error('Fel vid hämtning', error);
        return []
    }
}*/


export async function fetchMovie(title) {
    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=be8612e6&s=${title}`); 
        let data = await response.json(); // Tolka JSON

        if (!data.Search) {
            console.error("Inga filmer hittades:", data);
            return []; // Returnera en tom array om inget hittas
        }

        console.log(data.Search); // Kontrollera att det är en array
        return data.Search; // Returnera arrayen från `.Search`
    } catch (error) {
        console.error("Fel vid hämtning av filmer:", error);
        return [];
    }
}


