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
  // récupération de la chaine de caractère se trouvant après le dernier point
  // il s'agit maintenant d'exploiter ca pour savoir si c'est une extention ou non 
  var ext = str.substr(str.lastIndexOf('.')+1);
  
  // j'ai créé une variable qui recherche la présence d'un point dans le nom du fichier 
  // un piège pourrais survenir dans le cas d'un point dans le nom sans que ca soit un nom d'extention après
  var index = str.indexOf('.');
  
  // je vérifie donc la présence du point dans mon nom de fichier et je retourne le nom de l'extention si c'est le cas sinon je retourne false
  if(index !== -1){
    return ext;
  } else {
    return false
  }
}
  

  
  
 
  






// Stop ! Tests, on ne touche pas :P
check.exo7(getExtension);
