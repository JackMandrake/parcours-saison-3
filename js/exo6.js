/* === Exo6 ===
 *
 * Dans la fonction ci-dessous, le paramètre int est un entier.
 * Retourner true s'il est pair, false s'il est impair.
 */

function isEven(int) {
  // Je cherche à savoir si le reste de ma division (%) est égal à 0
  if(int%2 === 0) {
    // Si oui, alors le nombre est pair
    return true;
    // Si non, alors le nombre est faux
  }
}

// Stop ! Tests, on ne touche pas :P
check.exo6(isEven);
