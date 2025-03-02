import { displayMovies } from "./displayMovies.js";
import { fetchMovieInfo } from "./modules/api.js";

export async function fetchFavoriteMovies() {
    let favouriteMarkedMovies = localStorage.getItem('favMovies1');
    let favMoviesArray = JSON.parse(favouriteMarkedMovies) || [];

    console.log(favouriteMarkedMovies);
    console.log(favMoviesArray);

    if (favMoviesArray.length === 0) {
        console.log("Inga favoriter sparade.");
    }

    try {
        let fullMovieInfo = await Promise.all(
            favMoviesArray.map(async imdbID => {
                return await fetchMovieInfo(imdbID);
            })
        );

        displayMovies(fullMovieInfo);
    } catch (error) {
        console.error("Fel vid hämtning av favoritfilmer:", error);
    }
}
