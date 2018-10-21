const API_TOKEN = "a79b1af94aa56c58ec8c694f7741c97c"

export function getFilmsByText(text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN
            + '&language=fr&query=' + text;

    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
}

export function getImage(name) {
        return 'https://image.tmdb.org/t/p/w300' + name
}