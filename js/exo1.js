/* === Exo1 ===
 *
 * 1. Demander à l'utilisateur de rentrer un premier nombre dans une boîte de dialogue.
 * 2. Demander à l'utilisateur de rentrer un 2e nombre dans une boîte de dialogue.
 * 3. Additionner les deux nombres.
 * 4. Afficher le résultat dans #result.
 */

// Initialisation de ma fonction calculatrice

function calculator () {
// Initialisation de mes variables
  var messagePrompt = 'Choisissez un nombre',
    messagePromptTwo = 'Choisissez un deuxième nombre',
    nbUser,
    nbUserTwo,
    stockResult = document.getElementById('result');

  // Je demande à l'utilisateur de choisir ses nombres
  nbUser = prompt(messagePrompt);
  nbUserTwo = prompt(messagePromptTwo);

  // Je vérifie que les valeurs choisi sont bien des nombres et je lance le calcul
  if (nbUser === null || nbUserTwo === null) {
    alert('Vous devez choisir deux nombres');
  } else {
    nbUser = Number(nbUser, 10);
    nbUserTwo = Number(nbUserTwo, 10);
    if (isNaN(nbUser) || isNaN(nbUserTwo)) {
      alert('Vous devez choisir deux valeurs numérique');
    } else {
    // Je calcul et je l'affiche dans le HTML
      var result = nbUser + nbUserTwo;
      stockResult.innerHTML = result;
    }
  }
    
}

// Lancement de ma fonction
calculator();