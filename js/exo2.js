/* === Exo2 ===
 *
 * 1. L'utilisateur tape un nombre dans chaque input, puis clique sur OK.
 * 2. À la soumission du formulaire, on additionne les deux nombres,
 * 3. On affiche le résultat dans #result.
 */

var input1 = document.getElementById('input1').value;
var input2 = document.getElementById('input2').value;
var stockResult = document.getElementById('result');
var result;

/* if ((input1 = !null && !isNaN(input1)) && (input2 = !null && !isNaN(input2))) {
  result = input1 + input2;
  stockResult.innerHTML = result;
}
 */

console.log(input1);
console.log(input2);
result = input1 + input2;
stockResult.innerHTML = result;
console.log(result);



/* var app = { */
  // Propriétés du module
  /* input1: document.getElementById('input1'),
  input2: document.getElementById('input2'),
  stockResult: document.getElementById('result'),
  submit: document.getElementById('container'), */

  // Fonction de récupération des valeurs
  /* init: function() {
    app.input1.addEventListener('focus',app.handleVerifInput1);
    app.input2.addEventListener('focus',app.handleVerifInput2);
    app.submit.addEventListener('submit',app.handleCalculate);
  }, */
  // Fonction de vérification de la 1ere valeure
  /* handleVerifInput1: function() {
    let isValid1 = app.input1 = !null && !isNaN(app.input1); 
    
    if (isValid1) {
      return;
    }
  }, */
  // Fonction de vérification de la 2ème valeure
  /* handleVerifInput2: function() {
    let isValid2 = app.input2 = !null && !isNaN(app.input2);

    if (isValid2) {
        return;
    }
  }, */
  // Fonction de calcul et affichage
  /* handleCalculate: function() {
    result = app.input1.value + app.input2.value;
    app.stockResult.innerHTML = result;
  }

};

app.init();
 */


