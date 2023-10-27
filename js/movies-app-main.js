// import * as movie from "./movies-app-api";
// import {getMoviesAndCreateCards} from "./movies-app-api";
//
// function moviesLoop () {
//     getMoviesAndCreateCards()
// }

const moviesList =
    [
    {
        id: 1,
        title: "Fly Eagles Fly",
        imgSrc: "img/philly.eagles.png",
        imgAlt: "Philadelphia Eagles logo",
        description: "Go Birds! Need I say more."
    },
    {
        id: 2,
        title: "San Antonio",
        imgSrc: "img/spurs.png",
        imgAlt: "The San Antonio Spurs",
        description: "The San Antonio Spurs are the greatest basketball dynasty."
    },
    {
        id: 3,
        title: "Bruce Lee",
        imgSrc: "img/bruce.lee.png",
        imgAlt: "Bruce Lee",
        description: "The greatest Martial Artist of all time!"
    },
    {
        id: 4,
        title: "The Goat",
        imgSrc: "img/cr7.png",
        imgAlt: "Cristiano Ronaldo",
        description: "Legend has it, even actual Goats refer to him as the G.O.A.T."

    }
];




function generateCard(movieObject){
    const newCard = document.createElement("div");
    newCard.classList.add('movie');
    newCard.dataset.id = movieObject.id;

    const newCardH2El = document.createElement("h2");
    newCardH2El.innerText = movieObject.title;
    newCard.appendChild(newCardH2El);

    const newCardImgEl = document.createElement("img");
    newCardImgEl.src = movieObject.imgSrc;
    newCardImgEl.alt = movieObject.imgAlt;
    newCard.appendChild(newCardImgEl);

    const newCardP = document.createElement("p");
    newCardP.innerText = movieObject.description;
    newCard.appendChild(newCardP);

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
        title: document.querySelector("#title").value,
        imgSrc: document.querySelector("#image").value,
        imgAlt: document.querySelector("#title").value,
        description: document.querySelector("#description").value
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
    const description = cardToEdit.querySelector("p").innerText;
    editCardForm[1].value = title;
    editCardForm[2].value = image;
    editCardForm[3].value = description;
    editCardForm[4].value = id;
}
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
    const newDescription = document.querySelector("#editImageDescription").value;
    const cardToEdit = document.querySelector(`[data-id="${cardId}"]`);
    cardToEdit.querySelector("h2").innerText = newTitle;
    cardToEdit.querySelector("img").setAttribute("src", newImageLink);
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

moviesList.forEach(movies => moviesDiv.appendChild(generateCard(movies)));


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
