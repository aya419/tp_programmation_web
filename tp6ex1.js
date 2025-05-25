const maDiv = document.createElement("div");
const monParagraphe = document.createElement("p");
monParagraphe.textContent = "Ceci est un paragraphe";
maDiv.appendChild(monParagraphe);
document.body.appendChild(maDiv);
monParagraphe.textContent = "Le texte a été modifié";
monParagraphe.style.backgroundColor = "lightblue";
monParagraphe.style.textAlign = "center";
monParagraphe.style.padding = "10px";
monParagraphe.style.fontWeight = "bold";
maDiv.addEventListener("click", function () {
monParagraphe.textContent = "Un clic a été détecté";
});
