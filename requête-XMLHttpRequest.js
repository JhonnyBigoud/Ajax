// Création du XMLHTTPRequest object 

let xhr = new XMLHttpRequest(); 

// Initialiser et Parametrer notre requete 

xhr.open('GET', 'https://randomusers.com/api/', true);

// Gestion de la réponse 

xhr.onload = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText));
    }
}
// On send la réponse 
xhr.send(); 
