// analyse.js
// Moteur d'analyse simple pour la plateforme Trading AI

function analyserMarche(prixActuel, tendance, rsi) {

    let signal = "";
    let confiance = 0;
    let message = "";

    // Analyse de la tendance
    if (tendance === "haussiere" && rsi < 70) {
        signal = "🟢 ACHETER";
        confiance = 85;
        message = "La tendance est haussière et le marché montre une force d'achat.";
    } 
    
    else if (tendance === "baissiere" && rsi > 30) {
        signal = "🔴 VENDRE";
        confiance = 85;
        message = "La tendance est baissière et le marché montre une pression vendeuse.";
    } 
    
    else {
        signal = "🟡 ATTENDRE";
        confiance = 60;
        message = "Le marché n'est pas suffisamment clair. Attendre une meilleure opportunité.";
    }

    return {
        signal: signal,
        confiance: confiance,
        analyse: message,
        prix: prixActuel
    };
}


// Exemple de test
let resultat = analyserMarche(1.1050, "haussiere", 55);

console.log(resultat);
