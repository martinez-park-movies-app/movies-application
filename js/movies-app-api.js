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
// export function getMoviesAndCreateCards (movie) {
//     fetch("http://localhost:3000/movies")
//         .then(data => {
//            return data.json();
//         })
//         .then(movie => {
//             // createMovieList(movie.list);
//             console.log(movie);
//         })
//
// }

// export function getMoviesAndCreateCards (movies) {
//     fetch("http://localhost:3000/movies")
//         .then(data => {
//             return data.json();
//         })
//         .then(movies => {
//             // createMovieList(movie.list);
//             movies.forEach((movie, index) => {
//                 // const movieTitle = movie.title;
//                 const movieGenre = movie.genre;
//                 // const movieRating = movie.rating;
//                 // const movieSummary = movie.movieSummary;
//                 console.log(movieGenre);
//             })
//         })
// }
// getMoviesAndCreateCards();


//just attempting to create function that will show OMDB movielists

// const IMGPATH = `http://img.omdbapi.com/?apikey=${OMDB_API_KEY}&`;
// async function getMovies(searchTerm) {
//     const APIURL = `https://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=${OMDB_API_KEY}`;
//     const resp = await fetch(APIURL);
//     const respData = await resp.json();
//     console.log(respData.Search);

    // respData.forEach(movie => {
    //     console.log(movie);
     //    const img = document.createElement('img');
     //    img.src = IMGPATH + movie.Poster;
     //
     //    document.body.appendChild(img);
     // });
//     return movie;
// }
// getMovies("Superman");

