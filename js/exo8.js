/* === Exo8 ===
 *
 * Dans la fonction ci-dessous, le paramètre arr est un tableau.
 * Retourner la chaîne de caractères la plus longue de l'Array.
 *
 * Par exemple :
 * - ['coucou', 'hello', 'bonjour'] : 'bonjour'
 * - ['css', 'html', 'js', 'php'] : 'html'
 * - ['un', 2, 'trois', 4, 'cinq'] : 'trois'
 * - [] : false
 */

function getLongestString(arr) {
// Je devrais faire en sorte que la fonction me renvoie le nb de caractère
// et suivant le plus élevé, je retourne l'index correspondant

  // A 5 min de midi, je tente quelque chose rapide histoire de...
  var index = arr[];
  for (index in arr) {
    var longer = index.length;
    console.log(longer);
  }
}

getLongestString();

// Stop ! Tests, on ne touche pas :P
check.exo8(getLongestString);
