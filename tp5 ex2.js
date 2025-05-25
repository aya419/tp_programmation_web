let nombreMystere = Math.floor(Math.random() * 10) + 1;
let tentative = 0;
let devine = false;

while (!devine) {
  let proposition = parseInt(prompt("Devinez le nombre entre 1 et 10 :"));
  tentative++;

  if (proposition < nombreMystere) {
    alert("Trop petit !");
  } else if (proposition > nombreMystere) {
    alert("Trop grand !");
  } else if (proposition === nombreMystere) {
    alert("Bravo ! Vous avez trouvé le nombre en " + tentative + " tentative(s).");
    devine = true;
  } else {
    alert("Veuillez entrer un nombre valide !");
  }
}
