import * as modalLecture from "./movies-app-main.js";

export async function getMoviePoster(movie) {
    const title = movie.title;
    return await fetch(`https://www.omdbapi.com?apikey=${OMDB_API_KEY}&t=${title}`)
        .then(response => response.json())
        .then(movie => {
            console.log(movie);
            return movie.Poster
        })
}

getMoviePoster({title:"shrek"});