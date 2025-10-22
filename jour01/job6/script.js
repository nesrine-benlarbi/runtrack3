// Je crée une fonction qui s'appelle fizzbuzz
// Elle ne prend pas de paramètre
function fizzbuzz() {

    //  Je fais une boucle qui compte de 1 jusqu'à 151
    for (let i = 1; i <= 151; i++) {

        //  Si le nombre est un multiple de 3 ET de 5
        // (on teste d'abord cette condition pour éviter que JS affiche juste "Fizz" ou "Buzz" quand c'est les deux)
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz"); // j'affiche "FizzBuzz"
        }

        //  Si le nombre est seulement un multiple de 3
        else if (i % 3 === 0) {
            console.log("Fizz"); // j'affiche "Fizz"
        }

        //  Si le nombre est seulement un multiple de 5
        else if (i % 5 === 0) {
            console.log("Buzz"); // j'affiche "Buzz"
        }

        //  Sinon, ce n’est ni un multiple de 3 ni de 5
        else {
            console.log(i); // j’affiche juste le nombre
        }
    }
}

//  Et maintenant, j'appelle ma fonction pour la faire tourner !
fizzbuzz();