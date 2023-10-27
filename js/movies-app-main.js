// import * as movie from "./movies-app-api";
// import {getMoviesAndCreateCards} from "./movies-app-api";
//
// function moviesLoop () {
//     getMoviesAndCreateCards()
// }

function getMoviesAndCreateCards (movies) {
    fetch("http://localhost:3000/movies")
        .then(data => {
            return data.json();
        })
        .then(movies => {
            loopingThroughMovies(movies);
        })
}

function loopingThroughMovies(movies) {
    // let moviesDiv = document.querySelector("#movies")
    movies.forEach((movie, index) => {
        // createMovieCards(movie);
        let card = generateCard(movie);
        moviesDiv.appendChild(card);
    })
    // console.log(movies);
}
// function createMovieCards(movies, index) {
//     const movieTitle = movie.title;
//     const movieGenre = movie.genre;
//     const movieRating = movie.rating;
//     const movieSummary = movie.movieSummary;
//     console.log(movieTitle);
// }
getMoviesAndCreateCards();
function generateCard(movie){
    const newCard = document.createElement("div");
    newCard.classList.add('movie');
    newCard.dataset.id = movie.id;

    const moviePoster = document.createElement("img");
    moviePoster.src = movie.posterURL;
    moviePoster.alt = movie.imgAlt;
    newCard.appendChild(moviePoster);

    const movieTitle = document.createElement("h2");
    movieTitle.innerHTML = movie.title;
    newCard.appendChild(movieTitle);



    const movieGenre = document.createElement("p");
    movieGenre.innerHTML = `<span class="genre"> Genre: </span> ` + movie.genre;
    newCard.appendChild(movieGenre);
    const movieRating = document.createElement("p");
    movieRating.innerHTML = `<span class="rating"> Rating: </span> ` + movie.rating;
    newCard.appendChild(movieRating);
    const movieSummary = document.createElement("p");
    movieSummary.innerHTML = `<span class="summary"> Summary: </span> ` + (movie.movieSummary);
    newCard.appendChild(movieSummary);

    const newCardEditButton = document.createElement("button");
    newCardEditButton.innerText = "Edit";
    newCardEditButton.addEventListener('click', handleEditButtonClick);
    newCard.appendChild(newCardEditButton);

    const newCardRemoveButton = document.createElement("button");
    newCardRemoveButton.innerText = "Remove";
    newCardRemoveButton.addEventListener('click', handleRemoveButtonClick);
    newCard.appendChild(newCardRemoveButton);

    return newCard;
}

const addCardButton = document.querySelector("header button");

const addCardSubmitButton = document.querySelector("div#addCardFormWrapper button");

const editButtons = document.querySelectorAll("button.edit");
const editCardSubmitButton = document.querySelector("#editCardForm").querySelector("button");

const removeButtons = document.querySelectorAll("button.remove");

const moviesDiv = document.querySelector("#movies");


addCardButton.addEventListener('click', () => {
    document.querySelector("#addCardFormWrapper").classList.toggle('hideForm');
    document.querySelector("#addCardFormWrapper").classList.toggle('showForm');
});

addCardSubmitButton.addEventListener('click', event => {
    // very important !!!!!!!!!
    event.preventDefault();
    const newCardObject = {
    // using a global variable inside a function is questionable
        id: moviesDiv.children.length + 1,
        imgSrc: document.querySelector("#image").value,
        title: document.querySelector("#title").value,
        genre: document.querySelector("#genre").value,
        rating: document.querySelector("#rating").value,
        summary: document.querySelector("#summary").value
    }

    // Add the new elements to the page
    document.querySelector("#movies").appendChild(generateCard(newCardObject));
    addCardButton.click();
});


function handleEditButtonClick(event){

    const cardToEdit = event.target.parentElement;

    const modalWrapper = document.querySelector("#editCardModalWrapper");
    modalWrapper.classList.remove("hideModal");
    modalWrapper.classList.add("displayModal");

    const editCardForm = document.querySelector("#editCardForm");

    const id = cardToEdit.dataset.id;
    const title = cardToEdit.querySelector("h2").innerText;
    const image = cardToEdit.querySelector("img").getAttribute("src");
    const genre = cardToEdit.querySelector("p").innerText;
    const rating = cardToEdit.querySelector("p").innerText;
    const summary = cardToEdit.querySelector("p").innerText;
    editCardForm[1].value = title;
    editCardForm[2].value = image;
    editCardForm[3].value = genre;
    editCardForm[4].value = rating;
    editCardForm[5].value = summary;
    editCardForm[6].value = id;
}
console.log(handleEditButtonClick());


window.addEventListener('click', event => {
    const modalWrapper = document.querySelector("#editCardModalWrapper");
    if (event.target === document.querySelector("#editCardModalWrapper")){
        modalWrapper.classList.remove("displayModal");
        modalWrapper.classList.add("hideModal");
    }
});





editButtons.forEach(editButton => {
    editButton.addEventListener('click', handleEditButtonClick);
});

editCardSubmitButton.addEventListener('click', event => {
    event.preventDefault();
    const cardId = document.querySelector("#editCardId").value;
    const newTitle = document.querySelector("#editCardTitle").value;
    const newImageLink = document.querySelector("#editImageLink").value;
    const newDescription = document.querySelector("#editSummary").value;
    const newGenre = document.querySelector("#editGenre").value;
    const newRating = document.querySelector("#editRating").value;
    const cardToEdit = document.querySelector(`[data-id="${cardId}"]`);
    cardToEdit.querySelector("h2").innerText = newTitle;
    cardToEdit.querySelector("img").setAttribute("src", newImageLink);
    cardToEdit.querySelector("p").innerText = newGenre;
    cardToEdit.querySelector("p").innerText = newRating;
    cardToEdit.querySelector("p").innerText = newDescription;
    document.querySelector("#editCardModalWrapper").click();
});

function handleRemoveButtonClick (event) {
    if (confirm("Are you sure?")){
        event.target.parentElement.remove();
    }
}

removeButtons.forEach(removeButton => {
    removeButton.addEventListener('click', handleRemoveButtonClick);
});

// moviesList.forEach(movies => moviesDiv.appendChild(generateCard(movies)));


//Display a "loading..." message
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loadingIndicator").style.visibility = "visible";
    } else {
        setTimeout(() => {
            document.querySelector("#loadingIndicator").style.display = "none";
            document.querySelector("body").style.visibility = "visible";
        }, 3000)
    }
};

//Make an AJAX request to get a listing of all the movies
