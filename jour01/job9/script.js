//  Je crée une fonction appelée "tri"
// Elle prend deux paramètres : 
// 1️ un tableau de nombres (numbers)
// 2️ une variable order ("asc" pour croissant ou "desc" pour décroissant)
function tri(numbers, order) {

    //  Je vérifie d’abord si order est bien "asc" ou "desc"
    if (order !== "asc" && order !== "desc") {
        console.log(" L’ordre doit être 'asc' ou 'desc' !");
        return numbers; // je retourne le tableau tel quel
    }

    //  J’utilise la fonction sort() avec ma propre logique de comparaison
    numbers.sort(function(a, b) {

        // Si on veut un tri croissant ("asc"), je trie du plus petit au plus grand
        if (order === "asc") {
            return a - b; // renvoie un nombre négatif si a < b (donc a avant b)
        }

        // Si on veut un tri décroissant ("desc"), je fais l’inverse
        else if (order === "desc") {
            return b - a; // renvoie négatif si b < a (donc b avant a)
        }
    });

    //  Je retourne le tableau trié
    return numbers;
}

//  Je teste ma fonction avec différents exemples :

let tableau1 = [5, 2, 8, 1, 9];
let tableau2 = [10, 3, 7, 4, 6];

console.log(tri(tableau1, "asc"));   //  [1, 2, 5, 8, 9]
console.log(tri(tableau2, "desc"));  //  [10, 7, 6, 4, 3]
console.log(tri(tableau1, "test"));  //  Mauvais paramètre → affiche un message

