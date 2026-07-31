// script.js
// Connexion entre l'interface et l'analyse du marché

function lancerAnalyse() {

    // Exemple de données (nous connecterons plus tard les vraies données du marché)
    let prix = 1.1050;
    let tendance = "haussiere";
    let rsi = 55;

    let resultat = analyserMarche(prix, tendance, rsi);

    document.getElementById("signal").innerHTML = resultat.signal;
    document.getElementById("confiance").innerHTML =
        "Confiance : " + resultat.confiance + " %";

    document.getElementById("analyse").innerHTML =
        resultat.analyse;
}
