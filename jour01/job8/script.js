//  Je crée une fonction appelée sommenombrespremiers
// Elle prend en paramètres deux nombres : a et b
function sommeNombresPremiers(a, b) {

    //  Je crée d'abord une fonction interne pour vérifier si un nombre est premier
    function estPremier(nombre) {

        //  Si le nombre est plus petit que 2, ce n’est pas un nombre premier
        if (nombre < 2) {
            return false;
        }

        //  Je teste tous les diviseurs possibles entre 2 et le nombre - 1
        for (let i = 2; i < nombre; i++) {
            // Si le nombre est divisible par i, il n’est pas premier
            if (nombre % i === 0) {
                return false;
            }
        }

        //  Si on arrive ici, c’est que le nombre est bien premier
        return true;
    }

    //  Maintenant je vérifie si a et b sont tous les deux premiers
    if (estPremier(a) && estPremier(b)) {
        //  Si oui, je retourne leur somme
        return a + b;
    } else {
        //  Sinon, je retourne false
        return false;
    }
}

//  Je teste ma fonction avec différents cas

console.log(sommeNombresPremiers(3, 7));   //  3 et 7 sont premiers → retourne 10
console.log(sommeNombresPremiers(2, 5));   //  retourne 7
console.log(sommeNombresPremiers(4, 9));   //  pas premiers → retourne false
console.log(sommeNombresPremiers(11, 13)); //  retourne 24
console.log(sommeNombresPremiers(8, 2));   //  8 n'est pas premier → false