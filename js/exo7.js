/* === Exo7 ===
 *
 * Dans la fonction ci-dessous, le paramètre str est une chaîne de caractères.
 * Retourner l'extension de fichier contenue dans cette String.
 *
 * Par exemple :
 * - index.html : 'html'
 * - app.min.js : 'js'
 * - .eslintrc : 'eslintrc'
 * - truc : false
 */

function getExtension(str) {
  var result = str.split('.');
  return result;
    
}





// Stop ! Tests, on ne touche pas :P
check.exo7(getExtension);
