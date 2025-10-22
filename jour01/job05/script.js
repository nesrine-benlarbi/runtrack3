// Je crée une fonction qui s'appelle afficherJoursSemaines
// Elle ne prend pas de paramètre (rien entre les parenthèses)
function afficherJoursSemaines() {

    //  Je crée un tableau (une liste) qui contient tous les jours de la semaine
    let joursSemaines = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

    //  Maintenant je fais une boucle for pour parcourir le tableau
    // Elle commence à 0 (le premier jour) et s'arrête à la fin du tableau
    for (let i = 0; i < joursSemaines.length; i++) {
        //  À chaque tour, j'affiche le jour correspondant dans la console
        console.log(joursSemaines[i]);
    }
}

//  Et enfin, j'appelle ma fonction pour qu'elle s'exécute !
afficherJoursSemaines();