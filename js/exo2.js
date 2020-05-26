/* === Exo2 ===
 *
 * 1. L'utilisateur tape un nombre dans chaque input, puis clique sur OK.
 * 2. À la soumission du formulaire, on additionne les deux nombres,
 * 3. On affiche le résultat dans #result.
 */

var appCalculator = {
  // Propriétés du module en querySelector, j'aurais pu utiliser getElementById
  input1: document.querySelector('#input1'),
  input2: document.querySelector('#input2'),
  inputFormElt: document.querySelector('#container'),
  stockResult: document.querySelector('#result'),

  init: function() {
    appCalculator.inputFormElt.addEventListener('submit', appCalculator.handleCalculate);
  }, 

  handleCalculate: function(evt) {
    // Recup des valeurs et on s'assure que ca soit des nombres en decimal
    var number1 = appCalculator.input1.value;
    var number2 = appCalculator.input2.value;
    number1 = Number(number1, 10);
    number2 = Number(number2, 10);

    if (isNaN(number1) || isNaN(number2)) {
      // Si les valeurs entrées ne sont pas des nombres, voir à rajouter une condition pour qu'une
      // valeure soit obligatoire dans chaque champ, avec !null par exemple
      evt.preventDefault();
      alert('Veuillez entrer des nombres');
    } else{
      // Si les valeurs entrées sont bien des nombres, on fait le calcul et on l'affiche dans la div result
      var Result = number1 + number2;
      appCalculator.stockResult.innerHTML = Result;
      
      // pour garder les valeurs dans mes champs :
      evt.preventDefault();
    }
  }
};
appCalculator.init();