// Créez un <article> ayant comme id “citation” et contenant le texte suivant :
// "La vie a beaucoup plus d’imagination que nous”.


// Créez un <button> ayant comme id “button”. Lorsque l’on clique sur le bouton,


// récupérez le contenu de l’élément ayant comme id “citation” 
const article = document.getElementById("citation");



// et affichez le contenu dans la console de développement.


// La fonction de récupération et d’affichage doit se nommer “citation()”.
function citation(){
    console.log(article.innerHTML);   
}

const button = document.getElementById("button");
button.addEventListener('click', citation);

