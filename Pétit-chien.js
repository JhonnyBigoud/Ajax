// Pseudo code 


// 1 variabiliser le bouton et l'image 
let btn = document.querySelector('button'); 
let image = document.querySelector('.square'); 


// 2 Ajouter un écouteur d'événement
btn.addEventListener('click',  changeImage); 

// 3 On y claque la fonction de récupération de l'url & la requête à l'API 
function changeImage() {
    let xhr = new XMLHttpRequest(); 

xhr.open('GET', 'https://dog.ceo/api/breeds/image/random', true);

xhr.onload = function () {
    if (xhr.readyState === 4 && xhr.status === 200){
        const url = JSON.parse(xhr.responseText).message;
        // image.style.backgroundImage = 'url(' + url +')';
        image.style.backgroundImage = `url('${url}')`
    }
}
xhr.send(); 
};

// ---------------------------------------------------// 


let selector = document.querySelector('select');
let options = document.querySelector('option');

selector.addEventListener('change', selectBreed);

// options.addEventListener('change', selectBreed);

// récupération de l'API au chargement de la page

let xhr2= new XMLHttpRequest();
    
xhr2.open('GET','https://dog.ceo/api/breeds/list/all', true);


xhr2.onload = function () {
    if (xhr2.readyState === 4 && xhr2.status === 200){
        const breeds = JSON.parse(xhr2.response).message;
        console.log(breeds);
        fillSelect(breeds)
    }
}
xhr2.send();



// 
function selectBreed() {
    
}
// Récupération des races sous forme de tableau ? 
// Création des options dans le select, 1 race = 1 option
// Affichage d'une race particulière à la sélection d'une race

function fillSelect(breeds) {
    for (property in breeds) {
        console.log(property);
    }
}
// snippets 
// var element = document.createElement(option);
// function addBreeds () {
    // breeds.forEach(element => console.log(element))
//     var newOption = document.createElement("option");
//     var newBreed = document.create("résultat de la fonction foreach sur tableau")    
// }
// newBreed.appendchild()