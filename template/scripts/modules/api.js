import oData from '../data/data.js';

export async function fetchTopMovies() {
    try {
        const response = await fetch('https://santosnr6.github.io/Data/favoritemovies.json');
        let movies = await response.json();
        oData.topMovieList = movies;
        console.log(movies)
    } catch (error) {
        console.error('Fel vid hämtning', error); //Skriver ut felmeddelande, samt vad som har gått fel.
    }

}

//Eventuellt kan detta brytas ut till en ny modul

export async function fetchMovie(title) {
    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=be8612e6&t=${title}`);
        let movie = await response.json();
        console.log(movie);
    } catch (error) {
        console.error('Fel vid hämtning', error);
    }
}


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
