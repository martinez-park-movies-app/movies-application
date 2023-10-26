"use strict";

import * as modalLecture from "./movies-app-main.js";

//BONUS API
// export async function getMoviePoster(movie) {
//     const title = movie.title;
//     return await fetch(`https://www.omdbapi.com?apikey=${OMDB_API_KEY}&t=${title}`)
//         .then(response => response.json())
//         .then(movie => {
//             console.log(movie);
//             return movie.Poster
//         })
// }

// getMoviePoster({title:"shrek"});

//ORIGINAL FETCH
// fetch ("http://localhost:3000/movies")
//     .then( response => {
//         return response.json();
//     })
//     .then( data => {
//         console.log(data);
//     })



//Make an AJAX request to get a listing of all the movies
export function getMoviesAndCreateCards (movie) {
    fetch("http://localhost:3000/movies")
        .then(data => {
           return data.json();
        })
        .then(movie => {
            // createMovieList(movie.list);
            console.log(movie);

        })

}

// console.log(getMoviesAndCreateCards());
