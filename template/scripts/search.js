
export function handleSearch(event, inputField) {
    event.preventDefault(); // Förhindrar att formuläret skickas
    localStorage.setItem("search", inputField.value); // Spara söksträngen i localStorage
    window.location.href = "search.html"; // Navigera till söksidan
}

export function setupSearchListeners(searchButton, inputField) {
    searchButton.addEventListener("click", (event) => handleSearch(event, inputField));
    
    inputField.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            handleSearch(event, inputField);
        }
    });
}
