const QUESTIONS = [
    ["Quelle est la capitale de la France ?", "Paris"],
    ["Combien font 5 + 3 ?", "8"],
    ["Quelle est la couleur du ciel par temps clair ?", "Bleu"]
];
function lancerQuiz() {
    let bonnesReponses = 0;

    for (let i = 0; i < QUESTIONS.length; i++) {
        let question = QUESTIONS[i][0];
        let reponseCorrecte = QUESTIONS[i][1];
        let reponseUtilisateur = prompt(question);
        if (reponseUtilisateur !== null && reponseUtilisateur.trim().toLowerCase() === reponseCorrecte.toLowerCase()) {
            alert("Réponse juste");
            bonnesReponses++;
        } else {
            alert("Réponse fausse");
        }
    }
    alert("Vous avez répondu correctement à " + bonnesReponses + " questions sur " + QUESTIONS.length + ".");
}
