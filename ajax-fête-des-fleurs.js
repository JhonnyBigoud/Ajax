// Création du XMLHttpRequest object
let xhr = new XMLHttpRequest();
// Initialiser et paramétrer notre requête
xhr.open('GET','https://randomuser.me/', true);
// Gestion de la réponse
xhr.onload = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText));
    } 
}
// On envoie la requête
xhr.send();