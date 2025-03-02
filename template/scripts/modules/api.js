export async function fetchTopMovies() {
    try {
        const response = await fetch('https://santosnr6.github.io/Data/favoritemovies.json');
        let movies = await response.json();
        console.log(movies); // Kontrollera att filmer hämtas korrekt
        
        return movies; // Returnera filmlistan så vi kan använda den

    } catch (error) {
        console.error('Fel vid hämtning', error);
        return []; // Returnera en tom lista vid fel
    }
}

export async function fetchMovieSearch(title) {
    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=be8612e6&s=${title}*`); 
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

    export async function fetchMovieInfo(imdbID) {
        try {
            const response = await fetch(`http://www.omdbapi.com/?apikey=be8612e6&plot=full&i=${imdbID}`);
            let data = await response.json(); // Tolka JSON
    
            if (!data || data.Response === "False") {
                console.error("Inga filmer hittades:", data);
                return []; // Returnera null om inget hittas
            }
    
            //console.log(data); // Kontrollera den mottagna filmens data
            return data; // Returnera filmobjektet
        } catch (error) {
            console.error("Fel vid hämtning av filmer:", error);
            return [];
        }
    }